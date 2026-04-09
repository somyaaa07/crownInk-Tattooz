"use client";
// components/services/HygieneSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { hygienePoints } from "../../app/services/data/ServiceData";
import { ShieldCheck } from "lucide-react";

export default function HygieneSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="hygiene"
      className="bg-[#141414]"
      label="Your Safety First"
      heading="HYGIENE & SAFETY"
    >
      {/* CHANGED: gap-10 sm:gap-16 — tighter gap stacking on mobile */}
      <div ref={ref} className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <p className="font-['DM_Sans'] text-white/50 text-lg leading-relaxed mb-8 sm:mb-10">
            Safety isn't optional — it's the foundation. Our studio meets and
            exceeds all health authority standards. Every session is conducted
            in a fully sterile environment by trained professionals.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {hygienePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.06 * i + 0.1, duration: 0.55 }}
                className="flex items-start gap-3 bg-[#1a1a1a] p-4 border border-white/5"
              >
                <ShieldCheck size={14} className="text-[#f5f5f5]/60 mt-0.5 shrink-0" />
                <span className="font-['DM_Sans'] text-white/55 text-sm leading-snug">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Big stat */}
          {/* CHANGED: p-8 sm:p-12 — less padding on mobile so the big number fits */}
          <div className="bg-[#1a1a1a] border border-white/5 p-8 sm:p-12 text-center mb-4">
            {/* CHANGED: text-[5rem] sm:text-[7rem] lg:text-[8rem] — scale down on mobile to prevent overflow */}
            <p className="font-['Bebas_Neue'] text-white text-[5rem] sm:text-[7rem] lg:text-[8rem] leading-none tracking-wide mb-2">
              100%
            </p>
            <p className="font-['DM_Sans'] text-white/40 text-sm tracking-[0.3em] uppercase font-semibold">
              Sterile. Every session.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "10+", label: "Years Licensed" },
              { val: "0", label: "Safety Incidents" },
            ].map((s) => (
              <div key={s.label} className="bg-[#1a1a1a] border border-white/5 p-5 sm:p-6 text-center">
                {/* CHANGED: text-4xl sm:text-5xl — slightly smaller on small screens */}
                <p className="font-['Bebas_Neue'] text-white text-4xl sm:text-5xl leading-none mb-1">{s.val}</p>
                <p className="font-['DM_Sans'] text-white/30 text-[10px] tracking-[0.35em] uppercase font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}