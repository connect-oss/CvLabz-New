"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  const card = analysisCards[activeCard];

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Your LinkedIn Profile, Reimagined
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — analysis cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              {analysisCards.map((c, i) => (
                <button
                  key={c.badge}
                  onClick={() => setActiveCard(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === activeCard
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {c.badge}
                </button>
              ))}
            </div>

            {/* Active card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
                >
                  <card.Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${card.gradient} text-white`}
                  >
                    {card.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Score bar */}
              <div className="mb-5">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Score</span>
                  <span className="font-semibold text-gray-900">
                    {card.score}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${card.gradient}`}
                    style={{ width: `${card.score}%` }}
                  />
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CircleCheckBig className="w-4 h-4 text-green-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-400">{card.tips}</p>
            </div>
          </motion.div>

          {/* Right — report features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What You&apos;ll Get in Your Report
            </h3>

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Comprehensive LinkedIn Profile Analysis
          </h2>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Advanced Analysis Features
            </h3>

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

        {/* Bottom CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-14 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ready to Optimize Your LinkedIn Profile?
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join 50,000+ professionals who have improved their LinkedIn presence
            with our free AI-powered analysis
          </p>
          <a
            href="#"
            className="inline-block bg-white/20 backdrop-blur text-white font-semibold px-10 py-4 rounded-full hover:bg-white/30 transition-colors"
          >
            Start Free Analysis Now
          </a>
          <p className="text-sm text-blue-200 mt-4">
            Free forever &bull; No credit card needed &bull; Results in 2
            minutes
          </p>
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
      </main>
      <Footer />
    </div>
  );
}
