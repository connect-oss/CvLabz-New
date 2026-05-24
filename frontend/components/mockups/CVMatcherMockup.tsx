const CVMatcherMockup = () => {
  const missingKws = [{
    id: "stakeholder-mgmt",
    label: "stakeholder management"
  }, {
    id: "agile-methodology",
    label: "agile methodology"
  }, {
    id: "b2b-sales",
    label: "B2B sales"
  }];
  const presentKws = [{
    id: "product-roadmap",
    label: "product roadmap"
  }, {
    id: "cross-functional",
    label: "cross-functional teams"
  }, {
    id: "data-analysis",
    label: "data analysis"
  }];
  const keyIssues = [{
    id: "no-b2b",
    label: "No mention of B2B sales experience"
  }, {
    id: "no-emea",
    label: "Missing EMEA regional scope"
  }, {
    id: "no-stakeholder",
    label: "Absence of stakeholder management examples"
  }];
  const actionSteps = [{
    id: "step-1",
    num: 1,
    label: "Add stakeholder management examples to your experience section"
  }, {
    id: "step-2",
    num: 2,
    label: "Include measurable outcomes with percentages and impact"
  }, {
    id: "step-3",
    num: 3,
    label: "Mention agile methodology and B2B context in your summary"
  }];
  return <div className="bg-white rounded-xl overflow-hidden border border-gray-100" style={{
    transform: "rotate(-3deg)",
    boxShadow: "0 24px 64px -12px rgba(0,0,0,0.22), 0 4px 16px -4px rgba(0,0,0,0.10)"
  }}>
      {/* PAGE HEADER AREA */}
      <div className="px-5 pt-5 pb-4 bg-gray-50 border-b border-gray-100 text-center">
        <h2 className="text-[13px] font-black leading-tight mb-1" style={{
        background: "linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
          Your CV Match Analysis
        </h2>
        <p className="text-[8px] text-gray-500 font-medium leading-snug">
          <span>How Well You Fit the Role of </span>
          <span className="font-black text-purple-600">Product Manager at Booking.com</span>
        </p>
        <a href="/cv-matching" className="text-[8px] text-blue-500 underline font-medium">
          Analyze Another CV
        </a>
      </div>

      {/* INTRO CARD */}
      <div className="mx-4 mt-3 mb-2 bg-white rounded-lg border border-gray-100 px-3 py-2.5">
        <p className="text-[7.5px] text-gray-600 font-medium leading-relaxed">
          This is a professional recruiter-style analysis of your CV compared to the job posting for{" "}
          <span className="font-bold">Product Manager at Booking.com.</span> Below you will see exactly how your experience, keywords, and impact align, and where you are losing points.
        </p>
      </div>

      {/* OVERALL MATCH SCORE CARD */}
      <div className="mx-4 mb-2 rounded-xl px-4 py-3 flex items-center justify-between" style={{
      background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)"
    }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-black text-white leading-none mb-0.5">Overall Match Score</p>
            <p className="text-[7.5px] text-white/70 font-medium">Strong Match</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-white leading-none">83</p>
          <p className="text-[7px] text-white/70 font-medium">out of 100</p>
        </div>
      </div>
      <div className="mx-4 mb-2">
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
          <p className="text-[7.5px] text-blue-700 font-medium text-center">
            Your CV scores 83% match for this role. Recruiters usually look for 80%+ alignment.
          </p>
        </div>
      </div>

      {/* RELEVANCE & KEYWORDS CARD */}
      <div className="mx-4 mb-2 bg-white rounded-xl border border-gray-100 px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <p className="text-[9px] font-black text-gray-900">Relevance &amp; Keywords</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] font-bold text-gray-600">Keyword Match Score</span>
          <span className="text-[8px] font-black text-green-600">78%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2.5">
          <div className="h-full rounded-full bg-green-500" style={{
          width: "78%"
        }} />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-red-50 rounded-lg p-2 border border-red-100">
            <div className="flex items-center gap-1 mb-1.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6M9 9l6 6" />
              </svg>
              <span className="text-[7.5px] font-black text-red-600">Missing Keywords</span>
            </div>
            <div className="flex flex-col gap-0.5">
              {missingKws.map(kw => <div key={kw.id} className="flex items-center gap-1">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  <span className="text-[7px] text-gray-600 font-medium">{kw.label}</span>
                </div>)}
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-2 border border-green-100">
            <div className="flex items-center gap-1 mb-1.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-[7.5px] font-black text-green-600">Present Keywords</span>
            </div>
            <div className="flex flex-col gap-0.5">
              {presentKws.map(kw => <div key={kw.id} className="flex items-center gap-1">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  <span className="text-[7px] text-gray-600 font-medium">{kw.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE & ACHIEVEMENTS FIT CARD */}
      <div className="mx-4 mb-2 bg-white rounded-xl border border-gray-100 px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <p className="text-[9px] font-black text-gray-900">Experience &amp; Achievements Fit</p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] font-bold text-gray-600">Experience Match Score</span>
          <span className="text-[8px] font-black text-orange-600">45%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
          <div className="h-full rounded-full" style={{
          width: "45%",
          backgroundColor: "#F97316"
        }} />
        </div>
        <p className="text-[7.5px] text-blue-600 font-medium italic mb-2 leading-relaxed">
          Strong product background but lacks explicit mention of B2B sales context and EMEA regional scope.
        </p>
        <p className="text-[7.5px] font-black text-gray-700 mb-1.5">Key Issues:</p>
        <div className="flex flex-col gap-1">
          {keyIssues.map(issue => <div key={issue.id} className="flex items-center gap-1.5 border border-orange-200 rounded-md px-2 py-1 bg-orange-50/50">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span className="text-[7px] text-gray-600 font-medium">{issue.label}</span>
            </div>)}
        </div>
      </div>

      {/* YOUR ACTION PLAN CARD */}
      <div className="mx-4 mb-4 bg-white rounded-xl border border-gray-100 px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6M10 22h4" />
          </svg>
          <p className="text-[9px] font-black text-gray-900">Your Action Plan</p>
        </div>
        <p className="text-[7.5px] text-orange-500 italic font-medium mb-2">
          Follow these steps to dramatically improve your match score:
        </p>
        <div className="flex flex-col gap-1">
          {actionSteps.map(step => <div key={step.id} className="flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1.5 border border-gray-100">
              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white" style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
            fontSize: "7px",
            fontWeight: 900
          }}>
                {step.num}
              </div>
              <span className="text-[7px] text-gray-600 font-medium leading-snug">{step.label}</span>
            </div>)}
        </div>
      </div>
    </div>;
};

export default CVMatcherMockup;
