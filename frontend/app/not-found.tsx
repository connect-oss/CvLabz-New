"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function NotFound() {
  const { t, lang } = useLanguage();
  const { getField } = usePageContent("not-found");

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
        <div className="text-center max-w-lg">
          <h1
            className="text-8xl md:text-9xl font-extrabold tracking-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {getField("content", "heading", lang) || t("Page not found", "Pagina niet gevonden")}
          </h2>
          <p className="text-gray-500 font-medium mb-8 leading-relaxed">
            {getField("content", "description", lang) || t(
              "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
              "De pagina die je zoekt bestaat niet of is verplaatst. Laten we je weer op weg helpen."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
            >
              {getField("content", "homeButton", lang) || t("Back to Home", "Terug naar Home")}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all"
            >
              {getField("content", "contactButton", lang) || t("Contact Support", "Contact Opnemen")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
