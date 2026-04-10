"use client";
// components/services/CoverUpSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CoverUpSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="cover-up"
      className="bg-[#141414]"
      label="Transform Old Work"
      heading="COVER-UP TATTOOS"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-4 items-stretch">

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative h-[300px] sm:h-[360px] lg:h-[420px] overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1562409822-3bb5e5e2dbdc?w=800&q=80"
            alt="Before cover-up tattoo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="font-['Bebas_Neue'] text-white/40 text-5xl tracking-widest">BEFORE</span>
          </div>
          <div className="absolute top-4 left-4 bg-[#1a1a1a]/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-['DM_Sans'] text-white/50 text-[9px] tracking-[0.4em] uppercase font-semibold">Old Tattoo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative h-[300px] sm:h-[360px] lg:h-[420px] overflow-hidden group"
        >
          <Image
            src="https://images.unsplash.com/photo-1542727365-19732a80dcfd?w=800&q=80"
            alt="After cover-up tattoo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="font-['Bebas_Neue'] text-white text-5xl tracking-widest">AFTER</span>
          </div>
          <div className="absolute top-4 left-4 bg-[#f5f5f5] px-3 py-1.5">
            <span className="font-['DM_Sans'] text-[#1c1c1c] text-[9px] tracking-[0.4em] uppercase font-bold">New Artwork</span>
          </div>
        </motion.div>
      </div>

      {/* Info row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.65 }}
        className="mt-8 bg-[#1a1a1a] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 border border-white/5"
      >
        <div className="max-w-xl">
          <h4 className="font-['Bebas_Neue'] text-white text-2xl tracking-wider mb-3">
            TURN REGRET INTO ART
          </h4>
          <p className="font-['DM_Sans'] text-white/50 text-lg leading-relaxed">
            Whether it's an old design that no longer represents you or a tattoo
            you've grown out of, our cover-up specialists will transform it into
            something you're proud to wear.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 py-4 hover:bg-white transition-colors duration-300"
        >
          Book Consultation <MoveRight size={14} />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}