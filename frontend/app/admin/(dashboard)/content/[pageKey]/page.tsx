"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Save,
  ArrowLeft,
  Loader2,
  Upload,
  X,
  Plus,
  Image as ImageIcon,
} from "lucide-react";
import { api } from "@/lib/api";
import MediaPickerModal from "@/components/admin/MediaPickerModal";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface SectionField {
  key: string;
  type: "text" | "textarea" | "richtext" | "image" | "video" | "url" | "number" | "array";
  label: string;
  value_en: string;
  value_nl: string;
}

interface Section {
  _id: string;
  sectionKey: string;
  sectionLabel: string;
  sectionType: string;
  fields: SectionField[];
  items: Record<string, string>[];
  items_nl: Record<string, string>[];
}

interface SeoData {
  metaTitle_en: string;
  metaTitle_nl: string;
  metaDescription_en: string;
  metaDescription_nl: string;
  metaKeywords_en: string;
  metaKeywords_nl: string;
  canonical: string;
  ogImage: string;
}

interface PageData {
  pageKey: string;
  pageLabel: string;
  sections: Section[];
  seo: SeoData;
}

interface ContentResponse {
  success: boolean;
  data: PageData;
}

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }, { header: 3 }],
    [{ list: "bullet" }, { list: "ordered" }],
    ["link", "image", "blockquote"],
    ["clean"],
  ],
};

