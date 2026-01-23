import { Card } from "@/components/ui/card";

interface ScheduleItem {
  activity: string;
  description: string;
}

const schedule: ScheduleItem[] = [
  {
    activity: "Open Gate",
    description:
      "Peserta registrasi, masuk ke ruangan, dan menuju tempat duduk untuk mulai acara.",
  },
  {
    activity: "Pembukaan",
    description:
      "Sambutan dari pihak sekolah dan MC Hi Campus, serta pengenalan rangkaian acara.",
  },
  {
    activity: "Parade",
    description:
      "Perkenalan singkat para alumni dan kampus tujuan mereka secara bergantian.",
  },
  {
    activity: "Sambutan",
    description:
      "Sambutan lanjutan dan motivasi untuk siswa tentang pentingnya mempersiapkan diri ke dunia kampus.",
  },
  {
    activity: "Pemaparan Kampus",
    description:
      "Sesi sharing dari alumni tentang kampus, jurusan, kehidupan perkuliahan.",
  },
  {
    activity: "Talent dan Talkshow",
    description:
      "Penampilan bakat siswa dilanjutkan talkshow santai dan sesi tanya jawab bersama alumni.",
  },
];

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#fff1d2] via-[#fff8eb] to-[#f4ecff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b60] mb-4">
            Rundown Acara
          </h2>
          <div className="space-y-2 text-[#4c3f7d]">
            <p>
              📍 <span className="font-semibold">Lokasi:</span> Boash Convention
              Center
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
                  <div className="w-4 h-4 bg-[#f7c768] rounded-full mt-3"></div>
                  {index !== schedule.length - 1 && (
                    <div className="w-1 h-24 bg-[#f4ecff]"></div>
                  )}
                </div>

                {/* Content */}
                <Card className="flex-1 p-4 border-0 hover:shadow-md transition-shadow bg-white/80">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2b1b60]">
                      {item.activity}
                    </h3>
                    <p className="text-[#4c3f7d] text-sm">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
