"use client";
import { ArrowRight } from "lucide-react";
import { LEARNING_ARTICLES } from "@/data/constants-data";
import LearningCard from "@/components/cards/LearningCard";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function LearningHub() {
  const { lang } = useLanguage();
  const { getField, getItems } = usePageContent("homepage");

  const title = getField("learningHub", "title", lang) || "Learn from real career experts";
  const subtitle = getField("learningHub", "subtitle", lang) || "Videos and articles on CV writing, interviews, salary talks, negotiation, and everything in between. Free to read and watch.";
  const ctaText = getField("learningHub", "ctaText", lang) || "Meet our experts";

  const dynamicItems = getItems("learningHub", lang);
  const articles = dynamicItems.length > 0
    ? dynamicItems.map((item) => ({
        tag: item.tag || "ARTICLE",
        title: item.title || "",
        author: item.author || "",
        avatar: item.avatar?.startsWith("http") ? item.avatar : `${API_BASE}${item.avatar || ""}`,
        readTime: item.readTime || "",
        image: item.image?.startsWith("http") ? item.image : `${API_BASE}${item.image || ""}`,
        tagColor: item.tagColor || "bg-blue-600",
      }))
    : LEARNING_ARTICLES;

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{title}</h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl">{subtitle}</p>
          </div>
          <a href="/#learning" className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-extrabold hover:bg-blue-100 transition-colors">
            <span>{ctaText}</span> <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map(article => <LearningCard key={article.title} {...article} />)}
        </div>
      </div>
    </section>
  );
}
