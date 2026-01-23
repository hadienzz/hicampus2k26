"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import usePostBoard from "@/hooks/use-post-board";
import { ImageUploadField } from "@/components/image-upload-field";

export default function FormBoardPage() {
  const { formik, isPending } = usePostBoard();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      formik.setFieldValue("photo", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        formik.setFieldValue("photo_preview", result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bagikan Momen Serumu!
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Upload foto kegiatan Hicampus Goes to School dan tuliskan pesan
              kesanmu untuk teman-teman lainnya.
            </p>
          </div>

          <Card className="border border-slate-800 bg-slate-900/80 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Form Vision Board</CardTitle>
              <CardDescription>
                Ceritakan perjalananmu hari ini bersama para alumni hebat.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Masukkan namamu..."
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <ImageUploadField
                    label="Foto Kegiatan"
                    helperText="PNG, JPG, atau JPEG (Maks. 5MB)"
                    preview={formik.values.photo_preview}
                    aspectRatio="wide"
                    maxSize={5}
                    onImageSelect={(file, preview) => {
                      formik.setFieldValue("photo", file);
                      formik.setFieldValue("photo_preview", preview);
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Kesan & Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tuliskan pengalaman berhargamu hari ini..."
                    className="min-h-30 resize-none"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-500 py-6 text-lg text-slate-950 hover:bg-emerald-600"
                  disabled={isPending}
                >
                  {isPending ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Kirim ke Vision Board
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
