"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Portrait Tattoos",
    description:
      "Capture the essence of a loved one or icons. Our artists skillfully recreate faces with stunning accuracy and emotion.",
    href: "/portrait-tattoos",
    src: "https://i.pinimg.com/736x/fd/03/6e/fd036eacc08b08214c5d3bbaf8f4f2f4.jpg",
    alt: "Portrait tattoo Post Malone",
  },
  {
    id: 2,
    title: "Fine Line Tattoos",
    description:
      "Delicate and detailed, intricate designs with a subtle touch. Ideal for elegant and intricate ink.",
    href: "/fine-line-tattoos",
    src: "https://i.pinimg.com/webp/736x/2e/32/74/2e3274cef7e535e21611906be2a93a79.webp",
    alt: "Fine line tattoo flowers",
  },
  {
    id: 3,
    title: "Geometric Tattoos",
    description:
      "Blend symmetry and creativity. Perfect for abstract patterns and shapes that make a striking statement.",
    href: "/geometric-tattoos",
    src: "https://www.bleedink.ca/wp-content/uploads/2023/12/Bleed-Ink-geometric-video-camera.png",
    alt: "Geometric camera tattoo",
  },
  {
    id: 4,
    title: "Micro-Realism Tattoos",
    description:
      "Expert detail in small packages. Ideal for lifelike representations of your favorite images.",
    href: "/micro-realism-tattoos",
    src: "https://www.bleedink.ca/wp-content/uploads/2023/12/dog-micro-realism2023-12-17-225922.png",
    alt: "Micro realism dog tattoo",
  },
  {
    id: 5,
    title: "Japenese Tattoos",
    description:
      "Embrace simplicity. Clean lines and understated designs for a sleek, modern look.",
    href: "/minimalist-tattoos",
    src: "https://www.bleedink.ca/wp-content/uploads/2023/12/minimalistic-tattoo2023-12-17-225922.png",
    alt: "Minimalistic tattoo",
  },
  {
    id: 6,
    title: "Black Work",
    description:
      "From nature scenes to detailed objects, experience tattoos that look almost real.",
    href: "/realism-tattoos",
    src: "https://www.bleedink.ca/wp-content/uploads/2023/12/Bleed-Ink-realism-tiger-sleeve.png",
    alt: "Realistic tiger tattoo",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#0f0f0f] py-24 px-6 lg:px-12 min-h-screen flex flex-col justify-center"
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
              className="font-['Bebas_Neue'] text-white text-[13vw] lg:text-[7vw] leading-none tracking-wide"
            >
              OUR SERVICES
            </motion.h2>
          </div>
        </div>

        {/* Cards grid — 3 cols desktop, 2 cols mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.08 * i,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative w-full h-[380px] lg:h-[400px] overflow-hidden bg-[#222] shadow-[1px_1px_5px_#111] cursor-pointer"
            >
              {/* Image with clip-path animation */}
              {/* On idle: full circle (image fills card). On hover: shrinks to a small circle at top */}
              <div
                className="absolute inset-0 bg-black transition-all duration-500 delay-500 group-hover:delay-0"
                style={{
                  clipPath: "circle(400px at center 90px)",
                }}
                // Tailwind can't animate custom clip-path — we use inline style + group via CSS below
              >
                {/* We control clip-path via a scoped CSS class injected below */}
              </div>

              {/* We replicate the exact clip-path trick using a wrapper with [&]:group-hover trick via style tag approach */}
              {/* The cleanest way in Next.js + Tailwind is a small <style> tag or CSS module — we inline it per card via a data attribute */}
              <div
                data-card
                className="service-image-box absolute inset-0 bg-black"
              >
                <Image
                  src={service.src}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              {/* Content — shown on hover */}
              <div className="absolute left-0 bottom-0 w-full h-[54%] p-4 flex flex-col items-center justify-center text-center text-white box-border">
                <h3 className="font-['Bebas_Neue'] text-white text-xl lg:text-2xl tracking-wider leading-tight mb-2 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:[transition-delay:500ms]">
                  {service.title}
                </h3>
                <p className="font-['DM_Sans'] text-white/65 text-[11px] lg:text-[13px] leading-relaxed mb-4 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:[transition-delay:700ms]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="font-['DM_Sans'] text-[11px] lg:text-sm font-bold tracking-[0.2em] uppercase text-[#1c1c1c] bg-[#f5f5f5] px-5 py-2.5 rounded-full opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:[transition-delay:100ms] hover:bg-white"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global style for the clip-path animation — scoped to .service-image-box */}
      <style jsx global>{`
        .service-image-box {
          clip-path: circle(400px at center 90px);
          transition: clip-path 0.5s ease;
          transition-delay: 0.5s;
        }
        .group:hover .service-image-box {
          clip-path: circle(65px at center 90px);
          transition-delay: 0s;
        }

        @media (max-width: 767px) {
          .service-image-box {
            clip-path: circle(360px at center 80px);
          }
          .group:hover .service-image-box {
            clip-path: circle(55px at center 80px);
          }
        }
      `}</style>
    </section>
  );
}