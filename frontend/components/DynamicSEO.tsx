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

  // Only use CMS values if they're actually filled in (not empty strings)
  const cmsTitle =
    (lang === "nl" && seo.metaTitle_nl?.trim() ? seo.metaTitle_nl : null) ||
    (seo.metaTitle_en?.trim() ? seo.metaTitle_en : null);
  const cmsDescription =
    (lang === "nl" && seo.metaDescription_nl?.trim() ? seo.metaDescription_nl : null) ||
    (seo.metaDescription_en?.trim() ? seo.metaDescription_en : null);
  const cmsKeywords =
    (lang === "nl" && seo.metaKeywords_nl?.trim() ? seo.metaKeywords_nl : null) ||
    (seo.metaKeywords_en?.trim() ? seo.metaKeywords_en : null);
  const canonical = seo.canonical?.trim() || null;
  const ogImage = seo.ogImage?.trim() || null;

  // Don't render anything if no CMS SEO data is filled — let layout.tsx defaults work
  const title = cmsTitle || fallbackTitle;
  const description = cmsDescription || fallbackDescription;

  const hasAnything = title || description || cmsKeywords || canonical || ogImage;
  if (!hasAnything) return null;

  return (
    <>
      {title && <title>{title} | CV Labz</title>}
      {description && <meta name="description" content={description} />}
      {cmsKeywords && <meta name="keywords" content={cmsKeywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
}
