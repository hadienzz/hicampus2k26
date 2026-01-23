import Link from "next/link";
import { Mail, Instagram, MessageCircle, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#120b33] text-[#e2d5ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-[#f7c768] via-[#f49b3f] to-[#ff7aa2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HC</span>
              </div>
              <span className="text-xl font-bold text-[#fdf7ea]">Hicampus</span>
            </div>
            <p className="text-sm text-[#c6b9ff]">
              Dari alumni untuk adik kelas menuju kampus impian.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fdf7ea]">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#speakers"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="#schedule"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition"
                >
                  Jadwal
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fdf7ea]">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#f7c768]" />
                <a
                  href="mailto:hicampus@sekolah.id"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition text-sm"
                >
                  hicampus@sekolah.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-[#f7c768]" />
                <a
                  href="https://www.instagram.com/hicampus2026"
                  className="text-[#c6b9ff] hover:text-[#f7c768] transition text-sm"
                >
                  @hicampus2026
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#fdf7ea]">Acara</h4>
            <div className="text-sm text-[#c6b9ff] space-y-2">
              <p>
                <strong className="text-[#fdf7ea]">Tanggal:</strong>
                <br />
                24 Januari 2026
              </p>
              <p>
                <strong className="text-[#fdf7ea]">Lokasi:</strong>
                <br />
                Boash Convention Center
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-[#241457] my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-[#c6b9ff] space-y-4 sm:space-y-0">
          <p className="flex items-center gap-2">
            &copy; 2025 Hicampus <Heart size={16} className="text-[#ff7aa2]" />{" "}
            Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#f7c768] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#f7c768] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
