"use client";

import React, { useEffect, useRef, useState } from "react";

type IconProps = { className?: string };
type TrustItem = { label: string; icon: (props: IconProps) => React.ReactNode };

function LeafIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M19.5 4.5C13 4.8 7.8 7.2 6.2 11.2c-1.3 3.3.4 6.8 3.8 6.9 4.3.1 7.3-4.4 9.5-13.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 19.5c2.2-4.4 5.8-7.2 11-9.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AdditiveIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M9 3h6M10 3v4.5l-3.5 6A2.5 2.5 0 0 0 8.7 17.5h6.6a2.5 2.5 0 0 0 2.2-3.8l-3.5-6V3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 20.5L20.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlavourIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.8C9.4 6.6 5 11 5 15.5a7 7 0 0 0 14 0C19 11 14.6 6.6 12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v6M9.5 14l2.5-2.5 2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PreservativeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-9 9c0 5 4 8.5 9 10 5-1.5 9-5 9-10a9 9 0 0 0-9-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.5l2.5 2.5 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustItems: TrustItem[] = [
  { label: "Pure by Origin", icon: LeafIcon },
  { label: "No Additives", icon: AdditiveIcon },
  { label: "No Artificial Flavours", icon: FlavourIcon },
  { label: "No Preservative", icon: PreservativeIcon },
];

export default function TrustBar({ className = "" }: { className?: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for motion
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Origin Pure standards"
      className={`relative z-30 w-full overflow-hidden bg-transparent text-[#FAF6F0] py-10 sm:py-12 lg:py-16 ${className}`}
    >
      {/* ================= SUBTLE RADIAL GLOW FOR DEPTH (NO BACKGROUND IMAGE) ================= */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-[280px] w-full max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(38,88,58,0.26)_0%,_rgba(18,48,32,0.12)_45%,_transparent_72%)] blur-2xl" />
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-10">
        {/* SINGLE PILL-SHAPED UNIFYING OUTER CONTAINER WRAPPING ALL 4 BADGES */}
        <div
          className={`inline-flex max-w-full items-center justify-center rounded-[2rem] sm:rounded-full border-[0.5px] border-white/12 bg-[linear-gradient(135deg,rgba(18,40,30,0.75)_0%,rgba(10,24,18,0.65)_100%)] p-2 xs:p-2.5 sm:p-2.5 md:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.30)] backdrop-blur-md transition-all duration-700 ease-out ${
            isVisible || reducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3.5 pointer-events-none"
          }`}
        >
          {/* 4 TRUST BADGES: RESPONSIVE 2x2 ON MOBILE, INLINE ROW ON LARGER SCREENS */}
          <div className="grid w-full max-w-[390px] grid-cols-2 gap-2 xs:gap-2.5 sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2.5 md:gap-3 lg:gap-3.5">
            {trustItems.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${index * 80 + 100}ms`,
                }}
                className="group flex h-9 sm:h-10 items-center justify-center sm:justify-start gap-1.5 xs:gap-2 sm:gap-2.5 rounded-full border-[0.5px] border-white/10 bg-white/[0.04] px-2.5 xs:px-3.5 sm:px-5 text-[9.5px] xs:text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#FAF6F0] shadow-[0_2px_10px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 ease-out cursor-default hover:-translate-y-0.5 hover:border-[#E4C56F]/80 hover:bg-[#E4C56F]/[0.07] hover:shadow-[0_4px_16px_rgba(0,0,0,0.35),0_0_12px_rgba(228,197,111,0.18)]"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#E4C56F] transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-[#F6D884] group-hover:drop-shadow-[0_0_6px_rgba(228,197,111,0.45)]" />
                <span className="truncate whitespace-nowrap transition-colors duration-300 ease-out group-hover:text-[#F5E2B5]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
