"use client";
// components/services/FAQItem.jsx

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ q, a, index = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5 pr-6">
          <span className="font-['Bebas_Neue'] text-white/20 text-lg tracking-wider shrink-0 mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-['Bebas_Neue'] text-white text-xl lg:text-2xl tracking-wider leading-tight group-hover:text-[#f5f5f5] transition-colors">
            {q}
          </span>
        </div>
        <div className="shrink-0 w-8 h-8 border border-white/15 flex items-center justify-center text-white/50 group-hover:border-white/40 group-hover:text-white transition-all duration-300">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-['DM_Sans'] text-white/50 text-sm leading-relaxed pl-12">
          {a}
        </p>
      </div>
    </div>
  );
}