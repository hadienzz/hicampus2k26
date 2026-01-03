import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface ScheduleItem {
  time: string
  activity: string
  description: string
}

const schedule: ScheduleItem[] = [
  {
    time: "08.00 – 08.15",
    activity: "Pembukaan",
    description: "Sapaan singkat dari pihak sekolah dan host Hicampus",
  },
  {
    time: "08.15 – 09.00",
    activity: "Sharing Perjalanan Masuk PTN",
    description: "Cerita lengkap dari alumni tentang prosesnya lolos PTN",
  },
  {
    time: "09.00 – 09.30",
    activity: "Sesi Tanya Jawab",
    description: "Kesempatan tanya langsung ke alumni. Pertanyaan apa pun boleh!",
  },
  {
    time: "09.30 – 10.00",
    activity: "Info Jurusan & Kampus",
    description: "Deep dive ke dunia jurusan, beasiswa, dan kehidupan kampus",
  },
  {
    time: "10.00 – 10.15",
    activity: "Penutup & Dokumentasi",
    description: "Foto bersama alumni dan doorprize untuk peserta",
  },
]

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Rundown Acara</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              📍 <span className="font-semibold">Lokasi:</span> Aula Sekolah
            </p>
            <p>
              👕 <span className="font-semibold">Dresscode:</span> Rapi (bebas baju apa pun yang nyaman)
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-3"></div>
                  {index !== schedule.length - 1 && <div className="w-1 h-24 bg-blue-200"></div>}
                </div>

                {/* Content */}
                <Card className="flex-1 p-4 border-0 hover:shadow-md transition-shadow bg-white">
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-orange-600">{item.time}</p>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">{item.activity}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
