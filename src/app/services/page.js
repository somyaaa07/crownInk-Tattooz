// app/services/page.jsx
import Navbar from "@/component/Navbar";
import HeroSection from "@/component/services/HeroSection";
import ServicesGrid from "@/component/services/ServiceGrid";
import ServiceDetails from "@/component/services/ServiceDetails";
import CustomTattooSection from "@/component/services/CustomTattooSection";
import CoverUpSection from "@/component/services/CoverUpSection";
import ConsultationSection from "@/component/services/ConsultationSection";
import HygieneSection from "@/component/services/HyigeneSection";
import AftercareSection from "@/component/services/AftercareSection";
import PricingSection from "@/component/services/PricingSection";
import FAQSection from "@/component/services/FAQSection";
import FinalCTA from "@/component/services/FinalCTA";
import Footer from "@/component/services/Footer";

export const metadata = {
  title: "Tattoo Services | Crown Ink Tattoo Studio, Greater Noida",
  description:
    "Discover Crown Ink Tattoo Studio's professional tattoo services in Greator Noida. From fine line, blackwork, and Japanese styles to custom designs, cover-ups, and portrait tattoos, our expert artists bring your vision to life.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#1c1c1c] text-[#f5f5f5] min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <ServiceDetails />
      <CustomTattooSection />
      <CoverUpSection />
      <ConsultationSection />
      <HygieneSection />
      <AftercareSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
