"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  PenSquare,
  Settings,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  { label: "Content", href: "/admin/content", icon: FileText },
  { label: "Blogs", href: "/admin/blogs", icon: PenSquare },
];

const settingsLinks = [
  { label: "Settings", href: "#", icon: Settings },
  { label: "Help & Support", href: "#", icon: HelpCircle },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const linkClasses = (href: string) =>
    isActive(href)
      ? "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 border-l-3 border-blue-600"
      : "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all";

  const iconClasses = (href: string) =>
    isActive(href) ? "w-5 h-5 text-blue-600" : "w-5 h-5";

  const sidebar = (
    <div className="flex flex-col h-full w-72 bg-linear-to-b from-white to-slate-50/80 border-r border-gray-200">
      {/* Logo + Admin Badge */}
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-sm font-bold">CV</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-gray-900">
          CV Labz
        </span>
        <span className="bg-linear-to-r from-blue-500 to-purple-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
          Admin
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 pt-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3 px-4">
          Main Menu
        </p>
        <div className="space-y-1">
          {mainLinks.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} className={linkClasses(href)}>
              <Icon className={iconClasses(href)} />
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="px-4 pb-5">
        <div className="border-t border-gray-200 pt-4 mb-3" />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3 px-4">
          Settings
        </p>
        <div className="space-y-1">
          {settingsLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-200 my-3" />

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-blue-600 transition-all"
        >
          <ExternalLink className="w-5 h-5" />
          Back to Website
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full z-40">
        {sidebar}
      </aside>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <aside
          className={`absolute left-0 top-0 h-full transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebar}
        </aside>
      </div>
    </>
  );
}
