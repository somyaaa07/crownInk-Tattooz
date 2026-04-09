"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link";

const footerLinks = {
  Studio: ["About Us", "Our Artists", "Gallery", "FAQ"],
  Services: ["Custom Tattoo", "Cover-Up", "Touch-Up", "Consultation"],
  Legal: ["Privacy Policy", "Terms of Service", "Aftercare Guide"],
};

const socials = [
  { icon: FaInstagram, label: "Instagram", to: "#" },
  { icon: CiFacebook, label: "Facebook", to: "#" },
  { icon: CiYoutube, label: "YouTube", to: "#" },
];

export default function Footer() {
  return (
    // CHANGED: px-4 sm:px-6 lg:px-12 — tighter side padding on small screens to prevent edge clipping
    <footer className="bg-[#0a0a0a] pt-16 pb-10 px-4 sm:px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        {/*
          CHANGED: grid-cols-2 sm:grid-cols-2 lg:grid-cols-5
          — On mobile: 2-col grid so link columns sit side by side instead of stacking 4 tall.
          Brand column spans full width on mobile via col-span-2, then reverts to lg:col-span-2.
          gap-8 sm:gap-10 — slightly less gap on small screens.
        */}
        <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 mb-14">
          {/* Brand column */}
          {/*
            CHANGED: col-span-2 lg:col-span-2
            — Forces brand block to span both columns on mobile so it sits above the links grid.
          */}
          <div className="col-span-2 lg:col-span-2">
            {/* CHANGED: h-20 w-20 sm:h-30 sm:w-30 — logo slightly smaller on very small screens */}
            <div className="mb-5">
              <img
                src="/logo3.png"
                alt="footer-logo"
                className="h-20 w-20 sm:h-30 sm:w-30 object-cover"
              />
            </div>
            {/*
              CHANGED: max-w-full sm:max-w-xs
              — On mobile let text use full column width; cap it on sm+ to match original design.
            */}
            <p className="font-['DM_Sans'] text-white/35 text-sm leading-relaxed mb-8 max-w-full sm:max-w-xs">
              Premium tattoo artistry in the heart of New Delhi. Where permanent
              art meets personal expression.
            </p>

            {/* Socials — no change needed, flex wraps naturally */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, to }) => (
                <Link
                  href={to}
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {/*
            No structural change — each category div occupies one grid cell.
            On mobile: 2-col grid means 3 categories wrap to 2 on first row + 1 on second.
            That's acceptable and avoids a single tall stacked column.
          */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-['DM_Sans'] text-white/30 text-[9px] tracking-[0.5em] uppercase mb-5 font-semibold">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-['DM_Sans'] text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Big brand watermark line */}
      {/*
        CHANGED: overflow-x-hidden added to wrapper to prevent the giant text from
        causing horizontal scroll on small screens. The text itself uses 21vw so it
        naturally scales — just needs overflow clipping.
      */}
      <div className="overflow-x-hidden mb-12 border-b border-white/5 pb-12">
        <p className="font-['Bebas_Neue'] text-white/[0.04] text-[14vw] leading-none tracking-widest select-none pointer-events-none whitespace-nowrap">
          CROWN INK
        </p>
      </div>

      {/*
        CHANGED: gap-3 sm:gap-4 — tighter gap on mobile so items don't push apart.
        text-center sm:text-left on copyright — centered on mobile is cleaner.
      */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-12">
        <p className="font-['DM_Sans'] text-white/20 text-xs tracking-wide text-center sm:text-left">
          © {new Date().getFullYear()} Crown Ink Tattoo Studio. All rights
          reserved.
        </p>
        {/*
          CHANGED: hidden sm:flex — hides the decorative tagline on very small screens
          where it would wrap awkwardly. Stays visible from sm breakpoint up.
        */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-px w-6 bg-white/15" />
          <p className="font-['Bebas_Neue'] text-white/15 text-sm tracking-[0.3em]">
            ART THAT LASTS A LIFETIME
          </p>
          <div className="h-px w-6 bg-white/15" />
        </div>
      </div>
    </footer>
  );
}
