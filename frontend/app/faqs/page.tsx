"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Lock,
  FileText,
  Target,
  Brain,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  icon: React.ReactNode;
  items: FaqItem[];
}

const placeholder =
  "Coming soon — this answer will be updated with detailed information.";

const faqCategories: FaqCategory[] = [
  {
    title: "Account & Login",
    icon: <Lock className="w-5 h-5 text-purple-600" />,
    items: [
      { id: "al-1", question: "How do I create an account on CV Labz?", answer: placeholder },
      { id: "al-2", question: "Can I log in with Google or Apple?", answer: placeholder },
      { id: "al-3", question: "What if I don't receive a confirmation email?", answer: placeholder },
      { id: "al-4", question: "How do I change my email address or password?", answer: placeholder },
      { id: "al-5", question: "Can I temporarily deactivate my account?", answer: placeholder },
      { id: "al-6", question: "How do I completely delete my account?", answer: placeholder },
      { id: "al-7", question: "Is my data stored securely?", answer: placeholder },
      { id: "al-8", question: "What should I do if I have duplicate accounts?", answer: placeholder },
    ],
  },
  {
    title: "CV & Cover Letter",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    items: [
      { id: "cv-1", question: "How do I create my CV with CV Labz?", answer: placeholder },
      { id: "cv-2", question: "Can I save and manage multiple CVs?", answer: placeholder },
      { id: "cv-3", question: "How do I customize the layout or style of my CV?", answer: placeholder },
      { id: "cv-4", question: "Can I also create my CV in English?", answer: placeholder },
      { id: "cv-5", question: "Can I upload an existing cover letter and improve it?", answer: placeholder },
      { id: "cv-6", question: "Does the AI give tips when writing my letter?", answer: placeholder },
      { id: "cv-7", question: "Can I download my CV as PDF or Word file?", answer: placeholder },
      { id: "cv-8", question: "Can I share my CV with a link or recruiter?", answer: placeholder },
    ],
  },
  {
    title: "Interview Preparation",
    icon: <Target className="w-5 h-5 text-indigo-600" />,
    items: [
      { id: "ip-1", question: "What does CV Labz offer to prepare for a job interview?", answer: placeholder },
      { id: "ip-2", question: "How does the interview simulation work?", answer: placeholder },
      { id: "ip-3", question: "Do I get feedback on my answers?", answer: placeholder },
      { id: "ip-4", question: "Can I practice for specific positions or companies?", answer: placeholder },
      { id: "ip-5", question: "Are STAR questions generated?", answer: placeholder },
      { id: "ip-6", question: "Can I export my preparation as a document?", answer: placeholder },
      { id: "ip-7", question: "Do I also get tips for online job interviews?", answer: placeholder },
      { id: "ip-8", question: "Is it possible to add my own questions to the simulation?", answer: placeholder },
    ],
  },
  {
    title: "Assessments",
    icon: <Brain className="w-5 h-5 text-violet-600" />,
    items: [
      { id: "as-1", question: "What assessments are available on CV Labz?", answer: placeholder },
      { id: "as-2", question: "How long do the assessments take on average?", answer: placeholder },
      { id: "as-3", question: "What exactly do my scores mean?", answer: placeholder },
      { id: "as-4", question: "Can I compare my results with other candidates?", answer: placeholder },
      { id: "as-5", question: "How often can I take or redo an assessment?", answer: placeholder },
      { id: "as-6", question: "Are the assessments scientifically validated?", answer: placeholder },
      { id: "as-7", question: "Are my results shared with recruiters?", answer: placeholder },
      { id: "as-8", question: "Can I download or save my results?", answer: placeholder },
    ],
  },
  {
    title: "AI Coach & Tools",
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    items: [
      { id: "ai-1", question: "What exactly does the AI Coach do?", answer: placeholder },
      { id: "ai-2", question: "Can the AI review and improve my CV?", answer: placeholder },
      { id: "ai-3", question: "Do I get suggestions for vacancies or sectors?", answer: placeholder },
      { id: "ai-4", question: "Is the AI available 24/7?", answer: placeholder },
      { id: "ai-5", question: "Does the AI give personalized career advice?", answer: placeholder },
      { id: "ai-6", question: "Can I also use the AI for salary negotiations?", answer: placeholder },
      { id: "ai-7", question: "How reliable is the AI's advice?", answer: placeholder },
      { id: "ai-8", question: "Does CV Labz use my data to train the AI?", answer: placeholder },
    ],
  },
];

export default function FaqsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-x-hidden pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
            <Sparkles className="w-4 h-4" />
            CV Labz FAQ
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you want to know about CV Labz: from creating an account
            to AI coaching and premium features.
          </p>
        </motion.div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-4xl mx-auto px-4 pb-24 space-y-10">
        {faqCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Category Header */}
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 px-6 py-4 flex items-center gap-3 border-b border-gray-100">
              {category.icon}
              <h2 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h2>
            </div>

            {/* Questions */}
            <div className="divide-y divide-gray-100">
              {category.items.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-800 font-medium pr-4">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
