"use client";

import type React from "react";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, X } from "lucide-react";

interface ImageUploadFieldProps {
  label: string;
  helperText?: string;
  onImageSelect: (file: File | null, preview: string) => void;
  preview?: string;
  aspectRatio?: "square" | "wide";
  maxSize?: number; // in MB
}

export function ImageUploadField({
  label,
  helperText,
  onImageSelect,
  preview,
  aspectRatio = "square",
  maxSize = 5,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileSelect = (file: File) => {
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File terlalu besar. Maksimal ${maxSize}MB`);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Hanya file gambar yang diperbolehkan");
      return;
    }

    setError("");

    const reader = new FileReader();
    reader.onload = (e) => {
      const nextPreview = (e.target?.result as string) || "";
      onImageSelect(file, nextPreview);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {helperText ? (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        ) : null}
      </div>

      {preview ? (
        <div className="relative group">
          <div
            className={`relative overflow-hidden rounded-lg bg-muted ${
              aspectRatio === "wide" ? "aspect-video" : "aspect-square"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview || "/placeholder.svg"}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
            <Button type="button" size="sm" variant="secondary" onClick={handleClick}>
              Ubah
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={() => {
                onImageSelect(null, "");
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-center transition-colors hover:border-accent hover:bg-accent/5"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5 space-y-2">
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Camera className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-foreground">
              Klik atau drag gambar ke sini
            </p>
            <p className="text-xs text-muted-foreground">
              Format PNG, JPG, atau JPEG. Maks {maxSize}MB
            </p>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleFileSelect(file);
          }
        }}
        className="hidden"
      />

      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
