"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const footerLinks = {
  Studio: ["About Us", "Our Artists", "Gallery", "FAQ"],
  Services: ["Custom Tattoo", "Cover-Up", "Touch-Up", "Consultation"],
  Legal: ["Privacy Policy", "Terms of Service", "Aftercare Guide"],
};

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: CiFacebook, label: "Facebook", href: "#" },
  { icon: CiYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-10 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Big brand line */}
       

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="font-['Bebas_Neue'] text-white text-3xl tracking-[0.2em] block">
                CROWN INK 
              </span>
              <span className="font-['DM_Sans'] text-white/30 text-[9px] tracking-[0.5em] uppercase font-medium">
                Tattoo Studio · New Delhi
              </span>
            </div>
            <p className="font-['DM_Sans'] text-white/35 text-sm leading-relaxed mb-8 max-w-xs">
              Premium tattoo artistry in the heart of New Delhi. Where permanent
              art meets personal expression.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-['DM_Sans'] text-white/30 text-[9px] tracking-[0.5em] uppercase mb-5 font-semibold">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-['DM_Sans'] text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
      
      </div>
       <div className="overflow-hidden mb-12 border-b border-white/5 pb-12">
          <p className="font-['Bebas_Neue'] text-white/[0.04] text-[21vw] leading-none tracking-widest select-none pointer-events-none">
            CROWN INK 
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['DM_Sans'] text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Crown Ink Tattoo Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-white/15" />
            <p className="font-['Bebas_Neue'] text-white/15 text-base tracking-[0.3em]">
              ART THAT LASTS A LIFETIME
            </p>
            <div className="h-px w-6 bg-white/15" />
          </div>
        </div>
    </footer>
  );
}