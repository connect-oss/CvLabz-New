"use client";

import { Menu, Search, Bell, Plus, ChevronDown } from "lucide-react";

interface AdminTopbarProps {
  onMenuClick: () => void;
}

export default function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Left: Hamburger + Breadcrumb */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        <span className="text-sm text-gray-500">Dashboard</span>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex items-center w-80 max-w-md bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
        <Search className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Quick Action */}
        <button
          className="w-9 h-9 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-colors hover:opacity-90"
          aria-label="Quick Action"
          title="Quick Action"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>

        {/* Notification Bell */}
        <button
          className="relative w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-200" />

        {/* Profile */}
        <button className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
            SK
          </div>
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            Shahryar
          </span>
          <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
}
