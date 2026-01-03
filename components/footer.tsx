import Link from "next/link"
import { Mail, Instagram, MessageCircle, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HC</span>
              </div>
              <span className="text-xl font-bold text-white">Hicampus</span>
            </div>
            <p className="text-sm text-gray-400">Dari alumni untuk adik kelas menuju kampus impian.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="text-gray-400 hover:text-white transition">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-400 hover:text-white transition">
                  Jadwal
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:hicampus@sekolah.id" className="text-gray-400 hover:text-white transition text-sm">
                  hicampus@sekolah.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-blue-400" />
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  @hicampus.official
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="text-blue-400" />
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Acara</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <strong className="text-white">Tanggal:</strong>
                <br />
                tanya syarif
              </p>
              <p>
                <strong className="text-white">Lokasi:</strong>
                <br />
                Boash Convention Center
              </p>
              <p>
                <strong className="text-white">Biaya:</strong>
                <br />
                <span className="text-green-400 font-semibold">GRATIS</span>
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-4 sm:space-y-0">
          <p className="flex items-center gap-2">
            &copy; 2025 Hicampus <Heart size={16} className="text-red-500" /> Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
