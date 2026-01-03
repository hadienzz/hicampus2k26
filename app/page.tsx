import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import EventInfoSection from "@/components/event-info-section"
import WhyJoinSection from "@/components/why-join-section"
import AlumniSpeakersSection from "@/components/alumni-speakers-section"
import ScheduleSection from "@/components/schedule-section"
import HowToJoinSection from "@/components/how-to-join-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <EventInfoSection />
      <WhyJoinSection />
      <AlumniSpeakersSection />
      <ScheduleSection />
      <HowToJoinSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
