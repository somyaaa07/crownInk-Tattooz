"use client";
// components/Lightbox.jsx

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ item, items, onClose, onNext, onPrev }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const total = items.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Inner container */}
      <div
        className="relative w-full max-w-5xl mx-3 sm:mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="w-full flex items-center justify-between mb-3 sm:mb-4 px-1">
          <div className="min-w-0 mr-4">
            <p className="font-['Bebas_Neue'] text-[#f5f5f5] text-xl sm:text-2xl tracking-widest leading-none truncate">
              {item.caption}
            </p>
            <p className="font-['DM_Sans'] text-[#f5f5f5]/40 text-[10px] tracking-[0.35em] uppercase mt-0.5 font-medium truncate">
              {item.artist} · {item.category}
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="hidden xs:block font-['DM_Sans'] text-[#f5f5f5]/30 text-xs tracking-[0.3em]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 border border-[#f5f5f5]/20 flex items-center justify-center text-[#f5f5f5]/60 hover:text-[#f5f5f5] hover:border-[#f5f5f5]/50 transition-all duration-200"
              aria-label="Close lightbox"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-h-[60vh] sm:max-h-[75vh] overflow-hidden bg-[#1a1a1a]">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full max-h-[60vh] sm:max-h-[75vh] object-contain"
            loading="eager"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between w-full mt-3 sm:mt-4 px-1">
          <button
            onClick={onPrev}
            className="flex items-center gap-1.5 sm:gap-2 font-['DM_Sans'] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors duration-200 font-semibold group"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden xs:inline">Previous</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-[#f5f5f5]" : "w-2 bg-[#f5f5f5]/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="flex items-center gap-1.5 sm:gap-2 font-['DM_Sans'] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors duration-200 font-semibold group"
            aria-label="Next image"
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}