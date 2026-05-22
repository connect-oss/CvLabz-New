import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CV Labz was founded by experienced recruiters who understand what employers look for. Learn about our mission, vision, and commitment to helping every job seeker succeed.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
