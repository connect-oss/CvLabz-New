import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motivation & Cover Letter Builder",
  description:
    "Create role-specific cover letters that clearly connect your experience to what employers are looking for. AI-powered writing assistance with professional tone control.",
  alternates: { canonical: "/motivation-letter" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
