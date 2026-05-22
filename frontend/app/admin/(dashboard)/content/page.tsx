"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

type Tab = "FAQs" | "Testimonials" | "Articles";

const categoryColors: Record<string, string> = {
  "Account & Login": "bg-blue-50 text-blue-700",
  "CV & Cover Letter": "bg-purple-50 text-purple-700",
  "Interview Prep": "bg-emerald-50 text-emerald-700",
  "Assessments": "bg-amber-50 text-amber-700",
  "AI Coach": "bg-cyan-50 text-cyan-700",
  "Billing": "bg-rose-50 text-rose-700",
};

const faqs = [
  { category: "Account & Login", question: "How do I reset my password or recover my account?", status: "Published" },
  { category: "CV & Cover Letter", question: "Can I export my CV to PDF and Word formats?", status: "Published" },
  { category: "Interview Prep", question: "How does the AI mock interview simulator work?", status: "Published" },
  { category: "Assessments", question: "What types of skill assessments are available?", status: "Draft" },
  { category: "AI Coach", question: "How does the AI career coach personalize recommendations?", status: "Published" },
  { category: "Billing", question: "Can I cancel or change my subscription anytime?", status: "Draft" },
];

const testimonials = [
  { name: "Sophie de Vries", role: "Marketing Manager at Unilever", quote: "CVLabz helped me land my dream job within two weeks of using the platform. The AI suggestions were incredibly accurate.", rating: 5 },
  { name: "Lars Jansen", role: "Senior Software Engineer", quote: "The AI-powered CV builder made my resume stand out from hundreds of applicants. I got 3x more callbacks.", rating: 5 },
  { name: "Maria Gonzalez", role: "UX Design Lead at Spotify", quote: "I love the LinkedIn analyzer feature. It gave me actionable insights that transformed my professional presence.", rating: 5 },
  { name: "Tom Bakker", role: "Data Analyst at ING Bank", quote: "The CV matcher tool helped me tailor my resume perfectly for each application. Absolutely game-changing.", rating: 5 },
  { name: "Elena Rossi", role: "HR Consultant at Deloitte", quote: "I recommend CVLabz to all my clients. It saves them hours of work and produces stunning results every time.", rating: 5 },
  { name: "Jan Smit", role: "Graduate Trainee at KPMG", quote: "As a fresh graduate, CVLabz gave me the confidence to apply for top companies. Landed my first role in weeks.", rating: 5 },
];

const articleCategoryColors: Record<string, string> = {
  "CV Tips": "bg-purple-50 text-purple-700",
  "Interview": "bg-emerald-50 text-emerald-700",
  "Career": "bg-blue-50 text-blue-700",
  "LinkedIn": "bg-cyan-50 text-cyan-700",
};

const articles = [
  { title: "10 Tips for a Winning CV in 2026", author: "Sarah Williams", category: "CV Tips", status: "Published", date: "May 15, 2026" },
  { title: "How to Ace Your Video Interview", author: "David Chen", category: "Interview", status: "Published", date: "May 10, 2026" },
  { title: "Career Pivots: When and How to Make the Move", author: "Emma Taylor", category: "Career", status: "Draft", date: "May 8, 2026" },
  { title: "Remote Work: Updating Your CV for Virtual Roles", author: "Sarah Williams", category: "CV Tips", status: "Published", date: "May 3, 2026" },
  { title: "LinkedIn Profile Optimization: The Complete Guide", author: "David Chen", category: "LinkedIn", status: "Published", date: "Apr 28, 2026" },
  { title: "Salary Negotiation Strategies for Every Career Stage", author: "Emma Taylor", category: "Career", status: "Draft", date: "Apr 22, 2026" },
];

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>("FAQs");
  const tabs: Tab[] = ["FAQs", "Testimonials", "Articles"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Content</h1>
        <p className="text-sm text-gray-500 mt-1">Manage FAQs, testimonials, and articles</p>
      </div>

      {/* Tab Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-1 inline-flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition-all ${
              activeTab === tab
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQs Tab */}
      {activeTab === "FAQs" && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold text-gray-900">FAQ Items</h2>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {faqs.length}
              </span>
            </div>
            <button className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm">
              <Plus className="h-4 w-4" />
              Add FAQ
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/50 text-left text-gray-500">
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Question</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {faqs.map((faq, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[faq.category] || "bg-gray-100 text-gray-700"}`}>
                        {faq.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{faq.question}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        faq.status === "Published"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          faq.status === "Published" ? "bg-emerald-500" : "bg-gray-400"
                        }`} />
                        {faq.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Testimonials Tab */}
      {activeTab === "Testimonials" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Articles Tab */}
      {activeTab === "Articles" && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/50 text-left text-gray-500">
                  <th className="px-6 py-3 font-medium">Title</th>
                  <th className="px-6 py-3 font-medium">Author</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {articles.map((a, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {a.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
                          {a.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-gray-700">{a.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${articleCategoryColors[a.category] || "bg-gray-100 text-gray-700"}`}>
                        {a.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        a.status === "Published"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          a.status === "Published" ? "bg-emerald-500" : "bg-gray-400"
                        }`} />
                        {a.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{a.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
