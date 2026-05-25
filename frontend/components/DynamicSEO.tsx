"use client";

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
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export default function DynamicSEO({
  seo,
  fallbackTitle,
  fallbackDescription,
}: DynamicSEOProps) {
  const { lang } = useLanguage();

  if (!seo) return null;

  const title =
    (lang === "nl" ? seo.metaTitle_nl : seo.metaTitle_en) ||
    seo.metaTitle_en ||
    fallbackTitle;
  const description =
    (lang === "nl" ? seo.metaDescription_nl : seo.metaDescription_en) ||
    seo.metaDescription_en ||
    fallbackDescription;
  const keywords =
    (lang === "nl" ? seo.metaKeywords_nl : seo.metaKeywords_en) ||
    seo.metaKeywords_en;
  const canonical = seo.canonical;
  const ogImage = seo.ogImage;

  return (
    <>
      {title && <title>{title} | CV Labz</title>}
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
    </>
  );
}
