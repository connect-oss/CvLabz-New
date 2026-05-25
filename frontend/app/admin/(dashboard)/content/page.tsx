"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Info,
  FileText,
  Search,
  Linkedin,
  Mail,
  Phone,
  HelpCircle,
  Globe,
  Loader2,
  ArrowRight,
  AlertCircle,
  Lock,
} from "lucide-react";
import { api } from "@/lib/api";

interface PageContent {
  pageKey: string;
  pageLabel: string;
  updatedAt?: string;
  updatedBy?: { name: string };
}

interface ContentResponse {
  success: boolean;
  data: PageContent[];
}

const PAGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  homepage: Home,
  about: Info,
  "cv-builder": FileText,
  "cv-matching": Search,
  "linkedin-analyzer": Linkedin,
  "motivation-letter": Mail,
  contact: Phone,
  faqs: HelpCircle,
  global: Globe,
  login: Lock,
  "forgot-password": Lock,
  "admin-login": Lock,
  tos: FileText,
  "privacy-policy": FileText,
  "cookie-policy": FileText,
  "blogs-page": FileText,
  "dashboard-page": Home,
  "not-found": HelpCircle,
};

const SECTIONS = [
  {
    title: "Main Pages",
    keys: ["homepage", "about", "contact", "faqs"],
  },
  {
    title: "Product Pages",
    keys: ["cv-builder", "cv-matching", "linkedin-analyzer", "motivation-letter"],
  },
  {
    title: "Auth Pages",
    keys: ["login", "forgot-password", "admin-login"],
  },
  {
    title: "Legal Pages",
    keys: ["tos", "privacy-policy", "cookie-policy"],
  },
  {
    title: "Other Pages",
    keys: ["blogs-page", "dashboard-page", "not-found"],
  },
  {
    title: "Global Elements",
    keys: ["global"],
  },
];

function timeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;

  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export default function ContentPage() {
  const router = useRouter();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        setLoading(true);
        setError(null);
        const res = await api<ContentResponse>("/api/v1/admin/content");
        setPages(res.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load pages");
      } finally {
        setLoading(false);
      }
    }
    fetchPages();
  }, []);

  const pageMap = new Map(pages.map((p) => [p.pageKey, p]));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle className="h-6 w-6 text-red-500" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">Failed to load content</p>
          <p className="text-sm text-gray-500 mt-1">{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Edit page content, translations, and SEO across your website
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
          <Globe className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-500">Site Language:</span>
          <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2.5 py-0.5 rounded-lg">
            English
          </span>
          <span className="text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer px-2.5 py-0.5 rounded-lg transition">
            Nederlands
          </span>
        </div>
      </div>

      {/* Page Sections */}
      {SECTIONS.map((section) => {
        const sectionPages = section.keys
          .map((key) => pageMap.get(key) || { pageKey: key, pageLabel: key })
          .filter(Boolean);

        if (sectionPages.length === 0) return null;

        return (
          <div key={section.title} className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionPages.map((page) => {
                const Icon = PAGE_ICONS[page.pageKey] || FileText;

                return (
                  <div
                    key={page.pageKey}
                    onClick={() => router.push(`/admin/content/${page.pageKey}`)}
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {page.pageLabel}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {page.updatedAt
                              ? `Last edited ${timeAgo(page.updatedAt)}`
                              : "Not yet edited"}
                          </p>
                          {page.updatedBy && (
                            <p className="text-xs text-gray-400 mt-0.5">
                              by {page.updatedBy.name}
                            </p>
                          )}
                        </div>
                      </div>
                      <button className="h-8 w-8 rounded-lg flex items-center justify-center text-gray-300 group-hover:text-blue-500 group-hover:bg-blue-50 transition">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
