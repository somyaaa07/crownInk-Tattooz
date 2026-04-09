"use client";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  FaHeart,
  FaPaintBrush,
  FaShieldAlt,
  FaMagic,
  FaPencilAlt,
  FaHandSparkles,
  FaHandsHelping,
  FaPenNib,
} from "react-icons/fa";
import { DM_Sans, Bebas_Neue, Jost, Space_Mono } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const Jost_font = Jost({ subsets: ["latin"], weight: ["400"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <main className={`${dmSans.className} bg-[#0d0d0d] text-white`}>
      {/* Main Section */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading */}

          {/* Grid */}
          <div className="mt-24">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              <span
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                01 — Perfection Is Ever
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="order-1  relative"
              >
                <div className="relative w-full h-[400px] aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1627458514257-41d0ea46e326"
                    alt="Tattoo artist"
                    fill
                    className="object-cover  grayscale hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="lg:order-1 sm:order-2 md:order-2"
              >
                <h2
                  className={`${bebasNeue.className} text-[40px] sm:text-[60px] leading-tight mb-6 mt-8`}
                >
                  PERFECTION IS FOREVER
                </h2>

                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-18">
                  Crown well Studio was born from a passion for permanent art.
                  Based in Greater Noida, we bring together artists who believe
                  every tattoo is a lifelong expression of identity and
                  creativity.
                  <br /> From minimal fine-line tattoos to bold blackwork, our
                  team delivers precision, hygiene, and unmatched artistry.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-block border border-white px-8 py-3 mb-24 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* what we do */}

          <div className="mt-18">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              {/* Line on the left */}
              <div className="flex-1 h-px bg-white/10" />

              {/* Text on the right */}
              <span
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                02 — What We Do
              </span>
            </motion.div>

            {/* Heading */}
            <h2
              className={`${bebasNeue.className} text-white text-[40px] sm:text-[60px] ml-2 mb-10`}
            >
              What we do
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaPencilAlt className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
                <p className="text-white/40 text-sm">
                  We create unique, personalized tattoo designs that reflect
                  your story, style, and individuality.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaPenNib className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Professional Tattooing
                </h3>
                <p className="text-white/40 text-sm">
                  Our skilled artists deliver precise, high-quality tattoos
                  using modern techniques and equipment.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaHandSparkles className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hygiene & Safety</h3>
                <p className="text-white/40 text-sm">
                  We follow strict hygiene standards with стерilized tools to
                  ensure a safe tattoo experience.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaHandsHelping className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Aftercare Guidance
                </h3>
                <p className="text-white/40 text-sm">
                  We guide you through proper aftercare to keep your tattoo
                  vibrant and long-lasting.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Founder */}

          <div className="mt-28">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              <span
                // className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                03 — Meet Our Founder
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className={`${dmSans.className} text-[40px] sm:text-[45px] leading-tight mb-6`}
                >
                  MEET OUR FOUNDER
                </h2>
                <h2
                  className={`${bebasNeue.className}  sm:text-[30px] leading-normal mb-6`}
                >
                  Paul-Anthony Surdi
                </h2>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
                  Crown well Studio was born from a passion for permanent art.
                  Based in New Delhi, we bring together artists who believe
                  every tattoo is a lifelong expression of identity and
                  creativity.
                  <br />
                  From minimal fine-line tattoos to bold blackwork, our team
                  delivers precision, hygiene, and unmatched artistry.
                </p>
              </motion.div>
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-96 w-full aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1627458514257-41d0ea46e326"
                    alt="Tattoo artist"
                    fill
                    className="object-cover grayscale hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* our mission & vission */}

          <div className="mt-28">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              {/* Line on the left */}
              <div className="flex-1 h-px bg-white/10" />

              {/* Text on the right */}
              <span
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                04 — Our Mission & Our Vission
              </span>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mt-14 mb-18 ">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0.5 }}
                className="relative w-full p-8  cursor-pointer overflow-hidden
                 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                 border border-white/10 text-white"
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
                   ,transparent_60%)]
                   z-0"
                />

                {/* Content */}
                <div className="relative z-10 ">
                  <div
                    className={`${bebasNeue.className} text-[40px] px-12 whitespace-nowrap text-center sm:text-[60px] leading-tight mb-2 mt-2`}
                  >
                    OUR MISSION
                  </div>
                  {/* Divider */}
                  <div className=" bg-white/10 my-5" />
                  <p
                    className={`${Jost_font.className} text-white/50 text-[20px]  items-center justify-center  sm:text-[20px]  leading-tight mb-4 mt-4`}
                  >
                    To ensure excellence and equal opportunity in the tattoo
                    industry, empowering artists to grow and build meaningful
                    careers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0.5 }}
                className="relative w-full p-8  cursor-pointer overflow-hidden
                 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]
                 border border-white/10 text-white"
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
                   ,transparent_60%)]
                   z-0"
                />

                {/* Content */}
                <div className="relative z-10 ">
                  <div
                    className={`${bebasNeue.className} text-[40px] px-12 text-center whitespace-nowrap  sm:text-[60px] leading-tight mb-2 mt-2`}
                  >
                    OUR VISSION
                  </div>
                  {/* Divider */}
                  <div className=" bg-white/10 my-5" />
                  <p
                    className={`${Jost_font.className} text-white/50 text-[20px]  items-center justify-center sm:text-[20px]  leading-tight mb-4 mt-4`}
                  >
                    To build a global tattoo community that inspires creativity,
                    professionalism, and artistic freedom.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* why Choose us */}

          <div className="mt-28">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              <span
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                05 — Why Choose Us
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>

            {/* Heading */}
            <h2
              className={`${bebasNeue.className} text-white text-[40px] sm:text-[60px] ml-2 mb-10`}
            >
              Why Choose Us
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaPaintBrush className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Skilled Artists</h3>
                <p className="text-white/40 text-sm">
                  Our experienced tattoo artists bring your ideas to life with
                  precision and creativity.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaShieldAlt className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hygienic & Safe</h3>
                <p className="text-white/40 text-sm">
                  We follow strict hygiene standards using sterilized equipment
                  for your safety.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaMagic className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Custom Designs</h3>
                <p className="text-white/40 text-sm">
                  Every tattoo is uniquely designed to match your personality
                  and story.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-white/10 rounded-xl text-white"
              >
                <FaHeart className="text-white/70 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Aftercare Support
                </h3>
                <p className="text-white/40 text-sm">
                  We guide you through proper aftercare to ensure your tattoo
                  heals perfectly.
                </p>
              </motion.div>
            </div>
          </div>

          {/* contact */}
          <div className="mt-28">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-14"
            >
              {/* Line on the left */}
              <div className="flex-1 h-px bg-white/10" />

              {/* Text on the right */}
              <span
                className={`${spaceMono.className} text-[10px] text-white/30 tracking-widest uppercase whitespace-nowrap`}
              >
                04 — Our Mission & Our Vission
              </span>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
              <div>
                <h2 className="text-3xl font-bold">8+</h2>
                <p className="text-white/40 text-sm">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">20+</h2>
                <p className="text-white/40 text-sm">Locations</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-white/40 text-sm">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">1000+</h2>
                <p className="text-white/40 text-sm">Tattoos Done</p>
              </div>
            </div>
            {/* Contact */}
            <div className="mt-20 text-center">
              <h2
                className={`${bebasNeue.className} text-[30px] sm:text-[30px] leading-tight mb-6`}
              >
                Got Questions ? We're Here to Help
              </h2>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-3 bg-transparent border border-white text-white rounded"
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
