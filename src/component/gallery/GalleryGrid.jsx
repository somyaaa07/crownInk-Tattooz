"use client";
// components/GalleryGrid.jsx

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryItem from "./GalleryItems";
import Lightbox from "./Lightbox";
import { categories, galleryImages } from "../../app/gallery/data/GalleryData";
import { SlidersHorizontal } from "lucide-react";
const PAGE_SIZE = 12;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const currentLightboxIndex = lightboxItem
    ? filtered.findIndex((i) => i.id === lightboxItem.id)
    : -1;

  const handleNext = () => {
    const next = filtered[(currentLightboxIndex + 1) % filtered.length];
    setLightboxItem(next);
  };
  const handlePrev = () => {
    const prev =
      filtered[(currentLightboxIndex - 1 + filtered.length) % filtered.length];
    setLightboxItem(prev);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="gallery-grid" className="bg-[#1c1c1c] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={13} className="text-[#f5f5f5]/30" />
            <span className="font-['DM_Sans'] text-[#f5f5f5]/30 text-[10px] tracking-[0.4em] uppercase font-semibold">
              Filter by Style
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-['DM_Sans'] text-[10px] tracking-[0.3em] uppercase font-semibold px-4 py-2 border transition-all duration-250 ${
                  activeCategory === cat
                    ? "bg-[#f5f5f5] text-[#1c1c1c] border-[#f5f5f5]"
                    : "bg-transparent text-[#f5f5f5]/40 border-[#f5f5f5]/15 hover:text-[#f5f5f5] hover:border-[#f5f5f5]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <span className="font-['DM_Sans'] text-[#f5f5f5]/20 text-[10px] tracking-[0.3em] shrink-0">
            {filtered.length} works
          </span>
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="masonry-grid"
          >
            <style jsx>{`
              .masonry-grid {
                columns: 1;        /* CHANGED: default 1 column on mobile */
                column-gap: 12px;
              }
              .masonry-item {
                break-inside: avoid;
                margin-bottom: 12px;
              }
<<<<<<< HEAD

              @media (min-width: 1024px) {
                .masonry-grid {
                  columns: 4;
                }
=======
              @media (min-width: 480px) {
                .masonry-grid { columns: 2; }  /* CHANGED: 2 cols on small mobile-landscape */
              }
              @media (min-width: 768px) {
                .masonry-grid { columns: 3; }  /* CHANGED: 3 cols on tablet */
              }
              @media (min-width: 1024px) {
                .masonry-grid { columns: 4; }  /* Preserved: 4 cols on desktop */
>>>>>>> 4da5fe1468bd5abca44c514ab4a529eeb3f78758
              }
            `}</style>

            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                className="masonry-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (i % PAGE_SIZE) * 0.05,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GalleryItem item={item} index={i} onOpen={setLightboxItem} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10 sm:mt-14">
            <button
              onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              className="font-['DM_Sans'] text-[11px] tracking-[0.35em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 sm:px-12 py-4 hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* All loaded */}
        {!hasMore && filtered.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-14">
            <div className="h-px w-12 bg-[#f5f5f5]/10" />
            <span className="font-['DM_Sans'] text-[#f5f5f5]/20 text-[10px] tracking-[0.4em] uppercase font-semibold">
              All {filtered.length} works shown
            </span>
            <div className="h-px w-12 bg-[#f5f5f5]/10" />
          </div>
        )}

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-['Bebas_Neue'] text-[#f5f5f5]/20 text-5xl tracking-widest">
              NO WORKS FOUND
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          items={filtered}
          onClose={() => setLightboxItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
