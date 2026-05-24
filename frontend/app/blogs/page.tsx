"use client";

import { PenSquare } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";

export default function BlogsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden pt-20">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-2 md:mt-3 font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("Blog", "Blog")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            {t(
              "Career tips, CV advice, and expert insights",
              "Carrieretips, CV-advies en deskundige inzichten"
            )}
          </p>
        </div>

        {/* Coming Soon card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <PenSquare className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {t("Coming Soon", "Binnenkort beschikbaar")}
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            {t(
              "We're working on bringing you the best career content.",
              "We werken eraan om u de beste carrière-inhoud te bieden."
            )}
          </p>
          <p className="text-gray-400">
            {t("Check back soon!", "Kom snel terug!")}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
