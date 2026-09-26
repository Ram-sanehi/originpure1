"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AMAZON_URL } from "@/lib/amazon";

// Unified cohesive icon set matching the brand aesthetic:
// 24x24 viewBox, strokeWidth 1.5, fill none, clean geometric lines, single tone
function ShieldCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FastTruckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M14 9h4.5l2.5 3.5V17a1 1 0 0 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function EasyReturnsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function VerifiedStarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SupportHeadsetIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function TrustedCheckoutIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <path d="M12 15v2" />
    </svg>
  );
}

interface AmazonTrustFeature {
  icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
}

const trustFeatures: AmazonTrustFeature[] = [
  {
    icon: ShieldCheckIcon,
    title: "Secure Payments",
  },
  {
    icon: FastTruckIcon,
    title: "Fast Delivery",
  },
  {
    icon: EasyReturnsIcon,
    title: "Easy Returns",
  },
  {
    icon: VerifiedStarIcon,
    title: "Verified Customer Reviews",
  },
  {
    icon: SupportHeadsetIcon,
    title: "Amazon Customer Support",
  },
  {
    icon: TrustedCheckoutIcon,
    title: "Trusted Checkout Experience",
  },
];

export default function PreferAmazon() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect user motion preferences
    if (typeof window !== "undefined") {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(motionQuery.matches);
      if (motionQuery.matches) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="prefer-amazon-heading"
      className="relative overflow-hidden border-t border-[#1B4332]/10 bg-[#FAF6F0] px-6 py-16 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Subtle ambient botanical glow in corner */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,166,94,0.07)_0%,_transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1.25fr] lg:gap-6 xl:gap-8">
          {/* LEFT COLUMN: Text Content & CTA */}
          <div className="max-w-xl text-left">
            {/* Eyebrow Label with delicate leaf line */}
            <div className="flex items-center gap-2.5">
              <span className="h-5 w-px bg-[#C9A65E]" aria-hidden="true" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A65E]">
                A Familiar Way to Shop
              </p>
            </div>

            {/* Heading */}
            <h2
              id="prefer-amazon-heading"
              className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#1B4332]"
            >
              Prefer Buying
              <br />
              Through Amazon?
            </h2>

            {/* Body Text */}
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-[#1B4332]/70 sm:text-[17px]">
              Many customers feel more comfortable purchasing from Amazon when trying a new brand for the first time. We make that choice easy.
            </p>

            {/* CTA Button: matches site's black/gold Amazon branding */}
            <div className="mt-8">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop on Amazon"
                className="block w-[180px] shrink-0 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/70 sm:w-[210px]"
              >
                <Image
                  src="/prdimg/img.png"
                  alt="Shop on Amazon"
                  width={2163}
                  height={727}
                  sizes="(max-width: 640px) 180px, 210px"
                  className="h-auto w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
                />
              </a>
            </div>
          </div>

          {/* ELEGANT STRENGTHENED VERTICAL DIVIDER */}
          <div
            className="hidden lg:block h-[280px] w-[1.5px] bg-gradient-to-b from-transparent via-[#C9A65E]/45 via-[#1B4332]/25 to-transparent"
            aria-hidden="true"
          />

          {/* RIGHT COLUMN: 6 feature cards with unified height, soft cream styling & tinted icon badge */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4"
          >
            {trustFeatures.map(({ icon: Icon, title }, index) => (
              <div
                key={title}
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${index * 75 + 80}ms`,
                }}
                className={`group flex flex-col justify-between h-[138px] sm:h-[148px] rounded-[1.2rem] border border-[#1B4332]/[0.08] bg-[#FDFBF7] p-4 sm:p-5 text-left shadow-[0_4px_16px_rgba(27,67,50,0.03)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#C9A65E]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(27,67,50,0.08)] ${
                  isVisible || reducedMotion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3.5 pointer-events-none"
                }`}
              >
                {/* Icon Circle with warm gold/botanical background tint */}
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A65E]/30 bg-[#C9A65E]/10 text-[#1B4332] shadow-[0_2px_8px_rgba(201,166,94,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#C9A65E]/20 group-hover:text-[#0C1910]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Card Title with balanced padding and font styling */}
                <h3 className="font-serif text-[14px] sm:text-[15px] font-medium leading-snug text-[#1B4332] transition-colors duration-200 group-hover:text-[#0C1910]">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
