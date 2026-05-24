"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import CVTemplateClassic from "@/components/templates/CVTemplateClassic";
import CVTemplateDarkPro from "@/components/templates/CVTemplateDarkPro";
import CVTemplateMinimal from "@/components/templates/CVTemplateMinimal";
import CVTemplateBoldHeader from "@/components/templates/CVTemplateBoldHeader";
import CVTemplateCreative from "@/components/templates/CVTemplateCreative";
import CVTemplateATSClean from "@/components/templates/CVTemplateATSClean";
import type { TemplateCardDef } from "@/data/types";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

const TEMPLATE_CARD_DEFS: TemplateCardDef[] = [
  { id: "classic", label: "Classic", component: <CVTemplateClassic /> },
  { id: "dark-pro", label: "Dark Pro", component: <CVTemplateDarkPro /> },
  { id: "minimal", label: "Minimal", component: <CVTemplateMinimal /> },
  { id: "bold-header", label: "Bold Header", component: <CVTemplateBoldHeader /> },
  { id: "creative", label: "Creative", component: <CVTemplateCreative /> },
  { id: "ats-clean", label: "ATS Clean", component: <CVTemplateATSClean /> },
];

export default function TemplatesSection() {
  const { lang } = useLanguage();
  const { getField } = usePageContent("homepage");

  const title = getField("templates", "title", lang) || "ATS-friendly templates that do not look like everyone else's.";
  const subtitle = getField("templates", "subtitle", lang) || "Recruiters see 200 CVs a week. Yours should not blend in.";

  const templateScrollRef = useRef<HTMLDivElement>(null);
  const scrollTemplates = (direction: "left" | "right") => {
    if (templateScrollRef.current) {
      templateScrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-500 font-bold mb-4">{subtitle}</p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>
        <a href="/#templates" className="flex items-center gap-2 font-extrabold text-blue-600 hover:gap-3 transition-all">
          <span>See all templates</span> <ArrowRight size={20} />
        </a>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left arrow */}
        <button onClick={() => scrollTemplates("left")} className="absolute left-0 top-1/2 -translate-y-8 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all" aria-label="Scroll left">
          <ChevronDown size={18} className="text-gray-600 -rotate-90" />
        </button>

        {/* Scrollable row */}
        <div ref={templateScrollRef} className="flex gap-6 overflow-x-auto pb-8 px-12" style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}>
          {TEMPLATE_CARD_DEFS.map(tpl => <div key={tpl.id} className="flex-shrink-0 flex flex-col items-center gap-3">
            <motion.div whileHover={{
              scale: 1.04,
              y: -6
            }} transition={{
              duration: 0.18
            }} className="rounded-xl shadow-md border border-gray-100 overflow-hidden cursor-pointer" style={{
              width: 280,
              height: 380
            }}>
              <div style={{
                width: 700,
                height: 1000,
                transform: "scale(0.38)",
                transformOrigin: "top left"
              }}>
                {tpl.component}
              </div>
            </motion.div>
            <span className="text-xs font-bold text-gray-400 tracking-wide">{tpl.label}</span>
          </div>)}
        </div>

        {/* Right arrow */}
        <button onClick={() => scrollTemplates("right")} className="absolute right-0 top-1/2 -translate-y-8 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all" aria-label="Scroll right">
          <ChevronRight size={18} className="text-gray-600" />
        </button>

        {/* Fade gradient on right */}
        <div className="absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
