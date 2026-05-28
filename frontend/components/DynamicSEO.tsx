"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language";

interface SEOData {
  metaTitle_en?: string;
  metaTitle_nl?: string;
  metaDescription_en?: string;
  metaDescription_nl?: string;
  metaKeywords_en?: string;
  metaKeywords_nl?: string;
  canonical?: string;
  ogImage?: string;
}

interface DynamicSEOProps {
  seo?: SEOData | null;
}

function setMeta(name: string, content: string, property?: boolean) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (content) {
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.content = content;
  } else if (el) {
    el.remove();
  }
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (href) {
    if (!el) {
      el = document.createElement("link");
      el.rel = rel;
      document.head.appendChild(el);
    }
    el.href = href;
  }
}

export default function DynamicSEO({ seo }: DynamicSEOProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    if (!seo) return;

    const title =
      (lang === "nl" && seo.metaTitle_nl?.trim() ? seo.metaTitle_nl : null) ||
      (seo.metaTitle_en?.trim() ? seo.metaTitle_en : null);

    const description =
      (lang === "nl" && seo.metaDescription_nl?.trim() ? seo.metaDescription_nl : null) ||
      (seo.metaDescription_en?.trim() ? seo.metaDescription_en : null);

    const keywords =
      (lang === "nl" && seo.metaKeywords_nl?.trim() ? seo.metaKeywords_nl : null) ||
      (seo.metaKeywords_en?.trim() ? seo.metaKeywords_en : null);

    const canonical = seo.canonical?.trim() || null;
    const ogImage = seo.ogImage?.trim() || null;

    if (title) {
      document.title = `${title} | CV Labz`;
    }
    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }
    if (title) {
      setMeta("og:title", title, true);
      setMeta("twitter:title", title);
    }
    if (keywords) {
      setMeta("keywords", keywords);
    }
    if (canonical) {
      setLink("canonical", canonical);
    }
    if (ogImage) {
      setMeta("og:image", ogImage, true);
    }
  }, [seo, lang]);

  return null;
}
