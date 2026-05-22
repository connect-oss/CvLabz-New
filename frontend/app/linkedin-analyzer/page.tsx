"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Star,
  TrendingUp,
  FileText,
  Search,
  Lightbulb,
  Eye,
  Camera,
  BarChart3,
  Target,
  CircleCheckBig,
  Play,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  SECTION 1 — Hero                                                  */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              LinkedIn Analyzer powered by CV Labz
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Optimize Your LinkedIn Profile for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Recruiters &amp; Algorithms
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Get AI-powered insights to make your LinkedIn profile irresistible
              to recruiters. Free analysis in under 2 minutes.
            </p>

            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Analyze My Profile – It&apos;s Free
            </a>

            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { Icon: Users, value: "50K+", label: "Profiles Analyzed" },
                { Icon: Star, value: "4.9/5", label: "User Rating" },
                {
                  Icon: TrendingUp,
                  value: "85%",
                  label: "Profile Improvement",
                },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-4">
              {/* Floating badge top-left */}
              <div className="absolute -top-4 -left-4 z-10 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">
                  Profile Score: 85%
                </span>
              </div>

              {/* Floating badge bottom-right */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">
                  +47% Visibility
                </span>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1125654447?autoplay=1&muted=1&loop=1&autopause=0&background=0&byline=0&title=0&controls=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  title="LinkedIn Analyzer demo video"
                />
              </div>

              <div className="mt-4 px-2 pb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  How to Optimize Your LinkedIn in 2 Minutes
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Watch our step-by-step guide to LinkedIn optimization
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — Your LinkedIn Profile, Reimagined                     */
/* ------------------------------------------------------------------ */
const analysisCards = [
  {
    gradient: "from-blue-500 to-cyan-500",
    Icon: FileText,
    badge: "Summary",
    title: "Profile Summary",
    score: 85,
    bullets: [
      "Strong headline optimization",
      "Complete profile sections",
      "Professional photo",
    ],
    tips: "3 tips",
  },
  {
    gradient: "from-green-500 to-emerald-500",
    Icon: Search,
    badge: "Keyword Scan",
    title: "Keyword Analysis",
    score: 72,
    bullets: [
      "15 industry keywords found",
      "Good skill alignment",
      "SEO optimized",
    ],
    tips: "5 tips",
  },
  {
    gradient: "from-purple-500 to-pink-500",
    Icon: Lightbulb,
    badge: "Improvement Tips",
    title: "Improvement Tips",
    score: 91,
    bullets: [
      "12 actionable recommendations",
      "Priority-ranked suggestions",
      "Quick wins identified",
    ],
    tips: "8 tips",
  },
];

const reportFeatures = [
  {
    Icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Profile Completeness Score",
    desc: "Detailed breakdown of missing elements and optimization opportunities",
  },
  {
    Icon: Search,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Keyword Optimization",
    desc: "Industry-specific keyword analysis and density recommendations",
  },
  {
    Icon: FileText,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Headline & Summary Analysis",
    desc: "AI-powered suggestions to make your profile more compelling",
  },
  {
    Icon: Star,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    title: "Recruiter Appeal Rating",
    desc: "How attractive your profile is to hiring managers and recruiters",
  },
  {
    Icon: TrendingUp,
    color: "text-red-600",
    bg: "bg-red-50",
    title: "Algorithm Optimization",
    desc: "Tips to improve your visibility in LinkedIn search results",
  },
  {
    Icon: Lightbulb,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Actionable Improvements",
    desc: "Priority-ranked suggestions with step-by-step implementation guides",
  },
];

function ReimaginedSection() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-purple-600 bg-clip-text text-transparent mb-4">
            Your LinkedIn Profile, Reimagined
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how our AI analyzes your profile and provides actionable insights to help you stand out to recruiters and optimize for LinkedIn&apos;s algorithm
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — analysis cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Stacked cards */}
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {analysisCards.map((c, i) => {
                const zIndex = analysisCards.length - i;
                const offset = i * 15;
                const rotate = i * -3;
                return (
                  <div
                    key={c.badge}
                    onClick={() => setActiveCard(i)}
                    className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 cursor-pointer transition-all duration-500"
                    style={{
                      zIndex: activeCard === i ? 10 : zIndex,
                      transform: activeCard === i
                        ? "translateX(0) translateY(0) rotate(0deg)"
                        : `translateX(${offset}px) translateY(${-offset * 1.3}px) rotate(${rotate}deg)`,
                      opacity: 1,
                    }}
                  >
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${c.gradient} rounded-xl flex items-center justify-center`}
                      >
                        <c.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span
                        className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${c.gradient} text-white text-xs sm:text-sm font-semibold rounded-full`}
                      >
                        {c.badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {c.title}
                    </h3>
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">Overall Score</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{c.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                        <div
                          className={`h-2 sm:h-3 bg-gradient-to-r ${c.gradient} rounded-full transition-all duration-1000`}
                          style={{ width: `${c.score}%` }}
                        />
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Improvements Available</span>
                        <span className="font-semibold text-blue-600">{c.tips}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Spacer to give stacked cards height */}
              <div className="bg-gray-100 rounded-2xl h-80 sm:h-96 opacity-50" />

              {/* Floating badges */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100 z-20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Analysis Rating</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100 z-20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-gray-900">+67%</div>
                    <div className="text-xs text-gray-600">Profile Views</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — report features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What You&apos;ll Get in Your Report
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Our comprehensive LinkedIn analysis covers every aspect of your profile to maximize your visibility and appeal to recruiters.
            </p>

            <div className="space-y-5">
              {reportFeatures.map(({ Icon, color, bg, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Get My Free Analysis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — Comprehensive LinkedIn Profile Analysis               */
/* ------------------------------------------------------------------ */
const advancedFeatures = [
  {
    Icon: Eye,
    gradient: "from-blue-500 to-cyan-500",
    title: "Headline Optimization Scan",
    badge: "95% accuracy",
    desc: "AI analyzes your headline for keyword density, recruiter appeal, and algorithm optimization",
  },
  {
    Icon: Search,
    gradient: "from-green-500 to-emerald-500",
    title: "Keyword Density Analysis",
    badge: "200+ keywords",
    desc: "Identifies missing industry keywords and optimal placement strategies for maximum visibility",
  },
  {
    Icon: Camera,
    gradient: "from-purple-500 to-pink-500",
    title: "Profile Photo Evaluation",
    badge: "12 criteria",
    desc: "Professional assessment of your profile photo impact on first impressions and engagement",
  },
  {
    Icon: Users,
    gradient: "from-orange-500 to-red-500",
    title: "Connection Relevance Score",
    badge: "Network analysis",
    desc: "Evaluates your network quality and suggests strategic connections for career growth",
  },
  {
    Icon: BarChart3,
    gradient: "from-indigo-500 to-blue-500",
    title: "Engagement Pattern Analysis",
    badge: "6-month history",
    desc: "Reviews your posting activity and engagement rates to boost your LinkedIn presence",
  },
  {
    Icon: Target,
    gradient: "from-yellow-500 to-orange-500",
    title: "LinkedIn Scoring Indicator",
    badge: "100-point scale",
    desc: "Comprehensive score based on LinkedIn algorithm factors and recruiter preferences",
  },
];

function ComprehensiveSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-green-600 bg-clip-text text-transparent mb-4">
            Comprehensive LinkedIn Profile Analysis
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered analysis examines every aspect of your LinkedIn profile to help you optimize for recruiters and LinkedIn&apos;s algorithm
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — mock profile card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Floating badge top-right */}
            <div className="absolute -top-3 -right-3 z-10 bg-white rounded-xl shadow-lg px-4 py-2 text-sm font-semibold text-green-600">
              +47% Views
            </div>

            {/* Floating badge bottom-left */}
            <div className="absolute -bottom-3 -left-3 z-10 bg-white rounded-xl shadow-lg px-4 py-2 text-sm font-semibold text-blue-600">
              Recruiter Ready
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Profile header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  JS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    John Smith
                  </h3>
                  <p className="text-sm text-gray-600">
                    Senior Software Engineer | AI Enthusiast
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    San Francisco, CA &bull; 500+ connections
                  </p>
                </div>
              </div>

              {/* Score bars */}
              <div className="space-y-4 mb-6">
                {[
                  {
                    Icon: Eye,
                    label: "Headline Optimized",
                    pct: 95,
                    bg: "bg-green-50",
                    bar: "bg-green-500",
                    text: "text-green-700",
                  },
                  {
                    Icon: Search,
                    label: "Keywords Need Work",
                    pct: 72,
                    bg: "bg-yellow-50",
                    bar: "bg-yellow-500",
                    text: "text-yellow-700",
                  },
                  {
                    Icon: Camera,
                    label: "Professional Photo",
                    pct: 88,
                    bg: "bg-blue-50",
                    bar: "bg-blue-500",
                    text: "text-blue-700",
                  },
                ].map(({ Icon, label, pct, bg, bar, text }) => (
                  <div key={label} className={`${bg} rounded-xl p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${text}`} />
                        <span className={`text-sm font-medium ${text}`}>
                          {label}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${text}`}>
                        {pct}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bar}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall score */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-5 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">
                    Overall LinkedIn Score
                  </span>
                  <span className="text-3xl font-extrabold">85</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full bg-white/80"
                    style={{ width: "85%" }}
                  />
                </div>
                <p className="text-xs text-blue-100">
                  Above average - Great potential for improvement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — advanced features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Advanced Analysis Features
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Our comprehensive analysis covers every element that matters for LinkedIn success, from algorithm optimization to recruiter appeal.
            </p>

            <div className="space-y-6">
              {advancedFeatures.map(
                ({ Icon, gradient, title, badge, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-gray-900">
                          {title}
                        </h4>
                        <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — Transform Your Professional Presence                  */
/* ------------------------------------------------------------------ */
const benefits = [
  {
    Icon: TrendingUp,
    gradient: "from-emerald-500 to-cyan-500",
    badge: "+300%",
    title: "3x More Profile Views",
    desc: "Optimized profiles receive significantly more visibility from recruiters and industry professionals",
  },
  {
    Icon: Search,
    gradient: "from-blue-500 to-purple-500",
    badge: "Top 10%",
    title: "Higher Search Rankings",
    desc: "Improved keyword optimization helps you appear in more relevant LinkedIn searches",
  },
  {
    Icon: CircleCheckBig,
    gradient: "from-violet-500 to-fuchsia-500",
    badge: "95% Trust",
    title: "Professional Credibility",
    desc: "A polished profile builds trust and demonstrates your commitment to professional growth",
  },
];

function TransformSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(219,234,254,0.5) 0%, rgba(255,255,255,1) 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Why LinkedIn Optimization Matters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Presence
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Unlock the full potential of your LinkedIn profile with data-driven
            optimization that gets you noticed by the right people
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map(({ Icon, gradient, badge, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${gradient} text-white mb-3`}
              >
                {badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="/dashboard">
            <button className="group relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
              <span className="flex items-center gap-3 relative z-10">
                <span>Start Free Analysis</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </a>
          <p className="text-slate-500 text-xs sm:text-sm mt-4 sm:mt-6 font-medium">
            No credit card required &bull; Get results in under 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                      */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    name: "Sarah M.",
    role: "Marketingmanager",
    title: "From invisible to shortlisted in 2 weeks",
    quote:
      "The CV builder showed me exactly what recruiters look for. My response rate went from zero to four interviews.",
    thumbnail:
      "https://prod-api.cvlabz.com/video_thumbnails/testimonial_1121861370.png",
    duration: "0:32",
  },
  {
    name: "Emily R.",
    role: "Finance Graduate",
    title: "Walked into my interview fully prepared",
    quote:
      "The AI interview coach anticipated every question I got asked. I've never felt this confident walking into a final round",
    thumbnail:
      "https://prod-api.cvlabz.com/video_thumbnails/testimonial_1121861620.png",
    duration: "0:28",
  },
  {
    name: "Laura P.",
    role: "Business Analyst",
    title: "Cracked my case interview on the first try",
    quote:
      "The business case simulations are frighteningly realistic. The AI feedback after each case made my structuring sharper every round",
    thumbnail:
      "https://prod-api.cvlabz.com/video_thumbnails/testimonial_1121861916.png",
    duration: "0:25",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Real Results from Real Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            See how our LinkedIn analyzer helped professionals boost their
            career visibility
          </p>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
            <CircleCheckBig className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Verified Success Stories
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
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
                  <img
                    alt={`${t.name} testimonial`}
                    className="w-full h-full object-cover object-center"
                    src={t.thumbnail}
                  />
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
                    <h3 className="text-xs sm:text-lg font-bold mb-1 leading-tight">
                      {t.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-white/80">
                      {t.name} &bull; {t.role}
                    </p>
                  </div>
                </div>
                <div className="p-3 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed">
                    {t.quote}
                  </p>
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
              Ready to Optimize Your Profile?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who&apos;ve boosted their LinkedIn
              visibility with CV Labz.
            </p>
            <a href="/dashboard">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Start Your Free Analysis
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Follow us for more career tips and professional insights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3 STEPS                                                           */
/* ------------------------------------------------------------------ */
function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Connect Your Profile",
      desc: "Simply paste your LinkedIn profile URL or connect directly through our secure integration.",
    },
    {
      num: "02",
      title: "AI Analysis",
      desc: "Our advanced AI scans your profile for keywords, engagement potential, and recruiter appeal.",
    },
    {
      num: "03",
      title: "Get Your Report",
      desc: "Receive detailed insights and actionable recommendations to optimize your LinkedIn presence.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
            How to Analyze Your LinkedIn in 3 Simple Steps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get professional insights into your LinkedIn profile optimization in
            minutes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a href="/dashboard">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Try it Now
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right — status card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full" />
                  <span className="text-sm sm:text-base text-gray-600">
                    Profile Connected
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base text-gray-600">
                    AI Analysis in Progress...
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full" />
                  <span className="text-sm sm:text-base text-gray-400">
                    Report Generation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  OTHER TOOLS                                                       */
/* ------------------------------------------------------------------ */
const otherTools = [
  { title: "CV Builder", desc: "Create professional resumes that get noticed", Icon: Users, gradient: "from-blue-500 to-purple-600", href: "/cv-builder" },
  { title: "Motivation Letter", desc: "Write compelling cover letters", Icon: Target, gradient: "from-green-500 to-teal-600", href: "/motivation-letter" },
  { title: "Assessment Trainer", desc: "Practice for job assessments", Icon: TrendingUp, gradient: "from-orange-500 to-red-600", href: "/online-assessments" },
  { title: "Business Case Trainer", desc: "Master business case interviews", Icon: CircleCheckBig, gradient: "from-purple-500 to-pink-600", href: "/business-case-training" },
  { title: "Salary Analyzer", desc: "Know your market value", Icon: Target, gradient: "from-yellow-500 to-orange-600", href: "/salary-analyzer" },
  { title: "Company Research", desc: "Deep dive into potential employers", Icon: Search, gradient: "from-indigo-500 to-blue-600", href: "/company-research-tool" },
];

function OtherToolsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-purple-600 bg-clip-text text-transparent mb-4">
            Other Tools to Supercharge Your Application
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your job search toolkit with our comprehensive suite of career tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherTools.map((tool, i) => (
            <motion.a
              key={tool.title}
              href={tool.href}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${tool.gradient} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <tool.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {tool.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{tool.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "What is the LinkedIn Profile Analyzer?",
    a: "The LinkedIn Profile Analyzer is a free AI-powered tool that evaluates your LinkedIn profile across multiple dimensions including headline optimization, keyword density, profile completeness, and recruiter appeal. It provides a detailed score and actionable recommendations to improve your visibility.",
  },
  {
    q: "How does the LinkedIn Profile Analyzer work?",
    a: "Simply paste your LinkedIn profile URL and our AI will scan your profile in under 2 minutes. It analyzes your headline, summary, experience sections, skills, and engagement patterns against best practices used by top-performing LinkedIn profiles in your industry.",
  },
  {
    q: "Is my data safe when using the LinkedIn Profile Analyzer?",
    a: "Absolutely. We only access publicly available information from your LinkedIn profile. Your data is processed securely, never shared with third parties, and you can request deletion at any time. We are fully GDPR compliant.",
  },
  {
    q: "Do I need a LinkedIn account to use the analyzer?",
    a: "Yes, you need an active LinkedIn profile with a public URL. The analyzer works by scanning your public profile information to provide optimization recommendations.",
  },
  {
    q: "How long does it take to get the results?",
    a: "Results are generated in under 2 minutes. You'll receive a comprehensive report covering your profile score, keyword analysis, headline evaluation, and prioritized improvement recommendations.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-green-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about our free LinkedIn profile analysis
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                         */
/* ------------------------------------------------------------------ */
function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
            Ready to Make Your LinkedIn Work for You?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who&apos;ve optimized their LinkedIn
            profiles with our AI-powered analysis
          </p>
          <a href="/dashboard">
            <button className="bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              Start Your Free Analysis
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function LinkedInAnalyzerPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <Header />
      <main>
        <HeroSection />
        <ReimaginedSection />
        <ComprehensiveSection />
        <TransformSection />
        <TestimonialsSection />
        <StepsSection />
        <OtherToolsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
