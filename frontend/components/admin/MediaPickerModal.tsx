"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Upload,
  Image as ImageIcon,
  Video,
  FileText,
  Search,
  X,
  Loader2,
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

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
  type?: "image" | "video" | "document" | "all";
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function getMediaCategory(item: MediaItem): string {
  const mime = item.mimeType || item.type || "";
  if (mime.startsWith("image")) return "image";
  if (mime.startsWith("video")) return "video";
  return "document";
}

export default function MediaPickerModal({
  isOpen,
  onClose,
  onSelect,
  type = "all",
}: MediaPickerModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [media, setMedia] = useState<MediaItem[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 30,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const fetchMedia = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      params.set("type", type);
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
  }, [pagination.page, pagination.limit, type, search]);

  useEffect(() => {
    if (isOpen) {
      fetchMedia();
    }
  }, [isOpen, fetchMedia]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedId(null);
      setSearchInput("");
      setSearch("");
      setPagination((p) => ({ ...p, page: 1 }));
    }
  }, [isOpen]);

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

  function handleConfirmSelect() {
    const item = media.find((m) => m._id === selectedId);
    if (item) {
      onSelect(`${API_BASE}${item.url}`);
      onClose();
    }
  }

  function renderThumbnail(item: MediaItem) {
    const category = getMediaCategory(item);
    if (category === "image") {
      return (
        <img
          src={`${API_BASE}${item.url}`}
          alt={item.alt || item.filename}
          className="object-cover w-full h-full"
        />
      );
    }
    if (category === "video") {
      return (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <Video className="w-8 h-8 text-white" />
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <FileText className="w-8 h-8 text-gray-400" />
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full shadow-xl relative max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-gray-900">Select Media</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {uploading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Upload size={14} />
              )}
              Upload
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>

        {/* Search & Drop Zone */}
        <div className="p-4 border-b border-gray-100 space-y-3 shrink-0">
          <div className="relative">
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
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-4 text-center transition-colors ${
              dragOver
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-gray-50/50"
            }`}
          >
            {uploading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                <p className="text-sm text-gray-600">Uploading...</p>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Drag files here to upload
              </p>
            )}
          </div>
        </div>

        {/* Media Grid (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : media.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <ImageIcon size={40} className="mb-2" />
              <p className="text-sm font-medium">No media found</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {media.map((item) => (
                <button
                  key={item._id}
                  onClick={() => setSelectedId(item._id)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedId === item._id
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  {renderThumbnail(item)}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <p className="text-white text-[10px] truncate">
                      {item.originalName || item.filename}
                    </p>
                    <p className="text-white/70 text-[9px]">
                      {formatBytes(item.size)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmSelect}
            disabled={!selectedId}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
