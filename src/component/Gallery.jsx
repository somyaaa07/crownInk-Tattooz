"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    style: "Design",
    tag: "Sleeve",
    src: "/photos/image28.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    style: "Design",
    tag: "Wrist",
    src: "/photos/image40.jpg",
    span: "",
  },
  {
    id: 3,
    style: "Design",
    tag: "Back",
    src: "/photos/image50.jpg",
    span: "",
  },
  {
    id: 4,
    style: "Design",
    tag: "Chest",
    src: "/photos/image39.jpg",
    // CHANGED: removed "col-span-2" on mobile (applied via responsive class below)
    span: "sm:col-span-2",
  },
  {
    id: 5,
    style: "Design",
    tag: "Arm",
    src: "/photos/image69.jpg",
    span: "",
  },
  {
    id: 6,
    style: "Design",
    tag: "Ankle",
    src: "/photos/image67.jpg",
    span: "",
  },
  {
    id: 7,
    style: "Design",
    tag: "Ankle",
    src: "/photos/image2.jpg",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    // CHANGED: px-4 sm:px-6 lg:px-12 — consistent section padding
    <section
      id="gallery"
      ref={ref}
      className="bg-[#141414] py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-white/30" />
              <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-medium">
                Portfolio
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                // CHANGED: text-[15vw] sm:text-[13vw] lg:text-[7vw] — prevents blowout on small phones
                className="font-['Bebas_Neue'] text-white text-[15vw] sm:text-[13vw] lg:text-[7vw] leading-none tracking-wide"
              >
                THE GALLERY
              </motion.h2>
            </div>
          </div>

          <motion.a
            href="/gallery"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors duration-300 font-semibold group"
          >
            View All Work
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </motion.a>
        </div>

        {/* Grid */}
        {/*
          CHANGED: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          auto-rows-[220px] sm:auto-rows-[280px] lg:auto-rows-[320px]
          — shorter rows on mobile prevent cards from being too tall in single column
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 auto-rows-[220px] sm:auto-rows-[280px] lg:auto-rows-[320px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.08 * i,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              // CHANGED: item.span now uses sm: prefix for col-span-2 (see galleryItems above)
              // row-span-2 still applies at all sizes since tall cards work in single col too
              className={`relative group overflow-hidden cursor-pointer bg-[#1e1e1e] ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.style}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Style tag */}
              <div className="absolute top-4 left-4 z-10"></div>

              {/* Arrow on hover */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-black" />
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-['Bebas_Neue'] text-white text-2xl tracking-wider leading-none">
                  {item.style}
                </p>
                <p className="font-['DM_Sans'] text-white/50 text-[10px] tracking-[0.3em] uppercase mt-1 font-medium">
                  Custom Design
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
