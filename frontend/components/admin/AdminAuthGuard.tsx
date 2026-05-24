"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { Loader2 } from "lucide-react";

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "staff";
  permissions: string[];
  profilePhoto?: { url: string | null };
}

interface AdminContextType {
  user: AdminUser;
  hasPermission: (permission: string) => boolean;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminAuthGuard");
  return ctx;
}

export default function AdminAuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const data = await api<{ success: boolean; user: AdminUser }>(
          "/api/v1/auth/me"
        );
        if (
          data.success &&
          (data.user.role === "admin" || data.user.role === "staff")
        ) {
          setAdminUser(data.user);
        } else {
          router.replace("/admin/login");
        }
      } catch {
        router.replace("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!adminUser) return null;

  function hasPermission(permission: string): boolean {
    if (!adminUser) return false;
    // Admin role has ALL permissions
    if (adminUser.role === "admin") return true;
    // Staff must have specific permission
    return adminUser.permissions?.includes(permission) ?? false;
  }

  return (
    <AdminContext.Provider value={{ user: adminUser, hasPermission }}>
      {children}
    </AdminContext.Provider>
  );
}
