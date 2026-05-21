"use client";
import { ArrowRight } from "lucide-react";
import { LEARNING_ARTICLES } from "@/data/constants-data";
import LearningCard from "@/components/cards/LearningCard";

export default function LearningHub() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Learn from real career experts</h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl">Videos and articles on CV writing, interviews, salary talks, negotiation, and everything in between. Free to read and watch.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-extrabold hover:bg-blue-100 transition-colors">
            <span>Meet our experts</span> <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {LEARNING_ARTICLES.map(article => <LearningCard key={article.title} {...article} />)}
        </div>
      </div>
    </section>
  );
}
