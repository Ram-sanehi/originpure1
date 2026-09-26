"use client";

import React from "react";

function LeafIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
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

function LightningIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function CupIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

function PackageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

interface FeatureItem {
  icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
  description: string;
}

const topBarItems = [
  "100% NATURAL BOTANICALS",
  "25 PYRAMID BAGS PER PACK",
  "PLANT-BASED BIODEGRADABLE",
] as const;

const features: FeatureItem[] = [
  {
    icon: LeafIcon,
    title: "100% First-Harvest Leaves",
    description: "Sourced from single-estate farms in Kyoto, stone-ground fresh.",
  },
  {
    icon: LightningIcon,
    title: "6 Hours Clean Focus",
    description: "L-theanine paired with clean caffeine. Zero jitters or crashes.",
  },
  {
    icon: CupIcon,
    title: "Silky, Smooth Flavor",
    description: "Naturally sweet and umami-rich with zero bitter bite.",
  },
  {
    icon: PackageIcon,
    title: "Freshly Sealed at Origin",
    description: "Micro-batched weekly in Japan to lock in vibrant nutrients.",
  },
];

export default function ProductFeatures() {
  return (
    <section aria-label="Product features" className="w-full">
      {/* 1. TOP BAR */}
      <div className="border-t border-[#E5DDD0] bg-[#FAF6F0] py-3.5 px-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center sm:gap-x-4">
          {topBarItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-[#6E6356] sm:text-[13px] sm:tracking-[0.18em]">
                {item}
              </span>
              {index < topBarItems.length - 1 && (
                <span
                  className="select-none text-xs font-semibold text-[#A89C8E]"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. MAIN FEATURE GRID */}
      <div className="bg-[#EDE4D8] px-6 py-12 sm:py-16 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 3. FEATURE CARDS */}
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex flex-col justify-between rounded-xl border border-[#E3D9CC]/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(60,50,40,0.06)]"
              >
                <div>
                  {/* Icon Box */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#D9E4D4] text-[#244234] shadow-[0_2px_6px_rgba(36,66,52,0.06)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Heading */}
                  <h3
                    className="mt-5 font-serif text-[17px] font-bold leading-snug tracking-[-0.01em] text-[#231F1C] sm:text-[18px]"
                    style={{
                      fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-2 font-sans text-[14px] leading-relaxed text-[#6B6560]"
                    style={{
                      fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
