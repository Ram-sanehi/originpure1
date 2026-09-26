"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MarqueeBlend {
  id: string;
  name: string;
  image: string;
  alt: string;
}

// Column 1: 5 distinct blends (upward continuous loop)
const column1Blends: MarqueeBlend[] = [
  {
    id: "moringa-lemongrass",
    name: "Moringa Lemongrass",
    image: "/images/hero_scenes/box_MoringaLemonGrass.webp",
    alt: "Origin Pure Moringa Lemongrass herbal tea box with fresh lemongrass and moringa leaves",
  },
  {
    id: "butterfly-pea",
    name: "Butterfly Pea Blue Tea",
    image: "/images/hero_scenes/box_ButterflyPea.webp",
    alt: "Origin Pure Butterfly Pea Blue Tea box with vibrant blue petals and botanicals",
  },
  {
    id: "lemon-ginger",
    name: "Lemon Ginger",
    image: "/images/hero_scenes/box_LemonGinger.webp",
    alt: "Origin Pure Lemon Ginger herbal tea box with fresh ginger root and lemon",
  },
  {
    id: "clove-lemon",
    name: "Chamomile Clove Lemon",
    image: "/images/hero_scenes/box_CloveLemon.webp",
    alt: "Origin Pure Chamomile Clove Lemon herbal tea box with whole cloves and citrus",
  },
  {
    id: "lemon-fennel",
    name: "Lemon Fennel",
    image: "/images/hero_scenes/box_LemonFennel.webp",
    alt: "Origin Pure Lemon Fennel herbal tea box with aromatic fennel seeds and star anise",
  },
];

// Column 2: 4 distinct blends (downward continuous loop)
// Mutually exclusive blend selection ensures zero duplication between columns
const column2Blends: MarqueeBlend[] = [
  {
    id: "hibiscus-lemon-balm",
    name: "Hibiscus Lemon Balm",
    image: "/images/hero_scenes/box_HibiscusLemonBalm.webp",
    alt: "Origin Pure Hibiscus Lemon Balm herbal tea box with ruby hibiscus flowers and fresh berries",
  },
  {
    id: "lemon-tulsi",
    name: "Lemon Tulsi",
    image: "/images/hero_scenes/box_LemonTulsi.webp",
    alt: "Origin Pure Lemon Tulsi herbal tea box with holy basil leaves and lemon twists",
  },
  {
    id: "chamomile-lemon",
    name: "Chamomile Lemon",
    image: "/images/hero_scenes/box_ChamomileLemon.webp",
    alt: "Origin Pure Chamomile Lemon herbal tea box with delicate chamomile blooms and citrus",
  },
  {
    id: "lemon-turmeric",
    name: "Lemon Turmeric",
    image: "/images/hero_scenes/box_LemonTurmeric.webp",
    alt: "Origin Pure Lemon Turmeric herbal tea box with golden turmeric root and black peppercorns",
  },
];

// Duplicate lists once for seamless -50% / 0% looping
const col1Full = [...column1Blends, ...column1Blends];
const col2Full = [...column2Blends, ...column2Blends];

interface HeroMarqueeProps {
  mounted?: boolean;
}

export default function HeroMarquee({ mounted = true }: HeroMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      aria-label="Origin Pure botanical blend visual showcase"
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className={`hero-marquee-wrapper relative w-full max-w-[260px] xs:max-w-[290px] sm:max-w-[390px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px] select-none transition-all duration-1000 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Subtle radial glow / spotlight directly centered behind the marquee */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,166,94,0.18)_0%,_rgba(30,75,48,0.38)_45%,_transparent_72%)] blur-2xl sm:h-[480px] sm:w-[480px]"
        aria-hidden="true"
      />

      {/* Outer framing container with hardware-accelerated CSS vertical edge mask */}
      <div
        className="relative h-[380px] xs:h-[420px] sm:h-[490px] lg:h-[530px] xl:h-[560px] w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Soft atmospheric gradient edge overlays matching hero background */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 sm:h-18 bg-gradient-to-b from-[#14261A] via-[#14261A]/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 sm:h-18 bg-gradient-to-t from-[#112015] via-[#112015]/70 to-transparent"
          aria-hidden="true"
        />

        {/* 2-Column Responsive Layout:
            - Mobile (< sm): Single column centered
            - Tablet/Desktop (sm+): Two parallel columns scrolling in opposite directions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 h-full items-start">
          
          {/* ================= COLUMN 1 (SCROLLING UP) ================= */}
          <div className="relative w-full overflow-hidden">
            <div
              className="animate-marquee-vertical-up flex flex-col gap-3.5 sm:gap-4 will-change-transform"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {col1Full.map((item, idx) => (
                <article
                  key={`col1-${item.id}-${idx}`}
                  className="group/card relative w-full aspect-[4/3] shrink-0 overflow-hidden rounded-2xl bg-[#12261A] shadow-[0_8px_20px_-3px_rgba(0,0,0,0.28),0_4px_12px_rgba(5,18,12,0.25)]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 195px, 220px"
                    className="object-cover"
                    priority={idx < 2}
                  />
                  
                  {/* Subtle inner dark vignette for rich photographic depth */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1A12]/85 via-transparent to-black/15"
                    aria-hidden="true"
                  />

                  {/* Clean, discreet blend identification tag */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                    <p className="truncate font-sans text-[10.5px] sm:text-[11px] font-medium tracking-[0.06em] text-[#FAF6F0]/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      {item.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= COLUMN 2 (SCROLLING DOWN) ================= */}
          {/* Hidden on mobile to keep small screens uncluttered and focused */}
          <div className="relative hidden sm:block w-full overflow-hidden">
            <div
              className="animate-marquee-vertical-down flex flex-col gap-3.5 sm:gap-4 will-change-transform"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {col2Full.map((item, idx) => (
                <article
                  key={`col2-${item.id}-${idx}`}
                  className="group/card relative w-full aspect-[4/3] shrink-0 overflow-hidden rounded-2xl bg-[#12261A] shadow-[0_8px_20px_-3px_rgba(0,0,0,0.28),0_4px_12px_rgba(5,18,12,0.25)]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 195px, 220px"
                    className="object-cover"
                    priority={idx < 2}
                  />

                  {/* Subtle inner dark vignette for rich photographic depth */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1A12]/85 via-transparent to-black/15"
                    aria-hidden="true"
                  />

                  {/* Clean, discreet blend identification tag */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                    <p className="truncate font-sans text-[10.5px] sm:text-[11px] font-medium tracking-[0.06em] text-[#FAF6F0]/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      {item.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
