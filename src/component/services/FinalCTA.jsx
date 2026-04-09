"use client";
// components/services/FinalCTA.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="final-cta" ref={ref} className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1600&q=80"
          alt="Tattoo studio atmosphere"
          fill
          className="object-cover object-center opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
      </div>

      <div
        className="absolute inset-0 z-[1] opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-white/30" />
          <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-semibold">
            Get Inked
          </span>
          <div className="h-px w-8 bg-white/30" />
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Bebas_Neue'] text-white text-[18vw] sm:text-[15vw] lg:text-[10vw] leading-[0.9] tracking-wide"
          >
            READY TO GET
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8 sm:mb-10">
          <motion.h2
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Bebas_Neue'] text-transparent text-[18vw] sm:text-[15vw] lg:text-[10vw] leading-[0.9] tracking-wide"
            style={{ WebkitTextStroke: "2px rgba(245,245,245,0.65)" }}
          >
            INKED?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.65 }}
          className="font-['DM_Sans'] text-white/45 text-sm lg:text-base leading-relaxed max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10"
        >
          Book your free consultation today. Walk in with an idea — walk out
          with art that lasts a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 sm:px-12 py-5 hover:bg-white transition-colors duration-300"
          >
            Book Appointment <MoveRight size={14} />
          </Link>
          <Link
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-white border border-white/25 px-8 sm:px-12 py-5 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Call Us Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12"
        >
          {[
            { label: "Location", val: "Connaught Place, New Delhi" },
            { label: "Hours", val: "Tue–Sun · 11am – 8pm" },
            { label: "Phone", val: "+91 98765 43210" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-['DM_Sans'] text-white/25 text-[9px] tracking-[0.4em] uppercase font-semibold mb-1">
                {item.label}
              </p>
              <p className="font-['DM_Sans'] text-white/50 text-sm">{item.val}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}