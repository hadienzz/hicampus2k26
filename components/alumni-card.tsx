import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface AlumniCardProps {
  name: string
  university: string
  major: string
  year: string
  category: string
  image: string
}

export default function AlumniCard({ name, university, major, year, category, image }: AlumniCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        {/* Image */}
        <div className="h-48 bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-xl text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">
              {university} • {major}
            </p>
            <p className="text-xs text-gray-500">Angkatan {year}</p>
          </div>

          {/* Badge */}
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              {category}
            </Badge>
          </div>

          {/* Button */}
          <Button
            variant="default"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 rounded-lg"
          >
            Lihat Profil
            <ArrowRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
