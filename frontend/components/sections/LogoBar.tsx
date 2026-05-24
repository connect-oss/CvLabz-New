"use client";
import { COMPANY_LOGOS } from "@/data/constants-data";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function LogoBar() {
  const { lang } = useLanguage();
  const { getField, getItems } = usePageContent("homepage");

  const title = getField("logoBar", "title", lang) || "Our users got hired at:";

  const dynamicItems = getItems("logoBar", lang);
  const logos = dynamicItems.length > 0
    ? dynamicItems.map((item) => ({ name: item.name || item.title || "", color: item.color || "text-gray-800" }))
    : COMPANY_LOGOS;

  return (
    <section className="py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <span className="text-sm font-black text-gray-300 uppercase tracking-widest">{title}</span>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map(logo => <span key={logo.name} className={`${logo.color} text-2xl font-black opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer`}>
            {logo.name}
          </span>)}
        </div>
      </div>
    </section>
  );
}
