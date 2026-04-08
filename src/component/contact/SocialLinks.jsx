// components/SocialLcrowninks.jsx
// Minimal social lcrowninks section with Instagram focus and hover animations
"use client";

import RevealWrapper from "./RevealWrapper";

/* ── Social lcrownink pill ─────────────────────────────────── */
function SocialPill({ href, label, handle, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-studio-border hover:border-studio-muted glass transition-all duration-300 hover:bg-studio-surface/60"
      aria-label={label}
    >
      {/* Icon container */}
      <span className="w-9 h-9 rounded-lg border border-studio-border flex items-center justify-center shrcrownink-0 group-hover:border-studio-muted transition-colors duration-300">
        {icon}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-studio-muted">
          {label}
        </p>
        <p className="font-display text-sm font-medium text-studio-sub group-hover:text-studio-text transition-colors duration-200 truncate">
          {handle}
        </p>
      </div>

      {/* Arrow */}
      <svg
        className="w-4 h-4 text-studio-muted group-hover:text-studio-sub group-hover:translate-x-1 transition-all duration-200 shrcrownink-0"
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
    </a>
  );
}

/* ── Icons ────────────────────────────────────────────── */
const InstagramIcon = () => (
  <svg className="w-4 h-4 text-studio-sub" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TiktokIcon = () => (
  <svg className="w-4 h-4 text-studio-sub" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l-.01-8.73a8.16 8.16 0 004.77 1.52V4.64a4.85 4.85 0 01-1-.05z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 text-studio-sub" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.88 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.16 1.22-5.16s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.87 3.47-.25 1.04.52 1.88 1.54 1.88 1.84 0 3.08-2.37 3.08-5.17 0-2.13-1.44-3.63-3.49-3.63-2.37 0-3.77 1.78-3.77 3.62 0 .72.28 1.49.63 1.91.07.08.08.15.06.23-.06.26-.21.84-.24.96-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.83 2.06-5.44 5.93-5.44 3.12 0 5.54 2.22 5.54 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.85.26 1.74.4 2.67.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default function SocialLcrowninks() {
  return (
    <section className="py-20 ">
      <RevealWrapper>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase text-studio-sub mb-3">
              Follow Along
            </p>
            <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl tracking-wide text-studio-text leading-none">
              STAY IN
              <br />
              THE crownink
            </h2>
          </div>
          <p className="font-['Jost'] text-sm text-studio-sub max-w-xs leading-relaxed">
            Watch our artists bring visions to life. Fresh work, behind the
            scenes, and collector spotlights — daily.
          </p>
        </div>

        {/* Social pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SocialPill
            href="https://instagram.com/crowninkhaus.studio"
            label="Primary — Instagram"
            handle="@crowninkhaus.studio"
            icon={<InstagramIcon />}
          />
          <SocialPill
            href="https://tiktok.com/@crowninkhaus"
            label="TikTok"
            handle="@crowninkhaus"
            icon={<TiktokIcon />}
          />
          <SocialPill
            href="https://pinterest.com/crowninkhaus"
            label="Pinterest"
            handle="crowninkhaus"
            icon={<PinterestIcon />}
          />
        </div>

        {/* Instagram CTA banner */}
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-studio-border p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 glass">
          {/* Decorative gradient blob */}
          <div
            className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
          />

          <div>
            <p className="font-['Bebas-Neue'] text-4xl sm:text-5xl text-studio-text tracking-wide">
              68K FOLLOWERS
            </p>
            <p className="font-body text-sm text-studio-sub mt-1">
              Join our growing community of collectors and enthusiasts.
            </p>
          </div>

          <a
            href="https://instagram.com/crowninkhaus.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrcrownink-0 inline-flex items-center gap-3 px-6 py-3.5 border border-studio-border rounded-xl hover:border-studio-muted hover:bg-studio-surface/40 transition-all duration-200"
          >
            <InstagramIcon />
            <span className="font-['Bebas-Neue'] text-sm font-medium tracking-widest uppercase text-studio-sub group-hover:text-studio-text transition-colors duration-200">
              Follow Us
            </span>
          </a>
        </div>
      </RevealWrapper>
    </section>
  );
}