"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ToolCardProps } from "@/data/types";

const ToolCard = ({
  icon,
  title,
  description,
  previewColor,
  linkText,
}: ToolCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div
      className={`w-14 h-14 rounded-2xl ${previewColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <h3 className="text-2xl font-extrabold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 font-medium mb-8 leading-relaxed">
      {description}
    </p>
    <div
      className={`w-full aspect-[16/10] ${previewColor} rounded-2xl mb-8 overflow-hidden border border-gray-50 flex items-center justify-center`}
    >
      <div className="w-[80%] h-[70%] bg-white rounded-lg shadow-sm border border-gray-100 p-3">
        <div className="w-1/2 h-2 bg-gray-100 rounded-full mb-3" />
        <div className="w-full h-1 bg-gray-50 rounded-full mb-1" />
        <div className="w-full h-1 bg-gray-50 rounded-full mb-1" />
        <div className="w-3/4 h-1 bg-gray-50 rounded-full" />
      </div>
    </div>
    <a
      href="#"
      className="flex items-center gap-2 font-extrabold text-blue-600 hover:gap-3 transition-all"
    >
      {linkText} <ArrowRight size={18} />
    </a>
  </motion.div>
);

export default ToolCard;
