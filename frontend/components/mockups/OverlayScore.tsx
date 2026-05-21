"use client";
import * as React from "react";
import { useInView } from "framer-motion";
import type { OverlayScoreProps } from "@/data/types";

const OverlayScore = ({
  value,
  label,
  gradientColors,
  gradientId
}: OverlayScoreProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-60px"
  });
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      setProgress(eased * value);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);
  return <div ref={ref} className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-1.5 border border-gray-100" style={{
    width: 120,
    height: 120,
    padding: "12px"
  }}>
      <div className="relative" style={{
      width: 72,
      height: 72
    }}>
        <svg width="72" height="72" viewBox="0 0 72 72" style={{
        transform: "rotate(-90deg)"
      }}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <circle cx="36" cy="36" r={radius} fill="none" stroke="#F3F4F6" strokeWidth="7" />
          <circle cx="36" cy="36" r={radius} fill="none" stroke={`url(#${gradientId})`} strokeWidth="7" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} style={{
          transition: "stroke-dashoffset 0.016s linear"
        }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-black text-gray-900 leading-none">{count}<span className="text-sm">%</span></span>
        </div>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-center" style={{
      color: gradientColors[1]
    }}>{label}</span>
    </div>;
};

export default OverlayScore;