export default function ContentEditorPage() {
  const router = useRouter();
  const params = useParams();
  const pageKey = params.pageKey as string;

  const [loading, setLoading] = useState(true);
  const [pageLabel, setPageLabel] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [seo, setSeo] = useState<SeoData>({
    metaTitle_en: "",
    metaTitle_nl: "",
    metaDescription_en: "",
    metaDescription_nl: "",
    metaKeywords_en: "",
    metaKeywords_nl: "",
    canonical: "",
    ogImage: "",
  });
  const [lang, setLang] = useState<"en" | "nl">("en");
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaPicker, setMediaPicker] = useState<{ sectionIndex: number; fieldIndex: number } | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        const res = await api<ContentResponse>(`/api/v1/admin/content/${pageKey}`);
        const data = res.data;
        setPageLabel(data.pageLabel);
        setSections(JSON.parse(JSON.stringify(data.sections)));
        if (data.seo) {
          setSeo({
            metaTitle_en: data.seo.metaTitle_en || "",
            metaTitle_nl: data.seo.metaTitle_nl || "",
            metaDescription_en: data.seo.metaDescription_en || "",
            metaDescription_nl: data.seo.metaDescription_nl || "",
            metaKeywords_en: data.seo.metaKeywords_en || "",
            metaKeywords_nl: data.seo.metaKeywords_nl || "",
            canonical: data.seo.canonical || "",
            ogImage: data.seo.ogImage || "",
          });
        }
        // Open first section by default
        if (data.sections.length > 0) {
          setOpenSections(new Set([data.sections[0].sectionKey]));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load content");
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, [pageKey]);

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionKey)) {
        next.delete(sectionKey);
      } else {
        next.add(sectionKey);
      }
      return next;
    });
  };

  const updateFieldValue = (sectionIndex: number, fieldIndex: number, value: string) => {
    setSections((prev) => {
      const updated = [...prev];
      const field = { ...updated[sectionIndex].fields[fieldIndex] };
      if (lang === "en") {
        field.value_en = value;
      } else {
        field.value_nl = value;
      }
      updated[sectionIndex] = {
        ...updated[sectionIndex],
        fields: updated[sectionIndex].fields.map((f, i) => (i === fieldIndex ? field : f)),
      };
      return updated;
    });
  };

  const updateItemField = (
    sectionIndex: number,
    itemIndex: number,
    fieldKey: string,
    value: string
  ) => {
    setSections((prev) => {
      const updated = [...prev];
      const itemsKey = lang === "en" ? "items" : "items_nl";
      const items = [...(updated[sectionIndex][itemsKey] || [])];
      items[itemIndex] = { ...items[itemIndex], [fieldKey]: value };
      updated[sectionIndex] = { ...updated[sectionIndex], [itemsKey]: items };
      return updated;
    });
  };

  const addItem = (sectionIndex: number, sectionType: string) => {
    setSections((prev) => {
      const updated = [...prev];
      const itemsKey = lang === "en" ? "items" : "items_nl";
      const items = [...(updated[sectionIndex][itemsKey] || [])];

      let newItem: Record<string, string> = {};
      if (sectionType === "faq") {
        newItem = { q: "", a: "" };
      } else if (["features", "values", "testimonials"].includes(sectionType)) {
        newItem = { title: "", description: "" };
      } else if (sectionType === "pricing") {
        newItem = { text: "" };
      } else {
        newItem = { title: "", description: "" };
      }

      items.push(newItem);
      updated[sectionIndex] = { ...updated[sectionIndex], [itemsKey]: items };
      return updated;
    });
  };

  const removeItem = (sectionIndex: number, itemIndex: number) => {
    setSections((prev) => {
      const updated = [...prev];
      const itemsKey = lang === "en" ? "items" : "items_nl";
      const items = [...(updated[sectionIndex][itemsKey] || [])];
      items.splice(itemIndex, 1);
      updated[sectionIndex] = { ...updated[sectionIndex], [itemsKey]: items };
      return updated;
    });
  };

  const handleImageUpload = async (sectionIndex: number, fieldIndex: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch(`${API_BASE}/api/v1/admin/content/upload`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });
        const data = await res.json();
        if (data.success && data.url) {
          updateFieldValue(sectionIndex, fieldIndex, data.url);
        }
      } catch {
        // Upload failed silently
      }
    };
    input.click();
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      await api(`/api/v1/admin/content/${pageKey}`, {
        method: "PUT",
        body: { sections, seo } as unknown as Record<string, unknown>,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const getFieldValue = (field: SectionField): string => {
    return lang === "en" ? field.value_en : field.value_nl;
  };

  const getCurrentItems = (section: Section): Record<string, string>[] => {
    return lang === "en" ? section.items || [] : section.items_nl || [];
  };

  const metaTitle = lang === "en" ? seo.metaTitle_en : seo.metaTitle_nl;
  const metaDescription = lang === "en" ? seo.metaDescription_en : seo.metaDescription_nl;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Media Picker Modal */}
      {mediaPicker && (
        <MediaPickerModal
          isOpen={true}
          onClose={() => setMediaPicker(null)}
          onSelect={(url) => {
            updateFieldValue(mediaPicker.sectionIndex, mediaPicker.fieldIndex, url);
            setMediaPicker(null);
          }}
          type="image"
        />
      )}

      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Content Management
          </Link>
          <span className="text-gray-300">/</span>
          <h1 className="text-2xl font-bold text-gray-900">{pageLabel}</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1">
            {(["en", "nl"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  lang === l
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {l === "en" ? "English" : "Nederlands"}
              </button>
            ))}
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Changes
          </button>
        </div>
      </div>

      {/* Toast messages */}
      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
          Changes saved successfully!
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      {/* Section accordion cards */}
      <div className="space-y-4">
        {sections.map((section, sectionIndex) => {
          const isOpen = openSections.has(section.sectionKey);
          const items = getCurrentItems(section);

          return (
            <div
              key={section._id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.sectionKey)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition"
              >
                <span className="text-base font-semibold text-gray-900">
                  {section.sectionLabel}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>

              {/* Section body */}
              {isOpen && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                  {/* Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.fields.map((field, fieldIndex) => {
                    const isFullWidth = field.type === "textarea" || field.type === "richtext" || field.type === "url";
                    return (
                    <div key={field.key} className={isFullWidth ? "col-span-full" : ""}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>

                      {field.type === "text" && (
                        <input
                          type="text"
                          value={getFieldValue(field)}
                          onChange={(e) =>
                            updateFieldValue(sectionIndex, fieldIndex, e.target.value)
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      )}

                      {field.type === "textarea" && (
                        <textarea
                          rows={3}
                          value={getFieldValue(field)}
                          onChange={(e) =>
                            updateFieldValue(sectionIndex, fieldIndex, e.target.value)
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        />
                      )}

                      {field.type === "richtext" && (
                        <div className="[&_.ql-container]:min-h-40 [&_.ql-editor]:min-h-40">
                          <ReactQuill
                            key={lang}
                            theme="snow"
                            value={getFieldValue(field)}
                            onChange={(val: string) =>
                              updateFieldValue(sectionIndex, fieldIndex, val)
                            }
                            modules={quillModules}
                          />
                        </div>
                      )}

                      {field.type === "url" && (
                        <div className="relative">
                          <input
                            type="text"
                            value={getFieldValue(field)}
                            onChange={(e) =>
                              updateFieldValue(sectionIndex, fieldIndex, e.target.value)
                            }
                            placeholder="https://..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                      )}

                      {field.type === "image" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                              <input
                                type="text"
                                value={getFieldValue(field)}
                                onChange={(e) =>
                                  updateFieldValue(sectionIndex, fieldIndex, e.target.value)
                                }
                                placeholder="Image URL..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                            <button
                              type="button"
                              onClick={() => handleImageUpload(sectionIndex, fieldIndex)}
                              className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                              <Upload className="h-4 w-4" />
                              Upload
                            </button>
                            <button
                              type="button"
                              onClick={() => setMediaPicker({ sectionIndex, fieldIndex })}
                              className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                              <ImageIcon className="h-4 w-4" />
                              Browse
                            </button>
                          </div>
                          {getFieldValue(field) && (
                            <img
                              src={getFieldValue(field).startsWith("http") ? getFieldValue(field) : `${API_BASE}${getFieldValue(field)}`}
                              alt="Preview"
                              className="h-20 w-20 rounded-xl border border-gray-200 object-cover"
                            />
                          )}
                        </div>
                      )}

                      {field.type === "number" && (
                        <input
                          type="number"
                          value={getFieldValue(field)}
                          onChange={(e) =>
                            updateFieldValue(sectionIndex, fieldIndex, e.target.value)
                          }
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      )}
                    </div>
                    );
                  })}
                  </div>

                  {/* Repeatable items */}
                  {items.length > 0 || section.sectionType ? (
                    <div className="space-y-3">
                      {items.length > 0 && (
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Items
                        </h4>
                      )}

                      {items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="relative bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3"
                        >
                          <button
                            type="button"
                            onClick={() => removeItem(sectionIndex, itemIndex)}
                            className="absolute top-3 right-3 h-7 w-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                          >
                            <X className="h-4 w-4" />
                          </button>

                          {section.sectionType === "faq" && (
                            <>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Question
                                </label>
                                <input
                                  type="text"
                                  value={item.q || ""}
                                  onChange={(e) =>
                                    updateItemField(sectionIndex, itemIndex, "q", e.target.value)
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Answer
                                </label>
                                <textarea
                                  rows={3}
                                  value={item.a || ""}
                                  onChange={(e) =>
                                    updateItemField(sectionIndex, itemIndex, "a", e.target.value)
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white"
                                />
                              </div>
                            </>
                          )}

                          {["features", "values", "testimonials"].includes(
                            section.sectionType
                          ) && (
                            <>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  value={item.title || ""}
                                  onChange={(e) =>
                                    updateItemField(
                                      sectionIndex,
                                      itemIndex,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Description
                                </label>
                                <textarea
                                  rows={3}
                                  value={item.description || ""}
                                  onChange={(e) =>
                                    updateItemField(
                                      sectionIndex,
                                      itemIndex,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white"
                                />
                              </div>
                            </>
                          )}

                          {section.sectionType === "pricing" && (
                            <div>
                              <input
                                type="text"
                                value={String(item.text || item || "")}
                                onChange={(e) =>
                                  updateItemField(
                                    sectionIndex,
                                    itemIndex,
                                    "text",
                                    e.target.value
                                  )
                                }
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                              />
                            </div>
                          )}

                          {!["faq", "features", "values", "testimonials", "pricing"].includes(
                            section.sectionType
                          ) && (
                            <>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  value={item.title || ""}
                                  onChange={(e) =>
                                    updateItemField(
                                      sectionIndex,
                                      itemIndex,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">
                                  Description
                                </label>
                                <textarea
                                  rows={3}
                                  value={item.description || ""}
                                  onChange={(e) =>
                                    updateItemField(
                                      sectionIndex,
                                      itemIndex,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      ))}

                      {section.sectionType && (
                        <button
                          type="button"
                          onClick={() => addItem(sectionIndex, section.sectionType)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 border border-dashed border-gray-300 rounded-xl text-sm font-medium text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
                        >
                          <Plus className="h-4 w-4" />
                          Add Item
                        </button>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SEO Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">
        <h3 className="text-base font-semibold text-gray-900">SEO Settings</h3>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">Meta Title</label>
            <span
              className={`text-xs ${
                metaTitle.length > 70 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {metaTitle.length}/70
            </span>
          </div>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) =>
              setSeo((prev) => ({
                ...prev,
                [lang === "en" ? "metaTitle_en" : "metaTitle_nl"]: e.target.value,
              }))
            }
            placeholder="Meta title..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">Meta Description</label>
            <span
              className={`text-xs ${
                metaDescription.length > 160 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {metaDescription.length}/160
            </span>
          </div>
          <textarea
            rows={3}
            value={metaDescription}
            onChange={(e) =>
              setSeo((prev) => ({
                ...prev,
                [lang === "en" ? "metaDescription_en" : "metaDescription_nl"]: e.target.value,
              }))
            }
            placeholder="Meta description..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Meta Keywords</label>
          <input
            type="text"
            value={lang === "en" ? seo.metaKeywords_en : seo.metaKeywords_nl}
            onChange={(e) =>
              setSeo((prev) => ({
                ...prev,
                [lang === "en" ? "metaKeywords_en" : "metaKeywords_nl"]: e.target.value,
              }))
            }
            placeholder="keyword1, keyword2, keyword3..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-400 mt-1">Comma-separated keywords</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Canonical URL</label>
          <input
            type="text"
            value={seo.canonical}
            onChange={(e) => setSeo((prev) => ({ ...prev, canonical: e.target.value }))}
            placeholder="https://cvlabz.com/page-url"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">OG Image URL</label>
          <input
            type="text"
            value={seo.ogImage}
            onChange={(e) => setSeo((prev) => ({ ...prev, ogImage: e.target.value }))}
            placeholder="https://cvlabz.com/og-image.jpg"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {seo.ogImage && (
            <img src={seo.ogImage} alt="OG Preview" className="mt-2 h-20 rounded-lg border border-gray-200 object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}
