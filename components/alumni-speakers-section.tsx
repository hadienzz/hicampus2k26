import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AlumniSpeaker {
  name: string;
  ptn: string;
  major: string;
  year: number;
  track: "Saintek" | "Soshum";
  initials: string;
}

const speakers: AlumniSpeaker[] = [
  {
    name: "Hadienzz",
    ptn: "ITB",
    major: "Teknik Informatika",
    year: 2025,
    track: "Saintek",
    initials: "AP",
  },
  {
    name: "Hadienzz",
    ptn: "UI",
    major: "Psikologi",
    year: 2025,
    track: "Soshum",
    initials: "SN",
  },
  {
    name: "Hadienzz",
    ptn: "Undip",
    major: "Kedokteran",
    year: 2025,
    track: "Saintek",
    initials: "BS",
  },
  {
    name: "Hadienzz",
    ptn: "UGM",
    major: "Ilmu Komunikasi",
    year: 2025,
    track: "Soshum",
    initials: "DW",
  },
  {
    name: "Hadienzz",
    ptn: "UI",
    major: "Sistem Informasi",
    year: 2025,
    track: "Saintek",
    initials: "RF",
  },
  {
    name: "Hadienzz",
    ptn: "UNAIR",
    major: "Bisnis",
    year: 2025,
    track: "Soshum",
    initials: "MK",
  },
];

export default function AlumniSpeakersSection() {
  return (
    <section id="speakers" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Pembicara Alumni
          </h2>
          <p className="text-lg text-gray-600">
            Kenalan dengan kakak alumni yang akan sharing di acara Hicampus:
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white text-center"
            >
              {/* Avatar */}
              <div className="mb-4 flex justify-center">
                <Avatar className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold">
                    {speaker.initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {speaker.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{speaker.major}</p>
              <p className="text-sm font-semibold text-blue-600 mb-3">
                {speaker.ptn}
              </p>

              {/* Badges */}
              <div className="flex gap-2 justify-center flex-wrap mb-3">
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 border-0"
                >
                  {speaker.track}
                </Badge>
                <Badge variant="outline" className="border-gray-300">
                  {"'"}
                  {speaker.year}
                </Badge>
              </div>

              {/* Button */}
              <button className="w-full py-2 px-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition">
                Lihat Profil
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
