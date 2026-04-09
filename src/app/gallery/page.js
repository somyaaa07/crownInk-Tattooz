// app/gallery/page.jsx  (or pages/gallery.jsx for Pages Router)

import GalleryHero from "@/component/gallery/GalleryHero";
import GalleryGrid from "@/component/gallery/GalleryGrid";
import GalleryFooter from "@/component/services/Footer";
import Navbar from "@/component/Navbar";

export const metadata = {
  title: "Gallery | Crown Ink Tattoo Studio",
  description:
    "Browse our portfolio of custom tattoos — fine line, blackwork, Japanese, geometric, portrait, and minimalist styles. New Delhi's premium tattoo studio.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#1c1c1c] text-[#f5f5f5] min-h-screen">
        <Navbar/>
      <GalleryHero />
      <GalleryGrid />
      <GalleryFooter />
    </main>
  );
}