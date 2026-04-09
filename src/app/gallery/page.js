// app/gallery/page.jsx  (or pages/gallery.jsx for Pages Router)

import GalleryHero from "@/component/gallery/GalleryHero";
import GalleryGrid from "@/component/gallery/GalleryGrid";
import GalleryFooter from "@/component/services/Footer";
import Navbar from "@/component/Navbar";

export const metadata = {
  title: "Tattoo Gallery | Crown Ink Tattoo Studio, Greater Noida",
  description:
    "Explore Crown Ink Tattoo Studio's gallery of custom tattoos in Greator Noida. Featuring fine line, blackwork, Japanese, geometric, portrait, and minimalist tattoo styles by expert artists.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#1c1c1c] text-[#f5f5f5] min-h-screen">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryFooter />
    </main>
  );
}
