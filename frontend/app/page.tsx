'use client';

import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import TemplatesSection from '@/components/sections/TemplatesSection';
import LogoBar from '@/components/sections/LogoBar';
import LinkedInAnalyzerSection from '@/components/sections/LinkedInAnalyzerSection';
import CVMatcherSection from '@/components/sections/CVMatcherSection';
import ToolsGrid from '@/components/sections/ToolsGrid';
import LearningHub from '@/components/sections/LearningHub';
import RealResultsWall from '@/components/sections/RealResultsWall';
import PricingSection from '@/components/sections/PricingSection';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/lib/language';
import { usePageContent } from '@/lib/usePageContent';
import DynamicSEO from '@/components/DynamicSEO';

export default function Home() {
  const { lang } = useLanguage();
  const { getField, seo } = usePageContent("homepage");

  const analyzerTitle = getField("analyzerMatcher", "title", lang) || "Find out why recruiters skip your profile. Free.";
  const analyzerSubtitle = getField("analyzerMatcher", "subtitle", lang) || "Two free reports that show you exactly what is holding your LinkedIn and CV back. Get yours in your inbox in 60 seconds.";
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-20">
      <DynamicSEO seo={seo} />
      <Header />
      <HeroSection />
      <div id="templates">
        <TemplatesSection />
      </div>
      <LogoBar />

      {/* LinkedIn Analyzer + CV Matcher shared section */}
      <section id="tools" className="py-28 bg-gray-50/50">
        <div
          className="max-w-7xl mx-auto px-4 flex flex-col"
          style={{ gap: '40px' }}
        >
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {analyzerTitle}
            </h2>
            <p
              className="text-xl text-gray-500 font-bold max-w-2xl mx-auto"
              style={{ marginBottom: '64px' }}
            >
              {analyzerSubtitle}
            </p>
          </div>

          <LinkedInAnalyzerSection />
          <CVMatcherSection />
        </div>
      </section>

      <ToolsGrid />
      <div id="learning">
        <LearningHub />
      </div>
      <RealResultsWall />
      <div id="pricing">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
}
