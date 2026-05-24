import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Career tips, CV advice, interview strategies, and job search insights from CV Labz experts.",
  alternates: { canonical: "/blogs" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
