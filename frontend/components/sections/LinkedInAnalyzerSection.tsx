"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Check, ArrowRight } from "lucide-react";
import LinkedInMockup from "@/components/mockups/LinkedInMockup";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function LinkedInAnalyzerSection() {
  const { lang } = useLanguage();
  const { getField } = usePageContent("homepage");

  const sectionTitle = getField("linkedinAnalyzer", "title", lang) || "Score your LinkedIn in 30 seconds.";
  const subtitle = getField("linkedinAnalyzer", "subtitle", lang) || "Your LinkedIn is costing you interviews.";
  const ctaText = getField("linkedinAnalyzer", "ctaText", lang) || "Analyze";
  const ctaLink = getField("linkedinAnalyzer", "ctaLink", lang) || "#";
  const inputPlaceholder = getField("linkedinAnalyzer", "inputPlaceholder", lang) || "Paste LinkedIn profile URL";

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-center mx-auto" style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800
      }}>
        {sectionTitle}
      </h2>
      <motion.div initial={{
        opacity: 0,
        y: 24
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.55
      }} className="bg-white rounded-2xl shadow-lg border border-gray-100" style={{
        padding: "48px"
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border font-black text-xs uppercase tracking-widest" style={{
              color: "#A78BFA",
              borderColor: "#A78BFA",
              backgroundColor: "#faf5ff"
            }}>
              <Linkedin size={13} style={{
                color: "#A78BFA"
              }} />
              <span>Free LinkedIn Report</span>
            </div>

            {/* Heading */}
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight" style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800
            }}>
              {subtitle}
            </h3>

            {/* Sub-copy */}
            <p className="text-gray-500 font-medium leading-relaxed">
              See exactly which sections are weak, which keywords you are missing, and what recruiters notice first. Free report in your inbox in 60 seconds.
            </p>

            {/* What you will get row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {["Headline & About score", "Missing keywords", "Profile photo feedback", "Top 5 fixes"].map((item, idx) => <React.Fragment key={item}>
                <span className="flex items-center gap-1 text-xs font-bold text-gray-500">
                  <Check size={11} className="text-emerald-500 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </span>
                {idx < 3 && <span className="text-gray-300 text-xs select-none">·</span>}
              </React.Fragment>)}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input type="text" placeholder={inputPlaceholder} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-base transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-100">
                <span>{ctaText}</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-xs font-bold text-gray-400">
                <span>Your report generates instantly. Enter your email to receive it.</span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Mockup */}
          <div className="relative flex items-start justify-center pt-6 pb-6">
            {/* Glow bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl blur-2xl opacity-60 scale-105" />
            <div className="relative w-full max-w-sm">
              <LinkedInMockup />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
