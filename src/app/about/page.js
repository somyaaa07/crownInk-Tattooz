// About page

import AboutUs from "@/component/about/About";
import Navbar from "@/component/Navbar";
import Footer from "@/component/about/Footer";;
import HeroSection from "@/component/about/Hero";
;


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <Footer/>
    
    </>
  );
}
