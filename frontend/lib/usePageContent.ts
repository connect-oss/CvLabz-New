"use client";
import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface SectionField {
  key: string;
  type: string;
  label: string;
  value_en: string;
  value_nl: string;
}

interface Section {
  sectionKey: string;
  sectionLabel: string;
  sectionType: string;
  fields: SectionField[];
  items: Record<string, string>[];
  items_nl: Record<string, string>[];
}

interface PageData {
  pageKey: string;
  pageLabel: string;
  sections: Section[];
  seo: {
    metaTitle_en: string;
    metaTitle_nl: string;
    metaDescription_en: string;
    metaDescription_nl: string;
  };
}

export function usePageContent(pageKey: string) {
  const [data, setData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/v1/content/${pageKey}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setData(res.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [pageKey]);

  // Get a field value from a section, with language support
  function getField(sectionKey: string, fieldKey: string, lang: "en" | "nl" = "en"): string {
    if (!data) return "";
    const section = data.sections.find((s) => s.sectionKey === sectionKey);
    if (!section) return "";
    const field = section.fields.find((f) => f.key === fieldKey);
    if (!field) return "";
    const val = lang === "nl" && field.value_nl ? field.value_nl : field.value_en;
    return val || field.value_en || "";
  }

  // Get items array from a section, with language support
  function getItems(sectionKey: string, lang: "en" | "nl" = "en"): Record<string, string>[] {
    if (!data) return [];
    const section = data.sections.find((s) => s.sectionKey === sectionKey);
    if (!section) return [];
    if (lang === "nl" && section.items_nl && section.items_nl.length > 0) {
      return section.items_nl;
    }
    return section.items || [];
  }

  // Get image URL with API_BASE prefix
  function getImage(sectionKey: string, fieldKey: string, lang: "en" | "nl" = "en"): string {
    const val = getField(sectionKey, fieldKey, lang);
    if (!val) return "";
    if (val.startsWith("http")) return val;
    return `${API_BASE}${val}`;
  }

  return { data, loading, getField, getItems, getImage };
}
