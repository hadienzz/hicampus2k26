"use client";

import Link from "next/link";
import { useState } from "react";
import { Image as ImageIcon, Menu, X } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#120b33]/90 backdrop-blur border-b border-[#2b1b60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#f7c768] via-[#f49b3f] to-[#ff7aa2] rounded-lg flex items-center justify-center">
              <Image src={"/logo.png"} width={32} height={32} alt="Logo Hicampus" />
            </div>
            <span className="text-xl font-bold text-[#fdf7ea] hidden sm:inline">
              Hicampus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#event-info"
              className="text-[#e2d5ff] hover:text-[#f7c768] transition"
            >
              Acara
            </Link>
            <Link
              href="#speakers"
              className="text-[#e2d5ff] hover:text-[#f7c768] transition"
            >
              Pembicara
            </Link>
            <Link
              href="#schedule"
              className="text-[#e2d5ff] hover:text-[#f7c768] transition"
            >
              Jadwal
            </Link>
            <Link
              href="#faq"
              className="text-[#e2d5ff] hover:text-[#f7c768] transition"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#event-info"
              className="block px-4 py-2 text-[#e2d5ff] hover:text-[#f7c768] hover:bg-[#1a1045] rounded"
              onClick={() => setIsOpen(false)}
            >
              Acara
            </Link>
            <Link
              href="#speakers"
              className="block px-4 py-2 text-[#e2d5ff] hover:text-[#f7c768] hover:bg-[#1a1045] rounded"
              onClick={() => setIsOpen(false)}
            >
              Pembicara
            </Link>
            <Link
              href="#schedule"
              className="block px-4 py-2 text-[#e2d5ff] hover:text-[#f7c768] hover:bg-[#1a1045] rounded"
              onClick={() => setIsOpen(false)}
            >
              Jadwal
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-[#e2d5ff] hover:text-[#f7c768] hover:bg-[#1a1045] rounded"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
