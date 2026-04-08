"use client";
// components/services/AftercareSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { aftercareTips } from "../../app/services/data/ServiceData";

export default function AftercareSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="aftercare"
      className="bg-[#0f0f0f]"
      label="Post-Session Guide"
      heading="AFTERCARE TIPS"
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {aftercareTips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.07 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1a1a1a] p-7 border border-white/5 hover:border-white/15 transition-colors duration-300 group"
          >
            {/* Index */}
            <span className="font-['Bebas_Neue'] text-white/8 text-6xl leading-none block mb-4 group-hover:text-white/12 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-['Bebas_Neue'] text-white text-xl tracking-wider leading-none mb-3">
              {tip.title}
            </h4>
            <p className="font-['DM_Sans'] text-white/45 text-sm leading-relaxed">
              {tip.tip}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-8 border-l-2 border-white/15 pl-6"
      >
        <p className="font-['DM_Sans'] text-white/30 text-xs leading-relaxed">
          A detailed printed aftercare guide is provided after every session.
          If you experience unusual swelling, prolonged redness, or signs of
          infection — contact us immediately or consult a medical professional.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}