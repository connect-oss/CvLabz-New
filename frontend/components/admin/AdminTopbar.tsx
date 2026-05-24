"use client";

import { useRouter } from "next/navigation";
import { Menu, Search, Bell, Plus, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useAdmin } from "./AdminAuthGuard";
import { api } from "@/lib/api";

interface AdminTopbarProps {
  onMenuClick: () => void;
}

export default function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  const { user } = useAdmin();
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  async function handleLogout() {
    try {
      await api("/api/v1/auth/logout", { method: "POST" });
    } catch {
      // ignore
    }
    router.replace("/admin/login");
  }

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-6">
      {/* Left: Hamburger + Breadcrumb */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-sm text-gray-500 hidden sm:block">Dashboard</span>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 w-80">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none w-full"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button
          className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-colors hover:opacity-90"
          aria-label="Quick Action"
          title="Quick Action"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>

        <button
          className="relative w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>

        <div className="h-6 w-px bg-gray-200" />

        {/* Profile dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
              {initials}
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              {user.name.split(" ")[0]}
            </span>
            <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400" />
          </button>

          {profileOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  <span className="mt-1 inline-block text-[10px] font-medium bg-purple-100 text-purple-700 px-2 py-0.5 rounded capitalize">
                    {user.role}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
