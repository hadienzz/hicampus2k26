import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -mr-48 -mt-48 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full -ml-48 -mb-48 opacity-20 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Jadilah Bagian dari Perjalanan Mereka Menuju Kampus Impian
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Baik kamu seorang siswa yang ingin belajar atau alumni yang ingin berbagi pengalaman, bergabunglah dengan
            komunitas Hicampus sekarang juga.
          </p>
        </div>

        {/* Separator */}
        <Separator className="bg-blue-400/30" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 rounded-full font-semibold">
            Saya Siswa — Temukan Alumni
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold bg-transparent"
          >
            Saya Alumni — Ingin Berbagi
          </Button>
        </div>

        {/* Secondary Text */}
        <p className="text-blue-100 text-sm pt-4">✨ Gratis dan mudah untuk memulai. Tidak perlu kartu kredit.</p>
      </div>
    </section>
  )
}
