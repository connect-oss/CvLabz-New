"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Search,
  UserPlus,
  Download,
  Eye,
  Pencil,
  Ban,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Users,
  Loader2,
  X,
  CheckCircle2,
  XCircle,
  Shield,
  Mail,
  Calendar,
  CreditCard,
  Hash,
  Globe,
  Power,
} from "lucide-react";
import { api } from "@/lib/api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  userType: string;
  subscriptionStatus: string;
  provider: string;
  isEmailVerified: boolean;
  createdAt: string;
  subscriptionStartDate?: string;
  subscriptionEndDate?: string;
  referralCode?: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface Stats {
  total: number;
  admins: number;
  activeSubscriptions: number;
  newThisMonth: number;
}

const planBadge: Record<string, string> = {
  basic: "bg-gray-100 text-gray-600",
  pro: "bg-blue-50 text-blue-700",
  premium: "bg-purple-50 text-purple-700",
  enterprise: "bg-indigo-50 text-indigo-700",
};

const statusBadge: Record<string, { bg: string; dot: string }> = {
  active: { bg: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  cancelled: { bg: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  expired: { bg: "bg-gray-100 text-gray-500", dot: "bg-gray-400" },
};

const roleBadge: Record<string, string> = {
  user: "bg-gray-100 text-gray-600",
  admin: "bg-purple-100 text-purple-700",
  staff: "bg-blue-100 text-blue-700",
};

const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-red-600",
  "from-violet-500 to-purple-600",
  "from-green-500 to-emerald-600",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarGradients[Math.abs(hash) % avatarGradients.length];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* ─── View User Modal ─── */
function ViewUserModal({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const gradient = getGradient(user.name);
  const plan = planBadge[user.userType] || planBadge.basic;
  const status = statusBadge[user.subscriptionStatus] || statusBadge.active;
  const role = roleBadge[user.role] || roleBadge.user;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl font-bold shrink-0`}
          >
            {getInitials(user.name)}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-gray-900 truncate">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span
                className={`${role} rounded-lg px-2 py-0.5 text-[11px] font-medium capitalize`}
              >
                {user.role}
              </span>
              <span
                className={`${plan} rounded-lg px-2 py-0.5 text-[11px] font-medium capitalize`}
              >
                {user.userType || "basic"}
              </span>
              <span
                className={`${status.bg} rounded-full px-2 py-0.5 text-[11px] font-medium inline-flex items-center gap-1`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                />
                {user.subscriptionStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="space-y-3">
          <DetailRow
            icon={<Globe size={15} className="text-gray-400" />}
            label="Provider"
            value={<span className="capitalize">{user.provider}</span>}
          />
          <DetailRow
            icon={<Mail size={15} className="text-gray-400" />}
            label="Email Verified"
            value={
              user.isEmailVerified ? (
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 size={14} /> Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-red-500 font-medium">
                  <XCircle size={14} /> Not Verified
                </span>
              )
            }
          />
          <DetailRow
            icon={<Calendar size={15} className="text-gray-400" />}
            label="Joined"
            value={formatDate(user.createdAt)}
          />
          {user.subscriptionStartDate && (
            <DetailRow
              icon={<CreditCard size={15} className="text-gray-400" />}
              label="Subscription Start"
              value={formatDate(user.subscriptionStartDate)}
            />
          )}
          {user.subscriptionEndDate && (
            <DetailRow
              icon={<CreditCard size={15} className="text-gray-400" />}
              label="Subscription End"
              value={formatDate(user.subscriptionEndDate)}
            />
          )}
          {user.referralCode && (
            <DetailRow
              icon={<Hash size={15} className="text-gray-400" />}
              label="Referral Code"
              value={
                <code className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">
                  {user.referralCode}
                </code>
              }
            />
          )}
        </div>

        {/* Close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-gray-50">
      {icon}
      <span className="text-xs text-gray-500 w-32 shrink-0">{label}</span>
      <span className="text-sm text-gray-900 truncate">{value}</span>
    </div>
  );
}

/* ─── Edit User Modal ─── */
/* ─── Add User Modal ─── */
function AddUserModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [userType, setUserType] = useState("basic");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await api("/api/v1/admin/users", {
        method: "POST",
        body: { name, email, password, role, userType },
      });
      onCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create user");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-bold text-gray-900 mb-6">Add New User</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Plan</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="basic">Free</option>
                <option value="pro">Pro</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <UserPlus size={14} />}
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditUserModal({
  user,
  onClose,
  onSaved,
}: {
  user: User;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [userType, setUserType] = useState(user.userType || "basic");
  const [subscriptionStatus, setSubscriptionStatus] = useState(
    user.subscriptionStatus
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      await api(`/api/v1/admin/users/${user._id}`, {
        method: "PUT",
        body: { name, email, role, userType, subscriptionStatus },
      });
      onSaved();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update user");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-bold text-gray-900 mb-5">Edit User</h2>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Plan / UserType */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Plan
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="basic">Basic (Free)</option>
              <option value="pro">Pro</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Subscription Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Subscription Status
            </label>
            <select
              value={subscriptionStatus}
              onChange={(e) => setSubscriptionStatus(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="cancelled">Cancelled</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center gap-2"
          >
            {saving && <Loader2 size={14} className="animate-spin" />}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 20,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [planFilter, setPlanFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Modal state
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      if (search) params.set("search", search);
      if (roleFilter) params.set("role", roleFilter);
      if (planFilter) params.set("userType", planFilter);
      if (statusFilter) params.set("subscriptionStatus", statusFilter);

      const data = await api<{
        success: boolean;
        data: { users: User[]; pagination: Pagination };
      }>(`/api/v1/admin/users?${params.toString()}`);

      if (data.success) {
        setUsers(data.data.users);
        setPagination(data.data.pagination);
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, search, roleFilter, planFilter, statusFilter]);

  const fetchStats = useCallback(async () => {
    try {
      const data = await api<{ success: boolean; data: Stats }>(
        "/api/v1/admin/users/stats"
      );
      if (data.success) setStats(data.data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPagination((p) => ({ ...p, page: 1 }));
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  async function handleToggleSuspend(user: User) {
    const isSuspended =
      user.subscriptionStatus === "cancelled" ||
      user.subscriptionStatus === "expired";

    const action = isSuspended ? "activate" : "suspend";
    if (
      !confirm(
        `Are you sure you want to ${action} this user?`
      )
    )
      return;

    try {
      if (isSuspended) {
        // Activate: use the update endpoint to set status back to active
        await api(`/api/v1/admin/users/${user._id}`, {
          method: "PUT",
          body: { subscriptionStatus: "active" },
        });
      } else {
        // Suspend: use the existing suspend endpoint
        await api(`/api/v1/admin/users/${user._id}/suspend`, {
          method: "PUT",
        });
      }
      fetchUsers();
    } catch (err) {
      console.error(`Failed to ${action}:`, err);
    }
  }

  async function handleDelete(id: string) {
    if (
      !confirm(
        "Are you sure you want to permanently delete this user? This cannot be undone."
      )
    )
      return;
    try {
      await api(`/api/v1/admin/users/${id}`, { method: "DELETE" });
      fetchUsers();
      fetchStats();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  }

  return (
    <div>
      {/* Add User Modal */}
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onCreated={() => {
            setShowAddModal(false);
            fetchUsers();
            fetchStats();
          }}
        />
      )}

      {/* View Modal */}
      {viewUser && (
        <ViewUserModal
          user={viewUser}
          onClose={() => setViewUser(null)}
        />
      )}

      {/* Edit Modal */}
      {editUser && (
        <EditUserModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onSaved={() => {
            setEditUser(null);
            fetchUsers();
            fetchStats();
          }}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and monitor user accounts
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <UserPlus size={16} />
          Add User
        </button>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-sm text-gray-500 font-medium">Total Users</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stats.total.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-sm text-gray-500 font-medium">Admins / Staff</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stats.admins}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-sm text-gray-500 font-medium">
              Paid Subscriptions
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stats.activeSubscriptions.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-sm text-gray-500 font-medium">New This Month</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stats.newThisMonth.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => {
            setRoleFilter(e.target.value);
            setPagination((p) => ({ ...p, page: 1 }));
          }}
          className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Roles</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
        <select
          value={planFilter}
          onChange={(e) => {
            setPlanFilter(e.target.value);
            setPagination((p) => ({ ...p, page: 1 }));
          }}
          className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Plans</option>
          <option value="basic">Free</option>
          <option value="pro">Pro</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPagination((p) => ({ ...p, page: 1 }));
          }}
          className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
          <option value="expired">Expired</option>
        </select>
        <button className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2">
          <Download size={14} />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : users.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Users size={48} className="mb-3" />
            <p className="text-lg font-medium">No users found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      User
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Plan
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Provider
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Joined
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user, i) => {
                    const gradient =
                      avatarGradients[i % avatarGradients.length];
                    const plan =
                      planBadge[user.userType] || planBadge.basic;
                    const status =
                      statusBadge[user.subscriptionStatus] ||
                      statusBadge.active;
                    const isSuspended =
                      user.subscriptionStatus === "cancelled" ||
                      user.subscriptionStatus === "expired";
                    return (
                      <tr
                        key={user._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                            >
                              {getInitials(user.name)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 truncate">
                                {user.name}
                                {user.role !== "user" && (
                                  <span className="ml-2 text-[10px] font-medium bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">
                                    {user.role}
                                  </span>
                                )}
                              </p>
                              <p className="text-xs text-gray-400 truncate">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`${plan} rounded-lg px-2.5 py-1 text-xs font-medium capitalize`}
                          >
                            {user.userType || "basic"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`${status.bg} rounded-full px-2.5 py-1 text-xs font-medium inline-flex items-center gap-1.5`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                            />
                            {user.subscriptionStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-gray-500 capitalize">
                            {user.provider}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-gray-500">
                            {formatDate(user.createdAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <button
                              title="View"
                              onClick={() => setViewUser(user)}
                              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              title="Edit"
                              onClick={() => setEditUser(user)}
                              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Pencil size={15} />
                            </button>
                            <button
                              title={isSuspended ? "Activate" : "Suspend"}
                              onClick={() => handleToggleSuspend(user)}
                              className={`w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors ${
                                isSuspended
                                  ? "text-emerald-400 hover:text-emerald-600"
                                  : "text-gray-400 hover:text-amber-600"
                              }`}
                            >
                              {isSuspended ? (
                                <Power size={15} />
                              ) : (
                                <Ban size={15} />
                              )}
                            </button>
                            <button
                              title="Delete"
                              onClick={() => handleDelete(user._id)}
                              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium text-gray-900">
                  {(pagination.page - 1) * pagination.limit + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium text-gray-900">
                  {Math.min(
                    pagination.page * pagination.limit,
                    pagination.total
                  )}
                </span>{" "}
                of{" "}
                <span className="font-medium text-gray-900">
                  {pagination.total.toLocaleString()}
                </span>{" "}
                users
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setPagination((p) => ({
                      ...p,
                      page: Math.max(1, p.page - 1),
                    }))
                  }
                  disabled={pagination.page <= 1}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-sm font-medium text-gray-700 px-2">
                  {pagination.page} / {pagination.pages}
                </span>
                <button
                  onClick={() =>
                    setPagination((p) => ({
                      ...p,
                      page: Math.min(p.pages, p.page + 1),
                    }))
                  }
                  disabled={pagination.page >= pagination.pages}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
