"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 sm:py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full -ml-48 -mb-48 opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Saksikan <span className="text-blue-600">Hicampus</span> Hadir
                Kembali!
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Acara sharing bareng kakak alumni yang sudah lolos ke berbagai
                PTN. Dengarkan cerita, tanya langsung, dan siapin jalanmu menuju
                kampus impian.
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-2 py-4 border-t border-b border-gray-200">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={20} className="text-blue-600" />
                <span className="font-semibold">
                  {/* Sabtu, 14 Februari 2026 | 08.00 - 10.15 WIB */}
                  tanya syarif
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span className="font-semibold">Boash Convention Center</span>
              </div>
              {/* <p className="text-sm text-gray-600 pt-2">Hicampus x [Nama Sekolahmu]</p> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center gap-2"
              >
                Lihat Detail Acara
                <ArrowRight size={20} />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Daftar Sekarang
              </Button> */}
            </div>

            <p className="text-sm text-gray-500">✓ Gratis untuk semua siswa</p>
          </div>

          {/* Right Illustration */}
          <div className="relative h-96 sm:h-[450px] hidden md:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl opacity-10"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-5xl">👥</span>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600 font-semibold">Alumni Lolos PTN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
