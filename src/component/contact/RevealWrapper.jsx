// components/RevealWrapper.jsx
// Wraps children in a scroll-triggered fade-up animation using IntersectionObserver
"use client";

import { useEffect, useRef } from "react";

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] - animation delay in seconds
 */
export default function RevealWrapper({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial hidden state
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}