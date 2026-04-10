// app/services/data/servicesData.js

export const servicesGrid = [
  {
    id: 1,
    title: "Portrait Tattoos",
    description: "Lifelike faces inked with precision. Capture loved ones, icons, or heroes in stunning photorealistic detail.",
    price: "From ₹8,000",
    duration: "3–6 hrs",
    src: "/photos/image73.jpeg",
    alt: "Portrait tattoo artist at work",
    tags: ["Realism", "Portraits", "Faces"],
  },
  {
    id: 2,
    title: "Fine Line Tattoos",
    description: "Delicate, intricate designs with a whisper-thin needle. Ideal for florals, scripts, and minimal art.",
    price: "From ₹4,000",
    duration: "1–3 hrs",
    src: "/photos/image74.jpeg",
    alt: "Fine line flower tattoo",
    tags: ["Minimal", "Botanical", "Script"],
  },
  {
    id: 3,
    title: "Geometric Tattoos",
    description: "Sacred geometry meets skin. Symmetrical precision and abstract patterns that make a bold statement.",
    price: "From ₹5,500",
    duration: "2–4 hrs",
    src: "/photos/image40.jpeg",
    alt: "Geometric tattoo design",
    tags: ["Geometric", "Abstract", "Pattern"],
  },
  {
    id: 4,
    title: "Micro-Realism",
    description: "Incredible detail at a small scale. Every tiny piece is a miniature masterwork.",
    price: "From ₹6,000",
    duration: "2–5 hrs",
    src: "/photos/image44.jpeg",
    alt: "Micro realism tattoo",
    tags: ["Detail", "Small", "Realism"],
  },
  {
    id: 5,
    title: "Japanese Tattoos",
    description: "Traditional Irezumi art — koi, dragons, waves, and florals rooted in centuries of craft.",
    price: "From ₹9,000",
    duration: "4–8 hrs",
    src: "/photos/image57.jpeg",
    alt: "Japanese style tattoo",
    tags: ["Traditional", "Japanese", "Bold"],
  },
  {
    id: 6,
    title: "Blackwork",
    description: "Solid black ink, bold shapes, and powerful imagery. The most striking form of body art.",
    price: "From ₹5,000",
    duration: "2–6 hrs",
    src: "/photos/image60.jpeg",
    alt: "Blackwork tattoo sleeve",
    tags: ["Blackwork", "Bold", "Geometric"],
  },
];

export const serviceDetails = [
  {
    id: 1,
    title: "Custom Design",
    description: "Every tattoo is drawn from scratch around you — your story, your body, your vision. No flash, no templates.",
    duration: "Consultation + session",
    priceRange: "₹6,000 – ₹50,000+",
    bestFor: ["First timers", "Complex concepts", "Full sleeves"],
  },
  {
    id: 2,
    title: "Cover-Up Tattoos",
    description: "Transform old or unwanted tattoos into stunning new artwork. Our artists specialise in creative cover-up solutions.",
    duration: "2–8 hrs",
    priceRange: "₹7,000 – ₹40,000",
    bestFor: ["Old tattoos", "Faded ink", "Design upgrades"],
  },
  {
    id: 3,
    title: "Touch-Up Sessions",
    description: "Keep your tattoo looking fresh. We offer free touch-ups within 3 months of the original session.",
    duration: "30 min – 2 hrs",
    priceRange: "Free – ₹3,000",
    bestFor: ["Aging tattoos", "Post-healing fixes", "Color refresh"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your idea, reference images, and placement. We discuss style, size, and bring your vision to life on paper.",
    icon: "💬",
  },
  {
    step: "02",
    title: "Design & Approval",
    description: "Your artist creates a custom design. You review, refine, and approve before a single needle touches skin.",
    icon: "✏️",
  },
  {
    step: "03",
    title: "The Session",
    description: "In a clean, professional environment, your tattoo is inked with precision. Aftercare instructions provided.",
    icon: "🖤",
  },
];

export const hygienePoints = [
  "Single-use, sterile needles on every client",
  "Hospital-grade autoclave sterilisation",
  "Disposable gloves changed between stations",
  "Medical-grade ink sourced from certified suppliers",
  "Full surface sanitisation between appointments",
  "Licensed and inspected studio premises",
];

export const aftercareTips = [
  {
    title: "Keep It Clean",
    tip: "Gently wash with fragrance-free soap twice daily for the first 2 weeks.",
  },
  {
    title: "Moisturise Daily",
    tip: "Apply a thin layer of unscented lotion to prevent cracking and fading.",
  },
  {
    title: "No Sun Exposure",
    tip: "Keep the tattoo out of direct sunlight for at least 3–4 weeks post-session.",
  },
  {
    title: "Avoid Swimming",
    tip: "No pools, oceans, or hot tubs until fully healed (3–4 weeks minimum).",
  },
  {
    title: "Don't Pick or Scratch",
    tip: "Peeling is normal. Let it shed naturally to protect the colour and linework.",
  },
  {
    title: "Stay Hydrated",
    tip: "Healthy, hydrated skin heals faster and holds ink better long-term.",
  },
];

export const pricingTiers = [
  {
    label: "Small",
    size: "Under 3 inches",
    range: "₹2,500 – ₹6,000",
    note: "Fine line, minimal designs",
  },
  {
    label: "Medium",
    size: "3–6 inches",
    range: "₹6,000 – ₹15,000",
    note: "Detailed single pieces",
  },
  {
    label: "Large",
    size: "6–12 inches",
    range: "₹15,000 – ₹35,000",
    note: "Complex art, half sleeves",
  },
  {
    label: "Full Sleeve",
    size: "Full arm",
    range: "₹60,000 – ₹1,50,000+",
    note: "Multi-session, custom artwork",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Fill out our booking form below or DM us on Instagram. We'll confirm within 24 hours with a consultation slot.",
  },
  {
    q: "Does it hurt?",
    a: "Pain varies by placement and personal tolerance. Ribs, spine, and feet tend to be more sensitive. Most clients describe it as a 'scratching' sensation.",
  },
  {
    q: "How long does healing take?",
    a: "Surface healing takes 2–3 weeks. Full skin-deep healing takes 3–6 months. Follow aftercare instructions carefully.",
  },
  {
    q: "Can I bring my own design?",
    a: "Absolutely. You can bring references, sketches, or a fully finished design. Our artist will adapt it for optimal tattooing.",
  },
  {
    q: "Do you do walk-ins?",
    a: "We accept walk-ins based on availability but appointments are strongly recommended for custom work.",
  },
  {
    q: "Is there a deposit required?",
    a: "Yes — a ₹1,500 deposit secures your slot and is deducted from your final session cost.",
  },
];