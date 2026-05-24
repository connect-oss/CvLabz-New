"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  Search,
  Linkedin as LinkedinIcon,
  ClipboardCheck,
  Mail,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";
import { api } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import { usePageContent } from "@/lib/usePageContent";

const TOOLS = [
  { label: "CV Builder", href: "/cv-builder", Icon: FileText },
  { label: "CV Matcher", href: "/cv-matching", Icon: Search },
  { label: "Templates", href: "/#templates", Icon: ClipboardCheck },
  { label: "Cover Letter", href: "/motivation-letter", Icon: Mail },
  { label: "LinkedIn Analyzer", href: "/linkedin-analyzer", Icon: LinkedinIcon },
];

interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const { getField } = usePageContent("global");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [toolsOpen, setToolsOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const toolsRef = React.useRef<HTMLDivElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);

  // Check auth on mount
  React.useEffect(() => {
    api<{ success: boolean; user: AuthUser }>("/api/v1/auth/me")
      .then((res) => { if (res.success) setUser(res.user); })
      .catch(() => {});
  }, []);

  // Close dropdowns on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isAdmin = user && (user.role === "admin" || user.role === "staff");
  const initials = user ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "";

  async function handleLogout() {
    try { await api("/api/v1/auth/logout", { method: "POST" }); } catch { /* ignore */ }
    setUser(null);
    setProfileOpen(false);
    window.location.href = "/";
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden shadow-sm">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-1 w-6 h-3 border-2 border-white rounded-t-full border-b-0" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              CV Labz
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Tools dropdown */}
            <div ref={toolsRef} className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 font-bold text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>{t("Tools", "Hulpmiddelen")}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {TOOLS.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                        onClick={() => setToolsOpen(false)}
                      >
                        <Icon size={16} className="text-gray-400 shrink-0" />
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/#templates"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("Templates", "Sjablonen")}
            </a>
            <a
              href="/#learning"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("Learning Hub", "Kenniscentrum")}
            </a>
            <a
              href="/#pricing"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              {t("Pricing", "Prijzen")}
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                lang === "en" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("nl")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                lang === "nl" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              NL
            </button>
          </div>

          {user ? (
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  {initials}
                </div>
                <span className="text-sm font-bold text-gray-700">{user.name.split(" ")[0]}</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    {isAdmin && (
                      <a
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <LayoutDashboard size={16} />
                        {t("Admin Dashboard", "Beheerderspaneel")}
                      </a>
                    )}
                    <a
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User size={16} />
                      {t("My Dashboard", "Mijn Dashboard")}
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={16} />
                      {t("Sign out", "Uitloggen")}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <a
                href="/login"
                className="h-10 flex items-center px-4 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors bg-transparent"
              >
                {t("Login", "Inloggen")}
              </a>
              <a
                href="/cv-builder"
                className="h-10 flex items-center px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md shadow-purple-200 active:scale-95"
              >
                {getField("header", "ctaText", lang) || t("Create new Resume", "Nieuw CV maken")}
              </a>
            </>
          )}
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-3 overflow-hidden"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {t("Tools", "Hulpmiddelen")}
            </p>
            {TOOLS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 font-bold text-gray-700 py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={16} className="text-gray-400" />
                {label}
              </a>
            ))}

            <hr className="border-gray-100 my-2" />

            <a
              href="/#templates"
              className="block font-bold text-lg text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              {t("Templates", "Sjablonen")}
            </a>
            <a
              href="/#learning"
              className="block font-bold text-lg text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              {t("Learning Hub", "Kenniscentrum")}
            </a>
            <a
              href="/#pricing"
              className="block font-bold text-lg text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              {t("Pricing", "Prijzen")}
            </a>

            <hr className="border-gray-100 my-2" />

            {/* Language toggle — mobile */}
            <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-medium w-fit">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "en" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("nl")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === "nl" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                NL
              </button>
            </div>

            <hr className="border-gray-100 my-2" />

            {user ? (
              <>
                <div className="flex items-center gap-3 py-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                {isAdmin && (
                  <a
                    href="/admin"
                    className="flex items-center gap-3 font-bold text-lg text-blue-600 py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <LayoutDashboard size={18} />
                    {t("Admin Dashboard", "Beheerderspaneel")}
                  </a>
                )}
                <button
                  onClick={() => { setMobileOpen(false); handleLogout(); }}
                  className="flex items-center gap-3 font-bold text-lg text-red-500 py-2 w-full text-left"
                >
                  <LogOut size={18} />
                  {t("Sign out", "Uitloggen")}
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="block w-full text-left font-bold text-lg py-2 text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("Login", "Inloggen")}
                </a>
                <a
                  href="/cv-builder"
                  className="block w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {getField("header", "ctaText", lang) || t("Create new Resume", "Nieuw CV maken")}
                </a>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
