"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#fce19a] via-[#fff8eb] to-[#8570c9] py-12 sm:py-20 lg:py-28 ">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-10">
        <Image
          src="/banner.png"
          alt="Banner Hicampus"
          width={1920}
          height={400}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2b1b60] leading-tight text-balance "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Saksikan <span className="text-[#f49b3f]">Hi Campus</span> Hadir
                Kembali!
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-[#4c3f7d] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Acara sharing bareng kakak alumni yang sudah lolos ke berbagai
                PTN. Dengarkan cerita, tanya langsung, dan siapin jalanmu menuju
                kampus impian.
              </motion.p>
            </div>
            {/* Event Details */}
            <motion.div
              className="space-y-2 py-4 border-t border-b border-[#e2d5ff]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 text-[#241457]">
                <Calendar size={20} className="text-[#f49b3f]" />
                <span className="font-semibold">Sabtu, 24 Januari 2026</span>
              </div>
              <div className="flex items-center gap-3 text-[#241457]">
                <MapPin size={20} className="text-[#f49b3f]" />
                <span className="font-semibold">Boash Convention Center</span>
              </div>
              {/* <p className="text-sm text-gray-600 pt-2">Hicampus x [Nama Sekolahmu]</p> */}
            </motion.div>

            {/* CTA Buttons */}
            <a className="flex flex-col sm:flex-row gap-3 pt-4" href="#schedule">
              <Button
                size="lg"
                className="bg-linear-to-r from-[#f7c768] to-[#f49b3f] hover:brightness-105 text-[#231642] rounded-full font-semibold flex items-center gap-2 shadow-md"
              
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
            </a>
          </div>

          {/* Right Illustration */}
          <motion.div
            className="relative h-96 sm:h-[450px] hidden md:flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#2b1b60] via-[#3b257f] to-[#7c6ae6] rounded-3xl shadow-2xl opacity-20"></div>
            <div className="relative z-10 text-center space-y-4">
              <div className="w-32 h-32 bg-linear-to-br from-[#f7c768] via-[#f49b3f] to-[#ff7aa2] rounded-full mx-auto flex items-center justify-center">
                <span className="text-5xl">👥</span>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[#fdf7ea]">100+</p>
                <p className="text-[#e2d5ff] font-semibold">Alumni Lolos PTN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
