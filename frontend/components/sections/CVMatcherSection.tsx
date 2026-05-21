"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, Check, ArrowRight } from "lucide-react";
import CVMatcherMockup from "@/components/mockups/CVMatcherMockup";

export default function CVMatcherSection() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-center mx-auto" style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800
      }}>
        Match your CV to any job in 10 seconds.
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
        duration: 0.55,
        delay: 0.1
      }} className="bg-white rounded-2xl shadow-lg border border-gray-100" style={{
        padding: "48px"
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border font-black text-xs uppercase tracking-widest text-emerald-600 border-emerald-300 bg-emerald-50">
              <Search size={13} className="text-emerald-600" />
              <span>Free CV Match Report</span>
            </div>

            {/* Heading */}
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight" style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800
            }}>
              Your CV does not match the job. Here is the gap.
            </h3>

            {/* Sub-copy */}
            <p className="text-gray-500 font-medium leading-relaxed">
              Upload your CV, paste any vacancy, and see the exact match score, missing keywords, and rewrite suggestions. Free report in your inbox in 60 seconds.
            </p>

            {/* What you will get row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {["Overall match score", "Section-by-section breakdown", "Missing keywords", "Rewrite tips"].map((item, idx) => <React.Fragment key={item}>
                <span className="flex items-center gap-1 text-xs font-bold text-gray-500">
                  <Check size={11} className="text-emerald-500 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </span>
                {idx < 3 && <span className="text-gray-300 text-xs select-none">·</span>}
              </React.Fragment>)}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-3">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl px-5 py-3.5 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all">
                <FileText size={16} className="text-gray-400 shrink-0" />
                <span className="text-sm font-bold text-gray-400">Upload CV or paste your text</span>
              </div>
              <input type="text" placeholder="Paste job posting URL" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-base transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-100">
                <span>Match my CV</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-xs font-bold text-gray-400">
                <span>Your match score generates instantly. Enter your email to receive the full report.</span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Mockup */}
          <div className="relative flex items-start justify-center pt-6 pb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl blur-2xl opacity-60 scale-105" />
            <div className="relative w-full max-w-sm">
              <CVMatcherMockup />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
