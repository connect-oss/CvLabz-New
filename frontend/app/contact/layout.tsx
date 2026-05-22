import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CV Labz. Questions about our CV builder, LinkedIn analyzer, or career tools? Email us at connect@cvlabz.com or use our contact form.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
