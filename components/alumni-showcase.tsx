"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import AlumniCard from "./alumni-card"

const ALUMNI_DATA = [
  {
    id: 1,
    name: "Nur Azizah",
    university: "UI",
    major: "Teknik Informatika",
    year: "2023",
    category: "Saintek",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nur",
  },
  {
    id: 2,
    name: "Muhammad Rizki",
    university: "ITB",
    major: "Teknik Sipil",
    year: "2023",
    category: "Saintek",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    university: "UGM",
    major: "Psikologi",
    year: "2022",
    category: "Soshum",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
  },
  {
    id: 4,
    name: "Budi Santoso",
    university: "Unair",
    major: "Kedokteran",
    year: "2023",
    category: "Saintek",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
  },
  {
    id: 5,
    name: "Nia Wijaya",
    university: "Unpad",
    major: "Hukum",
    year: "2022",
    category: "Soshum",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nia",
  },
  {
    id: 6,
    name: "Adi Pratama",
    university: "Telkom",
    major: "Teknik Telekomunikasi",
    year: "2023",
    category: "Saintek",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adi",
  },
]

export default function AlumniShowcase() {
  const [category, setCategory] = useState("all")

  const filteredAlumni = category === "all" ? ALUMNI_DATA : ALUMNI_DATA.filter((a) => a.category === category)

  return (
    <section id="alumni" className="py-12 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Jelajahi Alumni Kami</h2>
          <p className="text-lg text-gray-600">Temui para alumni yang telah membuktikan kesuksesan mereka</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-md bg-white">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">30+</p>
              <p className="text-gray-600 font-medium">Alumni Terdaftar</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-amber-600 mb-2">18</p>
              <p className="text-gray-600 font-medium">PTN di Seluruh Indonesia</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-rose-600 mb-2">300+</p>
              <p className="text-gray-600 font-medium">Siswa Terhubung</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <Tabs value={category} onValueChange={setCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-auto">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="Saintek">Saintek</TabsTrigger>
              <TabsTrigger value="Soshum">Soshum</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} {...alumni} />
          ))}
        </div>
      </div>
    </section>
  )
}
