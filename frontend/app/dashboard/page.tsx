"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LayoutDashboard } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { api } from "@/lib/api";

interface AuthUser {
  role?: string;
}

interface AuthResponse {
  user?: AuthUser;
}

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "user">("loading");

  useEffect(() => {
    api<AuthResponse>("/api/v1/auth/me")
      .then((data) => {
        const role = data?.user?.role;
        if (role === "admin") {
          router.replace("/admin");
        } else {
          setStatus("user");
        }
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden pt-20">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight mt-2 md:mt-3 font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <LayoutDashboard className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dashboard Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            We&apos;re building your personal dashboard with career tools and
            insights.
          </p>
          <p className="text-gray-400">Check back soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
