"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
} from "lucide-react";
import Image from "next/image";

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
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=500&fit=crop&crop=faces",
    name: "Sarah Chen",
    role: "Product Manager at Google",
    quote:
      "The LinkedIn analyzer helped me optimize my profile and I got 3x more recruiter messages within a month!",
    badge: "+180% profile views",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=500&fit=crop&crop=faces",
    name: "Marcus Johnson",
    role: "Senior Developer at Microsoft",
    quote:
      "Amazing insights! The keyword optimization suggestions were spot-on and helped me land my dream job.",
    badge: "+250% recruiter reach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594311418510-ee5485be4f73?w=400&h=500&fit=crop&crop=faces",
    name: "Emily Rodriguez",
    role: "Marketing Director at Spotify",
    quote:
      "The profile photo evaluation and headline suggestions transformed my LinkedIn presence completely.",
    badge: "+320% engagement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?w=400&h=500&fit=crop&crop=faces",
    name: "David Kim",
    role: "Data Scientist at Netflix",
    quote:
      "Free analysis that actually works! Got multiple job offers after implementing the recommendations.",
    badge: "+400% job inquiries",
  },
];

export default function CVBuilderPage() {
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
                Build the CV Recruiters Want to Read
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            >
              Create an ATS-optimized CV that highlights your experience clearly
              and aligns with modern hiring systems.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="#"
                className="inline-block px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Build Your CV
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
                src="https://player.vimeo.com/video/1125654210?autoplay=1&muted=1&loop=1&autopause=0&background=0&byline=0&title=0&controls=0"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="CV Builder demo video"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 text-left">
              <p className="text-white font-bold text-lg md:text-xl">
                See How Our Resume Builder Works
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-1">
                Watch professionals create winning resumes in minutes
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
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              How Our CV{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Builder Works
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
              href="#"
              className="inline-block px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Build Your CV
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
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              What Makes Our CV{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Builder Different
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
                Hear from Job Seekers Like You
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

      <Footer />
    </div>
  );
}
