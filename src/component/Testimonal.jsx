"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Arjun turned my rough sketch into something far beyond what I imagined. The blackwork detail is impeccable. I get stopped on the street regularly.",
    author: "Rahul Sharma",
    location: "Delhi",
    stars: 5,
    image: "https://picsum.photos/seed/rahul-tattoo-client/600/800.jpg",
    tag: "Blackwork Sleeve",
  },
  {
    quote:
      "I was terrified of needles but Priya made the whole experience calm and beautiful. My fine-line floral piece is everything I dreamed of.",
    author: "Sneha Kapoor",
    location: "Mumbai",
    stars: 5,
    image: "https://picsum.photos/seed/sneha-fine-line/600/800.jpg",
    tag: "Fine-Line Floral",
  },
  {
    quote:
      "Rohan's Japanese sleeve is a true masterpiece. Three sessions of absolute artistry. crowninkwell is the only studio I'll ever trust.",
    author: "Dev Malhotra",
    location: "Bangalore",
    stars: 5,
    image: "https://picsum.photos/seed/dev-japanese-sleeve/600/800.jpg",
    tag: "Japanese Sleeve",
  },
];

const AUTOSCROLL_DELAY = 4000; // 4 seconds

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  // ✅ Auto-scroll effect — pauses on hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, AUTOSCROLL_DELAY);
    return () => clearInterval(timer);
  }, [paused, current]);

  return (
    <section
      ref={ref}
      className="bg-[#0e0e0e] py-20 lg:py-40 px-4 sm:px-6 overflow-hidden relative"
      // ✅ Pause auto-scroll on hover
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-24"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 bg-[#f5f5f5]/30" />
              <span className="font-['DM_Sans'] text-[#f5f5f5]/40 text-[10px] tracking-[0.5em] uppercase">
                Client Stories
              </span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-[#f5f5f5] text-4xl sm:text-5xl lg:text-7xl tracking-wide leading-[0.95]">
              Words That
              <br />
              <span className="text-[#f5f5f5]/30">Stay Etched</span>
            </h2>
          </div>

          {/* Counter */}
          <div className="font-['Jost'] text-[#f5f5f5]/20 text-sm tracking-[0.2em] tabular-nums">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ✅ Image Side — order-2 on mobile (shows below text), order-1 on lg (shows left) */}
          <div className="hidden lg:block lg:col-span-5 relative max-w-xs sm:max-w-sm mx-auto w-full lg:max-w-none lg:mx-0 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${current}`}
                initial={{ opacity: 0, scale: 1.04, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: 20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-full h-full object-cover grayscale contrast-110 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/40 to-transparent opacity-50" />
                <div className="absolute inset-3 border border-[#f5f5f5]/8 pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <span className="font-['DM_Sans'] text-[9px] tracking-[0.4em] uppercase text-[#f5f5f5]/50 bg-[#0e0e0e]/60 backdrop-blur-sm px-3 py-1.5 border border-[#f5f5f5]/10 inline-block">
                    {testimonials[current].tag}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -top-4 -right-4 w-full h-full border border-[#f5f5f5]/5 -z-10" />
          </div>

          {/* ✅ Text Side — order-1 on mobile (shows above image), order-2 on lg (shows right) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute -top-8 -left-2 lg:-left-8 pointer-events-none select-none hidden sm:block"
            >
              <Quote
                size={80}
                className="text-[#f5f5f5]/[0.04] stroke-[1]"
                strokeWidth={0.5}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      <Star size={13} className="text-[#f5f5f5]/50 fill-[#f5f5f5]/50" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-['Bebas_Neue'] text-[#f5f5f5] text-xl sm:text-2xl lg:text-[2.5rem] xl:text-[2.75rem] font-normal leading-[1.15] lg:leading-[1.1] mb-10 lg:mb-12 tracking-wide">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#f5f5f5]/10 flex-shrink-0 grayscale">
                    <img
                      src={testimonials[current].image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Jost'] text-[#f5f5f5] text-sm font-medium tracking-wide">
                      {testimonials[current].author}
                    </p>
                    <p className="font-['Jost'] text-[#f5f5f5]/25 text-[10px] tracking-[0.3em] uppercase">
                      {testimonials[current].location}
                    </p>
                  </div>
                  <div className="h-8 w-px bg-[#f5f5f5]/10 ml-2" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation + Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mt-10 lg:mt-20"
            >
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="group w-12 h-12 border border-[#f5f5f5]/10 flex items-center justify-center text-[#f5f5f5]/30 hover:border-[#f5f5f5]/30 hover:text-[#f5f5f5]/80 transition-all duration-400 hover:bg-[#f5f5f5]/[0.03]"
              >
                <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="group w-12 h-12 border border-[#f5f5f5]/10 flex items-center justify-center text-[#f5f5f5]/30 hover:border-[#f5f5f5]/30 hover:text-[#f5f5f5]/80 transition-all duration-400 hover:bg-[#f5f5f5]/[0.03]"
              >
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>

              {/* ✅ Dot indicators with animated progress fill */}
              <div className="flex gap-2 ml-3 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="relative h-[2px] rounded-full overflow-hidden bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/20 transition-all duration-500 ease-out"
                    style={{ width: i === current ? "2rem" : "0.75rem" }}
                  >
                    {/* ✅ Animated fill showing auto-scroll progress */}
                    {i === current && !paused && (
                      <motion.span
                        key={`progress-${current}`}
                        className="absolute inset-y-0 left-0 bg-[#f5f5f5]/50 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTOSCROLL_DELAY / 1000, ease: "linear" }}
                      />
                    )}
                    {/* Static fill when active but paused */}
                    {i === current && paused && (
                      <span className="absolute inset-0 bg-[#f5f5f5]/50 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}