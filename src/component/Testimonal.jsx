"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Arjun turned my rough sketch into something far beyond what I imagined. The blackwork detail is impeccable. I get stopped on the street regularly.",
    author: "Rahul Sharma",
    location: "Delhi",
    stars: 5,
  },
  {
    quote:
      "I was terrified of needles but Priya made the whole experience calm and beautiful. My fine-line floral piece is everything I dreamed of.",
    author: "Sneha Kapoor",
    location: "Mumbai",
    stars: 5,
  },
  {
    quote:
      "Rohan's Japanese sleeve is a true masterpiece. Three sessions of absolute artistry. Inkwell is the only studio I'll ever trust.",
    author: "Dev Malhotra",
    location: "Bangalore",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="bg-[#161616] py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-10 bg-[#f5f5f5]/30" />
          <span className="font-['Jost'] text-[#f5f5f5]/40 text-[10px] tracking-[0.5em] uppercase">
            Client Stories
          </span>
        </motion.div>

        <div className="relative">
          {/* Large quote mark */}
          <div className="absolute -top-8 -left-4 font-['Cormorant_Garamond'] text-[#f5f5f5]/[0.06] text-[10rem] leading-none select-none pointer-events-none">
            "
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-1 mb-8">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} size={14} className="text-[#f5f5f5]/40 fill-[#f5f5f5]/40" />
              ))}
            </div>

            <blockquote className="font-['Cormorant_Garamond'] text-[#f5f5f5] text-3xl lg:text-4xl font-light italic leading-relaxed mb-10">
              "{testimonials[current].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#f5f5f5]/20" />
              <div>
                <p className="font-['Jost'] text-[#f5f5f5] text-sm tracking-wide">
                  {testimonials[current].author}
                </p>
                <p className="font-['Jost'] text-[#f5f5f5]/30 text-[10px] tracking-[0.3em] uppercase">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-14">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#f5f5f5]/15 flex items-center justify-center text-[#f5f5f5]/40 hover:border-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#f5f5f5]/15 flex items-center justify-center text-[#f5f5f5]/40 hover:border-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors duration-300"
            >
              <ChevronRight size={18} />
            </button>
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-300 ${
                    i === current ? "w-8 bg-[#f5f5f5]/60" : "w-4 bg-[#f5f5f5]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}