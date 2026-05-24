"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";
import { motion } from "framer-motion";
import {
  FileText,
  PenLine,
  Target,
  Download,
  Check,
  Zap,
  Smartphone,
  Clock,
  Star,
  MessageSquare,
  BarChart3,
  DollarSign,
  Linkedin,
  Briefcase,
  Building2,
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
    title: "Choose a Professional Template",
    description:
      "Start with a clean, ATS-optimized template designed to meet modern recruiter and hiring system standards.",
  },
  {
    icon: PenLine,
    step: 2,
    title: "Add Your Details with Guided Support",
    description:
      "Enter your information with smart prompts, examples, and suggestions that help you write each section clearly and confidently.",
  },
  {
    icon: Target,
    step: 3,
    title: "Customize for the Role You're Applying For",
    description:
      "Tailor your CV using role-specific recommendations and keyword alignment to match job descriptions and ATS requirements.",
  },
  {
    icon: Download,
    step: 4,
    title: "Download a Job-Ready CV",
    description:
      "Download your CV as a professionally formatted PDF, ready to upload or share with employers.",
  },
];

const features = [
  {
    icon: Check,
    title: "ATS-Optimized by Design",
    description:
      "Our CV templates are designed to work smoothly with applicant tracking systems, helping your resume stay readable and properly structured during screening.",
  },
  {
    icon: Zap,
    title: "Easy Editing, No Formatting Stress",
    description:
      "You can edit your CV online and see updates instantly without worrying about spacing, layout, or design issues.",
  },
  {
    icon: Smartphone,
    title: "Smart Writing Support Along the Way",
    description:
      "Smart suggestions and writing prompts support you as you build your CV, making it easier to describe your experience clearly and professionally.",
  },
  {
    icon: Clock,
    title: "Create Your CV Faster",
    description:
      "The process is simple and focused, allowing you to create a polished, job ready CV quickly, even if you are applying under time pressure.",
  },
  {
    icon: Download,
    title: "Download Your CV for Free",
    description:
      "Once your CV is ready, you can download it as a clean, well formatted PDF that is suitable for online applications and email submissions.",
  },
];

const testimonials = [
  {
    image: `${API_BASE}/uploads/testimonials/sarah-chen.jpg`,
    name: "Sarah Chen",
    role: "Product Manager at Google",
    quote:
      "The LinkedIn analyzer helped me optimize my profile and I got 3x more recruiter messages within a month!",
    badge: "+180% profile views",
  },
  {
    image: `${API_BASE}/uploads/testimonials/marcus-johnson.jpg`,
    name: "Marcus Johnson",
    role: "Senior Developer at Microsoft",
    quote:
      "Amazing insights! The keyword optimization suggestions were spot-on and helped me land my dream job.",
    badge: "+250% recruiter reach",
  },
  {
    image: `${API_BASE}/uploads/testimonials/emily-rodriguez.jpg`,
    name: "Emily Rodriguez",
    role: "Marketing Director at Spotify",
    quote:
      "The profile photo evaluation and headline suggestions transformed my LinkedIn presence completely.",
    badge: "+320% engagement",
  },
  {
    image: `${API_BASE}/uploads/testimonials/david-kim.jpg`,
    name: "David Kim",
    role: "Data Scientist at Netflix",
    quote:
      "Free analysis that actually works! Got multiple job offers after implementing the recommendations.",
    badge: "+400% job inquiries",
  },
];

