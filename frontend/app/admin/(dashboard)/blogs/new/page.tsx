"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  Loader2,
  X,
  ImageIcon,
  Globe,
  Tag,
  FileText,
  Search as SearchIcon,
} from "lucide-react";
import { api } from "@/lib/api";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface Category {
  _id: string;
  name: string;
  name_nl?: string;
  slug: string;
  blogCount: number;
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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function NewBlogPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"en" | "nl">("en");
  const [titleEn, setTitleEn] = useState("");
  const [titleNl, setTitleNl] = useState("");
  const [summaryEn, setSummaryEn] = useState("");
  const [summaryNl, setSummaryNl] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [contentNl, setContentNl] = useState("");

  const [status, setStatus] = useState("draft");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [featuredImageAlt, setFeaturedImageAlt] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api<{ success: boolean; categories: Category[]; data?: Category[] }>(
      "/api/v1/admin/blogs/categories/all"
    )
      .then((res) => {
        const cats = res.categories || res.data || [];
        if (Array.isArray(cats)) setCategories(cats);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!slugManual && titleEn) {
      setSlug(slugify(titleEn));
    }
  }, [titleEn, slugManual]);

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = tagInput.trim();
      if (value && !tags.includes(value)) {
        setTags((prev) => [...prev, value]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleSubmit = async (publishStatus: string) => {
    setSaving(true);
    try {
      await api("/api/v1/admin/blogs", {
        method: "POST",
        body: {
          title: titleEn,
          summary: summaryEn,
          content: contentEn,
          title_nl: titleNl,
          summary_nl: summaryNl,
          content_nl: contentNl,
          category: categoryId,
          tags,
          featuredImage: { url: featuredImageUrl, altText: featuredImageAlt },
          seo: { metaTitle, metaDescription },
          slug,
          status: publishStatus,
        },
      });
      router.push("/admin/blogs");
    } catch {
      // handle silently
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-sm text-gray-500 mt-1">
            Write and publish a new blog post
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">
        {/* Left column — Content */}
        <div className="space-y-5">
          {/* Language tabs */}
          <div className="flex gap-2">
            {(["en", "nl"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === lang
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {lang === "en" ? "English" : "Nederlands"}
              </button>
            ))}
          </div>

          {/* Title */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <input
              type="text"
              placeholder="Post title..."
              value={activeTab === "en" ? titleEn : titleNl}
              onChange={(e) =>
                activeTab === "en"
                  ? setTitleEn(e.target.value)
                  : setTitleNl(e.target.value)
              }
              className="w-full text-2xl font-bold text-gray-900 placeholder-gray-300 outline-none border-none bg-transparent"
            />
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Summary
            </label>
            <textarea
              rows={3}
              placeholder="Write a brief summary..."
              value={activeTab === "en" ? summaryEn : summaryNl}
              onChange={(e) =>
                activeTab === "en"
                  ? setSummaryEn(e.target.value)
                  : setSummaryNl(e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Rich text editor */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <div className="[&_.ql-container]:min-h-100 [&_.ql-editor]:min-h-100">
              <ReactQuill
                key={activeTab}
                theme="snow"
                value={activeTab === "en" ? contentEn : contentNl}
                onChange={(val: string) =>
                  activeTab === "en"
                    ? setContentEn(val)
                    : setContentNl(val)
                }
                modules={quillModules}
                placeholder={activeTab === "en" ? "Start writing your post..." : "Begin met schrijven..."}
              />
            </div>
          </div>
        </div>

        {/* Right column — Sidebar */}
        <div className="space-y-5">
          {/* Status */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">{activeTab === "en" ? "Select a category" : "Selecteer een categorie"}</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {activeTab === "nl" && c.name_nl ? c.name_nl : c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              placeholder="Type a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-blue-900 transition"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            <input
              type="text"
              placeholder="Image URL..."
              value={featuredImageUrl}
              onChange={(e) => setFeaturedImageUrl(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            />
            <input
              type="text"
              placeholder="Alt text..."
              value={featuredImageAlt}
              onChange={(e) => setFeaturedImageAlt(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {featuredImageUrl && (
              <div className="mt-3">
                <img
                  src={featuredImageUrl}
                  alt={featuredImageAlt || "Featured image preview"}
                  className="w-full rounded-lg object-cover max-h-48"
                />
              </div>
            )}
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SEO
            </label>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Meta Title</span>
                  <span
                    className={`text-xs ${
                      metaTitle.length > 70
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {metaTitle.length}/70
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Meta title..."
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">
                    Meta Description
                  </span>
                  <span
                    className={`text-xs ${
                      metaDescription.length > 160
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {metaDescription.length}/160
                  </span>
                </div>
                <textarea
                  rows={3}
                  placeholder="Meta description..."
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500 mb-1 block">Slug</span>
                <input
                  type="text"
                  placeholder="post-slug"
                  value={slug}
                  onChange={(e) => {
                    setSlugManual(true);
                    setSlug(e.target.value);
                  }}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to posts
          </Link>
          <div className="flex items-center gap-3">
            <button
              disabled={saving}
              onClick={() => handleSubmit("draft")}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              Save as Draft
            </button>
            <button
              disabled={saving}
              onClick={() => handleSubmit("published")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm disabled:opacity-50"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
