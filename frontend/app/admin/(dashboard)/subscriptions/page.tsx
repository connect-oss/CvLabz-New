"use client";

import {
  CreditCard,
  TrendingUp,
  ArrowDownRight,
  DollarSign,
  Check,
} from "lucide-react";

const stats = [
  {
    label: "Active Plans",
    value: "3,241",
    trend: "+8.2%",
    trendUp: true,
    icon: CreditCard,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    label: "Monthly Recurring",
    value: "\u20ac48,392",
    trend: "+15.3%",
    trendUp: true,
    icon: TrendingUp,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    label: "Churn Rate",
    value: "2.1%",
    trend: "-0.3%",
    trendUp: false,
    icon: ArrowDownRight,
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
  },
  {
    label: "Avg Revenue/User",
    value: "\u20ac14.93",
    trend: "+5.1%",
    trendUp: true,
    icon: DollarSign,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
];

const plans = [
  {
    name: "Free",
    price: "\u20ac0",
    users: "8,204 users",
    stripe: "bg-gray-300",
    features: ["Basic CV Builder", "1 Template", "PDF Export"],
    popular: false,
  },
  {
    name: "Pro",
    price: "\u20ac9.99",
    users: "2,841 users",
    stripe: "bg-linear-to-r from-blue-500 to-purple-500",
    features: ["All Tools", "Unlimited CVs", "AI Coach", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "\u20ac29.99",
    users: "400 users",
    stripe: "bg-linear-to-r from-purple-500 to-pink-500",
    features: ["Everything in Pro", "Team Management", "Custom Branding", "Dedicated Support"],
    popular: false,
  },
];

type TxStatus = "Paid" | "Pending" | "Failed";

interface Transaction {
  customer: string;
  plan: string;
  amount: string;
  status: TxStatus;
  date: string;
  gradient: string;
}

const transactions: Transaction[] = [
  { customer: "Daan de Vries", plan: "Pro", amount: "\u20ac9.99", status: "Paid", date: "May 21, 2026", gradient: "from-blue-400 to-indigo-500" },
  { customer: "Lisa van den Berg", plan: "Enterprise", amount: "\u20ac29.99", status: "Paid", date: "May 21, 2026", gradient: "from-purple-400 to-pink-500" },
  { customer: "Sarah Chen", plan: "Pro", amount: "\u20ac9.99", status: "Pending", date: "May 20, 2026", gradient: "from-emerald-400 to-teal-500" },
  { customer: "Marcus Johnson", plan: "Pro", amount: "\u20ac9.99", status: "Failed", date: "May 20, 2026", gradient: "from-amber-400 to-orange-500" },
  { customer: "Emily Rodriguez", plan: "Enterprise", amount: "\u20ac29.99", status: "Paid", date: "May 19, 2026", gradient: "from-rose-400 to-red-500" },
  { customer: "Jeroen Timmer", plan: "Pro", amount: "\u20ac9.99", status: "Paid", date: "May 19, 2026", gradient: "from-cyan-400 to-blue-500" },
  { customer: "Sanne Verhoeven", plan: "Pro", amount: "\u20ac9.99", status: "Paid", date: "May 18, 2026", gradient: "from-violet-400 to-purple-500" },
  { customer: "David Kim", plan: "Enterprise", amount: "\u20ac29.99", status: "Pending", date: "May 18, 2026", gradient: "from-sky-400 to-indigo-500" },
];

const txStatusStyles: Record<TxStatus, string> = {
  Paid: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Failed: "bg-red-50 text-red-700",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function SubscriptionsPage() {
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
              <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
                s.label === "Churn Rate"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-emerald-50 text-emerald-600"
              }`}>
                {s.trend}
              </span>
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
              {transactions.map((t, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-linear-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-semibold shadow-sm`}>
                        {getInitials(t.customer)}
                      </div>
                      <span className="font-medium text-gray-900">{t.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{t.plan}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{t.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${txStatusStyles[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
