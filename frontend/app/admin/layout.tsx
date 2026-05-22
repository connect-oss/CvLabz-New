import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Admin — CV Labz",
    template: "%s | Admin — CV Labz",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
