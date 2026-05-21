"use client";
import * as React from "react";
import { Linkedin, TrendingUp } from "lucide-react";

const LinkedInMockup = () => {
  const radarPoints = React.useMemo(() => {
    const cx = 90;
    const cy = 90;
    const r = 58;
    const axes = [270, 0, 90, 180];
    const fills = [0.55, 0.45, 0.50, 0.40];
    const pts = axes.map((deg, i) => {
      const rad = deg * Math.PI / 180;
      return {
        x: cx + r * fills[i] * Math.cos(rad),
        y: cy + r * fills[i] * Math.sin(rad)
      };
    });
    return pts.map(p => `${p.x},${p.y}`).join(" ");
  }, []);
  const axisLabels = [{
    deg: 270,
    label: "Headline",
    offset: {
      x: 0,
      y: -8
    },
    anchor: "middle"
  }, {
    deg: 0,
    label: "Summary",
    offset: {
      x: 8,
      y: 4
    },
    anchor: "start"
  }, {
    deg: 90,
    label: "Content Quality",
    offset: {
      x: 0,
      y: 14
    },
    anchor: "middle"
  }, {
    deg: 180,
    label: "Networking",
    offset: {
      x: -8,
      y: 4
    },
    anchor: "end"
  }];
  const categoryBars = [{
    label: "Headline",
    pct: 57,
    color: "#3B82F6"
  }, {
    label: "Summary",
    pct: 72,
    color: "#8B5CF6"
  }, {
    label: "Networking",
    pct: 95,
    color: "#10B981"
  }, {
    label: "Content Quality",
    pct: 73,
    color: "#EF4444"
  }];
  return <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden" style={{
    transform: "rotate(3deg)",
    boxShadow: "0 24px 64px -12px rgba(0,0,0,0.22), 0 4px 16px -4px rgba(0,0,0,0.10)"
  }}>
      {/* Top header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <p className="text-[9px] font-black uppercase tracking-[0.15em] mb-2" style={{
        color: "#7C3AED"
      }}>Intelligence Report</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <Linkedin size={18} className="text-white" />
          </div>
          <div>
            <p className="font-black text-gray-900 text-sm leading-tight">Daan de Vries</p>
            <p className="text-[10px] text-gray-400 font-medium">linkedin.com/in/daandevries</p>
          </div>
        </div>
      </div>

      {/* Main score area */}
      <div className="px-5 pt-4 pb-3 flex items-center gap-4">
        {/* Ring */}
        <div className="relative shrink-0" style={{
        width: 80,
        height: 80
      }}>
          <svg width="80" height="80" viewBox="0 0 80 80" style={{
          transform: "rotate(-90deg)"
        }}>
            <circle cx="40" cy="40" r="34" fill="none" stroke="#EEF2FF" strokeWidth="7" />
            <circle cx="40" cy="40" r="34" fill="none" stroke="url(#li-score-grad)" strokeWidth="7" strokeLinecap="round" strokeDasharray={2 * Math.PI * 34} strokeDashoffset={2 * Math.PI * 34 * (1 - 0.74)} />
            <defs>
              <linearGradient id="li-score-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-black text-gray-900 leading-none">74</span>
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Score</span>
          </div>
        </div>
        {/* Right of ring */}
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-1">
            <TrendingUp size={10} className="text-indigo-600" />
            <span className="text-[9px] font-black text-indigo-600 leading-none">Strong Foundation</span>
          </div>
          <p className="text-sm font-black text-gray-900 leading-tight">Success Scorecard</p>
          <p className="text-[10px] text-gray-400 font-medium leading-snug">See where you are winning and where opportunities are hiding.</p>
        </div>
      </div>

      {/* Two sub-cards */}
      <div className="px-5 pb-5 grid grid-cols-2 gap-3">
        {/* Profile Balance radar */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <p className="text-[9px] font-black text-gray-700 uppercase tracking-wider mb-1">Profile Balance</p>
          <p className="text-[8px] text-gray-400 font-medium mb-2">Strengths across key areas</p>
          <svg viewBox="0 0 180 180" className="w-full">
            {/* Axis rings */}
            {[0.33, 0.66, 1].map((scale, si) => <polygon key={si} points={[270, 0, 90, 180].map(deg => {
            const rad = deg * Math.PI / 180;
            return `${90 + 58 * scale * Math.cos(rad)},${90 + 58 * scale * Math.sin(rad)}`;
          }).join(" ")} fill="none" stroke="#E5E7EB" strokeWidth="1" />)}
            {/* Axis lines */}
            {[270, 0, 90, 180].map((deg, i) => {
            const rad = deg * Math.PI / 180;
            return <line key={i} x1="90" y1="90" x2={90 + 58 * Math.cos(rad)} y2={90 + 58 * Math.sin(rad)} stroke="#E5E7EB" strokeWidth="1" />;
          })}
            {/* Data polygon */}
            <polygon points={radarPoints} fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="1.5" />
            {/* Labels */}
            {axisLabels.map(ax => {
            const rad = ax.deg * Math.PI / 180;
            return <text key={ax.label} x={90 + 72 * Math.cos(rad) + ax.offset.x} y={90 + 72 * Math.sin(rad) + ax.offset.y} textAnchor={ax.anchor} fontSize="9" fill="#6B7280" fontWeight="700">
                  {ax.label}
                </text>;
          })}
          </svg>
        </div>

        {/* Category breakdown */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <p className="text-[9px] font-black text-gray-700 uppercase tracking-wider mb-1">Category Breakdown</p>
          <p className="text-[8px] text-gray-400 font-medium mb-3">Scores per metric</p>
          <div className="flex flex-col gap-2.5">
            {categoryBars.map(bar => <div key={bar.label}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-bold text-gray-600">{bar.label}</span>
                  <span className="text-[9px] font-black text-gray-800">{bar.pct}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{
                width: `${bar.pct}%`,
                backgroundColor: bar.color
              }} />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};

export default LinkedInMockup;
