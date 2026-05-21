import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Builder — Build ATS-Optimized Resumes",
  description:
    "Create a professional, ATS-optimized CV with CV Labz. Choose from templates, get smart writing support, and download your job-ready resume as PDF.",
  alternates: { canonical: "/cv-builder" },
};

export default function CVBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
