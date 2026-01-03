import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Target } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tentang <span className="text-blue-600">Hicampus</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform yang menghubungkan generasi dengan pengalaman nyata dari para alumni yang telah meraih impian
            mereka.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Mengapa Hicampus?</h3>
            <p className="text-gray-600 leading-relaxed">
              Hicampus adalah jembatan yang menghubungkan alumni dari berbagai PTN terbaik di seluruh Indonesia dengan
              siswa sekolah yang sedang mempersiapkan diri untuk melangkah ke jenjang pendidikan yang lebih tinggi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Melalui platform ini, siswa dapat belajar langsung dari pengalaman, strategi, dan cerita perjalanan kuliah
              para alumni. Kami percaya bahwa berbagi pengalaman adalah kunci untuk membuka potensi maksimal setiap
              siswa.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:block">
            <div className="h-full bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-4 bg-amber-200 rounded-full mb-4">
                  <BookOpen className="w-12 h-12 text-amber-700" />
                </div>
                <p className="text-gray-700 font-semibold">Pengalaman + Strategi = Kesuksesan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="inline-block p-4 bg-blue-100 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Terhubung langsung dengan alumni</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dapatkan akses ke jaringan alumni dari PTN terbaik di seluruh nusantara.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="inline-block p-4 bg-amber-100 rounded-full">
                <BookOpen className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Belajar strategi lolos PTN</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pelajari strategi nyata dari pengalaman alumni yang telah berhasil masuk PTN impian mereka.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="inline-block p-4 bg-rose-100 rounded-full">
                <Target className="w-8 h-8 text-rose-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Bangun kepercayaan diri</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tingkatkan kepercayaan diri menuju kampus impian dengan mentoring dari yang lebih berpengalaman.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
