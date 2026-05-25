"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";
import DynamicSEO from '@/components/DynamicSEO';
import { usePageContent } from "@/lib/usePageContent";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Target,
  Download,
  Check,
  Zap,
  Clock,
  Star,
  MessageSquare,
  BarChart3,
  DollarSign,
  Linkedin,
  Briefcase,
  PenLine,
} from "lucide-react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const steps = [
  {
    icon: FileText,
    step: 1,
    title: "Upload Your CV",
    description:
      "Upload your existing CV or paste your text. Our system parses your skills, experience, and qualifications automatically.",
  },
  {
    icon: Search,
    step: 2,
    title: "Paste the Job Description",
    description:
      "Copy and paste any job posting URL or description. The AI extracts key requirements, responsibilities, and must-have skills.",
  },
  {
    icon: Target,
    step: 3,
    title: "Get Your Match Score",
    description:
      "Receive an instant match percentage with a detailed breakdown of keyword alignment, experience fit, and section-by-section analysis.",
  },
  {
    icon: Download,
    step: 4,
    title: "Improve and Reapply",
    description:
      "Follow prioritized suggestions to fill gaps, add missing keywords, and strengthen weak sections before submitting your application.",
  },
];

const features = [
  {
    icon: Check,
    title: "Instant Match Scoring",
    description:
      "Get a percentage match score within seconds, showing exactly how your CV aligns with the job requirements across all key dimensions.",
  },
  {
    icon: Zap,
    title: "Missing Keyword Detection",
    description:
      "Identify critical keywords and phrases from the job description that are absent from your CV, so you can add them before applying.",
  },
  {
    icon: Target,
    title: "Section-by-Section Analysis",
    description:
      "See how each CV section (summary, experience, skills, education) individually scores against the job requirements.",
  },
  {
    icon: Clock,
    title: "Smart Rewrite Suggestions",
    description:
      "Receive AI-powered suggestions to rephrase your experience bullets and summary to better match the role without sounding forced.",
  },
  {
    icon: Download,
    title: "Export Match Report",
    description:
      "Download a detailed PDF report showing your match score, gaps, and improvement priorities to guide your application strategy.",
  },
];

const testimonials = [
  {
    image: `${API_BASE}/uploads/testimonials/sarah-chen.jpg`,
    name: "Sarah Chen",
    role: "Product Manager at Google",
    quote:
      "The match score showed me exactly which keywords I was missing. Added them and got called back within a week!",
    badge: "+180% profile views",
  },
  {
    image: `${API_BASE}/uploads/testimonials/marcus-johnson.jpg`,
    name: "Marcus Johnson",
    role: "Senior Developer at Microsoft",
    quote:
      "I was applying to roles that were only 40% matches. Now I focus on 80%+ matches and my callback rate tripled.",
    badge: "+250% recruiter reach",
  },
  {
    image: `${API_BASE}/uploads/testimonials/emily-rodriguez.jpg`,
    name: "Emily Rodriguez",
    role: "Marketing Director at Spotify",
    quote:
      "The section-by-section breakdown made it so clear where my CV was weak. Fixed it in 20 minutes.",
    badge: "+320% engagement",
  },
  {
    image: `${API_BASE}/uploads/testimonials/david-kim.jpg`,
    name: "David Kim",
    role: "Data Scientist at Netflix",
    quote:
      "Finally stopped guessing if my CV was good enough. The match report gives real, actionable data.",
    badge: "+400% job inquiries",
  },
];

