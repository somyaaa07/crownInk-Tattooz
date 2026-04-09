// About page

import AboutUs from "@/component/about/About";
import Navbar from "@/component/Navbar";
import Footer from "@/component/about/Footer";
import HeroSection from "@/component/about/Hero";
export const metadata = {
  title: "About Us | Crown Ink Tattoo Studio, Greater Noida",
  description:
    "Learn about Crown Ink Tattoo Studio in Greater Noida – our expert tattoo artists, custom designs, and commitment to quality, hygiene, and creativity. Discover why we are a leading tattoo studio in the region.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Footer />
    </>
  );
}
