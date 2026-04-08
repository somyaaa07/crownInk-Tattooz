"use client";
// components/services/ServicesGrid.jsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";
import { servicesGrid } from "../../app/services/data/ServiceData";

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="services-grid"
      className="bg-[#0f0f0f]"
      label="What We Offer"
      heading="TATTOO STYLES"
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {servicesGrid.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.08 * i,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ServiceCard service={service} index={i} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}