// components/StudioInfo.jsx
// Studio address, working hours, contact details, and embedded map placeholder
"use client";

import RevealWrapper from "./RevealWrapper";

/* ── Reusable info block ──────────────────────────────── */
function InfoBlock({ icon, label, children }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Icon */}
      <div className="mt-0.5 w-9 h-9  border border-studio-border flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-'['Bebas_Neue'] text-[10px] tracking-[0.25em] uppercase text-studio-muted mb-1">
          {label}
        </p>
        <div className="font-[Jost] text-sm text-studio-sub leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Hour row ─────────────────────────────────────────── */
function HourRow({ day, hours, isOpen }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-studio-border/50 last:border-0">
      <span className="font-[jost] text-xs text-studio-sub">{day}</span>
      <span
        className={`font-['Jost'] text-xs ${
          isOpen ? "text-studio-text" : "text-studio-muted"
        }`}
      >
        {hours}
      </span>
    </div>
  );
}

export default function StudioInfo() {
  return (
    <RevealWrapper delay={0.15}>
      <div className="mb-10">
        <p className="font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase text-studio-sub mb-3">
          Step 02
        </p>
        <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl tracking-wide text-studio-text leading-none">
          FIND THE
          <br />
           STUDIO
        </h2>
      </div>

      <div className="space-y-5">
        {/* ── Map placeholder ────────────────────────── */}
        <div className="w-full h-70  overflow-hidden  relative">
          {/* Stylised map placeholder */}
          <div className="absolute inset-0 bg-studio-card flex flex-col items-center justify-center gap-2">
             <div className="w-full h-[400px] md:h-[600px]  overflow-hidden border border-white/10 shadow-lg">
          <iframe
            title="Studio Location"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Greater%20Noida+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
             <svg
              className="w-8 h-8 text-studio-text relative z-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="relative z-50 font-body text-xs text-black tracking-widest uppercase">
              Lower East Side, NYC
            </span>
        </div>
            {/* Pin */}
         
          </div>
        </div>

        {/* ── Info card ──────────────────────────────── */}
        <div className="glass  p-6 space-y-5">
          {/* Address */}
          <InfoBlock
            label="Address"
            icon={
              <svg
                className="w-4 h-4 text-studio-sub"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          >
            <p className="font-[Jost]">47 Delancey Street, Studio 3B</p>
            <p className="font-[Jost]">New York, NY 10002</p>
          </InfoBlock>

          <div className="divider" />

          {/* Phone */}
          <InfoBlock
            label="Phone"
            icon={
              <svg
                className="w-4 h-4 text-studio-sub"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
          >
            <a
              href="tel:+12125550147"
              className="hover:text-studio-text transition-colors duration-150"
            >
              +1 (212) 555-0147
            </a>
          </InfoBlock>

          <div className="divider" />

          {/* Email */}
          <InfoBlock
            label="Email"
            icon={
              <svg
                className="w-4 h-4 text-studio-sub"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          >
            <a
              href="mailto:hello@inkhaus.studio"
              className="hover:text-studio-text transition-colors duration-150"
            >
              hello@inkhaus.studio
            </a>
          </InfoBlock>
        </div>

        {/* ── Hours card ─────────────────────────────── */}
        <div className="glass  p-6">
          <p className="font-[jost] text-[10px] tracking-[0.25em] uppercase text-studio-muted mb-4">
            Studio Hours
          </p>
          <HourRow day="Monday" hours="Closed" isOpen={false} />
          <HourRow day="Tuesday – Thursday" hours="11:00 – 20:00" isOpen />
          <HourRow day="Friday – Saturday" hours="11:00 – 22:00" isOpen />
          <HourRow day="Sunday" hours="12:00 – 18:00" isOpen />
        </div>
      </div>
    </RevealWrapper>
  );
}