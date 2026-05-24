"use client";
import { LanguageProvider } from "@/lib/language";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
