"use client";
// components/services/PricingSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { pricingTiers } from "../../app/services/data/ServiceData";

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="pricing"
      className="bg-[#141414]"
      label="Transparent Pricing"
      heading="PRICING GUIDE"
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1a1a1a] border border-white/5 hover:border-white/20 transition-colors duration-300 group overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-0.5 bg-gradient-to-r from-[#f5f5f5]/40 to-transparent group-hover:from-[#f5f5f5]/70 transition-colors" />

            <div className="p-7">
              <p className="font-['Bebas_Neue'] text-white/25 text-sm tracking-[0.4em] mb-4">
                {tier.label.toUpperCase()}
              </p>
              <p className="font-['DM_Sans'] text-white/40 text-xs mb-6 tracking-wide">
                {tier.size}
              </p>
              <p className="font-['Bebas_Neue'] text-white text-3xl tracking-wider leading-none mb-2">
                {tier.range}
              </p>
              <p className="font-['DM_Sans'] text-white/30 text-[16px] leading-snug mt-3 pt-4 border-t border-white/8">
                {tier.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.45 }}
        className="bg-[#1a1a1a] border border-white/5 p-6 flex items-start gap-4"
      >
        <div className="w-1 h-full min-h-[20px] bg-[#f5f5f5]/20 shrink-0 rounded-full" />
        <p className="font-['DM_Sans'] text-white/35 text-md leading-relaxed">
          All prices are estimates only. Final quotes depend on size, complexity,
          placement, and number of sessions. A ₹1,500 deposit is required to
          confirm your booking. Deposits are non-refundable but transferable
          with 48+ hours notice.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}