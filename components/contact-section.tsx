import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#fff8eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b60] mb-4">Ada Pertanyaan?</h2>
          <p className="text-lg text-[#4c3f7d]">
            Kalau masih bingung atau mau tanya-tanya dulu, kamu bisa hubungi kami lewat:
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 border-0 bg-gradient-to-br from-[#f4ecff] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#7c6ae6] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">Email</h3>
            <p className="text-sm text-[#4c3f7d]">hicampus@sekolah.id</p>
          </Card>

          <Card className="p-6 border-0 bg-gradient-to-br from-[#fff1d2] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#f49b3f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">WhatsApp</h3>
            <p className="text-sm text-[#4c3f7d]">+62 812-3456-7890</p>
          </Card>

          <Card className="p-6 border-0 bg-gradient-to-br from-[#f4ecff] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#3b257f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">Instagram</h3>
            <p className="text-sm text-[#4c3f7d]">@hicampus.official</p>
          </Card>

          <Card className="p-6 border-0 bg-gradient-to-br from-[#fff1d2] to-[#ffffff] hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 bg-[#f7c768] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-[#2b1b60] mb-2">Lokasi</h3>
            <p className="text-sm text-[#4c3f7d]">Aula Sekolah</p>
          </Card>
        </div>

        {/* Staff Contact */}
        <div className="bg-gradient-to-r from-[#7c6ae6]/10 via-[#f7c768]/20 to-[#ff7aa2]/15 rounded-2xl p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#2b1b60] mb-4">Hubungi Tim Kami</h3>
            <div className="space-y-3 text-[#241457]">
              <p>
                <strong>OSIS:</strong> Hubungi ketua OSIS atau bendahara di sekolahmu
              </p>
              <p>
                <strong>Guru Pembimbing:</strong> Cari Bu/Pak Guru BK atau guru yang mengurus Hicampus
              </p>
              <p>
                <strong>Grup WhatsApp:</strong> Join grup kelas untuk pengumuman terbaru tentang acara
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
