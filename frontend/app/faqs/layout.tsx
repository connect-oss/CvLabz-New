import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Everything you want to know about CV Labz: from creating an account to AI coaching, assessments, and premium features.",
  alternates: { canonical: "/faqs" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
