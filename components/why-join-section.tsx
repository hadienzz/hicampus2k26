import { Card } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Heart, Zap } from "lucide-react";

export default function WhyJoinSection() {
  const reasons = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      emoji: "💬",
      title: "Tanya Langsung Peluang Lolos & Strategi Masuk PTN",
      description:
        "Kamu bisa tanya peluang masuk jurusan tertentu, perbedaan SNBP, SNBT, dan jalur Mandiri, strategi pilih jurusan biar aman & realistis langsung ke alumni.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      emoji: "💡",
      title: "Bantu Menentukan Jurusan yang Cocok & Realistis",
      description:
        "Bukan hanya dilihat dari minat, tapi juga tingkat persaingan jurusan, beban kuliah aslinya dan prospek kerja setelah lulus biar kamu nggak salah pilih dan nyesel di tengah jalan.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      emoji: "❤️",
      title: "Dengar Realita Kehidupan Kampus yang Sebenarnya  ",
      description:
        "Kami dengan senang hati cerita jujur soal transisi SMA ke kuliah, sistem belajar di PTN dan struggle mahasiswa baru langsung dari yang sudah menjalaninya.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      emoji: "⚡",
      title: "Pulang dengan Rencana, Bukan Cuma Semangat",
      description:
        "Hi Campus 2026 membantumu mengetahui jurusan & kampus target, paham jalur masuk yang mau dikejar dan punya gambaran langkah selanjutnya sebelum lulus SMA.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#f4ecff] via-[#fff8eb] to-[#fef6dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b60] mb-4">
            Apa yang Akan Kamu Dapatkan dari Campus Expo Ini?
          </h2>
          <p className="text-lg text-[#4c3f7d]">
            Alasan kenapa Hicampus bisa jadi game-changer buat perjalananmu
            masuk PTN
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:border-[#f7c768] cursor-pointer border-2 border-transparent bg-white/70"
            >
              <div className="flex gap-4">
                <div className="text-3xl">{reason.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#2b1b60] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[#4c3f7d]">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
