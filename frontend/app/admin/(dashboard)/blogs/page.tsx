"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  status: "Published" | "Draft";
  category: string;
  date: string;
  views: number;
}

const categoryColors: Record<string, string> = {
  "Career": "bg-blue-50 text-blue-700",
  "CV Tips": "bg-purple-50 text-purple-700",
  "Interview": "bg-emerald-50 text-emerald-700",
  "LinkedIn": "bg-cyan-50 text-cyan-700",
  "Salary": "bg-amber-50 text-amber-700",
};

const initialPosts: BlogPost[] = [
  {
    title: "10 CV Mistakes That Cost You Interviews",
    excerpt: "Avoid these common resume pitfalls that recruiters notice instantly and learn how to fix them.",
    author: "Sarah Williams",
    status: "Published",
    category: "CV Tips",
    date: "May 18, 2026",
    views: 12400,
  },
  {
    title: "How to Optimize Your LinkedIn for 2025",
    excerpt: "A step-by-step guide to making your LinkedIn profile stand out to recruiters and hiring managers.",
    author: "David Chen",
    status: "Published",
    category: "LinkedIn",
    date: "May 14, 2026",
    views: 8700,
  },
  {
    title: "The STAR Method: Complete Interview Guide",
    excerpt: "Master the STAR technique to answer behavioral interview questions with confidence and clarity.",
    author: "Emma Taylor",
    status: "Published",
    category: "Interview",
    date: "May 10, 2026",
    views: 6200,
  },
  {
    title: "Salary Negotiation: Know Your Worth",
    excerpt: "Research-backed strategies to negotiate a higher salary offer without risking the opportunity.",
    author: "Sarah Williams",
    status: "Draft",
    category: "Salary",
    date: "May 8, 2026",
    views: 0,
  },
  {
    title: "Remote Work CV: What Recruiters Want",
    excerpt: "Tailor your resume for remote positions by highlighting the skills that matter most.",
    author: "David Chen",
    status: "Published",
    category: "Career",
    date: "May 3, 2026",
    views: 5100,
  },
  {
    title: "Cover Letter vs Motivation Letter",
    excerpt: "Understand the key differences and when to use each type for maximum impact.",
    author: "Emma Taylor",
    status: "Draft",
    category: "CV Tips",
    date: "Apr 28, 2026",
    views: 0,
  },
  {
    title: "ATS-Friendly CV Templates Guide",
    excerpt: "Learn how applicant tracking systems work and how to format your CV to pass the first filter.",
    author: "Sarah Williams",
    status: "Published",
    category: "CV Tips",
    date: "Apr 22, 2026",
    views: 9300,
  },
  {
    title: "Career Change at 30: A Practical Guide",
    excerpt: "It's never too late to pivot. A realistic roadmap for switching careers in your thirties.",
    author: "David Chen",
    status: "Draft",
    category: "Career",
    date: "Apr 15, 2026",
    views: 0,
  },
];

function formatViews(views: number): string {
  if (views === 0) return "0";
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toLocaleString();
}

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPosts = posts.length;
  const publishedCount = posts.filter((p) => p.status === "Published").length;
  const draftCount = posts.filter((p) => p.status === "Draft").length;

  const toggleStatus = (index: number) => {
    setPosts((prev) =>
      prev.map((p, i) =>
        i === index
          ? { ...p, status: p.status === "Published" ? "Draft" : "Published" }
          : p
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-sm text-gray-500 mt-1">Create and manage blog content</p>
        </div>
        <button className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition shadow-sm">
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      {/* Stats Pills */}
      <div className="flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
          {totalPosts} Total Posts
        </span>
        <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-sm font-medium">
          {publishedCount} Published
        </span>
        <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-sm font-medium">
          {draftCount} Drafts
        </span>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
        />
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50/50 text-left text-gray-500">
                <th className="px-6 py-3 font-medium">Post</th>
                <th className="px-6 py-3 font-medium">Author</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Views</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((post, i) => {
                const originalIndex = posts.indexOf(post);
                return (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="font-semibold text-gray-900">{post.title}</p>
                        <p className="text-xs text-gray-400 truncate mt-0.5">{post.excerpt}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
                          {post.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-gray-700 whitespace-nowrap">{post.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.status === "Published"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          post.status === "Published" ? "bg-emerald-500" : "bg-gray-400"
                        }`} />
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{post.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Eye className="h-3.5 w-3.5" />
                        <span className="text-sm">{formatViews(post.views)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Edit">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                          title={post.status === "Published" ? "Unpublish" : "Publish"}
                          onClick={() => toggleStatus(originalIndex)}
                        >
                          {post.status === "Published" ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
