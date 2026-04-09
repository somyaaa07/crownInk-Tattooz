"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Connaught Place, New Delhi, 110001" },
  { icon: Phone, label: "Contact", value: "+91 98765 43210" },
  { icon: Clock, label: "Hours", value: "Tue–Sun · 11am – 8pm" },
];

const styles = [
  "Blackwork",
  "Fine Line",
  "Japanese",
  "Geometric",
  "Neo-Traditional",
  "Minimalist",
  "Custom / Not Sure",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    // CHANGED: px-4 sm:px-6 lg:px-12 — consistent section padding
    <section id="contact" ref={ref} className="bg-[#141414] py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-white/30" />
            <span className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.5em] uppercase font-medium">
              Book A Session
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              // CHANGED: text-[13vw] sm:text-[12vw] lg:text-[6.5vw] — prevent overflow on small phones
              className="font-['Bebas_Neue'] text-white text-[13vw] sm:text-[12vw] lg:text-[6.5vw] leading-none tracking-wide"
            >
              LET'S CREATE TOGETHER
            </motion.h2>
          </div>
        </div>

        {/* CHANGED: gap-10 lg:gap-20 — tighter gap on mid sizes */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-20">

          {/* Left — Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* CHANGED: grid-cols-1 sm:grid-cols-2 — stack name/email on very small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.4em] uppercase font-semibold">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-transparent border border-white/10 px-4 py-3.5 font-['DM_Sans'] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.4em] uppercase font-semibold">
                Tattoo Style
              </label>
              <div className="relative">
                <select className="w-full bg-[#141414] border border-white/10 px-4 py-3.5 font-['DM_Sans'] text-white/60 text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer">
                  <option value="">Select a style</option>
                  {styles.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/30" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-['DM_Sans'] text-white/40 text-[10px] tracking-[0.4em] uppercase font-semibold">
                Your Vision
              </label>
              <textarea
                rows={5}
                placeholder="Describe your idea, placement, size, references..."
                className="bg-transparent border border-white/10 px-4 py-3.5 font-['DM_Sans'] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            <button className="w-full flex items-center justify-center gap-3 font-['DM_Sans'] text-[11px] tracking-[0.35em] uppercase font-bold text-black bg-white py-4 hover:bg-white/85 transition-colors duration-300">
              Send Enquiry <Send size={13} />
            </button>
          </motion.div>

          {/* Right — Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col justify-between gap-10"
          >
            {/*
              CHANGED: border-l removed on mobile, added sm:border-l sm:pl-8
              — On mobile info stacks naturally without the left border cutting into padding
            */}
            <div className="space-y-8 sm:border-l border-white/8 sm:pl-8">
              {info.map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <item.icon size={15} className="text-white/30 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-['DM_Sans'] text-white/30 text-[10px] tracking-[0.4em] uppercase mb-1 font-semibold">
                      {item.label}
                    </p>
                    <p className="font-['DM_Sans'] text-white/70 text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="bg-[#1a1a1a] p-6 border-l-2 border-white/20">
              <p className="font-['Bebas_Neue'] text-white/30 text-2xl tracking-wider leading-tight">
                EVERY TATTOO IS A PERMANENT STORY.
              </p>
              <p className="font-['Bebas_Neue'] text-white/20 text-2xl tracking-wider leading-tight mt-1">
                LET us MAKE YOURS WORTH TELLING.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}