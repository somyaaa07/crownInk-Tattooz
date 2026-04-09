"use client";
// components/services/HeroSection.jsx

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Banner2.png"
          alt="Tattoo artist working"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-2 lg:px-12 md:px-6  py-10 sm:py-12  w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-5"
        >
          <div className="h-px w-8 bg-white/30 mt-18" />
          <span className="font-['DM_Sans'] mt-18 text-white/40 text-[9px] sm:text-[11px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-semibold ">
            crowninkwell Studio · New Delhi
          </span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Bebas_Neue'] text-white text-[22vw] sm:text-[18vw] lg:text-[12vw] leading-[0.9] tracking-wide"
          >
            OUR
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.62, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Bebas_Neue'] text-transparent text-[16vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] tracking-wide"
            style={{ WebkitTextStroke: "2px rgba(245,245,245,0.7)" }}
          >
            SERVICES
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="font-['DM_Sans'] text-white/45 text-sm lg:text-base leading-relaxed max-w-sm sm:max-w-md mb-8 sm:mb-10"
        >
          From delicate fine-line florals to bold full sleeves — every piece is
          custom crafted, never templated.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 sm:px-10 py-4 hover:bg-white transition-colors duration-300"
          >
            Book Appointment <MoveRight size={14} />
          </Link>
          <Link
            href="#services-grid"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-white border border-white/25 px-8 sm:px-10 py-4 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
