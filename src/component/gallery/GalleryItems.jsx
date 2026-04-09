"use client";
// components/GalleryItem.jsx

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const heightMap = {
  tall: "row-span-2",
  medium: "",
  short: "",
};

const aspectMap = {
  tall: "aspect-[3/5]",
  medium: "aspect-[4/5]",
  short: "aspect-[4/3]",
};

export default function GalleryItem({ item, onOpen, index = 0 }) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#222] cursor-pointer ${heightMap[item.height]}`}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.caption}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
    >
      <div className={`relative w-full ${aspectMap[item.height]}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
       
          unoptimized
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-[#1c1c1c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Top-right arrow badge */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#f5f5f5] flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <ArrowUpRight size={14} className="text-[#1c1c1c]" />
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-['DM_Sans'] text-[#f5f5f5]/70 text-[9px] tracking-[0.35em] uppercase font-semibold bg-[#1c1c1c]/60 px-2.5 py-1 backdrop-blur-sm">
            {item.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <p className="font-['Bebas_Neue'] text-[#f5f5f5] text-lg tracking-wider leading-none">
            {item.caption}
          </p>
          <p className="font-['DM_Sans'] text-[#f5f5f5]/50 text-[10px] tracking-[0.3em] uppercase mt-1 font-medium">
            {item.artist}
          </p>
        </div>
      </div>
    </div>
  );
}