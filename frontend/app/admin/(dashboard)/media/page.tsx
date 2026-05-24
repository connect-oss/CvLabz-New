"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  Image as ImageIcon,
  Video,
  FileText,
  Search,
  Trash2,
  Copy,
  X,
  Check,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { api } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

interface MediaItem {
  _id: string;
  filename: string;
  originalName?: string;
  url: string;
  type: string;
  mimeType?: string;
  size: number;
  alt?: string;
  createdAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

type FilterType = "all" | "image" | "video" | "document";

const filterTabs: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Images", value: "image" },
  { label: "Videos", value: "video" },
  { label: "Documents", value: "document" },
];

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getMediaCategory(item: MediaItem): string {
  const mime = item.mimeType || item.type || "";
  if (mime.startsWith("image")) return "image";
  if (mime.startsWith("video")) return "video";
  return "document";
}

export default function MediaLibraryPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const [media, setMedia] = useState<MediaItem[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 30,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [altText, setAltText] = useState("");
  const [savingAlt, setSavingAlt] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      params.set("type", typeFilter);
      if (search) params.set("search", search);

      const data = await api<{
        success: boolean;
        media: MediaItem[];
        pagination: Pagination;
      }>(`/api/v1/admin/media?${params.toString()}`);

      if (data.success) {
        setMedia(data.media);
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error("Failed to fetch media:", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, typeFilter, search]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPagination((p) => ({ ...p, page: 1 }));
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  async function uploadFiles(files: FileList | File[]) {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      if (files.length === 1) {
        const formData = new FormData();
        formData.append("file", files[0]);
        await fetch(`${API_BASE}/api/v1/admin/media/upload`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });
      } else {
        const formData = new FormData();
        Array.from(files).forEach((file) => formData.append("files", file));
        await fetch(`${API_BASE}/api/v1/admin/media/upload-multiple`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });
      }
      fetchMedia();
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      uploadFiles(e.target.files);
      e.target.value = "";
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  }

  async function handleDeleteMedia(id: string) {
    if (!confirm("Are you sure you want to delete this file? This cannot be undone.")) return;
    setDeleting(true);
    try {
      await api(`/api/v1/admin/media/${id}`, { method: "DELETE" });
      if (selectedMedia?._id === id) setSelectedMedia(null);
      fetchMedia();
    } catch (err) {
      console.error("Failed to delete media:", err);
    } finally {
      setDeleting(false);
    }
  }

  async function handleSaveAlt() {
    if (!selectedMedia) return;
    setSavingAlt(true);
    try {
      const data = await api<{ success: boolean; media: MediaItem }>(
        `/api/v1/admin/media/${selectedMedia._id}`,
        { method: "PUT", body: { alt: altText } }
      );
      if (data.success && data.media) {
        setSelectedMedia(data.media);
        setMedia((prev) =>
          prev.map((m) => (m._id === data.media._id ? data.media : m))
        );
      }
    } catch (err) {
      console.error("Failed to update alt text:", err);
    } finally {
      setSavingAlt(false);
    }
  }

  function handleCopyUrl() {
    if (!selectedMedia) return;
    navigator.clipboard.writeText(`${API_BASE}${selectedMedia.url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function selectMedia(item: MediaItem) {
    setSelectedMedia(item);
    setAltText(item.alt || "");
    setCopied(false);
  }

  function renderMediaThumbnail(item: MediaItem, size: "sm" | "lg" = "sm") {
    const category = getMediaCategory(item);
    if (category === "image") {
      return (
        <div className={size === "sm" ? "aspect-square" : "aspect-video"}>
          <img
            src={`${API_BASE}${item.url}`}
            alt={item.alt || item.filename}
            className="object-cover w-full h-full"
          />
        </div>
      );
    }
    if (category === "video") {
      return (
        <div className={`bg-gray-800 flex items-center justify-center ${size === "sm" ? "aspect-square" : "aspect-video"}`}>
          <Video className={`text-white ${size === "lg" ? "w-16 h-16" : "w-8 h-8"}`} />
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center aspect-square">
        <FileText className={`text-gray-400 ${size === "lg" ? "w-16 h-16" : "w-8 h-8"}`} />
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-sm text-gray-500 mt-1">
            Upload and manage images, videos, and documents
          </p>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50"
        >
          {uploading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Upload size={16} />
          )}
          Upload Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {/* Drag & Drop Zone */}
      <div
        ref={dropZoneRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`mb-6 border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-gray-300 bg-gray-50/50"
        }`}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm text-gray-600 font-medium">Uploading...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-8 h-8 text-gray-400" />
            <p className="text-sm text-gray-600 font-medium">
              Drag files here or click to upload
            </p>
          </div>
        )}
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-6">
        <div className="flex gap-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setTypeFilter(tab.value);
                setPagination((p) => ({ ...p, page: 1 }));
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                typeFilter === tab.value
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search files..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">
          {pagination.total} file{pagination.total !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Main Content: Grid + Detail Panel */}
      <div className="flex gap-6">
        {/* Media Grid */}
        <div className="flex-1 min-w-0">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : media.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <ImageIcon size={48} className="mb-3" />
              <p className="text-lg font-medium">No media files</p>
              <p className="text-sm">Upload your first file to get started</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {media.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => selectMedia(item)}
                    className={`group relative rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all cursor-pointer ${
                      selectedMedia?._id === item._id
                        ? "ring-2 ring-blue-500 border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    {renderMediaThumbnail(item)}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div className="flex justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteMedia(item._id);
                          }}
                          className="w-7 h-7 rounded-lg bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div>
                        <p className="text-white text-xs font-medium truncate">
                          {item.originalName || item.filename}
                        </p>
                        <p className="text-white/70 text-[10px]">
                          {formatBytes(item.size)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex items-center justify-between mt-6 px-2">
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
                    files
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
              )}
            </>
          )}
        </div>

        {/* Detail Panel */}
        {selectedMedia && (
          <div className="hidden lg:block w-80 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-6">
              {/* Preview */}
              <div className="aspect-video bg-gray-50 overflow-hidden">
                {renderMediaThumbnail(selectedMedia, "lg")}
              </div>

              {/* Info */}
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {selectedMedia.originalName || selectedMedia.filename}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-gray-500">
                      {selectedMedia.mimeType || selectedMedia.type}
                    </span>
                    <span className="text-xs text-gray-300">|</span>
                    <span className="text-xs text-gray-500">
                      {formatBytes(selectedMedia.size)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Uploaded {formatDate(selectedMedia.createdAt)}
                  </p>
                </div>

                {/* Alt Text */}
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    onBlur={handleSaveAlt}
                    placeholder="Describe this file..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {savingAlt && (
                    <p className="text-xs text-blue-500 mt-1 flex items-center gap-1">
                      <Loader2 size={10} className="animate-spin" />
                      Saving...
                    </p>
                  )}
                </div>

                {/* URL */}
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">
                    URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={`${API_BASE}${selectedMedia.url}`}
                      className="flex-1 min-w-0 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-500 bg-gray-50 focus:outline-none"
                    />
                    <button
                      onClick={handleCopyUrl}
                      className="w-9 h-9 shrink-0 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                      title="Copy URL"
                    >
                      {copied ? (
                        <Check size={14} className="text-emerald-500" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDeleteMedia(selectedMedia._id)}
                  disabled={deleting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors disabled:opacity-50"
                >
                  {deleting ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Trash2 size={14} />
                  )}
                  Delete File
                </button>
              </div>

              {/* Close detail */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors shadow-sm"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
