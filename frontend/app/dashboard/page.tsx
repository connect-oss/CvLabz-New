"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LayoutDashboard } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { api } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import DynamicSEO from '@/components/DynamicSEO';
import { usePageContent } from "@/lib/usePageContent";

interface AuthUser {
  role?: string;
}

interface AuthResponse {
  user?: AuthUser;
}

export default function DashboardPage() {
  const router = useRouter();
  const { t, lang } = useLanguage();
  const { getField, seo, } = usePageContent("dashboard-page");
  const [status, setStatus] = useState<"loading" | "user">("loading");

  useEffect(() => {
    api<AuthResponse>("/api/v1/auth/me")
      .then((data) => {
        const role = data?.user?.role;
        if (role === "admin") {
          router.replace("/admin");
        } else {
          setStatus("user");
        }
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden pt-20">
      <DynamicSEO seo={seo} />
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-2 md:mt-3 font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {getField("comingSoon", "pageTitle", lang) || "Dashboard"}
            </span>
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <LayoutDashboard className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {getField("comingSoon", "heading", lang) || t("Dashboard Coming Soon", "Dashboard Binnenkort Beschikbaar")}
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            {getField("comingSoon", "description", lang) || t(
              "We're building your personal dashboard with career tools and insights.",
              "We bouwen je persoonlijke dashboard met carrière-tools en inzichten."
            )}
          </p>
          <p className="text-gray-400">{getField("comingSoon", "note", lang) || t("Check back soon!", "Kom snel terug!")}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
