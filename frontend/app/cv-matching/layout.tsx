import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Matcher — Match Your CV to Any Job Description",
  description:
    "Upload your CV and paste any job description to get an instant match score. See missing keywords, section-by-section analysis, and rewrite suggestions to improve your fit.",
  alternates: { canonical: "/cv-matching" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
