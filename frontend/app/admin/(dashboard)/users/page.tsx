"use client";

import { useState } from "react";
import {
  Search,
  UserPlus,
  Eye,
  Pencil,
  Ban,
  Trash2,
  Download,
} from "lucide-react";

type UserStatus = "Active" | "Suspended" | "Inactive";
type UserPlan = "Free" | "Pro" | "Enterprise";

interface MockUser {
  name: string;
  email: string;
  plan: UserPlan;
  status: UserStatus;
  joined: string;
  gradient: string;
}

const users: MockUser[] = [
  { name: "Daan de Vries", email: "daan.devries@gmail.com", plan: "Pro", status: "Active", joined: "Jan 12, 2026", gradient: "from-blue-400 to-indigo-500" },
  { name: "Lisa van den Berg", email: "lisa.vandenberg@outlook.com", plan: "Enterprise", status: "Active", joined: "Feb 3, 2026", gradient: "from-purple-400 to-pink-500" },
  { name: "Sarah Chen", email: "sarah.chen@gmail.com", plan: "Pro", status: "Active", joined: "Nov 18, 2025", gradient: "from-emerald-400 to-teal-500" },
  { name: "Marcus Johnson", email: "marcus.johnson@yahoo.com", plan: "Free", status: "Suspended", joined: "Mar 7, 2026", gradient: "from-amber-400 to-orange-500" },
  { name: "Emily Rodriguez", email: "emily.rodriguez@hotmail.com", plan: "Pro", status: "Active", joined: "Dec 1, 2025", gradient: "from-rose-400 to-red-500" },
  { name: "Jeroen Timmer", email: "jeroen.timmer@ziggo.nl", plan: "Enterprise", status: "Active", joined: "Apr 22, 2026", gradient: "from-cyan-400 to-blue-500" },
  { name: "Sanne Verhoeven", email: "sanne.verhoeven@live.nl", plan: "Free", status: "Inactive", joined: "Sep 14, 2025", gradient: "from-violet-400 to-purple-500" },
  { name: "David Kim", email: "david.kim@gmail.com", plan: "Pro", status: "Active", joined: "May 1, 2026", gradient: "from-sky-400 to-indigo-500" },
  { name: "Eva de Boer", email: "eva.deboer@gmail.com", plan: "Free", status: "Active", joined: "Apr 10, 2026", gradient: "from-fuchsia-400 to-pink-500" },
  { name: "Mark de Jong", email: "mark.dejong@outlook.com", plan: "Free", status: "Inactive", joined: "Oct 28, 2025", gradient: "from-lime-400 to-emerald-500" },
];

const planStyles: Record<UserPlan, string> = {
  Free: "bg-gray-100 text-gray-600",
  Pro: "bg-blue-50 text-blue-700",
  Enterprise: "bg-purple-50 text-purple-700",
};

const statusStyles: Record<UserStatus, { badge: string; dot: string }> = {
  Active: { badge: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  Suspended: { badge: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  Inactive: { badge: "bg-gray-100 text-gray-500", dot: "bg-gray-400" },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesPlan = planFilter === "All" || u.plan === planFilter;
    const matchesStatus = statusFilter === "All" || u.status === statusFilter;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor user accounts</p>
        </div>
        <button className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
          <UserPlus className="h-4 w-4" />
          Add User
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 outline-none transition-all"
          />
        </div>
        <select
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 outline-none transition-all cursor-pointer"
        >
          <option value="All">All Plans</option>
          <option value="Free">Free</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 outline-none transition-all cursor-pointer"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-all">
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((u) => (
                <tr key={u.email} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-linear-to-br ${u.gradient} flex items-center justify-center text-white text-xs font-semibold shadow-sm`}>
                        {getInitials(u.name)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{u.name}</p>
                        <p className="text-xs text-gray-500">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${planStyles[u.plan]}`}>
                      {u.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium ${statusStyles[u.status].badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusStyles[u.status].dot}`} />
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{u.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="View">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors" title="Suspend">
                        <Ban className="h-4 w-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
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
