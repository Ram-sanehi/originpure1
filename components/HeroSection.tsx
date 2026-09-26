"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroProductCard from "@/components/HeroProductCard";



export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);


  return (
    <section
      ref={sectionRef}
      data-tone="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#1A2E1F] text-[#FAF6F0]"
      style={{
        background: "radial-gradient(ellipse at 50% 35%, #213C28 0%, #1A2E1F 62%, #112015 100%)",
      }}
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/webimg/1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep botanical tint & vignettes for text contrast and ambiance */}
        <div className="absolute inset-0 bg-[#14261A]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1910]/92 via-[#14261A]/75 to-[#0C1910]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112015] via-transparent to-[#112015]/80" />
      </div>

      {/* SUBTLE DIAGONAL BOTANICAL LEAF PATTERN OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`,
        }}
        aria-hidden="true"
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-botanical-leaf"
              width="90"
              height="90"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              {/* Central stem */}
              <line x1="45" y1="0" x2="45" y2="90" stroke="#FAF6F0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
              {/* Botanical leaves paired along diagonal */}
              <path
                d="M45 20 C38 32, 22 36, 16 46 C26 46, 38 36, 45 20 Z"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="1.2"
              />
              <path
                d="M45 70 C52 58, 68 54, 74 44 C64 44, 52 54, 45 70 Z"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="1.2"
              />
              <circle cx="45" cy="45" r="1.5" fill="#C9A65E" opacity="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-botanical-leaf)" />
        </svg>
      </div>

      {/* AMBIENT RADIAL LIGHTING */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,166,94,0.08)_0%,_transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(40,95,64,0.35)_0%,_rgba(201,166,94,0.12)_40%,_transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      {/* ================= TOP BAR ================= */}
      <header className="relative z-30 w-full border-b border-white/[0.07] px-6 py-5 sm:px-8 sm:py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Top-left: Small "ORIGIN PURE" logo/wordmark */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-[#FAF6F0] transition-opacity hover:opacity-85"
            aria-label="Origin Pure Home"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-[#C9A65E]/40 shadow-sm shrink-0 bg-[#F7F7F7]">
              <Image
                src="/prdimg/logo.jpeg"
                alt="Origin Pure Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span
              className="font-serif text-[15px] font-bold tracking-[0.24em] text-[#FAF6F0] sm:text-base"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
              }}
            >
              ORIGIN PURE
            </span>
          </Link>
        </div>
      </header>

      {/* ================= MAIN SPLIT HERO BODY ================= */}
      <div className="relative z-20 my-auto flex w-full flex-1 items-center px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          
          {/* LEFT COLUMN (55% width: 7/12 cols) */}
          <div
            className={`flex flex-col justify-center text-center transition-all duration-1000 ease-out lg:col-span-7 lg:text-left ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A65E]" aria-hidden="true" />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C9A65E] sm:text-xs"
                style={{
                  fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
                }}
              >
                Wellness & Natural
              </p>
            </div>

            {/* Large Headline */}
            <h1
              className="mt-4 font-serif text-[42px] font-bold leading-[1.05] tracking-[-0.03em] text-[#FAF6F0] sm:text-[54px] lg:text-[58px] xl:text-[64px]"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
              }}
            >
              A Collection
              <br />
              In Bloom
            </h1>

            {/* Subtext: Brand botanical sourcing philosophy */}
            <p
              className="mx-auto mt-5 max-w-[480px] font-sans text-[15px] leading-relaxed text-[#D6E2D8]/75 sm:text-base lg:mx-0 lg:text-[17px]"
              style={{
                fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
              }}
            >
              Whole-leaf botanical infusions sourced from high-altitude regenerative gardens, harvested at peak vitality for daily calm and sustained nourishment.
            </p>

            {/* Two CTA Buttons side-by-side */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-10 sm:gap-4 lg:justify-start">
              {/* Primary: Shop the Collection */}
              <a
                href="#collection"
                className="inline-flex items-center justify-center rounded-full bg-[#FAF6F0] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1A2E1F] shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F2E7D5] hover:shadow-[0_14px_30px_rgba(0,0,0,0.42)] active:translate-y-0 sm:px-8 sm:py-4 sm:text-[13px]"
                style={{
                  fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
                }}
              >
                Shop the Collection
              </a>

              {/* Secondary: Our Story */}
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-[#FAF6F0]/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF6F0] backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF6F0] hover:bg-[#FAF6F0]/10 active:translate-y-0 sm:px-8 sm:py-4 sm:text-[13px]"
                style={{
                  fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
                }}
              >
                Our Story
              </a>
            </div>

            {/* Trust Row below buttons */}
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A65E]/90 sm:mt-10 sm:text-xs lg:justify-start"
              style={{
                fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
              }}
            >
              <span>100% Natural</span>
              <span className="text-[#C9A65E]/40" aria-hidden="true">·</span>
              <span>Small Batch</span>
              <span className="text-[#C9A65E]/40" aria-hidden="true">·</span>
              <span>Whole Botanicals</span>
            </div>
          </div>

          {/* RIGHT COLUMN (45% width: 5/12 cols) */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            {/* Subtle radial glow / spotlight behind the product */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,166,94,0.22)_0%,_rgba(30,75,48,0.42)_45%,_transparent_70%)] blur-2xl sm:h-[420px] sm:w-[420px]"
              aria-hidden="true"
            />

            {/* INTERACTIVE PRODUCT SHOWCASE CARD */}
            <HeroProductCard mousePos={mousePos} mounted={mounted} />
          </div>

        </div>
      </div>

      {/* BOTTOM SUBTLE TRANSITION STRIP */}
      <div className="relative z-10 w-full border-t border-white/[0.06] bg-black/10 py-3 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A65E]/60 sm:text-[11px]">
          Pure whole botanicals · Nothing artificial
        </p>
      </div>
    </section>
  );
}
