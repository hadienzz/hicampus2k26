import { Card } from "@/components/ui/card";
import { Lightbulb, BookOpen, Target } from "lucide-react";

export default function zEventInfoSection() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Sharing Langsung dari Alumni yang berhasil masuk PTN",
      description:
        "Di Hi Campus 2026, kamu akan mendengar cerita langsung dari kakak alumni yang telah lolos ke berbagai Perguruan Tinggi Negeri. Mereka akan menjelaskan keunggulan, jalur masuk, dan manfaat apa saja yang mereka dapatkan selama berada di Universitas.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Belajar strategi lolos SNBP / ujian masuk",
      description:
        "Talkshow ini membantumu memahami proses dan motivasi dibalik pilihan yang ada serta memberikan gambaran nyata mengenai proses beradaptasi di lingkungan kampus dan mengembangkan diri sebagai mahasiswa.",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Mendapat gambaran nyata mengenai Kampus dan Jurusan",
      description:
        "Hi Campus 2026 mendukung kamu untuk mengetahui Kampus dan jurusan yang akan menjadi tujuanmu melalui sesi Talkshow dan tanya jawab kepada Alumni yang sudah diterima.",
    },
  ];

  return (
    <section id="event-info" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa itu Hicampus?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hi Campus 2026 hadir untuk memberikan informasi aktual terkait PTN
            dan menjadi wadah eksplorasi untuk mengenal Kampus impian kamu agar
            sesuai dengan minat dan kemampuanmu, serta tempat yang tepat untuk
            berkembang. Hi Campus 2026 juga bertujuan untuk membantu kamu dalam
            mempersiapkan diri untuk masa depan yang ingin kamu capai.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
