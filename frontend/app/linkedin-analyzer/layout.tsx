import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Analyzer — Optimize Your Profile for Recruiters",
  description:
    "Get AI-powered insights to optimize your LinkedIn profile. Free analysis covering headline, keywords, photo, and recruiter appeal in under 2 minutes.",
  alternates: { canonical: "/linkedin-analyzer" },
};

export default function LinkedInAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
