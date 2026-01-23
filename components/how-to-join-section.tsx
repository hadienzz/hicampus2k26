import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Cek jadwal dan lokasi acara",
    description:
      "Pastikan kamu sudah tahu kapan dan di mana acaranya akan diadakan di sekolahmu.",
  },
  // {
  //   number: 2,
  //   title: "Isi form pendaftaran atau daftar lewat OSIS",
  //   description: "Daftar secara online atau hubungi OSIS/Wali Kelas untuk mendapat tempat kursi.",
  // },
  {
    number: 2,
    title: "Datang tepat waktu dengan pertanyaan siap",
    description:
      "Tiba tepat waktu dan siapkan 2-3 pertanyaan untuk ditanya ke kakak alumni.",
  },
];

export default function HowToJoinSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cara Ikut Acara Hicampus
          </h2>
          <p className="text-lg text-gray-600">
            Gampang banget, tinggal 2 langkah aja!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all relative overflow-hidden"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 pr-8">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sudah siap datang?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ayo, jangan sampai ketinggalan informasi seputar PTN dan jurusan
            favoritmu, lengkap dengan insight dan tips langsung dari para
            alumni.
          </p>
        </div>
      </div>
    </section>
  );
}
