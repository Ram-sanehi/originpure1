"use client";

import React from "react";

function LeafIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.5 4.5C13 4.8 7.7 7 6 11.1c-1.3 3.2.5 6.6 3.9 6.7 4.4.1 7.4-4.4 9.6-13.3Z" />
      <path d="M4.5 20c2.1-4.5 5.8-7.3 11.2-9.2" />
    </svg>
  );
}

function SunIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function PackageIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m21.12 6.4-9-4a2 2 0 0 0-1.64 0l-9 4A2 2 0 0 0 1 8.2v7.6a2 2 0 0 0 1.12 1.8l9 4a2 2 0 0 0 1.64 0l9-4A2 2 0 0 0 23 15.8V8.2a2 2 0 0 0-1.12-1.8Z" />
      <path d="m2.7 7.5 9.3 4.2 9.3-4.2" />
      <path d="M12 11.7V22" />
    </svg>
  );
}

function RecycleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 19H4.81a2 2 0 0 1-1.78-2.9l2.42-4.52" />
      <path d="M11 19h8.2a2 2 0 0 0 1.78-2.9l-2.42-4.52" />
      <path d="M15.5 5h-7a2 2 0 0 0-1.78 1.1L4.2 11" />
      <path d="m18 2 3 3-3 3" />
      <path d="m9 22-3-3 3-3" />
      <path d="m5 13-3-3 3-3" />
    </svg>
  );
}

function TruckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M14 8h4.5a2 2 0 0 1 1.6.8L23 13v4a1 1 0 0 1-1 1h-2" />
      <circle cx="7.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
  );
}

interface ProcessStep {
  step: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
  description: string;
  side: "left" | "right";
}

const steps: ProcessStep[] = [
  {
    step: "01",
    icon: LeafIcon,
    title: "Carefully Sourced Botanicals",
    description: "Premium herbs selected from trusted growers.",
    side: "left",
  },
  {
    step: "02",
    icon: SunIcon,
    title: "Naturally Dried",
    description: "Preserving aroma, flavour, and character.",
    side: "right",
  },
  {
    step: "03",
    icon: PackageIcon,
    title: "Packed In Pyramid Bags",
    description: "More room for herbs to fully infuse.",
    side: "left",
  },
  {
    step: "04",
    icon: RecycleIcon,
    title: "Plant-Based & Biodegradable",
    description: "Designed with sustainability in mind.",
    side: "right",
  },
  {
    step: "05",
    icon: TruckIcon,
    title: "Delivered Through Amazon",
    description: "Fast shipping, secure checkout, easy returns.",
    side: "left",
  },
];

