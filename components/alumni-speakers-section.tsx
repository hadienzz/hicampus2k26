import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Campus {
  name: string;
  image: string;
  location?: string;
  link: string;
}

const campuses: Campus[] = [
  {
    name: "IPB University",
    image: "/campus/ipb.png",
    location: "Jumlah Alumni: 85",
    link: "https://www.ipb.ac.id/id/",
  },
  {
    name: "Institut Teknologi Sumatera (ITERA)",
    image: "/campus/itera.png",
    location: "Jumlah Alumni: 18",
    link: "https://www.itera.ac.id/",
  },
  {
    name: "Universitas Brawijaya (UB)",
    image: "/campus/ub.png",
    location: "Jumlah Alumni: 13",
    link: "https://www.ub.ac.id/",
  },
  {
    name: "Universitas Indonesia (UI)",
    image: "/campus/ui.png",
    location: "Jumlah Alumni: 85",
    link: "http://ui.ac.id/",
  },
  {
    name: "UIN Syarif Hidayatullah Jakarta",
    image: "/campus/uin.jpg",
    location: "Jumlah Alumni: 50",
    link: "http://uinjkt.ac.id/",
  },
  {
    name: "Universitas Negeri Jakarta (UNJ)",
    image: "/campus/unj.png",
    location: "Jumlah Alumni: 22",
    link: "https://unj.ac.id/",
  },
  {
    name: "Universitas Padjadjaran (UNPAD)",
    image: "/campus/unpad.jpg",
    location: "Jumlah Alumni: 15",
    link: "https://www.unpad.ac.id/",
  },
  {
    name: "Universitas Pendidikan Indonesia (UPI)",
    image: "/campus/upi.png",
    location: "Jumlah Alumni: 29",
    link: "https://www.upi.edu/",
  },
  {
    name: "Universitas Pembangunan Nasional Veteran (UPN)",
    image: "/campus/upn.webp",
    location: "Jumlah Alumni: 35",
    link: "https://www.upnvj.ac.id/",
  },
];

export default function AlumniSpeakersSection() {
  return (
    <section id="speakers" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Temukan Kampus Impianmu!
          </h2>
          <p className="text-lg text-gray-600">
            Beberapa kampus tujuan favorit yang bisa kamu eksplor di Hicampus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((campus, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-0 bg-linear-to-br from-gray-50 to-white text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={campus.image}
                    alt={campus.name}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {campus.name}
              </h3>
              {campus.location && (
                <p className="text-sm text-gray-600 mb-3">{campus.location}</p>
              )}

              <a
                href={campus.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition"
             >
                Lihat detail kampus
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
