"use client";
// components/services/FAQSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import FAQItem from "./FAQItem";
import { faqs } from "../../app/services/data/ServiceData";

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="faq"
      className="bg-[#0f0f0f]"
      label="Got Questions"
      heading="FAQ"
    >
      {/* CHANGED: gap-10 sm:gap-16 — tighter gap on mobile stack */}
      <div ref={ref} className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
        {/* Left — intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="lg:sticky lg:top-24"
        >
          <p className="font-['DM_Sans'] text-white/45 text-xl leading-relaxed mb-8">
            Everything you need to know before booking. Don't see your question
            here? Drop us a message — we're always happy to help.
          </p>

          {/* Visual stat block */}
          <div className="bg-[#1a1a1a] border border-white/5 p-6 sm:p-8">
            <p className="font-['Bebas_Neue'] text-white text-5xl sm:text-6xl leading-none tracking-wide">2500+</p>
            <p className="font-['DM_Sans'] text-white/30 text-[10px] tracking-[0.4em] uppercase mt-1 font-semibold">Happy Clients</p>
          </div>
        </motion.div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="divide-y divide-white/8"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}