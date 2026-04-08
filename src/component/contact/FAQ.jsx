// components/FAQ.jsx
// Collapsible FAQ accordion with smooth height animation
"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

const faqs = [
  {
    q: "How do I book a session?",
    a: "Fill out the booking form above with your concept, placement, and size. Our team reviews every submission and responds within 48 hours. We don't accept walk-ins for custom work — all sessions are by appointment only to ensure full attention to your piece.",
  },
  {
    q: "How much does a custom tattoo cost?",
    a: "Pricing depends on size, complexity, placement, and the artist. Our minimum is $250. Sleeves and large custom pieces are quoted individually after your initial consultation. We're transparent about pricing — no surprises.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. A non-refundable deposit of $100–$200 (depending on session length) is required to hold your appointment. This is applied toward your final session cost. Deposits can be paid via card or bank transfer after your consultation.",
  },
  {
    q: "How should I prepare for my session?",
    a: "Get a full night's sleep, eat a solid meal 2 hours before, stay hydrated, and wear comfortable clothing that allows easy access to the tattoo area. Avoid alcohol for 24 hours prior. Moisturize the area daily for 1–2 weeks beforehand.",
  },
  {
    q: "Can I bring reference images?",
    a: "Absolutely — we encourage it. References help our artists understand your aesthetic direction. Upload them in the booking form or bring prints to your consultation. The more visual context, the better the result.",
  },
];

/* ── Single accordion item ────────────────────────────── */
function AccordionItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-studio-border/60 last:border-0">
      {/* Toggle button */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-base sm:text-lg tracking-wide transition-colors duration-200 ${
            isOpen ? "text-studio-text" : "text-studio-sub group-hover:text-studio-text"
          }`}
        >
          {faq.q}
        </span>

        {/* Plus / Minus icon */}
        <span className="shrink-0 w-7 h-7 rounded-lg border border-studio-border flex items-center justify-center transition-all duration-300 group-hover:border-studio-muted">
          <svg
            className={`w-3.5 h-3.5 text-studio-sub transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      {/* Collapsible answer */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? "400px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
        }}
      >
        <p className="font-['jost'] text-sm text-studio-sub leading-relaxed pb-5 pr-10">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-20 ">
      <RevealWrapper>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Heading sticky block */}
          <div className="lg:w-72 shrink-0">
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase text-studio-sub mb-3">
              Common Questions
            </p>
            <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl tracking-wide text-studio-text leading-none">
              FAQ
            </h2>
            <p className="font-body text-sm text-studio-sub mt-5 leading-relaxed max-w-xs">
              Can&apos;t find an answer? Reach out directly via the form or
              email us at{" "}
              <a
                href="mailto:hello@crowninkhaus.studio"
                className="text-studio-text hover:underline"
              >
                hello@crowninkhaus.studio
              </a>
            </p>
          </div>

          {/* Accordion */}
          <div className="flex-1">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={toggle}
              />
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}