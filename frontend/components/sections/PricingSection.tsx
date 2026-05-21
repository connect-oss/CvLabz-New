"use client";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">One price. Everything unlocked.</h2>
          <p className="text-2xl font-bold text-blue-600">€0,99 gets you 14 days of everything. Cancel in one click. No emails, no friction.</p>
        </div>
        <div className="max-w-[680px] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-transparent p-12" style={{
            background: "white",
            boxShadow: "0 0 0 1.5px rgba(147,114,255,0.18), 0 20px 60px -10px rgba(99,102,241,0.13), 0 8px 32px -4px rgba(59,130,246,0.10)"
          }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span>14-day trial</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-7xl font-black text-gray-900 tracking-tight">€0,99</span>
              </div>
              <p className="text-2xl font-bold text-gray-400 mb-1">for 14 days</p>
              <p className="text-lg font-bold text-gray-400">Then €19,99 / month</p>
            </div>
            <div className="border-t border-gray-100 mb-8" />
            <div className="flex flex-col gap-4 mb-8">
              {["CV Builder", "CV Matcher", "Cover Letter", "LinkedIn Analyzer Premium", "Cancel anytime with one click"].map(item => <div key={item} className="flex items-center gap-3 font-semibold text-gray-700 text-xl leading-relaxed py-2">
                <div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                  <Check size={13} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>)}
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-xl font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-200">
              Start your trial
            </button>
            <p className="text-center text-base font-bold text-gray-400 mt-4">Cancel anytime. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
