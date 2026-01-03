import { Card } from "@/components/ui/card"
import { Lightbulb, BookOpen, Target } from "lucide-react"

export default function EventInfoSection() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Sharing langsung dari alumni PTN",
      description:
        "Dengarkan pengalaman nyata dari kakak alumni yang sudah berhasil lolos ke berbagai universitas pilihan.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Belajar strategi lolos SNBT / ujian masuk",
      description: "Dapatkan tips dan trik langsung dari yang berhasil, tanpa perlu memikirkan sendiri dari nol.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Dapat gambaran nyata tentang jurusan & kampus",
      description: "Eksplor kehidupan di kampus, keunikan setiap jurusan, dan bagaimana rasanya jadi mahasiswa.",
    },
  ]

  return (
    <section id="event-info" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Apa itu Hicampus?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hicampus adalah wadah buat kamu yang masih sekolah untuk kenal lebih dekat dengan alumni yang sudah lolos ke
            PTN. Di sini kamu bisa dengar perjalanan mereka, suka duka, cara belajar, sampai tips milih jurusan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
