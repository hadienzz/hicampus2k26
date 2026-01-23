"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  // {
  //   question: "Apakah acara ini berbayar?",
  //   answer:
  //     "Tidak, acara ini 100% gratis untuk semua siswa. Kami menyelenggarakan ini sebagai bentuk komitmen mendukung generasi penerus masuk PTN impian mereka.",
  // },
  // {
  //   question: "Saya kelas X, boleh ikut?",
  //   answer:
  //     "Boleh banget! Bahkan semakin awal kamu mulai persiapan, semakin bagus. Acaranya cocok buat kelas X sampai kelas XII. Malah, kelas X bisa mulai planning dari sekarang.",
  // },
  {
    question:
      "Kalau belum tahu mau memilih kampus atau jurusan, apakah Hi Campus 2026 ini masih relevan?",
    answer:
      "Sangat relevan. Campus Expo dirancang untuk membantu siswa yang masih dalam tahap eksplorasi dengan menghadirkan berbagai kampus serta pengalaman langsung dari kakak alumni, sehingga peserta dapat memperoleh gambaran yang lebih jelas sebelum menentukan pilihan.",
  },
  {
    question: "Kampus apa saja yang akan hadir?",
    answer:
      "Hi Campus 2026 menghadirkan perwakilan lebih dari 22 perguruan tinggi negeri di Indonesia.",
  },
  {
    question: "Bagaimana cara mengikuti Hi Campus 2026?",
    answer:
      "Cukup isi form pendaftaran, datang sesuai jadwal dan lokasi acara, lalu manfaatkan setiap sesi untuk bertanya dan mengeksplorasi berbagai pilihan kampus yang diberikan. ",
  },
  {
    question: "Apakah wajib mendaftar sebelum mengikuti acara Hi Campus 2026?",
    answer:
      "Sangat diwajibkan. Pendaftaran dilakukan melalui form online untuk keperluan pendataan dan syarat mendapatkan souvenir.",
  },
  {
    question: "Apakah akan ada recording?",
    answer:
      "Acara ini fokus pada interaksi langsung dan sesi tanya-jawab, jadi tidak ada rencana recording formal. Tapi kamu bisa rekam untuk catatan pribadi kalau diizinkan host.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#f4ecff] via-[#fff8eb] to-[#fef6dd]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b1b60] mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-lg text-[#4c3f7d]">
            Kalau ada yang masih bingung, jawaban di bawah ini mungkin membantu
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#e2d5ff] rounded-lg px-6 py-2 data-[state=open]:bg-[#f4ecff] transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-4 text-left font-semibold text-[#2b1b60]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4c3f7d] pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
