"use client";

import { useEffect, useState } from "react";
import {
  CreditCard,
  TrendingUp,
  ArrowDownRight,
  DollarSign,
  Check,
  Loader2,
} from "lucide-react";
import { api } from "@/lib/api";

interface SubscriptionData {
  totalActive: number;
  mrr: number;
  churnRate: number;
  arpu: number;
  freePlan: number;
  proPlan: number;
  premiumPlan: number;
  recentTransactions: Array<{
    customer: string;
    plan: string;
    amount: number;
    status: string;
    date: string;
  }>;
}

type TxStatus = "Paid" | "Pending" | "Failed";

const txStatusStyles: Record<TxStatus, string> = {
  Paid: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Failed: "bg-red-50 text-red-700",
};

const txGradients = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-red-500",
  "from-cyan-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-sky-400 to-indigo-500",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SubscriptionsPage() {
  const [data, setData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ success: boolean; data: SubscriptionData }>("/api/v1/admin/dashboard/subscriptions")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch subscription data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    );
  }

  const stats = data
    ? [
        {
          label: "Active Plans",
          value: data.totalActive.toLocaleString(),
          icon: CreditCard,
          iconColor: "text-purple-600",
          iconBg: "bg-purple-50",
        },
        {
          label: "Monthly Recurring",
          value: `€${data.mrr.toLocaleString()}`,
          icon: TrendingUp,
          iconColor: "text-emerald-600",
          iconBg: "bg-emerald-50",
        },
        {
          label: "Churn Rate",
          value: `${data.churnRate}%`,
          icon: ArrowDownRight,
          iconColor: "text-red-600",
          iconBg: "bg-red-50",
        },
        {
          label: "Avg Revenue/User",
          value: `€${data.arpu.toFixed(2)}`,
          icon: DollarSign,
          iconColor: "text-blue-600",
          iconBg: "bg-blue-50",
        },
      ]
    : [];

  const plans = [
    {
      name: "Free",
      price: "€0",
      users: `${(data?.freePlan ?? 0).toLocaleString()} users`,
      stripe: "bg-gray-300",
      features: ["Basic CV Builder", "1 Template", "PDF Export"],
      popular: false,
    },
    {
      name: "Pro",
      price: "€9.99",
      users: `${(data?.proPlan ?? 0).toLocaleString()} users`,
      stripe: "bg-linear-to-r from-blue-500 to-purple-500",
      features: ["All Tools", "Unlimited CVs", "AI Coach", "Priority Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "€29.99",
      users: `${(data?.premiumPlan ?? 0).toLocaleString()} users`,
      stripe: "bg-linear-to-r from-purple-500 to-pink-500",
      features: ["Everything in Pro", "Team Management", "Custom Branding", "Dedicated Support"],
      popular: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
        <p className="text-sm text-gray-500 mt-1">Monitor plans, revenue, and billing</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${s.iconBg} rounded-xl p-2.5`}>
                <s.icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-2xl border border-gray-100 p-6 relative overflow-hidden"
          >
            {/* Top gradient stripe */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${p.stripe}`} />

            <div className="flex items-center justify-between mb-4 mt-1">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              {p.popular && (
                <span className="bg-linear-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                  Most Popular
                </span>
              )}
            </div>

            <div className="mb-1">
              <span className="text-3xl font-bold text-gray-900">{p.price}</span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
            <p className="text-sm text-gray-400 mb-5">{p.users}</p>

            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <p className="text-sm text-gray-500 mt-0.5">Latest billing activity across all plans</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data?.recentTransactions?.map((t, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-linear-to-br ${txGradients[i % txGradients.length]} flex items-center justify-center text-white text-xs font-semibold shadow-sm`}>
                        {getInitials(t.customer)}
                      </div>
                      <span className="font-medium text-gray-900">{t.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{t.plan}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">€{t.amount.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${txStatusStyles[t.status as TxStatus] || "bg-gray-50 text-gray-700"}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
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
