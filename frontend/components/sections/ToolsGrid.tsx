"use client";
import { TOOLS } from "@/data/constants";
import ToolCard from "@/components/cards/ToolCard";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

export default function ToolsGrid() {
  const { lang } = useLanguage();
  const { getField } = usePageContent("homepage");

  const title = getField("toolsGrid", "title", lang) || "Four tools. One goal. More interviews.";
  const subtitle = getField("toolsGrid", "subtitle", lang) || "Analyze your LinkedIn, build your CV, match it to any job, and write the cover letter. All in one place.";

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{title}</h2>
          <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOOLS.map(tool => <ToolCard key={tool.title} {...tool} />)}
        </div>
      </div>
    </section>
  );
}
