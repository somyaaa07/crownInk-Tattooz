"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";


const artists = [
  {
    name: "Arjun Mehta",
    specialty: "Blackwork & Geometric",
    experience: "9 yrs",
    tattoos: 380,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Priya Nair",
    specialty: "Fine Line & Botanical",
    experience: "6 yrs",
    tattoos: 210,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Rohan Das",
    specialty: "Japanese & Neo-Traditional",
    experience: "11 yrs",
    tattoos: 520,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Kavya Sinha",
    specialty: "Minimalist & Script",
    experience: "5 yrs",
    tattoos: 180,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

export default function Artists() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="artists" ref={ref} className="bg-[#0f0f0f] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-white/30" />
              <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-medium">
                The Team
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Bebas_Neue'] text-white text-[13vw] lg:text-[7vw] leading-none tracking-wide"
              >
                OUR ARTISTS
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:block font-['DM_Sans'] text-white/30 text-sm max-w-xs leading-relaxed"
          >
            Each artist brings a distinct voice. Find the one that speaks to yours.
          </motion.p>
        </div>

        {/* Artists grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-[#1a1a1a] mb-4">
                <Image
                  src={artist.src}
                  alt={artist.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Experience badge */}
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1">
                  <span className="font-['DM_Sans'] text-black text-[9px] tracking-[0.3em] uppercase font-bold">
                    {artist.experience}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <button className="font-['DM_Sans'] text-[10px] tracking-[0.3em] uppercase font-bold text-white border border-white/50 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
                    View Work <BsArrowUpRightCircleFill  size={12} />
                  </button>
                </div>

                {/* Tattoo count bottom */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="font-['Bebas_Neue'] text-white/50 text-2xl tracking-wide">
                    {artist.tattoos}+
                  </span>
                </div>
              </div>

              {/* Info row */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-['Bebas_Neue'] text-white text-xl tracking-wider leading-none mb-1">
                    {artist.name}
                  </h3>
                  <p className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.25em] uppercase font-medium">
                    {artist.specialty}
                  </p>
                </div>
                <button className="text-white/20 hover:text-white transition-colors mt-0.5 shrink-0">
                  <FaInstagram size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}