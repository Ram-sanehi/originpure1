"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealImage, { waitForImagesReady } from "@/components/RevealImage";

gsap.registerPlugin(ScrollTrigger);

// Cohesive minimalist icons: matching 24x24 viewBox, 1.6 strokeWidth, and balanced geometric weight
function OriginIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {/* Whole botanical leaf with delicate vein */}
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

function AdditiveIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {/* Laboratory beaker with zero-additive slash */}
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

function FlavourIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {/* Pure botanical nectar droplet with natural sprout */}
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

function PreservativeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {/* Freshness seal / purity shield with botanical check */}
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

const trustBadges = [
  { title: "Pure by Origin", icon: OriginIcon },
  { title: "No Additives", icon: AdditiveIcon },
  { title: "No Artificial Flavours", icon: FlavourIcon },
  { title: "No Preservative", icon: PreservativeIcon },
];

export default function WhyOriginPure() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const setup = () => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trust-badge-row",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
          }
        );
      }, sectionRef);
    };

    const cleanup = waitForImagesReady(sectionRef.current, setup);

    return () => {
      cleanup();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/10 bg-[#0C1B14] py-12 sm:py-16 md:py-20 text-white"
    >
      {/* Background botanical imagery */}
      <div className="absolute inset-0">
        <RevealImage
          src="/prdimg/ButterflyPea/1.png"
          alt="Butterfly Pea Blue Tea product background"
          fill
          sizes="100vw"
          wrapperClassName="absolute inset-0"
          skeletonClassName=""
          className="object-cover opacity-80"
          priority={false}
          loading="lazy"
        />
      </div>

      {/* Deep botanical ambient vignette overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,24,19,0.88)_0%,rgba(11,24,19,0.76)_45%,rgba(11,24,19,0.85)_100%)]" />

      {/* Subtle radial ambient glow behind the pill for superior contrast against adjacent cream sections */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] sm:h-[320px] w-[95%] max-w-5xl rounded-full bg-[radial-gradient(ellipse,_rgba(229,169,60,0.14)_0%,_rgba(35,82,60,0.38)_45%,_transparent_72%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* ================= ENCLOSED PILL BAR ================= */}
        {/* Desktop: 1 row of 4 in a full pill; Tablet: 2 rows of 2; Mobile: 1 column stack */}
        <div className="trust-badge-row mx-auto w-full max-w-6xl rounded-3xl sm:rounded-[2.25rem] lg:rounded-full border-[0.75px] border-white/20 bg-[linear-gradient(135deg,rgba(18,40,30,0.88)_0%,rgba(10,24,18,0.78)_100%)] p-3 sm:p-4 lg:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.32),0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-3 xl:gap-3.5">
            {trustBadges.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="group flex items-center justify-center gap-3 sm:gap-3.5 rounded-2xl sm:rounded-full border-[0.75px] border-white/15 bg-white/[0.07] px-4 py-3 sm:px-5 sm:py-3.5 text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#C9A65E]/75 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_16px_rgba(201,166,94,0.12)] cursor-default"
              >
                {/* Visual anchor: unified circular icon container */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[0.75px] border-white/15 bg-white/10 text-white shadow-sm shrink-0 transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-[#C9A65E]/60 group-hover:bg-[#C9A65E]/15">
                  <Icon className="h-5 w-5 text-white transition-colors duration-300 ease-out group-hover:text-[#C9A65E] group-hover:drop-shadow-[0_0_6px_rgba(201,166,94,0.4)]" />
                </div>

                {/* Vertically centered, high-contrast label */}
                <span className="text-xs sm:text-sm font-semibold tracking-[0.03em] text-white/95 whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
