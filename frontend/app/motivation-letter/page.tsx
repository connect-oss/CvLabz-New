"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Shield,
  Users,
  Zap,
  Lightbulb,
  Upload,
  Download,
  TrendingUp,
  Code,
  Award,
  Star,
  CheckCircle,
  ChevronRight,
  Play,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";
import DynamicSEO from "@/components/DynamicSEO";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function MotivationLetterPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const { lang } = useLanguage();
  const { getField, seo } = usePageContent("motivation-letter");

  const features = [
    {
      icon: Brain,
      gradient: "from-indigo-500 to-purple-600",
      badge: "Real-time feedback",
      title: "Context-Aware Suggestions",
      description:
        "Receive writing guidance that adapts to your role, industry, and experience to help you craft the most relevant and compelling cover letter.",
    },
    {
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      badge: "Precision targeting",
      title: "Smart Job Matching",
      description:
        "Analyze job descriptions and tailor your cover letter to match key requirements, ensuring your application stands out to hiring managers.",
    },
    {
      icon: Shield,
      gradient: "from-blue-500 to-indigo-600",
      badge: "Perfect tone",
      title: "Professional Tone Control",
      description:
        "Built-in language checks help maintain a clear, professional tone throughout your letter while keeping your authentic voice.",
    },
    {
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      badge: "Industry-specific",
      title: "Industry & Role Personalization",
      description:
        "Adjust your cover letter based on industry, job level, and role type to ensure the right emphasis and language for your target position.",
    },
    {
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
      badge: "ATS-compliant",
      title: "Instant Export and Formatting",
      description:
        "Download your cover letter in a professionally formatted PDF that is ATS-compliant and ready to submit with your application.",
    },
    {
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-600",
      badge: "Creative edge",
      title: "Focused Writing Assistance",
      description:
        "Generate structured, original content that highlights your strengths and creates a compelling narrative for your application.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Upload,
      gradient: "from-indigo-500 to-purple-600",
      title: "Upload Your CV or Create One",
      description:
        "Upload your existing CV or create a new one using the CV builder. The system will parse your experience and skills automatically.",
      tags: ["Smart parsing", "Auto-formatting", "Industry templates"],
    },
    {
      number: "02",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      title: "Add Job Details or Use Smart Suggestions",
      description:
        "Paste a job description or let the system analyze your background to generate targeted suggestions for your cover letter.",
      tags: ["Job matching", "Skill analysis", "Smart suggestions"],
    },
    {
      number: "03",
      icon: Download,
      gradient: "from-blue-500 to-indigo-600",
      title: "Review, Edit, and Download",
      description:
        "Review the generated cover letter, make any personal adjustments, and download it in a professionally formatted PDF.",
      tags: ["Real-time preview", "Custom edits", "Instant download"],
    },
  ];

  const samples = [
    {
      icon: Code,
      gradient: "from-blue-500 to-indigo-600",
      tag: "Technology",
      title: "Software Engineer at Tech Startup",
      company: "InnovateTech",
      rating: 4.9,
      response: "85% response",
      preview:
        "Dear Hiring Manager, I am writing to express my strong interest in the Software Engineer position at InnovateTech. With my passion for cutting-edge technology and 3 years of experience in full-stack development...",
      notes: [
        "Highlighted relevant tech stack",
        "Emphasized startup experience",
        "Quantified achievements",
      ],
    },
    {
      icon: TrendingUp,
      gradient: "from-green-500 to-teal-600",
      tag: "Marketing",
      title: "Marketing Manager at Fortune 500",
      company: "GlobalCorp",
      rating: 4.8,
      response: "92% response",
      notes: [
        "Personalized opening",
        "Company research evident",
        "International focus aligned",
      ],
      preview:
        "Dear Ms. Johnson, Your recent expansion into the European market caught my attention, and I am excited to apply for the Marketing Manager position. My 5 years of international marketing experience...",
    },
    {
      icon: Award,
      gradient: "from-purple-500 to-pink-600",
      tag: "Healthcare",
      title: "Data Scientist at Healthcare",
      company: "MedAnalytics",
      rating: 4.7,
      response: "88% response",
      notes: [
        "Domain expertise matched",
        "Research background",
        "HIPAA knowledge",
      ],
      preview:
        "Dear Dr. Martinez, As a data scientist with a strong background in healthcare analytics, I am thrilled to apply for the Data Scientist position at MedAnalytics...",
    },
  ];

  return (
    <>
      <DynamicSEO seo={seo} />
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden pt-20">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left column */}
              <motion.div variants={fadeUp}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                    {getField("hero", "title", lang) || "Craft Cover Letters That Get You Hired"}
                  </span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                  {getField("hero", "subtitle", lang) || "Create role specific cover letters that clearly connect your experience to what employers are looking for."}
                </p>
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {getField("hero", "ctaText", lang) || "Create Your Cover Letter"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Right column — video */}
              <motion.div variants={fadeUp}>
                <div className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Overlay text top-left */}
                  <div className="absolute top-4 left-4 z-10">
                    <p className="text-white text-sm font-semibold">
                      Create Professional Cover Letters in Minutes
                    </p>
                    <p className="text-slate-300 text-xs mt-1">
                      See how our AI helps you craft compelling motivation
                      letters
                    </p>
                  </div>
                  {/* LIVE badge top-right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      LIVE
                    </span>
                  </div>
                  <div className="aspect-video bg-slate-900">
                    <iframe
                      src="https://player.vimeo.com/video/1125654292?autoplay=1&muted=1&loop=1&autopause=0&background=0&byline=0&title=0&controls=0"
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY USE SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  {getField("whyUse", "badge", lang) || "Why Use Our Cover Letter Builder"}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  {getField("whyUse", "title", lang) || "Why Use Our Motivation Letter Builder?"}
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-lg text-slate-600"
              >
                {getField("whyUse", "subtitle", lang) || "Our motivation and cover letter builder is designed to help you write clear, role-aligned motivation letters that make a strong impression on hiring managers."}
              </motion.p>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="inline-block mt-4 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {feature.badge}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <a
                      href="/login"
                      className="inline-flex items-center gap-1 mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-center text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold">
                Ready to Strengthen Your Job Applications?
              </h3>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {["No credit card", "Free forever", "Instant results"].map(
                  (label) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-100"
                    >
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      {label}
                    </span>
                  )
                )}
              </div>
              <button className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  {getField("howItWorks", "badge", lang) || "Simple 3-Step Process"}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  {getField("howItWorks", "title", lang) || "How It Works"}
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-lg text-slate-600"
              >
                {getField("howItWorks", "subtitle", lang) || "Create a professional cover letter in a few simple steps with our AI-powered motivation letter builder."}
              </motion.p>
            </motion.div>

            {/* Step cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-16 grid lg:grid-cols-3 gap-8 relative"
            >
              {/* Connecting lines (hidden on mobile) */}
              <div className="hidden lg:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300" />
              <div className="hidden lg:block absolute top-24 right-0 w-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300" />

              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative bg-white rounded-3xl p-8 shadow-lg text-center"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} text-white text-xl font-bold mx-auto`}
                    >
                      {step.number}
                    </div>
                    <div className="mt-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-center text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold">
                Create Your Cover Letter in Minutes
              </h3>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {[
                  { value: "5min", label: "Average time" },
                  { value: "98%", label: "Success rate" },
                  { value: "Free", label: "To start" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-indigo-200">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* BUILT ON STRUCTURED AI SUPPORT */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-3 bg-indigo-50 border border-indigo-200/50 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-[18px] h-[18px] text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  {getField("aiSupport", "badge", lang) || "Smart Optimization Features"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
                {getField("aiSupport", "title", lang) || "Built on Structured, Practical AI Support"}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                {getField("aiSupport", "subtitle", lang) || "The platform combines guided AI assistance with proven writing principles to help you create clear, role-aligned cover letters for real job applications."}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  Icon: Target,
                  title: "ATS-Optimized Formatting",
                  desc: "Cover letters are formatted clearly and consistently so they remain readable and well-structured when processed by applicant tracking systems.",
                },
                {
                  Icon: Zap,
                  title: "Job Description Keyword Alignment",
                  desc: "Relevant terms and responsibilities from job descriptions are identified and reflected naturally to improve relevance without forcing language.",
                },
                {
                  Icon: Users,
                  title: "Industry Relevant Templates",
                  desc: "Templates, such as motivation letter templates, are designed around different industries and career levels, helping you present your experience in the right context.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="group bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <feature.Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMPLE COVER LETTERS SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {getField("samples", "badge", lang) || "Real Success Examples"}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  {getField("samples", "title", lang) || "Explore Sample Cover Letters"}
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-lg text-slate-600"
              >
                {getField("samples", "subtitle", lang) || "See examples of role-specific cover letters created for different industries and positions."}
              </motion.p>
            </motion.div>

            {/* Sample cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-16 grid lg:grid-cols-3 gap-8"
            >
              {samples.map((sample, i) => {
                const Icon = sample.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Gradient header */}
                    <div
                      className={`bg-gradient-to-br ${sample.gradient} p-6 text-white`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="px-3 py-1 bg-white/20 text-xs font-medium rounded-full">
                            {sample.tag}
                          </span>
                        </div>
                        <span className="px-3 py-1 bg-green-400/20 text-green-100 text-xs font-medium rounded-full">
                          {sample.response}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold">{sample.title}</h3>
                      <p className="text-sm text-white/80">{sample.company}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star
                            key={si}
                            className={`w-4 h-4 ${
                              si < Math.floor(sample.rating)
                                ? "text-yellow-300 fill-yellow-300"
                                : "text-white/30"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-white/80">
                          {sample.rating}
                        </span>
                      </div>
                    </div>

                    {/* Letter preview */}
                    <div className="p-6">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-sm text-slate-700 font-mono leading-relaxed">
                          {sample.preview}
                        </p>
                      </div>

                      {/* AI optimization notes */}
                      <div className="mt-4 space-y-2">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          AI Optimization Notes
                        </p>
                        {sample.notes.map((note) => (
                          <div
                            key={note}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {note}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom CTA with stats */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-slate-50/80 to-indigo-50/50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-slate-200/50 shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {getField("samplesCta", "title", lang) || "Create Your Own Professional Cover Letter"}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
                  {getField("samplesCta", "subtitle", lang) || "Build a role-specific cover letter with guided support designed for real job applications."}
                </p>
                <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">89%</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Average response rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">3x</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">More interviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50K+</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Letters created</div>
                  </div>
                </div>
                <a href="/dashboard">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-3xl inline-flex items-center gap-3">
                    <span>{getField("samplesCta", "ctaText", lang) || "Start Creating Now"}</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-br from-slate-50/50 to-indigo-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {getField("testimonials", "title", lang) || "Feedback from Real Job Seekers"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                {getField("testimonials", "subtitle", lang) || "Learn how clear, role-aligned cover letters helped candidates apply with confidence."}
              </p>
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Verified Success Stories</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Sarah M.",
                  role: "Marketingmanager",
                  title: "From invisible to shortlisted in 2 weeks",
                  quote: "The CV builder showed me exactly what recruiters look for. My response rate went from zero to four interviews.",
                  thumbnail: `${API_BASE}/uploads/video-thumbnails/sarah-m-video.png`,
                  duration: "0:32",
                },
                {
                  name: "Emily R.",
                  role: "Finance Graduate",
                  title: "Walked into my interview fully prepared",
                  quote: "The AI interview coach anticipated every question I got asked. I've never felt this confident walking into a final round",
                  thumbnail: `${API_BASE}/uploads/video-thumbnails/emily-r-video.png`,
                  duration: "0:28",
                },
                {
                  name: "Laura P.",
                  role: "Business Analyst",
                  title: "Cracked my case interview on the first try",
                  quote: "The business case simulations are frighteningly realistic. The AI feedback after each case made my structuring sharper every round",
                  thumbnail: `${API_BASE}/uploads/video-thumbnails/laura-p-video.png`,
                  duration: "0:25",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                      <img alt={`${t.name} testimonial`} className="w-full h-full object-cover object-center" src={t.thumbnail} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1 fill-current" />
                        </button>
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 rounded-lg font-medium">
                        {t.duration}
                      </div>
                      <div className="absolute bottom-3 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-white z-20">
                        <h3 className="text-xs sm:text-lg font-bold mb-1 leading-tight">{t.title}</h3>
                        <p className="text-[10px] sm:text-sm text-white/80">{t.name} &bull; {t.role}</p>
                      </div>
                    </div>
                    <div className="p-3 sm:p-6">
                      <div className="flex items-center mb-2 sm:mb-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed">{t.quote}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {getField("testimonialsCta", "title", lang) || "Ready to Write Your Perfect Cover Letter?"}
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {getField("testimonialsCta", "subtitle", lang) || "Join thousands of professionals who landed job interviews through CV Labz."}
                </p>
                <a href="/dashboard">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    {getField("testimonialsCta", "ctaText", lang) || "Create My Cover Letter Free"}
                  </button>
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Follow us for more career tips and professional insights
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
