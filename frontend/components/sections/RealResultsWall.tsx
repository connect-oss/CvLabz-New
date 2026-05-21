"use client";
import { motion } from "framer-motion";
import { Star, Play, CheckCircle } from "lucide-react";
import { VIDEO_CARDS } from "@/data/constants-data";

export default function RealResultsWall() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800
            }}>
              Real Results from Real People
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-8">
            Authentic user experiences. No actors, just real job seekers who got hired.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/60 shadow-sm">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-bold text-gray-700">Verified testimonials from CV Labz users</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {VIDEO_CARDS.map((card, i) => <motion.div key={card.id} initial={{
            opacity: 0,
            y: 32
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: i * 0.12
          }} whileHover={{
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)"
          }} className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 cursor-pointer">
            <div className="relative aspect-[9/16] overflow-hidden bg-gray-900">
              <img src={card.thumbnail} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all">
                  <Play className="text-white fill-white ml-1" size={24} />
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-black px-2.5 py-1 rounded-lg">
                {card.duration}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-extrabold text-base leading-tight mb-0.5">{card.name}</p>
                <p className="text-white/70 text-sm font-bold">{card.role}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <h4 className="text-gray-900 font-extrabold text-lg mb-2 leading-snug">{card.title}</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{card.description}</p>
            </div>
          </motion.div>)}
        </div>

        <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-white/60 shadow-xl text-center">
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto mb-8">
            Join thousands of professionals who transformed their careers with CV Labz. Your success story could be next.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-extrabold text-lg shadow-xl shadow-blue-200 hover:scale-[1.02] active:scale-95 transition-all mb-4">
            Start Your Success Story Today
          </button>
          <p className="text-sm font-bold text-gray-400">Follow @cvlabz_official for daily tips and success stories</p>
        </motion.div>
      </div>
    </section>
  );
}
