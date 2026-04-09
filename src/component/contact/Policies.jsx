// components/Policies.jsx
// Studio policies: deposit, cancellation, age requirement
"use client";

import RevealWrapper from "./RevealWrapper";

const policies = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-studio-sub"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Deposit Policy",
    tag: "Required",
    points: [
      "A $100–$200 deposit is required to confirm your appointment.",
      "Deposits are non-refundable and applied to your final session cost.",
      "Deposits may be transferred once (minimum 72 hours' notice required).",
      "Payment via card or bank transfer following your consultation.",
    ],
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-studio-sub"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Cancellation Rules",
    tag: "Important",
    points: [
      "48 hours' notice required for any reschedule or cancellation.",
      "Cancellations under 48 hours forfeit the deposit.",
      "No-shows forfeit the deposit and may require full pre-payment for future bookings.",
      "Life happens — reach out early and we'll work with you.",
    ],
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-studio-sub"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Age Requirement",
    tag: "Legal",
    points: [
      "You must be 18 years or older to receive a tattoo at our studio.",
      "Valid government-issued photo ID is required at every appointment.",
      "No exceptions will be made, regardless of parental consent.",
      "We reserve the right to refuse service if age cannot be verified.",
    ],
  },
];

/* ── Single policy card ───────────────────────────────── */
function PolicyCard({ policy, index }) {
  return (
    <div
      className="glass  p-6 sm:p-7 flex flex-col gap-5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 rounded-lg border border-studio-border flex items-center justify-center shrcrownink-0">
          {policy.icon}
        </div>
        <span className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase text-studio-muted border border-studio-border/60 rounded-md px-2.5 py-1">
          {policy.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Bebas_Neue'] text-3xl tracking-wide text-studio-text">
        {policy.title}
      </h3>

      {/* Points */}
      <ul className="space-y-3">
        {policy.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5  w-1.5 h-1.5  rounded-full bg-[#f5f5f5] shrcrownink-0" />
            <span className="font-['Jost'] text-sm text-studio-sub leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Policies() {
  return (
    <section className="py-2">
      <RevealWrapper>
        <div className="mb-12">
          <p className="font-['DM_Sans'] text-[11px] tracking-[0.3em] uppercase text-studio-sub mb-3">
            Before You Book
          </p>
          <h2 className="font-['Bebas_Neue'] text-6xl sm:text-7xl tracking-wide text-studio-text leading-none">
            STUDIO
            <br />
            POLICIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {policies.map((policy, i) => (
            <PolicyCard key={i} policy={policy} index={i} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
