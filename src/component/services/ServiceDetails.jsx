"use client";
// components/services/ServiceDetails.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { serviceDetails } from "../../app/services/data/ServiceData";
import { Clock, DollarSign, Tag } from "lucide-react";

export default function ServiceDetails() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="service-details"
      className="bg-[#141414]"
      label="Detailed Breakdown"
      heading="SERVICE DETAILS"
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceDetails.map((detail, i) => (
          <motion.div
            key={detail.id}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 * i, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1a1a1a] p-6 sm:p-8 border border-white/5 hover:border-white/15 transition-colors duration-300 group"
          >
            {/* Number */}
            <span className="font-['Bebas_Neue'] text-white/10 text-6xl sm:text-7xl leading-none block mb-6 group-hover:text-white/15 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="font-['Bebas_Neue'] text-white text-3xl tracking-wider leading-none mb-4">
              {detail.title}
            </h3>
            <p className="font-['DM_Sans'] text-white/50 text-sm leading-relaxed mb-8">
              {detail.description}
            </p>

            {/* Meta */}
            <div className="space-y-4 pt-6 border-t border-white/8">
              <div className="flex items-center gap-3">
                <Clock size={13} className="text-white/30 shrink-0" />
                <div>
                  <p className="font-['DM_Sans'] text-white/25 text-[9px] tracking-[0.35em] uppercase font-semibold">Duration</p>
                  <p className="font-['DM_Sans'] text-white/70 text-sm">{detail.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign size={13} className="text-white/30 shrink-0" />
                <div>
                  <p className="font-['DM_Sans'] text-white/25 text-[9px] tracking-[0.35em] uppercase font-semibold">Price Range</p>
                  <p className="font-['Bebas_Neue'] text-[#f5f5f5] text-lg tracking-wide">{detail.priceRange}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag size={13} className="text-white/30 shrink-0 mt-1" />
                <div>
                  <p className="font-['DM_Sans'] text-white/25 text-[9px] tracking-[0.35em] uppercase font-semibold mb-2">Best For</p>
                  <div className="flex flex-wrap gap-2">
                    {detail.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="font-['DM_Sans'] text-[9px] tracking-[0.25em] uppercase text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}