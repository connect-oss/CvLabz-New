"use client";

import {
  Users,
  CreditCard,
  DollarSign,
  UserPlus,
  ArrowUpRight,
  Calendar,
  ChevronDown,
} from "lucide-react";

const stats = [
  {
    label: "Total Users",
    value: "12,847",
    trend: "+12.5%",
    trendLabel: "from last month",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Active Subscriptions",
    value: "3,241",
    trend: "+8.2%",
    trendLabel: "from last month",
    icon: CreditCard,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "Monthly Revenue",
    value: "\u20ac48,392",
    trend: "+15.3%",
    trendLabel: "from last month",
    icon: DollarSign,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    label: "New Signups",
    value: "842",
    trend: "+23.1%",
    trendLabel: "this month",
    icon: UserPlus,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const popularTools = [
  { name: "CV Builder", pct: 78, barColor: "bg-blue-500" },
  { name: "LinkedIn Analyzer", pct: 65, barColor: "bg-purple-500" },
  { name: "CV Matcher", pct: 52, barColor: "bg-emerald-500" },
  { name: "Cover Letter", pct: 41, barColor: "bg-amber-500" },
  { name: "Assessments", pct: 28, barColor: "bg-pink-500" },
];

const recentActivity = [
  {
    name: "Sarah Chen",
    email: "sarah.chen@gmail.com",
    initials: "SC",
    gradient: "from-blue-500 to-purple-600",
    action: "Upgraded to Pro",
    date: "2 hours ago",
    status: "Completed",
    statusStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Marcus Johnson",
    email: "marcus.j@outlook.com",
    initials: "MJ",
    gradient: "from-emerald-500 to-teal-600",
    action: "Created new CV",
    date: "3 hours ago",
    status: "Active",
    statusStyle: "bg-blue-50 text-blue-700",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.rod@yahoo.com",
    initials: "ER",
    gradient: "from-purple-500 to-pink-600",
    action: "LinkedIn analysis",
    date: "5 hours ago",
    status: "Completed",
    statusStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "David Kim",
    email: "david.kim@company.co",
    initials: "DK",
    gradient: "from-amber-500 to-orange-600",
    action: "Downloaded CV",
    date: "6 hours ago",
    status: "Completed",
    statusStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Lisa Thompson",
    email: "lisa.t@web.de",
    initials: "LT",
    gradient: "from-pink-500 to-rose-600",
    action: "Started free trial",
    date: "8 hours ago",
    status: "Pending",
    statusStyle: "bg-amber-50 text-amber-700",
  },
  {
    name: "James Wilson",
    email: "j.wilson@hotmail.com",
    initials: "JW",
    gradient: "from-cyan-500 to-blue-600",
    action: "Subscription cancelled",
    date: "12 hours ago",
    status: "Cancelled",
    statusStyle: "bg-red-50 text-red-700",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back, Shahryar. Here&apos;s what&apos;s happening.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
          <Calendar className="h-4 w-4 text-gray-400" />
          Last 30 days
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`${s.iconBg} w-10 h-10 rounded-xl flex items-center justify-center`}
              >
                <s.icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
            <div className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600">
              <ArrowUpRight className="h-3.5 w-3.5" />
              {s.trend}
              <span className="text-gray-400 font-normal ml-0.5">
                {s.trendLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Overview + Popular Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Revenue Overview */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">
              Monthly
              <ChevronDown className="h-3 w-3" />
            </span>
          </div>
          <div className="relative h-64 rounded-xl bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
            {/* Decorative wave shapes */}
            <div className="absolute inset-0">
              <svg
                className="absolute bottom-0 w-full"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
                style={{ height: "70%" }}
              >
                <defs>
                  <linearGradient
                    id="wave-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C50,40 100,60 150,50 C200,40 250,20 300,35 C350,50 380,30 400,40 L400,120 L0,120 Z"
                  fill="url(#wave-gradient)"
                />
                <path
                  d="M0,80 C50,40 100,60 150,50 C200,40 250,20 300,35 C350,50 380,30 400,40"
                  fill="none"
                  stroke="url(#wave-gradient)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-400 z-10">
              Revenue chart &bull; Connect backend for live data
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                Total Revenue
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">&euro;284K</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                Avg Growth
              </p>
              <p className="text-lg font-bold text-emerald-600 mt-1">+12%</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                Best Month
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">March</p>
            </div>
          </div>
        </div>

        {/* Popular Tools */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Popular Tools
          </h2>
          <div className="space-y-5">
            {popularTools.map((t) => (
              <div key={t.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {t.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {t.pct}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${t.barColor} h-2 rounded-full transition-all`}
                    style={{ width: `${t.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y border-gray-100 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentActivity.map((u) => (
                <tr
                  key={u.email}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-linear-to-br ${u.gradient} flex items-center justify-center shrink-0`}
                      >
                        <span className="text-xs font-medium text-white">
                          {u.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{u.name}</p>
                        <p className="text-xs text-gray-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{u.action}</td>
                  <td className="px-6 py-4 text-gray-400">{u.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${u.statusStyle}`}
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
