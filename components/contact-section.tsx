import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#fff8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b60] mb-4">
            Ada Pertanyaan?
          </h2>
          <p className="text-lg text-[#4c3f7d]">
            Kalau masih bingung atau mau tanya-tanya dulu, kamu bisa hubungi
            kami lewat:
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-12">
          <Card className="p-6 border-0 bg-linear-to-br from-[#f4ecff] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#3b257f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">Instagram</h3>
            <p className="text-sm text-[#4c3f7d]">@hicampus2026</p>
          </Card>

          <Card className="p-6 border-0 bg-linear-to-br from-[#fff1d2] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#f7c768] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">Lokasi</h3>
            <p className="text-sm text-[#4c3f7d]">Boash Convention Center</p>
          </Card>
        </div>

        {/* Staff Contact */}
        <div className="bg-linear-to-r from-[#7c6ae6]/10 via-[#f7c768]/20 to-[#ff7aa2]/15 rounded-2xl p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#2b1b60] mb-4">
              Hubungi Tim Kami
            </h3>
            <div className="space-y-3 text-[#241457]">
              <p>
                <strong>Panitia:</strong> Hubungi Panitia yang telah terdaftar
                di instagram Hi Campus 2026
              </p>
              <p>
                <strong>Guru Pembimbing:</strong> Cari Bu/Pak Guru yang berkoordinasi bersama kami
                di Hi Campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
