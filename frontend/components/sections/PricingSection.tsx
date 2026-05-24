"use client";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function PricingSection() {
  const { lang } = useLanguage();
  const { getField, getItems } = usePageContent("homepage");

  const title = getField("pricing", "title", lang) || (lang === "nl" ? "Eén prijs. Alles ontgrendeld." : "One price. Everything unlocked.");
  const subtitle = getField("pricing", "subtitle", lang) || (lang === "nl" ? "€0,99 geeft je 14 dagen alles." : "€0,99 gets you 14 days of everything.");
  const price = getField("pricing", "price", lang) || "€0,99";
  const period = getField("pricing", "period", lang) || (lang === "nl" ? "voor 14 dagen" : "for 14 days");
  const afterPrice = getField("pricing", "afterPrice", lang) || (lang === "nl" ? "Daarna €19,99 / maand" : "Then €19,99 / month");
  const ctaText = getField("pricing", "ctaText", lang) || (lang === "nl" ? "Start je proefperiode" : "Start your trial");
  const cancelText = lang === "nl" ? "Opzeggen op elk moment. Geen vragen." : "Cancel anytime. No questions asked.";
  const trialBadge = lang === "nl" ? "14 dagen proefperiode" : "14-day trial";

  const defaultItems = lang === "nl"
    ? ["CV Bouwer", "CV Matcher", "Motivatiebrief", "LinkedIn Analyzer Premium", "Opzeggen in één klik"]
    : ["CV Builder", "CV Matcher", "Cover Letter", "LinkedIn Analyzer Premium", "Cancel anytime with one click"];

  const items = getItems("pricing", lang);
  const featureList = items.length > 0
    ? items.map((item) => (typeof item === "string" ? item : item.text || item.title || ""))
    : defaultItems;

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{title}</h2>
          <p className="text-2xl font-bold text-blue-600">{subtitle}</p>
        </div>
        <div className="max-w-[680px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-transparent p-12" style={{
            background: "white",
            boxShadow: "0 0 0 1.5px rgba(147,114,255,0.18), 0 20px 60px -10px rgba(99,102,241,0.13), 0 8px 32px -4px rgba(59,130,246,0.10)"
          }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span>{trialBadge}</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-7xl font-black text-gray-900 tracking-tight">{price}</span>
              </div>
              <p className="text-2xl font-bold text-gray-400 mb-1">{period}</p>
              <p className="text-lg font-bold text-gray-400">{afterPrice}</p>
            </div>
            <div className="border-t border-gray-100 mb-8" />
            <div className="flex flex-col gap-4 mb-8">
              {featureList.map((item) => (
                <div key={String(item)} className="flex items-center gap-3 font-semibold text-gray-700 text-xl leading-relaxed py-2">
                  <div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{String(item)}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-200">
              {ctaText}
            </button>
            <p className="text-center text-base font-bold text-gray-400 mt-4">{cancelText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
