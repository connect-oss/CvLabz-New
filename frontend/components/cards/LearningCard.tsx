"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { LearningCardProps } from "@/data/types";

const LearningCard = ({
  tag,
  title,
  author,
  avatar,
  readTime,
  image,
  tagColor,
}: LearningCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4">
        <span
          className={`${tagColor} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}
        >
          {tag}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-extrabold text-gray-900 mb-6 line-clamp-2 leading-snug">
        {title}
      </h4>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <p className="text-sm font-bold text-gray-900">{author}</p>
            <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
              <Clock size={12} /> <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default LearningCard;
