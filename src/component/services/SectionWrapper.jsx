"use client";
// components/services/SectionWrapper.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({
  children,
  id,
  className = "",
  label,
  heading,
  headingSize = "lg",
  centered = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const headingClass =
    headingSize === "xl"
      ? "text-[14vw] sm:text-[12vw] lg:text-[7vw]"
      : headingSize === "lg"
      ? "text-[13vw] sm:text-[11vw] lg:text-[6vw]"
      : "text-[11vw] sm:text-[9vw] lg:text-[5vw]";

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-12 ${className}`}
    >
      <div className={`max-w-7xl mx-auto w-full ${centered ? "text-center" : ""}`}>
        {(label || heading) && (
          <div className={`mb-10 sm:mb-14 ${centered ? "flex flex-col items-center" : ""}`}>
            {label && (
              <motion.div
                initial={{ opacity: 0, x: centered ? 0 : -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}
              >
                <div className="h-px w-8 bg-white/30" />
                <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-semibold">
                  {label}
                </span>
                {centered && <div className="h-px w-8 bg-white/30" />}
              </motion.div>
            )}
            {heading && (
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-['Bebas_Neue'] text-white leading-none tracking-wide ${headingClass}`}
                >
                  {heading}
                </motion.h2>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}