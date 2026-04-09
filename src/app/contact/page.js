// app/page.jsx
// Main contact page — assembles all sections

import Hero from "@/component/contact/HeroSection";
import ContactForm from "@/component/contact/ContactForm";
import StudioInfo from "@/component/contact/StudioInfo";
import SocialLinks from "@/component/contact/SocialLinks";
import FAQ from "@/component/contact/FAQ";
import Policies from "@/component/contact/Policies";
import Footer from "@/component/contact/Footer";
import Navbar from "@/component/Navbar";

export const metadata = {
  title:
    "Contact Crown Ink Tattoo Studio | Book Tattoo Appointment in Greater Noida",
  description:
    "Contact Crown Ink Tattoo Studio in New Delhi to book your tattoo appointment or consultation. Call, WhatsApp, or visit us for custom tattoos, fine line, blackwork, and more.",

  robots: {
    index: true,
    follow: true,
  },
};
export default function ContactPage() {
  return (
    <main className=" min-h-screen bg-[#0a0a0a] ">
      {/* Hero — full-viewport entrance */}
      <Navbar />
      <Hero />
      {/* Normal container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Contact + Studio */}
        <section className="py-20 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <StudioInfo />
          </div>
        </section>

        <div className="divider my-4" />
      </div>

      {/* 🔥 FULL WIDTH SocialLinks */}
      <section className="bg-[#1c1c1c] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <SocialLinks />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="divider my-4" />
        <FAQ />
        <div className="divider my-4" />
      </div>

      {/* 🔥 FULL WIDTH Policies */}
      <section className="bg-[#111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <Policies />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
