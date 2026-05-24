"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Lang = "en" | "nl";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, nl: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days: number = 365) {
  document.cookie = `${name}=${value};path=/;max-age=${days * 86400};SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = getCookie("lang") as Lang;
    if (saved === "en" || saved === "nl") {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    setCookie("lang", newLang);
  }, []);

  const t = useCallback(
    (en: string, nl: string) => (lang === "nl" && nl ? nl : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
