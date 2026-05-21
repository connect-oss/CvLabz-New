"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden shadow-sm">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-1 w-6 h-3 border-2 border-white rounded-t-full border-b-0" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              CV Labz
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 font-bold text-gray-600 hover:text-blue-600 transition-colors">
              <span>Tools</span> <ChevronDown size={16} />
            </button>
            <a
              href="#"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Templates
            </a>
            <a
              href="#"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Learning Hub
            </a>
            <a
              href="#"
              className="font-bold text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="/login" className="h-10 flex items-center px-4 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors bg-transparent">
            Login
          </a>
          <button className="h-10 flex items-center px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md shadow-purple-200 active:scale-95">
            Create new Resume
          </button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4"
          >
            <a href="#" className="block font-bold text-lg text-gray-800">
              Tools
            </a>
            <a href="#" className="block font-bold text-lg text-gray-800">
              Templates
            </a>
            <a href="#" className="block font-bold text-lg text-gray-800">
              Learning Hub
            </a>
            <a href="#" className="block font-bold text-lg text-gray-800">
              Pricing
            </a>
            <hr className="border-gray-100" />
            <a href="/login" className="block w-full text-left font-bold text-lg py-2 text-gray-600">
              Login
            </a>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold">
              Create new Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