export default function OurProcess() {
  return (
    <section
      aria-labelledby="our-process-heading"
      className="bg-[#FAF6F0] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
    >
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#B5651D]">
          Our Process
        </p>
        <h2
          id="our-process-heading"
          className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#231F1C] sm:text-4xl md:text-5xl lg:text-[48px]"
          style={{
            fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
          }}
        >
          From Farm To Cup
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#6E665D] sm:text-lg md:text-[18px]"
          style={{
            fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
          }}
        >
          A thoughtful path from whole botanicals to the cup waiting in your kitchen.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative mx-auto mt-14 max-w-5xl sm:mt-18 md:mt-20">
        {/* ========================================================================= */}
        {/* DESKTOP VIEW: 3-column CSS Grid with center line, alternating cards       */}
        {/* ========================================================================= */}
        <div className="relative hidden md:block">
          {/* Central Vertical Line running through the center column */}
          <div
            className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-[#D4A574]"
            aria-hidden="true"
          />

          {/* 3-Column Grid: [Left Card Col] [Center Line/Node Col] [Right Card Col] */}
          <div className="grid grid-cols-[1fr_64px_1fr] lg:grid-cols-[1fr_80px_1fr] gap-y-10 lg:gap-y-14 items-center">
            {steps.map(({ step, icon: Icon, title, description, side }) => {
              const isLeft = side === "left";

              return (
                <React.Fragment key={step}>
                  {/* COLUMN 1: LEFT CARD COLUMN */}
                  <div className="flex h-full items-center justify-end">
                    {isLeft ? (
                      <div className="flex w-full items-center justify-end">
                        <article className="w-full max-w-[420px] rounded-2xl border border-[#E7DFD4] bg-white p-6 shadow-[0_4px_20px_rgba(70,50,30,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(70,50,30,0.08)]">
                          <div className="flex items-center gap-4 text-left">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9E4D4] text-[#244234] shadow-[0_2px_6px_rgba(36,66,52,0.06)]">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3
                                className="font-serif text-[18px] font-bold leading-snug tracking-tight text-[#231F1C] sm:text-[20px]"
                                style={{
                                  fontFamily:
                                    "var(--font-serif), 'Playfair Display', Georgia, serif",
                                }}
                              >
                                {title}
                              </h3>
                              <p
                                className="mt-1 font-sans text-[14px] leading-relaxed text-[#6E665D]"
                                style={{
                                  fontFamily:
                                    "var(--font-sans), Inter, system-ui, sans-serif",
                                }}
                              >
                                {description}
                              </p>
                            </div>
                          </div>
                        </article>
                        {/* Horizontal connector line touching the node */}
                        <div
                          className="h-[2px] w-6 shrink-0 bg-[#D4A574] lg:w-10"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      /* Empty spacer for right-side rows */
                      <div className="w-full" aria-hidden="true" />
                    )}
                  </div>

                  {/* COLUMN 2: CENTER LINE & NUMBERED NODE */}
                  <div className="flex h-full items-center justify-center">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D4A574] bg-white font-serif text-[16px] font-bold text-[#B5651D] shadow-sm"
                      style={{
                        fontFamily:
                          "var(--font-serif), 'Playfair Display', Georgia, serif",
                      }}
                      aria-label={`Step ${step}`}
                    >
                      {step}
                    </div>
                  </div>

                  {/* COLUMN 3: RIGHT CARD COLUMN */}
                  <div className="flex h-full items-center justify-start">
                    {!isLeft ? (
                      <div className="flex w-full items-center justify-start">
                        {/* Horizontal connector line touching the node */}
                        <div
                          className="h-[2px] w-6 shrink-0 bg-[#D4A574] lg:w-10"
                          aria-hidden="true"
                        />
                        <article className="w-full max-w-[420px] rounded-2xl border border-[#E7DFD4] bg-white p-6 shadow-[0_4px_20px_rgba(70,50,30,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(70,50,30,0.08)]">
                          {/* Mirrored layout: Text on left, icon on right */}
                          <div className="flex items-center justify-between gap-4 text-left">
                            <div className="min-w-0 flex-1">
                              <h3
                                className="font-serif text-[18px] font-bold leading-snug tracking-tight text-[#231F1C] sm:text-[20px]"
                                style={{
                                  fontFamily:
                                    "var(--font-serif), 'Playfair Display', Georgia, serif",
                                }}
                              >
                                {title}
                              </h3>
                              <p
                                className="mt-1 font-sans text-[14px] leading-relaxed text-[#6E665D]"
                                style={{
                                  fontFamily:
                                    "var(--font-sans), Inter, system-ui, sans-serif",
                                }}
                              >
                                {description}
                              </p>
                            </div>
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9E4D4] text-[#244234] shadow-[0_2px_6px_rgba(36,66,52,0.06)]">
                              <Icon className="h-6 w-6" />
                            </div>
                          </div>
                        </article>
                      </div>
                    ) : (
                      /* Empty spacer for left-side rows */
                      <div className="w-full" aria-hidden="true" />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Single column — vertical line & nodes on left, cards on right */}
        {/* ========================================================================= */}
        <div className="relative block md:hidden">
          {/* Vertical line running through the left-aligned nodes */}
          <div
            className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-[#D4A574] sm:left-[27px]"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {steps.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="relative flex items-center gap-3 sm:gap-4">
                {/* Numbered Node on the line */}
                <div
                  className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#D4A574] bg-white font-serif text-[15px] font-bold text-[#B5651D] shadow-sm sm:h-12 sm:w-12 sm:text-[16px]"
                  style={{
                    fontFamily:
                      "var(--font-serif), 'Playfair Display', Georgia, serif",
                  }}
                  aria-label={`Step ${step}`}
                >
                  {step}
                </div>

                {/* Short connector line */}
                <div
                  className="h-[2px] w-3 shrink-0 bg-[#D4A574] sm:w-5"
                  aria-hidden="true"
                />

                {/* Card */}
                <article className="min-w-0 flex-1 rounded-2xl border border-[#E7DFD4] bg-white p-5 shadow-[0_4px_20px_rgba(70,50,30,0.05)] sm:p-6">
                  <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9E4D4] text-[#244234] shadow-[0_2px_6px_rgba(36,66,52,0.06)] sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-serif text-[17px] font-bold leading-snug tracking-tight text-[#231F1C] sm:text-[19px]"
                        style={{
                          fontFamily:
                            "var(--font-serif), 'Playfair Display', Georgia, serif",
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="mt-1 font-sans text-[13px] leading-relaxed text-[#6E665D] sm:text-[14px]"
                        style={{
                          fontFamily:
                            "var(--font-sans), Inter, system-ui, sans-serif",
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
