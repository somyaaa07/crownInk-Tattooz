"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// ✅ Create motion-enhanced Link once at the top
const MotionLink = motion.create(Link);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 ${
          scrolled
            ? "bg-[#1c1c1c]/95 backdrop-blur-lg border-b border-[#f5f5f5]/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-7 flex items-center justify-between h-14">
          {/* ✅ Fixed: was motion.Link */}
          <MotionLink href="/" className="flex flex-col leading-none" whileHover={{ opacity: 0.8 }}>
            <img
              src="/logo3.png"
              alt="logo-image"
              className="h-20 w-20 sm:h-24 sm:w-24 object-cover"
            />
          </MotionLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="font-['Jost'] text-[#f5f5f5]/60 text-sm tracking-[0.2em] uppercase hover:text-[#f5f5f5] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f5f5f5] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#f5f5f5] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1c1c1c] text-[#f5f5f5] flex flex-col items-center justify-center gap-5 "
          >
            {navLinks.map((link, i) => (
              // ✅ Fixed: was motion.Link
              <MotionLink
                href={link.href}
                key={link.label}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-['Bebas_Neue'] text-[#f5f5f5] text-4xl sm:text-5xl font-light tracking-wide hover:opacity-60 transition-opacity"
              >
                {link.label}
              </MotionLink>
            ))}

            {/* ✅ Fixed: was motion.Link */}
            <MotionLink
              href="/contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 font-['Jost'] text-xs tracking-[0.3em] uppercase text-[#1c1c1c] bg-[#f5f5f5] px-6 sm:px-8 py-4"
            >
              Book Session
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}