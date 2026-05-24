"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Plus,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  X,
  FolderOpen,
} from "lucide-react";
import { api } from "@/lib/api";

interface BlogPost {
  _id: string;
  title: string;
  summary?: string;
  excerpt?: string;
  author?: { name: string } | string;
  status: string;
  category?: string;
  createdAt: string;
  views?: number;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

interface BlogStats {
  total: number;
  published: number;
  drafts: number;
}

const categoryColors: Record<string, string> = {
  Career: "bg-blue-50 text-blue-700",
  "CV Tips": "bg-purple-50 text-purple-700",
  Interview: "bg-emerald-50 text-emerald-700",
  LinkedIn: "bg-cyan-50 text-cyan-700",
  Salary: "bg-amber-50 text-amber-700",
  Technology: "bg-indigo-50 text-indigo-700",
  General: "bg-gray-100 text-gray-700",
};

const statusConfig: Record<string, { bg: string; dot: string; label: string }> = {
  published: { bg: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500", label: "Published" },
  draft: { bg: "bg-gray-100 text-gray-600", dot: "bg-gray-400", label: "Draft" },
  archived: { bg: "bg-amber-50 text-amber-700", dot: "bg-amber-500", label: "Archived" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatViews(views: number): string {
  if (views === 0) return "0";
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toLocaleString();
}

function getAuthorName(author: BlogPost["author"]): string {
  if (!author) return "Unknown";
  if (typeof author === "string") return author;
  return author.name || "Unknown";
}

/* ─── Categories Modal ─── */
interface Category {
  _id: string;
  name: string;
  name_nl?: string;
  slug?: string;
  description?: string;
  description_nl?: string;
  isActive?: boolean;
  blogCount?: number;
}

function CategoriesModal({
  onClose,
  onChanged,
}: {
  onClose: () => void;
  onChanged: () => void;
}) {
  const [cats, setCats] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newNameNl, setNewNameNl] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDescNl, setNewDescNl] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editNameNl, setEditNameNl] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editDescNl, setEditDescNl] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchCats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api<{ success: boolean; categories?: Category[]; data?: Category[] }>(
        "/api/v1/admin/blogs/categories/all"
      );
      const list = res.categories || res.data || [];
      if (Array.isArray(list)) setCats(list);
    } catch {
      setCats([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    setSaving(true);
    setError("");
    try {
      await api("/api/v1/admin/blogs/categories", {
        method: "POST",
        body: {
          name: newName.trim(),
          description: newDesc.trim(),
          name_nl: newNameNl.trim(),
          description_nl: newDescNl.trim(),
        },
      });
      setNewName(""); setNewNameNl("");
      setNewDesc(""); setNewDescNl("");
      fetchCats();
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create");
    } finally {
      setSaving(false);
    }
  }

  async function handleUpdate(id: string) {
    if (!editName.trim()) return;
    setSaving(true);
    setError("");
    try {
      await api(`/api/v1/admin/blogs/categories/${id}`, {
        method: "PUT",
        body: {
          name: editName.trim(),
          description: editDesc.trim(),
          name_nl: editNameNl.trim(),
          description_nl: editDescNl.trim(),
        },
      });
      setEditId(null);
      fetchCats();
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete category "${name}"? This cannot be undone.`)) return;
    try {
      await api(`/api/v1/admin/blogs/categories/${id}`, { method: "DELETE" });
      fetchCats();
      onChanged();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-xl relative max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Manage Categories</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Add new */}
        <form onSubmit={handleCreate} className="p-6 border-b border-gray-100">
          {error && (
            <div className="mb-3 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-medium">
              {error}
            </div>
          )}
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">English</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Category name (EN) *"
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={saving || !newName.trim()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-1.5 shrink-0"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
              Add
            </button>
          </div>
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Description (EN, optional)"
            className="w-full mt-2 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mt-3 mb-2">Nederlands</p>
          <input
            type="text"
            value={newNameNl}
            onChange={(e) => setNewNameNl(e.target.value)}
            placeholder="Categorie naam (NL)"
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            value={newDescNl}
            onChange={(e) => setNewDescNl(e.target.value)}
            placeholder="Beschrijving (NL, optioneel)"
            className="w-full mt-2 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </form>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            </div>
          ) : cats.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-8">
              No categories yet. Add one above.
            </p>
          ) : (
            <div className="space-y-2">
              {cats.map((cat) => (
                <div
                  key={cat._id}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {editId === cat._id ? (
                    <div className="flex-1 flex flex-col gap-1.5 mr-2">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">English</p>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Name (EN)"
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                      />
                      <input
                        type="text"
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        placeholder="Description (EN)"
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mt-1">Nederlands</p>
                      <input
                        type="text"
                        value={editNameNl}
                        onChange={(e) => setEditNameNl(e.target.value)}
                        placeholder="Naam (NL)"
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        value={editDescNl}
                        onChange={(e) => setEditDescNl(e.target.value)}
                        placeholder="Beschrijving (NL)"
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleUpdate(cat._id)}
                          disabled={saving}
                          className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 disabled:opacity-50"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {cat.name}
                          {cat.name_nl && (
                            <span className="text-gray-400 font-normal"> / {cat.name_nl}</span>
                          )}
                        </p>
                        {cat.description && (
                          <p className="text-xs text-gray-400 truncate">{cat.description}</p>
                        )}
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {cat.blogCount ?? 0} posts
                        </p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => {
                            setEditId(cat._id);
                            setEditName(cat.name);
                            setEditNameNl(cat.name_nl || "");
                            setEditDesc(cat.description || "");
                            setEditDescNl(cat.description_nl || "");
                          }}
                          className="w-7 h-7 rounded-lg hover:bg-white flex items-center justify-center text-gray-400 hover:text-blue-600"
                          title="Edit"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat._id, cat.name)}
                          className="w-7 h-7 rounded-lg hover:bg-white flex items-center justify-center text-gray-400 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const router = useRouter();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState<BlogStats | null>(null);
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [showCategories, setShowCategories] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 20,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      if (search) params.set("search", search);
      if (categoryFilter) params.set("category", categoryFilter);
      if (statusFilter) params.set("status", statusFilter);

      const data = await api<{
        success: boolean;
        data: { blogs: BlogPost[]; pagination: Pagination };
      }>(`/api/v1/admin/blogs?${params.toString()}`);

      if (data.success) {
        setPosts(data.data.blogs);
        setPagination(data.data.pagination);
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, search, categoryFilter, statusFilter]);

  const fetchStats = useCallback(async () => {
    try {
      const data = await api<{ success: boolean; data: BlogStats }>(
        "/api/v1/admin/blogs/stats"
      );
      if (data.success) setStats(data.data);
    } catch (err) {
      console.error("Failed to fetch blog stats:", err);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await api<{ success: boolean; categories?: { _id: string; name: string }[]; data?: { _id: string; name: string }[] }>(
        "/api/v1/admin/blogs/categories/all"
      );
      const cats = data.categories || data.data || [];
      if (Array.isArray(cats)) setCategories(cats);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  }, []);

  useEffect(() => {
    fetchStats();
    fetchCategories();
  }, [fetchStats, fetchCategories]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPagination((p) => ({ ...p, page: 1 }));
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this blog post? This cannot be undone."))
      return;
    try {
      await api(`/api/v1/admin/blogs/${id}`, { method: "DELETE" });
      fetchPosts();
      fetchStats();
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  }

  async function handleTogglePublish(post: BlogPost) {
    const newStatus = post.status === "published" ? "draft" : "published";
    try {
      await api(`/api/v1/admin/blogs/${post._id}/status`, {
        method: "PATCH",
        body: { status: newStatus },
      });
      fetchPosts();
      fetchStats();
    } catch (err) {
      console.error("Failed to toggle publish status:", err);
    }
  }

  return (
    <div>
      {/* Categories Modal */}
      {showCategories && (
        <CategoriesModal
          onClose={() => setShowCategories(false)}
          onChanged={() => fetchCategories()}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage blog content
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCategories(true)}
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <FolderOpen size={16} />
            Categories
          </button>
          <button
            onClick={() => router.push("/admin/blogs/new")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={16} />
            New Post
          </button>
        </div>
      </div>

      {/* Stats Pills */}
      {stats && (
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
            {stats.total} Total
          </span>
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-sm font-medium">
            {stats.published} Published
          </span>
          <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-sm font-medium">
            {stats.drafts} Drafts
          </span>
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
            placeholder="Search posts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setPagination((p) => ({ ...p, page: 1 }));
          }}
          className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
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
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <FileText size={48} className="mb-3" />
            <p className="text-lg font-medium">No blog posts yet</p>
            <p className="text-sm">Create your first post</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Post
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Category
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Author
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Date
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Views
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {posts.map((post) => {
                    const status = statusConfig[post.status] || statusConfig.draft;
                    const catColor =
                      categoryColors[post.category || ""] || "bg-gray-100 text-gray-700";
                    return (
                      <tr
                        key={post._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="max-w-xs">
                            <p className="font-semibold text-gray-900 truncate">
                              {post.title}
                            </p>
                            <p className="text-xs text-gray-400 truncate mt-0.5">
                              {post.summary || post.excerpt || ""}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {post.category && (
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${catColor}`}
                            >
                              {post.category}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`${status.bg} rounded-full px-2.5 py-1 text-xs font-medium inline-flex items-center gap-1.5`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                            />
                            {status.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">
                            {getAuthorName(post.author)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {formatDate(post.createdAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <Eye className="h-3.5 w-3.5" />
                            <span className="text-sm">
                              {formatViews(post.views || 0)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <button
                              title="Edit"
                              onClick={() =>
                                router.push(`/admin/blogs/${post._id}/edit`)
                              }
                              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Pencil size={15} />
                            </button>
                            <button
                              title={
                                post.status === "published"
                                  ? "Unpublish"
                                  : "Publish"
                              }
                              onClick={() => handleTogglePublish(post)}
                              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {post.status === "published" ? (
                                <EyeOff size={15} />
                              ) : (
                                <Eye size={15} />
                              )}
                            </button>
                            <button
                              title="Delete"
                              onClick={() => handleDelete(post._id)}
                              className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
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
                posts
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
