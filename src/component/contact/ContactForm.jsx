// components/ContactForm.jsx
// Premium contact form with glassmorphism styling and all required fields
"use client";

import { useState, useRef } from "react";
import RevealWrapper from "./RevealWrapper";

/* ── Reusable field wrapper ───────────────────────────── */
function FieldLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-['Jost'] text-[11px] tracking-[0.2em] uppercase text-studio-sub mb-2"
    >
      {children}
    </label>
  );
}

/* ── Base input classes ───────────────────────────────── */
const inputBase =
  "input-field w-full bg-studio-card border border-studio-border  px-4 py-3.5 text-studio-text font-body text-sm placeholder-studio-muted focus:border-white/30 focus:ring-0 transition-all duration-250";

const selectBase =
  "input-field w-full bg-studio-card border border-studio-border  px-4 py-3.5 text-studio-text font-body text-sm focus:border-white/30 focus:ring-0 transition-all duration-250 cursor-pointer bg-[#1c1c1c]  appearance-none";

export default function ContactForm() {
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  /* Handle file selection */
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  /* Handle form submit (demo) */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  if (submitted) {
    return (
      <RevealWrapper>
        <div className="glass rounded-2xl p-10 sm:p-14 text-center">
          {/* Checkmark */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-full border border-studio-border flex items-center justify-center">
            <svg
              className="w-7 h-7 text-studio-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="font-heading text-5xl text-studio-text tracking-wide mb-4">
            REQUEST SENT
          </h2>
          <p className="font-body text-studio-sub text-sm max-w-xs mx-auto leading-relaxed">
            We&apos;ll review your vision and reach out within 48 hours to
            discuss next steps.
          </p>
        </div>
      </RevealWrapper>
    );
  }

  return (
    <RevealWrapper>
      {/* Section heading */}
      <div className="mb-10">
        <p className="font-[DM_SANS] text-[11px] tracking-[0.3em] uppercase text-studio-sub mb-3">
          Step 01
        </p>
        <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl tracking-wide text-studio-text leading-none">
          BOOK YOUR
          <br />
          SESSION
        </h2>
      </div>

      {/* Glass form card */}
      <form
        onSubmit={handleSubmit}
        className="glass  p-6 sm:p-10 space-y-6"
        noValidate
      >
        {/* Row: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FieldLabel htmlFor="name">Full Name *</FieldLabel>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className={inputBase}
            />
          </div>
          <div>
            <FieldLabel htmlFor="email">Email *</FieldLabel>
            <input
              id="email"
              type="email"
              required
              placeholder="you@email.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Row: Phone + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (000) 000-0000"
              className={inputBase}
            />
          </div>
          <div>
            <FieldLabel htmlFor="budget">Budget (Optional)</FieldLabel>
            <input
              id="budget"
              type="text"
              placeholder="e.g. $400 – $800"
              className={inputBase}
            />
          </div>
        </div>

        {/* Tattoo idea */}
        <div>
          <FieldLabel htmlFor="idea">Tattoo Idea *</FieldLabel>
          <textarea
            id="idea"
            required
            rows={4}
            placeholder="Describe your concept, style, mood, references..."
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Row: Placement + Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Placement dropdown */}
          <div className="relative">
            <FieldLabel htmlFor="placement">Placement *</FieldLabel>
            <select id="placement" required className={selectBase} >
              <option value="">Select placement</option>
              <option>Forearm</option>
              <option>Upper Arm / Bicep</option>
              <option>Sleeve (Full / Half)</option>
              <option>Chest</option>
              <option>Back (Full / Upper / Lower)</option>
              <option>Ribs / Side</option>
              <option>Thigh</option>
              <option>Calf / Shin</option>
              <option>Neck</option>
              <option>Hand / Fingers</option>
              <option>Foot / Ankle</option>
              <option>Other</option>
            </select>
            {/* Custom chevron */}
            <svg
              className="pointer-events-none absolute right-4 top-[calc(50%+10px)] w-4 h-4 text-studio-sub"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Size dropdown */}
          <div className="relative">
            <FieldLabel htmlFor="size">Approximate Size *</FieldLabel>
            <select id="size" required className={selectBase}>
              <option value="">Select size</option>
              <option>Micro (under 2")</option>
              <option>Small (2"–4")</option>
              <option>Medium (4"–8")</option>
              <option>Large (8"–12")</option>
              <option>Extra Large / Full Piece</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-[calc(50%+10px)] w-4 h-4 text-studio-sub"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Reference image upload */}
        <div>
          <FieldLabel>Reference Images (Optional)</FieldLabel>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full rounded-xl border border-dashed border-studio-border hover:border-studio-muted bg-studio-card/50 px-5 py-6 flex flex-col items-center gap-2 transition-colors duration-200 group"
          >
            <svg
              className="w-6 h-6 text-studio-muted group-hover:text-studio-sub transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {fileName ? (
              <span className="font-body text-sm text-studio-text">
                {fileName}
              </span>
            ) : (
              <>
                <span className="font-body text-sm text-studio-sub">
                  Click to upload reference images
                </span>
                <span className="font-body text-xs text-studio-muted">
                  PNG, JPG, WEBP up to 10MB
                </span>
              </>
            )}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full mt-2 overflow-hidden rounded-xl bg-studio-text text-studio-bg font-display font-semibold tracking-[0.15em] uppercase text-sm py-4 transition-all duration-300 hover:bg-studio-accent disabled:opacity-60"
        >
          {/* Shine sweep on hover */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <span className="relative flex items-center justify-center gap-3">
            {loading ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending Request…
              </>
            ) : (
              <>
                Submit Booking Request
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </span>
        </button>

        <p className="text-center font-[jost] text-[11px] text-studio-muted tracking-wide">
          By submitting you agree to our deposit & cancellation policies below.
        </p>
      </form>
    </RevealWrapper>
  );
}