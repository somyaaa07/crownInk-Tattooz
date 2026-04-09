"use client";
// components/services/ServiceCard.jsx

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <div
      className="group relative overflow-hidden bg-[#1a1a1a] cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      {/* CHANGED: h-56 sm:h-64 md:h-72 — shorter on small screens, grows proportionally */}
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
        <Image
          src={service.src}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

        {/* Arrow on hover */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-[#f5f5f5] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={15} className="text-[#1c1c1c]" />
        </div>
      </div>

      {/* Body */}
      {/* CHANGED: p-5 sm:p-6 — slightly less padding on small cards */}
      <div className="p-5 sm:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-['DM_Sans'] text-[9px] tracking-[0.3em] uppercase text-white/40 border border-white/10 px-2.5 py-1 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-['Bebas_Neue'] text-white text-2xl tracking-wider leading-none mb-3 group-hover:text-[#f5f5f5] transition-colors">
          {service.title}
        </h3>
        <p className="font-['DM_Sans'] text-white/50 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/8">
          <div>
            <p className="font-['DM_Sans'] text-white/30 text-[9px] tracking-[0.3em] uppercase mb-0.5 font-semibold">Duration</p>
            <p className="font-['Bebas_Neue'] text-white/70 text-lg tracking-wide">{service.duration}</p>
          </div>
          <div className="text-right">
            <p className="font-['DM_Sans'] text-white/30 text-[9px] tracking-[0.3em] uppercase mb-0.5 font-semibold">Starting</p>
            <p className="font-['Bebas_Neue'] text-[#f5f5f5] text-lg tracking-wide">{service.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}