"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import HeroCVMockup from "@/components/mockups/HeroCVMockup";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function HeroSection() {
  const { lang } = useLanguage();
  const { getField, getImage } = usePageContent("homepage");

  // Content with fallbacks
  const badge = getField("hero", "badge", lang) || (lang === "nl" ? "€0,99 VOOR 14 DAGEN" : "€0,99 FOR 14 DAYS");
  const title = getField("hero", "title", lang) || (lang === "nl" ? "Deze CV-bouwer helpt je sneller aan een baan." : "This resume builder gets you hired faster.");
  const subtitle = getField("hero", "subtitle", lang) || (lang === "nl" ? "CV Labz bouwt je CV, beoordeelt je LinkedIn, matcht je met elke vacature en schrijft je motivatiebrief. Alles op één plek." : "CV Labz builds your CV, scores your LinkedIn, matches you to any vacancy, and writes your cover letter. All in one place.");
  const ctaText = getField("hero", "ctaText", lang) || (lang === "nl" ? "Start 14 dagen voor €0,99" : "Start 14 days for €0,99");
  const secondaryCta = getField("hero", "secondaryCtaText", lang) || (lang === "nl" ? "Upload mijn CV" : "Upload my resume");
  const priceText = getField("hero", "priceText", lang) || (lang === "nl" ? "€0,99 ontgrendelt alles voor 14 dagen. Opzeggen in één klik." : "€0,99 unlocks everything for 14 days. Cancel in one click.");
  const afterPrice = getField("hero", "afterPrice", lang) || (lang === "nl" ? "Daarna €19,99/maand. Geen e-mails, geen gedoe." : "After that €19,99/month. No emails, no friction.");
  const counterNum = getField("seoMetrics", "counterNumber", lang) || "1,247";
  const counterLabel = getField("seoMetrics", "counterLabel", lang) || (lang === "nl" ? "cv's vandaag gemaakt" : "resumes created today");
  const trustText = getField("seoMetrics", "trustText", lang) || (lang === "nl" ? "4.8/5 van 2.300+ gebruikers" : "4.8/5 from 2,300+ users");
  const noSignup = lang === "nl" ? "Geen registratie nodig" : "No sign-up required";
  const cancelClick = lang === "nl" ? "Opzeggen in één klik" : "Cancel in one click";

  const avatar1 = getImage("hero", "avatar1", lang) || `${API_BASE}/uploads/avatars/avatar-1.jpg`;
  const avatar2 = getImage("hero", "avatar2", lang) || `${API_BASE}/uploads/avatars/avatar-2.jpg`;
  const avatar3 = getImage("hero", "avatar3", lang) || `${API_BASE}/uploads/avatars/avatar-3.jpg`;
  const avatar4 = getImage("hero", "avatar4", lang) || `${API_BASE}/uploads/avatars/avatar-4.jpg`;
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full font-bold text-xs mb-4 uppercase tracking-wider"
            style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
              boxShadow: "rgba(124,58,237,0.3) 0px 0px 24px",
            }}
          >
            <Star size={14} className="fill-white text-white shrink-0" />
            <span>{badge}</span>
          </motion.div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-gray-900 mb-3 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800 }}
          >
            {title}
          </h1>

          <p
            className="text-sm md:text-base text-gray-700 font-medium max-w-xl leading-relaxed mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {subtitle}
          </p>

          <p className="text-sm md:text-base font-bold text-gray-900 mb-3">
            <span
              className="font-extrabold"
              style={{
                color: "#7C3AED",
                backgroundColor: "rgba(167,139,250,0.25)",
                borderRadius: "4px",
                padding: "0 6px",
              }}
            >
              &euro;0,99
            </span>
            <span> {priceText.replace("€0,99 ", "").replace("€0,99", "")}</span>
          </p>

          <p className="text-xs text-gray-400 mb-6">{afterPrice}</p>

          <div className="flex flex-wrap items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-8 h-8 rounded-full border-3 border-white shadow-sm ring-1 ring-gray-100"
                    alt="User avatar"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
                <Star size={12} className="text-yellow-400 fill-yellow-400 shrink-0" />
                <span>{trustText}</span>
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"
              aria-hidden="true"
            />
            <span
              className="font-black leading-none tracking-tight"
              style={{ fontSize: "36px", color: "#4F46E5", lineHeight: 1, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {counterNum}
            </span>
            <span
              className="font-medium text-gray-800 leading-none"
              style={{ fontSize: "16px", lineHeight: 1, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {counterLabel}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 text-white rounded-full font-extrabold text-base flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                boxShadow: "0px 8px 30px rgba(99,102,241,0.45)",
              }}
            >
              <span>{ctaText}</span>
              <ArrowRight size={18} />
            </motion.button>
            <button className="px-8 py-3.5 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-extrabold text-base hover:border-gray-200 hover:bg-gray-50 transition-all">
              {secondaryCta}
            </button>
          </div>

          <p className="text-xs font-medium text-gray-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Check size={12} className="text-emerald-500 shrink-0" strokeWidth={3} />
              <span>{noSignup}</span>
            </span>
            <span className="text-gray-300 select-none">&middot;</span>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-emerald-500 shrink-0" strokeWidth={3} />
              <span>{cancelClick}</span>
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex items-center justify-center lg:justify-end"
        >
          <HeroCVMockup />
        </motion.div>
      </div>
    </section>
  );
}
