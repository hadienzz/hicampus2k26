"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import Link from "next/link";
import useGetBoard from "@/hooks/use-get-board";

export default function VisionBoardPage() {
  const { boards, isLoading, isError } = useGetBoard();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                Vision Board <span className="text-emerald-400">Hicampus</span>
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                Kumpulan momen dan mimpi dari peserta Hicampus Goes to School.
              </p>
            </div>
            <Link href="/form-board">
              <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-8 py-4 font-bold text-slate-950 transition-all hover:bg-emerald-600 hover:pr-10 active:scale-95">
                <Plus className="h-5 w-5" />
                Tambah Ceritamu
                <Plus className="absolute right-3 h-5 w-5 translate-x-12 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </Link>
          </div>

          {isLoading && (
            <p className="mt-10 text-center text-slate-400">
              Memuat cerita dari teman-temanmu...
            </p>
          )}
          {isError && (
            <p className="mt-10 text-center text-red-400">
              Gagal memuat data vision board. Coba lagi nanti.
            </p>
          )}
          {!isLoading && !isError && (
            <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
              {boards.map((item) => (
                <Card
                  key={item.id}
                  className="break-inside-avoid overflow-hidden border border-slate-800 bg-slate-900/80 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.photo_url || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="border-none bg-emerald-500/90 text-slate-950 backdrop-blur-sm font-semibold"
                      >
                        Hicampus Audience
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <Avatar className="h-8 w-8 border-2 border-emerald-500/40">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`}
                        />
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-50 leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                          Vision Board Hicampus
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-300 italic leading-relaxed">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
