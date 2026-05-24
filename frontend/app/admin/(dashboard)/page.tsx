"use client";

import { useEffect, useState } from "react";
import {
  Users,
  CreditCard,
  DollarSign,
  UserPlus,
  ArrowUpRight,
  Calendar,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { api } from "@/lib/api";

interface DashboardData {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  newSignups: number;
  planCounts: Record<string, number>;
  recentSignups: Array<{
    name: string;
    email: string;
    userType: string;
    createdAt: string;
  }>;
  recentActivity: Array<{
    name: string;
    email: string;
    updatedAt: string;
  }>;
}

const popularTools = [
  { name: "CV Builder", pct: 78, barColor: "bg-blue-500" },
  { name: "LinkedIn Analyzer", pct: 65, barColor: "bg-purple-500" },
  { name: "CV Matcher", pct: 52, barColor: "bg-emerald-500" },
  { name: "Cover Letter", pct: 41, barColor: "bg-amber-500" },
  { name: "Assessments", pct: 28, barColor: "bg-pink-500" },
];

const gradients = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function timeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months !== 1 ? "s" : ""} ago`;
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ success: boolean; data: DashboardData }>("/api/v1/admin/dashboard/stats")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch dashboard stats:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  const stats = data
    ? [
        {
          label: "Total Users",
          value: data.totalUsers.toLocaleString(),
          icon: Users,
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        },
        {
          label: "Active Subscriptions",
          value: data.activeSubscriptions.toLocaleString(),
          icon: CreditCard,
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
        },
        {
          label: "Monthly Revenue",
          value: `€${data.monthlyRevenue.toLocaleString()}`,
          icon: DollarSign,
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
        },
        {
          label: "New Signups",
          value: data.newSignups.toLocaleString(),
          icon: UserPlus,
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
        },
      ]
    : [];

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
                  Type
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.recentSignups?.map((u, i) => (
                <tr
                  key={u.email}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-linear-to-br ${gradients[i % gradients.length]} flex items-center justify-center shrink-0`}
                      >
                        <span className="text-xs font-medium text-white">
                          {getInitials(u.name)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{u.name}</p>
                        <p className="text-xs text-gray-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        u.userType === "premium"
                          ? "bg-purple-50 text-purple-700"
                          : u.userType === "pro"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {u.userType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {timeAgo(u.createdAt)}
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
