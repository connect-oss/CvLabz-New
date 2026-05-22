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
} from "lucide-react";

const TOOLS = [
  { label: "CV Builder", href: "/cv-builder", Icon: FileText },
  { label: "CV Matcher", href: "/cv-matching", Icon: Search },
  { label: "Templates", href: "/#templates", Icon: ClipboardCheck },
  { label: "Cover Letter", href: "/motivation-letter", Icon: Mail },
  { label: "LinkedIn Analyzer", href: "/linkedin-analyzer", Icon: LinkedinIcon },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [toolsOpen, setToolsOpen] = React.useState(false);
  const toolsRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
                <span>Tools</span>
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
              Templates
            </a>
            <a
              href="/#learning"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Learning Hub
            </a>
            <a
              href="/#pricing"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/login"
            className="h-10 flex items-center px-4 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors bg-transparent"
          >
            Login
          </a>
          <a
            href="/cv-builder"
            className="h-10 flex items-center px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md shadow-purple-200 active:scale-95"
          >
            Create new Resume
          </a>
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
              Tools
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
              Templates
            </a>
            <a
              href="/#learning"
              className="block font-bold text-lg text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Learning Hub
            </a>
            <a
              href="/#pricing"
              className="block font-bold text-lg text-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>

            <hr className="border-gray-100 my-2" />

            <a
              href="/login"
              className="block w-full text-left font-bold text-lg py-2 text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </a>
            <a
              href="/cv-builder"
              className="block w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Create new Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
