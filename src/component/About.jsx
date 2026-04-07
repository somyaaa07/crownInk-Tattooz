// app/about/page.jsx
"use client"; // Needed because we are using useRef, useInView

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { DM_Sans, Bebas_Neue, Space_Mono } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const values = [
  {
    number: "01",
    title: "Custom Designs",
    desc: "Every piece is crafted from scratch — tailored to your story, your skin, your vision.",
  },
  {
    number: "02",
    title: "Safe & Sterile",
    desc: "Medical-grade sterilization and single-use needles. Your safety is our foundation.",
  },
  {
    number: "03",
    title: "Bold Artistry",
    desc: "From delicate fine-line to bold blackwork — we master every style with precision.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className={`${dmSans.className} bg-[#111] py-16 px-8 overflow-hidden`}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}>
            02 — Our Philosophy
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80"
                alt="Tattoo artist at work"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 -right-4 bg-[#111] border border-white/12 p-5"
            >
              <p className={`${bebasNeue.className} text-white text-[48px] leading-none`}>8+</p>
              <p className={`${spaceMono.className} text-white/35 text-[9px] tracking-widest uppercase mt-1`}>
                Years in Ink
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="flex flex-col">

            {/* Heading */}
            <div className="overflow-hidden mb-1">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className={`${bebasNeue.className} text-white text-[clamp(52px,7vw,80px)] leading-[0.92] tracking-[0.02em] mb-7`}
              >
                WHERE SKIN<br />BECOMES<br />CANVAS
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/45 text-sm leading-[1.75] max-w-[340px] mb-10"
            >
              Inkwell Studio was born from a passion for permanent art. Based in New Delhi,
              we bring together artists who believe every tattoo is a lifelong conversation
              between the wearer and the world.
            </motion.p>

            {/* Values */}
            <div className="border-t border-white/8">
              {values.map((v, i) => (
                <motion.div
                  key={v.number}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.6 }}
                  className="flex items-start gap-5 py-5 border-b border-white/8"
                >
                  <span className={`${spaceMono.className} text-white/20 text-[10px] tracking-widest pt-[3px] min-w-[24px]`}>
                    {v.number}
                  </span>
                  <div className="flex-1">
                    <div className={`${bebasNeue.className} text-white/85 text-lg tracking-[0.05em] mb-1`}>
                      {v.title}
                    </div>
                    <div className="text-white/38 text-[13px] leading-[1.65]">
                      {v.desc}
                    </div>
                  </div>
                  <span className="text-white/30 pt-[3px] text-lg">→</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className={`${spaceMono.className} inline-flex items-center gap-3 border border-white/20 px-7 py-3 text-white text-[10px] tracking-widest uppercase transition-colors`}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
              >
                Book a Consultation →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}