export default function CVBuilderPage() {
  const { lang } = useLanguage();
  const { getField } = usePageContent("cv-builder");

  // Hero
  const heroTitle = getField("hero", "title", lang) || "Build the CV Recruiters Want to Read";
  const heroSubtitle = getField("hero", "subtitle", lang) || "Create an ATS-optimized CV that highlights your experience clearly and aligns with modern hiring systems.";
  const heroCtaText = getField("hero", "ctaText", lang) || "Build Your CV";
  const heroCtaLink = getField("hero", "ctaLink", lang) || "#";
  const videoUrl = getField("hero", "videoUrl", lang) || "https://player.vimeo.com/video/1125654210?autoplay=1&muted=1&loop=1&autopause=0&background=0&byline=0&title=0&controls=0";
  const videoOverlayTitle = getField("hero", "videoOverlayTitle", lang) || "See How Our Resume Builder Works";
  const videoOverlaySubtitle = getField("hero", "videoOverlaySubtitle", lang) || "Watch professionals create winning resumes in minutes";

  // Section titles
  const howItWorksTitle = getField("howItWorks", "title", lang) || "How Our CV Builder Works";
  const featuresTitle = getField("features", "title", lang) || "What Makes Our CV Builder Different";
  const testimonialsTitle = getField("testimonials", "title", lang) || "Hear from Job Seekers Like You";
  const understandingTitle = getField("understanding", "title", lang) || "Understanding How Our CV Builder Helps You";
  const otherToolsTitle = getField("otherTools", "title", lang) || "Explore Other Career Tools";

  // Final CTA
  const finalCtaTitle = getField("finalCta", "title", lang) || "Build a CV You Can Apply With Confidence";
  const finalCtaSubtitle = getField("finalCta", "subtitle", lang) || "Start building a clear, professional CV with guided support designed for real job applications.";
  const finalCtaText = getField("finalCta", "ctaText", lang) || "Build Your CV for Free";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
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
                title="CV Builder demo video"
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

      {/* Section 2: How Our CV Builder Works */}
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
              style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {howItWorksTitle}
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

      {/* Section 3: What Makes Our CV Builder Different */}
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
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ background: "linear-gradient(135deg, #000 0%, #3b82f6 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {featuresTitle}
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
                  CV Builder Preview
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
            <p className="text-sm sm:text-base">
              Our online resume maker revolutionizes how professionals create cv for jobs. Unlike traditional resume builders, CV Labz combines AI-powered content suggestions with ATS-optimized templates to ensure your free cv maker gets noticed by both hiring managers and applicant tracking systems.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">1. What Does ATS-Friendly Really Mean</h3>
                <p className="text-sm sm:text-base">Many companies use Applicant Tracking Systems to filter CVs before a recruiter ever sees them. An ATS-friendly CV follows the right structure, formatting, and keyword alignment so it can be properly read and evaluated. Our CV builder is designed to support this process, helping your resume stay readable and well-organized throughout screening.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">2. How This CV Builder Helps You Stand Out</h3>
                <p className="text-sm sm:text-base">You are not just filling in a template. As you build your CV, the system provides contextual guidance based on roles and industries, helping you describe your experience more clearly and professionally. The goal is to present your strengths in a way that feels natural, relevant, and easy to understand.</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">3. How This CV Builder Helps You Write Better Content</h3>
                <p className="text-sm sm:text-base">Writing a CV is often harder than formatting it. Our AI resume builder supports you with prompts and examples that help you describe your experience clearly, avoid vague language, and focus on what recruiters actually look for in each section.</p>
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
              { title: "Motivation Letter", desc: "Write compelling cover letters that get noticed", Icon: MessageSquare, href: "/motivation-letter" },
              { title: "Assessments", desc: "Practice aptitude tests and skill assessments", Icon: BarChart3, href: "/online-assessments" },
              { title: "Salary Analyzer", desc: "Research market rates for your role and location", Icon: DollarSign, href: "/salary-analyzer" },
              { title: "LinkedIn Analyzer", desc: "Optimize your LinkedIn profile for better visibility", Icon: Linkedin, href: "/linkedin-analyzer" },
              { title: "Business Case Trainer", desc: "Master case interviews with guided practice", Icon: Briefcase, href: "/business-case-training" },
              { title: "Company Research", desc: "Get insights on companies and interview processes", Icon: Building2, href: "/company-research-tool" },
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
          <a href="/dashboard">
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
