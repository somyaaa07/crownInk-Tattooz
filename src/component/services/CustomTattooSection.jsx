"use client";
// components/services/CustomTattooSection.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { processSteps } from "../../app/services/data/ServiceData";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function CustomTattooSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="custom-tattoo"
      className="bg-[#0f0f0f]"
      label="Tailored For You"
      heading="CUSTOM TATTOOS"
    >
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <p className="font-['DM_Sans'] text-white/50 text-md lg:text-md leading-relaxed mb-8">
            No two people are the same — and neither are our tattoos. Every custom
            piece starts with a conversation and ends with something that's
            uniquely, permanently yours.
          </p>
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase font-bold text-[#1c1c1c] bg-[#f5f5f5] px-8 py-4 hover:bg-white transition-colors duration-300"
          >
            Start Your Design <MoveRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-64 sm:h-80 lg:h-96 overflow-hidden"
        >
          <Image
            src="/photos/image76.jpeg"
            alt="Tattoo artist drawing custom design"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/50 to-transparent" />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i + 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#1a1a1a] p-6 sm:p-8 border border-white/5 group hover:border-white/15 transition-colors duration-300"
          >
            <span className="absolute top-4 right-6 font-['Bebas_Neue'] text-white/5 text-6xl leading-none select-none">
              {step.step}
            </span>

            <div className="text-3xl mb-5"></div>
            <h4 className="font-['Bebas_Neue'] text-white text-2xl tracking-wider leading-none mb-3">
              {step.title}
            </h4>
            <p className="font-['DM_Sans'] text-white/45 text-lg leading-relaxed">
              {step.description}
            </p>

            {i < processSteps.length - 1 && (
              <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-px bg-white/15 z-10" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}