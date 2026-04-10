"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Portrait Tattoos",
    description:
      "Capture the essence of a loved one or icons. Our artists skillfully recreate faces with stunning accuracy and emotion.",
    href: "/services",
    src: "/photos/image58.jpg",
    alt: "Portrait tattoo Post Malone",
  },
  {
    id: 2,
    title: "Fine Line Tattoos",
    description:
      "Delicate and detailed, intricate designs with a subtle touch. Ideal for elegant and intricate ink.",
    href: "/services",
    src: "/photos/image24.jpg",
    alt: "Fine line tattoo flowers",
  },
  {
    id: 3,
    title: "Geometric Tattoos",
    description:
      "Blend symmetry and creativity. Perfect for abstract patterns and shapes that make a striking statement.",
    href: "/services",
    src: "/photos/image18.jpg",
    alt: "Geometric camera tattoo",
  },
  {
    id: 4,
    title: "Micro-Realism Tattoos",
    description:
      "Expert detail in small packages. Ideal for lifelike representations of your favorite images.",
    href: "/services",
    src: "/photos/image25.jpg",
    alt: "Micro realism dog tattoo",
  },
  {
    id: 5,
    title: "Japanese Tattoos",
    description:
      "Embrace simplicity. Clean lines and understated designs for a sleek, modern look.",
    href: "/services",
    src: "https://i.pinimg.com/1200x/57/72/80/577280f2ceb25e314188c7d240425a40.jpg",
    alt: "Minimalistic tattoo",
  },
  {
    id: 6,
    title: "Black Work",
    description:
      "From nature scenes to detailed objects, experience tattoos that look almost real.",
    href: "/services",
    src: "/photos/image54.jpg",
    alt: "Realistic tiger tattoo",
  },
];

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.08 * index,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full h-[320px] sm:h-[380px] lg:h-[400px] overflow-hidden bg-[#222] shadow-[1px_1px_5px_#111] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((prev) => !prev)}
    >
      {/* Image with clip-path */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: hovered
            ? "circle(60px at center 90px)"
            : "circle(400px at center 90px)",
          transition: "clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Image
          src={service.src}
          alt={service.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="absolute left-0 bottom-0 w-full h-[54%] p-4 flex flex-col items-center justify-center text-center text-white box-border z-10">
        <h3
          className="font-['Bebas_Neue'] text-white text-xl lg:text-2xl tracking-wider leading-tight mb-2"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
          }}
        >
          {service.title}
        </h3>
        <p
          className="font-['DM_Sans'] text-white/75 text-[11px] lg:text-[13px] leading-relaxed mb-4"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
          }}
        >
          {service.description}
        </p>
        <Link
          href={service.href}
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s",
          }}
          className="font-['DM_Sans'] text-[11px] lg:text-sm font-bold tracking-[0.2em] uppercase text-[#1c1c1c] bg-[#f5f5f5] px-5 py-2.5 rounded-full hover:bg-white"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#0f0f0f] py-24 px-4 sm:px-6 lg:px-12 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-white/30" />
            <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-semibold">
              What We Do
            </span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Bebas_Neue'] text-white text-[15vw] sm:text-[13vw] lg:text-[7vw] leading-none tracking-wide"
            >
              OUR SERVICES
            </motion.h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}