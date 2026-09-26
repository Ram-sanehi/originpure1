"use client";

import React from "react";

function LeafIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

function SparkleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}

function CupIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

function PackageIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
  "20 BAGS PER PACK",
  "PLANT-BASED BIODEGRADABLE",
] as const;

const features: FeatureItem[] = [
  {
    icon: LeafIcon,
    title: "100% First-Harvest Leaves",
    description: "Sourced from high-altitude regenerative gardens, harvested at peak vitality.",
  },
  {
    icon: SparkleIcon,
    title: "Sustained Calm & Vitality",
    description: "Rich in natural antioxidants and gentle L-theanine for balanced, jitter-free calm.",
  },
  {
    icon: CupIcon,
    title: "Silky, Smooth Flavor",
    description: "Naturally balanced and aromatic whole botanicals with zero bitter aftertaste.",
  },
  {
    icon: PackageIcon,
    title: "Freshly Sealed at Origin",
    description: "Packed fresh in small batches to lock in natural aroma, essential oils, and potency.",
  },
];

export default function ProductFeatures() {
  return (
    <section aria-label="Product features" className="w-full">
      {/* 1. TOP BAR (INFO STRIP) WITH SOFT GRADIENT TRANSITION */}
      <div className="relative border-t border-[#C9A65E]/20 bg-gradient-to-b from-[#FAF6EE] via-[#F6EFE3] to-[#EFE7DA] py-4 px-4 sm:px-6 shadow-[inset_0_1px_3px_rgba(201,166,94,0.06)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center sm:gap-x-4">
          {topBarItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E6356]">
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

      {/* 2. MAIN FEATURE GRID (Static grid at all breakpoints: 1 col mobile, 2 col tablet, 4 col desktop) */}
      <div className="relative bg-gradient-to-b from-[#EFE7DA] via-[#EDE4D8] to-[#E5DACB]/60 px-6 py-12 sm:py-14 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {/* 3. FEATURE CARDS */}
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group flex h-full flex-col justify-between rounded-[1.35rem] border border-[#1B4332]/[0.08] bg-[#FDFBF7] p-6 sm:p-7 shadow-[0_4px_16px_rgba(27,67,50,0.03)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C9A65E]/50 hover:bg-white hover:shadow-[0_20px_42px_-10px_rgba(27,67,50,0.10),0_6px_18px_-4px_rgba(201,166,94,0.12)] cursor-default"
              >
                <div>
                  {/* Icon Circle with enhanced size, contrast, soft gold gradient and border weight */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#C9A65E]/50 bg-gradient-to-br from-[#FFFDF9] via-[#F5EAD4] to-[#E6CD9F] text-[#143427] shadow-[0_3px_12px_rgba(201,166,94,0.18)] ring-4 ring-[#C9A65E]/10 transition-all duration-300 ease-out group-hover:scale-108 group-hover:border-[#C9A65E]/80 group-hover:shadow-[0_6px_20px_rgba(201,166,94,0.28)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Heading */}
                  <h3 className="mt-5 font-serif text-xl sm:text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#1B4332] transition-colors duration-200 group-hover:text-[#0C1910]">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#1B4332]/70">
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
