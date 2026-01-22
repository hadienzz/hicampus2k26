"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import Link from "next/link";

// Mock data for display
const memories = [
  {
    id: 1,
    name: "Sarah Amanda",
    school: "SMAN 8 Jakarta",
    message:
      "Acaranya seru banget! Jadi makin yakin buat masuk Kedokteran UI setelah denger sharing dari kakaknya. Makasih Hicampus!",
    image: "/highschool-event-photo-1.jpg",
    date: "2 jam yang lalu",
  },
  {
    id: 2,
    name: "Budi Santoso",
    school: "SMK Telkom Malang",
    message:
      "Gak nyangka tips belajar dari Kak Andi ternyata praktis banget. Langsung mau dipraktekin buat persiapan SNBT besok!",
    image: "/highschool-event-photo-2.jpg",
    date: "5 jam yang lalu",
  },
  {
    id: 3,
    name: "Rina Wijaya",
    school: "SMA Kristen 1 Tomohon",
    message:
      "Terima kasih sudah datang ke sekolah kami. Semangatnya nular banget sampai ke anak-anak kelas 12!",
    image: "/highschool-event-photo-3.jpg",
    date: "1 hari yang lalu",
  },
  {
    id: 4,
    name: "Dimas Pratama",
    school: "SMAN 1 Bandung",
    message:
      "Vision board saya sekarang penuh dengan mimpi baru. ITB, I'm coming!",
    image: "/highschool-event-photo-4.jpg",
    date: "2 hari yang lalu",
  },
];

export default function VisionBoardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFCF8]">
      <Navbar />
      <main className="flex-1 py-12 px-4 md:py-20">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Vision Board <span className="text-blue-600">Hicampus</span>
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Kumpulan momen dan mimpi dari peserta Hicampus Goes to School.
              </p>
            </div>
            <Link href="/form-board">
              <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:pr-10 active:scale-95">
                <Plus className="h-5 w-5" />
                Tambah Ceritamu
                <Plus className="absolute right-3 h-5 w-5 translate-x-12 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </Link>
          </div>

          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {memories.map((item) => (
              <Card
                key={item.id}
                className="break-inside-avoid overflow-hidden border-none bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/80 backdrop-blur-sm text-blue-600 font-bold border-none"
                    >
                      {item.school}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar className="h-8 w-8 border-2 border-blue-100">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`}
                      />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
