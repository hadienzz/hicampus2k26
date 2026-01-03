import { Card } from "@/components/ui/card"
import { MessageCircle, Lightbulb, Heart, Zap } from "lucide-react"

export default function WhyJoinSection() {
  const reasons = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      emoji: "💬",
      title: "Bisa tanya hal-hal yang nggak ada di brosur kampus",
      description: "Pertanyaan boleh apa aja, dari yang serius sampai yang santai. Alumni siap jawab semua!",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      emoji: "💡",
      title: "Bantu kamu yang masih bingung pilih jurusan",
      description: "Belum tahu mau ambil apa? Di sini kamu bisa dengar pros-cons dari setiap jurusan.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      emoji: "❤️",
      title: "Dengar pengalaman asli, bukan cuma teori",
      description: "Cerita yang inspiring dan relatable dari orang-orang yang udah terbukti berhasil.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      emoji: "⚡",
      title: "Tambah semangat dan motivasi belajar",
      description: "Pulang dengan energy baru dan tekad kuat buat mencapai kampus impianmu!",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kenapa kamu wajib ikut acara ini?</h2>
          <p className="text-lg text-gray-600">
            Alasan kenapa Hicampus bisa jadi game-changer buat perjalananmu masuk PTN
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:border-blue-200 cursor-pointer border-2 border-transparent"
            >
              <div className="flex gap-4">
                <div className="text-3xl">{reason.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
