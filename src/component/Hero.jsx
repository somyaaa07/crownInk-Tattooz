"use client";

import { motion } from "framer-motion";
import { MoveRight, ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0f0f0f] flex flex-col overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/15.png"
          alt="Tattoo studio banner"
          fill
          priority
          className="object-cover object-center hidden lg:block"
        />
              <Image
        src="/phone-banner/33.png"
        alt="Mobile"
        fill
        className="block md:hidden object-cover object-center"
      />
          <Image
        src="/tablet-banner/19.png"
        alt="Tablet"
     fill
        className="hidden md:block lg:hidden object-cover object-center "
      />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/40" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        // CHANGED: px-4 sm:px-6 lg:px-12 — tighter padding on small screens
        className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-8"
      ></motion.div>

      {/* Main content */}
      {/* CHANGED: px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 — safer padding on mobile */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full mt-20 sm:mt-30">
        {/* CHANGED: max-w-full sm:max-w-xl lg:max-w-3xl — text block uses full width on mobile */}
        <div className="max-w-full sm:max-w-xl lg:max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-white/40" />
            {/* CHANGED: text-[9px] sm:text-[11px] — slightly smaller label on mobile */}
            <span className="font-['DM_Sans'] text-white/40 text-[9px] sm:text-[11px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-medium">
              Premium Tattoo Studio · New Delhi
            </span>
          </motion.div>

          {/* Heading — vw-based sizing already scales naturally, no change needed */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-['Bebas_Neue'] text-white text-[18vw] lg:text-[11vw] leading-[0.9] tracking-wide"
            >
              ART ON
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.72,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-['Bebas_Neue'] text-transparent text-[18vw] lg:text-[11vw] leading-[0.9] tracking-wide"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}
            >
              YOUR SKIN
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            // CHANGED: max-w-full sm:max-w-sm — no artificial cap on mobile
            className="font-['DM_Sans'] text-white/50 text-sm leading-relaxed max-w-full sm:max-w-sm mb-10 tracking-wide"
          >
            Custom tattoo artistry crafted for permanence. Each piece is
            designed with intention — no flash, no templates.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            // CHANGED: gap-3 sm:gap-4 — tighter gap on mobile
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* CHANGED: w-full sm:w-auto px-6 sm:px-10 — full-width buttons on mobile */}
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-semibold text-[#0f0f0f] bg-white w-full sm:w-auto px-6 sm:px-10 py-4 hover:bg-white/85 transition-colors duration-300"
            >
              View Gallery <MoveRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-semibold text-white border border-white/30 w-full sm:w-auto px-6 sm:px-10 py-4 hover:border-white/70 hover:bg-white/5 transition-all duration-300"
            >
              Book a Session
            </a>
          </motion.div>
        </div>

        {/* Stats row — hidden on mobile/tablet, shown lg+ (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="hidden lg:flex items-end gap-0 mt-16  pt-8 w-full"
        >
          {[
            { number: "2500+", label: "Tattoos Done" },
            { number: "12+", label: "Years Experience" },
            { number: "8", label: "Expert Artists" },
            { number: "100%", label: "Custom Designs" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 pr-16 border-r border-white/10 mr-16 last:border-0 last:mr-0"
            >
              <span className="font-['Bebas_Neue'] text-white text-5xl tracking-wide leading-none">
                {stat.number}
              </span>
              <span className="font-['DM_Sans'] text-white/35 text-[10px] tracking-[0.35em] uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right-edge vertical text — xl+ only (unchanged) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-white/20" />
        <span
          className="font-['DM_Sans'] text-white/20 text-[9px] tracking-[0.5em] uppercase font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. 2012
        </span>
        <div className="h-16 w-px bg-gradient-to-t from-transparent to-white/20" />
      </motion.div>
    </section>
  );
}