export default function CVMatcherPage() {
  const { lang } = useLanguage();
  const { getField, seo, } = usePageContent("cv-matching");

  // Hero
  const heroTitle = getField("hero", "title", lang) || "Match Your CV to Any Job in Seconds";
  const heroSubtitle = getField("hero", "subtitle", lang) || "Upload your CV and paste a job description to instantly see how well you match. Get keyword analysis, gap identification, and tailored rewrite suggestions.";
  const heroCtaText = getField("hero", "ctaText", lang) || "Match My CV Now";
  const heroCtaLink = getField("hero", "ctaLink", lang) || "#";
  const videoUrl = getField("hero", "videoUrl", lang) || "https://player.vimeo.com/video/1125654210?autoplay=1&muted=1&loop=1&autopause=0&background=0&byline=0&title=0&controls=0";
  const videoOverlayTitle = getField("hero", "videoOverlayTitle", lang) || "See How CV Matching Works";
  const videoOverlaySubtitle = getField("hero", "videoOverlaySubtitle", lang) || "Watch how our AI compares your CV against real job descriptions";

  // Section titles
  const howItWorksTitle = getField("howItWorks", "title", lang) || "How Our CV Matcher Works";
  const featuresTitle = getField("features", "title", lang) || "What Makes Our CV Matcher Different";
  const testimonialsTitle = getField("testimonials", "title", lang) || "Hear from Job Seekers Like You";
  const understandingTitle = getField("understanding", "title", lang) || "Understanding How CV Matching Improves Your Applications";
  const otherToolsTitle = getField("otherTools", "title", lang) || "Explore Other Career Tools";

  // Final CTA
  const finalCtaTitle = getField("finalCta", "title", lang) || "Stop Guessing. Start Matching.";
  const finalCtaSubtitle = getField("finalCta", "subtitle", lang) || "Upload your CV and paste any job description to see your match score instantly. No signup required.";
  const finalCtaText = getField("finalCta", "ctaText", lang) || "Match My CV for Free";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <DynamicSEO seo={seo} />
      <Header />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 to-slate-200 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-black via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {heroTitle}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              {heroSubtitle}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={heroCtaLink}
                className="inline-block px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {heroCtaText}
              </a>
            </motion.div>
          </motion.div>

          {/* Video area */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
          >
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="CV Matcher demo video"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 text-left">
              <p className="text-white font-bold text-lg md:text-xl">
                {videoOverlayTitle}
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-1">
                {videoOverlaySubtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: How Our CV Matcher Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              <span style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {howItWorksTitle}
              </span>
            </motion.h2>
          </motion.div>

          {/* Steps grid - scrollable on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none"
          >
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  className="flex-shrink-0 w-72 md:w-auto snap-start text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm font-bold text-blue-600 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-14"
          >
            <a
              href={heroCtaLink}
              className="inline-block px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {heroCtaText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 3: What Makes Our CV Matcher Different */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              <span style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {featuresTitle}
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right: placeholder image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center">
                <p className="text-gray-400 font-bold text-lg">
                  CV Match Report Preview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-black via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {testimonialsTitle}
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex-shrink-0 w-72 md:w-auto snap-start rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/5]">
                  <Image
                    src={t.image}
                    alt={`Photo of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-base">{t.name}</p>
                    <p className="text-gray-300 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
                      {t.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-center font-bold" style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {understandingTitle}
          </h2>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-4 sm:space-y-6 text-gray-700">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">1. Why Match Scores Matter for Job Applications</h3>
                <p className="text-sm sm:text-base">Most recruiters spend less than 10 seconds scanning a CV. A high match score means your CV immediately signals relevance — the right keywords in the right places. Our matcher analyzes alignment across skills, experience, and qualifications so you can see your CV the way an ATS does.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">2. How Keyword Gaps Cost You Interviews</h3>
                <p className="text-sm sm:text-base">Job descriptions contain specific terms that ATS systems and recruiters search for. Missing even a few critical keywords can drop your CV to the bottom of the pile. Our tool identifies these gaps so you can address them before hitting submit.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">3. From Match Score to Interview — Closing the Gap</h3>
                <p className="text-sm sm:text-base">A match score is only useful if you act on it. Our tool doesn&apos;t just show the number — it gives you prioritized, section-specific suggestions so you know exactly what to fix, where to fix it, and how to phrase it for maximum impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Career Tools */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {otherToolsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "CV Builder", desc: "Build a professional, ATS-optimized CV in minutes", Icon: PenLine, href: "/cv-builder" },
              { title: "Motivation Letter", desc: "Write compelling cover letters that get noticed", Icon: MessageSquare, href: "/motivation-letter" },
              { title: "Assessments", desc: "Practice aptitude tests and skill assessments", Icon: BarChart3, href: "/online-assessments" },
              { title: "Salary Analyzer", desc: "Research market rates for your role and location", Icon: DollarSign, href: "/salary-analyzer" },
              { title: "LinkedIn Analyzer", desc: "Optimize your LinkedIn profile for better visibility", Icon: Linkedin, href: "/linkedin-analyzer" },
              { title: "Business Case Trainer", desc: "Master case interviews with guided practice", Icon: Briefcase, href: "/business-case-training" },
            ].map((tool) => (
              <a key={tool.title} href={tool.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tool.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2" style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">{tool.desc}</p>
                  <span className="text-blue-600 font-semibold text-xs sm:text-sm">Explore</span>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold" style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {finalCtaTitle}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 leading-relaxed px-4">
            {finalCtaSubtitle}
          </p>
          <a href="/login">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105">
              {finalCtaText}
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
