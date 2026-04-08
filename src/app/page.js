import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Gallery from "../component/Gallery";
import Artists from "../component/Artist";
import Testimonials from "../component/Testimonal";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Services from "@/component/Service";

export default function Home() {
  return (
    <main className="bg-[#1c1c1c] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Gallery />
      <Artists />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}