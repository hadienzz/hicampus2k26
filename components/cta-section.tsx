import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-[#2b1b60] via-[#3b257f] to-[#120b33] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c6ae6] rounded-full -mr-48 -mt-48 opacity-25 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7c768] rounded-full -ml-48 -mb-48 opacity-25 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdf7ea] leading-tight">
            Jadilah Bagian dari Perjalanan Mereka Menuju Kampus Impian
          </h2>
          <p className="text-lg text-[#e2d5ff] max-w-2xl mx-auto">
            Baik kamu seorang siswa yang ingin belajar atau alumni yang ingin berbagi pengalaman, bergabunglah dengan
            komunitas Hicampus sekarang juga.
          </p>
        </div>

        {/* Separator */}
        <Separator className="bg-[#f7c768]/40" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-[#fdf7ea] text-[#2b1b60] hover:bg-[#f7c768]/90 rounded-full font-semibold shadow-md"
          >
            Saya Siswa — Temukan Alumni
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#f7c768] text-[#fdf7ea] hover:bg-[#f7c768]/10 rounded-full font-semibold bg-transparent"
          >
            Saya Alumni — Ingin Berbagi
          </Button>
        </div>
        {/* Secondary Text */}
        <p className="text-[#e2d5ff] text-sm pt-4">✨ Gratis dan mudah untuk memulai. Tidak perlu kartu kredit.</p>
      </div>
    </section>
  )
}
