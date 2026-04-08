"use client";
// components/services/ConsultationSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import { MoveRight, MessageCircle } from "lucide-react";

export default function ConsultationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="consultation"
      className="bg-[#0f0f0f]"
      label="Start Here"
      heading="FREE CONSULTATION"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-['DM_Sans'] text-white/50 text-sm lg:text-base leading-relaxed mb-6">
            Not sure where to start? Our consultations are free, zero-pressure,
            and the best first step for any new tattoo. We'll discuss placement,
            style, sizing, and budget — so you walk in confident on session day.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Bring any references — photos, sketches, Pinterest boards",
              "Discuss pain tolerance and placement options",
              "Get an honest time and cost estimate",
              "Meet your artist before committing",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5f5f5] shrink-0" />
                <span className="font-['DM_Sans'] text-white/50 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 py-4 hover:bg-white transition-colors duration-300"
          >
            <MessageCircle size={13} />
            Book Free Consult
          </Link>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-80 lg:h-[460px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80"
            alt="Tattoo consultation"
            fill
            className="object-cover object-top"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-6 right-6 bg-[#f5f5f5] px-5 py-3">
            <p className="font-['Bebas_Neue'] text-[#1c1c1c] text-lg tracking-wider leading-none">100% FREE</p>
            <p className="font-['DM_Sans'] text-[#1c1c1c]/60 text-[9px] tracking-[0.3em] uppercase font-semibold">Consultation</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}