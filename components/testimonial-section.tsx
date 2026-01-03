import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aisyah Maharani",
    school: "SMA Negeri 3 Jakarta",
    university: "UI",
    quote:
      "Setelah ngobrol dengan alumni lewat Hicampus, aku jadi paham bedanya tiap jurusan dan akhirnya berani milih jurusan yang tepat. Alhamdulillah keterima di PTN impian.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisyah",
  },
  {
    id: 2,
    name: "Fajar Hermawan",
    school: "SMA Negeri 1 Bandung",
    university: "ITB",
    quote:
      "Tips dan strategi dari senior alumni sangat membantu saya dalam mempersiapkan ujian. Sekarang saya sudah diterima di jurusan favorit saya!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fajar",
  },
  {
    id: 3,
    name: "Putri Cahyani",
    school: "SMA Negeri 2 Yogyakarta",
    university: "UGM",
    quote:
      "Hicampus memberikan saya kepercayaan diri yang saya butuhkan. Mentor dari Hicampus sangat supportif dan memotivasi di setiap langkah perjalanan saya.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Putri",
  },
]

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Cerita Sukses Siswa Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan kisah inspiratif dari siswa yang telah meraih impian mereka dengan bantuan alumni di Hicampus
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>

                {/* Separator */}
                <div className="h-px bg-gray-200"></div>

                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-amber-200 flex-shrink-0 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.school}</p>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">{testimonial.university}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
