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
    question: "Kalau belum tahu mau ambil jurusan apa, apa masih relevan ikut?",
    answer:
      "Sangat relevan! Ini justru tempat terbaik buat kamu yang masih bingung. Alumni akan cerita pros-cons dari jurusannya, dan kamu bisa tanya langsung. Sering kali setelah acar ini, siswa jadi punya gambaran lebih jelas.",
  },
  {
    question: "Apakah bisa tanya secara pribadi ke alumni setelah sesi?",
    answer:
      "Tentu saja! Setelah sesi formal, ada waktu informal di mana kamu bisa ngobrol santai, tukar kontak, atau bahkan tanya lebih detail ke alumni. Beberapa alumni juga bersedia jadi mentor informal setelahnya.",
  },
  {
    question: "Bagaimana kalau saya tidak bisa hadir?",
    answer:
      "Tidak masalah. Hubungi OSIS atau Wali Kelas untuk beritahu. Tapi kami sarankan datang karena energinya lain banget live dibanding dari jauh. Plus, ada doorprize untuk peserta yang hadir.",
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
            Pertanyaan yang Sering Diajukan
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
