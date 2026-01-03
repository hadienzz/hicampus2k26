"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HC</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">Hicampus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#event-info" className="text-gray-600 hover:text-blue-600 transition">
              Acara
            </Link>
            <Link href="#speakers" className="text-gray-600 hover:text-blue-600 transition">
              Pembicara
            </Link>
            <Link href="#schedule" className="text-gray-600 hover:text-blue-600 transition">
              Jadwal
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition">
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#event-info"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Acara
            </Link>
            <Link
              href="#speakers"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Pembicara
            </Link>
            <Link
              href="#schedule"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Jadwal
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
