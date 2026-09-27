"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import MoodToggle from "@/components/MoodToggle";
import { useMood } from "@/context/MoodContext";
import { AMAZON_URL } from "@/lib/amazon";

const navLinks = [
  { name: "Collections", href: "#collection" },
  { name: "Our Story", href: "#story" },
  { name: "Our Process", href: "#process" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { currentTheme } = useMood();

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fogContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      if (videoRef.current.readyState >= 2) {
        setIsVideoLoaded(true);
      }
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser policy
      });
    }
  }, []);

  // High-performance scroll-tied fog animation (RAF-throttled, zero layout thrashing)
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileCheck =
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobileCheck);

    const fogEl = fogContainerRef.current;
    if (!fogEl) return;

    // Cache hero height and threshold to prevent forced reflow / layout thrashing on scroll
    let cachedHeroHeight = sectionRef.current?.offsetHeight || window.innerHeight || 800;
    let clearThreshold = cachedHeroHeight * 0.60;

    const updateDimensions = () => {
      cachedHeroHeight = sectionRef.current?.offsetHeight || window.innerHeight || 800;
      clearThreshold = cachedHeroHeight * 0.60;
    };

    let buildUpProgress = isReduced ? 1 : 0;
    const BUILDUP_DURATION = 1700; // 1.7s smooth steam build-up on load
    const PEAK_FOG_OPACITY = 0.62;
    const startTime = performance.now();
    let isBuiltUp = isReduced;

    const maxRise = mobileCheck ? 12 : 22;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    // Fast GPU compositor update (only touches opacity & transform)
    const renderFog = (scrollY: number, buildProgress: number) => {
      if (!fogEl) return;

      const buildUpFactor = isReduced ? 1 : easeOutCubic(buildProgress);
      const rawProgress = scrollY / clearThreshold;
      const scrollProgress = Math.min(1, Math.max(0, rawProgress));
      const scrollFactor = 1 - scrollProgress;

      const netOpacity =
        scrollProgress >= 0.99
          ? 0
          : Math.max(0, Math.min(1, buildUpFactor * scrollFactor)) * PEAK_FOG_OPACITY;

      const buildUpY = isReduced ? 0 : (1 - buildUpFactor) * maxRise;
      const scrollYDrift = isReduced ? 0 : -scrollProgress * 28;
      const netY = buildUpY + scrollYDrift;

      fogEl.style.opacity = netOpacity.toFixed(4);
      fogEl.style.transform = `translate3d(0, ${netY.toFixed(2)}px, 0)`;
    };

    // 1. Initial build-up animation (runs only for 1.7s, then terminates to save CPU/battery)
    let buildupRafId: number | null = null;
    const tickBuildup = (now: number) => {
      const elapsed = now - startTime;
      buildUpProgress = Math.min(1, elapsed / BUILDUP_DURATION);
      const currentScroll = window.scrollY || window.pageYOffset || 0;
      renderFog(currentScroll, buildUpProgress);

      if (buildUpProgress < 1) {
        buildupRafId = requestAnimationFrame(tickBuildup);
      } else {
        isBuiltUp = true;
        buildupRafId = null;
      }
    };

    if (!isReduced) {
      buildupRafId = requestAnimationFrame(tickBuildup);
    } else {
      renderFog(window.scrollY || 0, 1);
    }

    // 2. High-performance scroll listener with RAF throttling guard & passive flag
    let scrollTicking = false;
    const onScroll = () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          const currentScroll = window.scrollY || window.pageYOffset || 0;
          renderFog(currentScroll, isBuiltUp ? 1 : buildUpProgress);
          scrollTicking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateDimensions, { passive: true });

    return () => {
      if (buildupRafId) cancelAnimationFrame(buildupRafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <section
      ref={sectionRef}
      data-tone="hero"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#1A2E1F] text-[#FAF6F0]"
      style={{
        background: "radial-gradient(ellipse at 50% 35%, #213C28 0%, #1A2E1F 62%, #112015 100%)",
      }}
    >
      {/* ================= FULL-BLEED RIGHT-SIDE BLENDED VIDEO CANVAS ================= */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] md:h-full md:inset-y-0 md:left-auto md:right-0 md:w-[54%] lg:w-[50%] xl:w-[48%] z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* 1. Feathered Edge Video Container — single wide S-curve mask, no competing overlays */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            maskImage: isMobile
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 12%, rgba(0,0,0,0.65) 26%, black 42%, black 100%)"
              : "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.38) 36%, rgba(0,0,0,0.78) 52%, black 66%, black 100%)",
            WebkitMaskImage: isMobile
              ? "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 12%, rgba(0,0,0,0.65) 26%, black 42%, black 100%)"
              : "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 18%, rgba(0,0,0,0.38) 36%, rgba(0,0,0,0.78) 52%, black 66%, black 100%)",
          }}
        >
          {/* Base Fallback Image */}
          <Image
            src="/webimg/hero-cup.png"
            alt="Hot tea cup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover object-center md:object-[77%_center] lg:object-[76%_center] xl:object-[75%_center] transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hot tea cup background video */}
          <video
            ref={videoRef}
            src="/videos/heroremoved.mp4"
            poster="/webimg/hero-cup.png"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 h-full w-full object-cover object-center md:object-[77%_center] lg:object-[76%_center] xl:object-[75%_center] transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "brightness(1.12)" }}
          />

          {/* Mobile vertical top-to-bottom fade */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#1A2E1F] via-[#1A2E1F]/50 via-30% to-transparent" />

          {/* Vignettes for cinematic depth - gentle 15% bottom softening so cup base and table surface remain 100% visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#112015]/40 via-transparent via-15% to-[#112015]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#112015]/45 via-transparent to-transparent" />
        </div>

        {/* Mobile top fade (outside inner container for stacking order) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1A2E1F] via-[#1A2E1F]/50 via-40% to-transparent md:hidden"
        />
      </div>



      {/* ================= SCROLL-TIED FOG / MIST STEAM OVERLAY ================= */}
      {/* Isolated on its own GPU backing store ([contain:paint] [isolation:isolate]) for zero scroll repaints */}
      <div
        ref={fogContainerRef}
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden will-change-[transform,opacity] [contain:paint] [isolation:isolate]"
        style={{
          opacity: 0,
          transform: "translate3d(0, 24px, 0)",
        }}
        aria-hidden="true"
      >
        {/* Layer 1: Ambient Base Atmosphere (Wide, soft continuous atmospheric mist veil) */}
        <div
          className={`pointer-events-none absolute -inset-24 ${
            !isMobile ? "animate-fog-slow" : ""
          }`}
          style={{
            background: currentTheme.layerBase,
            filter: "blur(24px)",
          }}
        />

        {/* Layer 2: Warm Teacup Aura & Rising Steam Column */}
        <div
          className={`pointer-events-none absolute -inset-20 ${
            !isMobile ? "animate-fog-rising" : ""
          }`}
          style={{
            background: currentTheme.layerSteam,
            filter: "blur(20px)",
          }}
        />

        {/* Layer 3: Low Morning Mist Drift across seam */}
        <div
          className={`pointer-events-none absolute -inset-24 ${
            !isMobile ? "animate-fog-horizontal" : ""
          }`}
          style={{
            background: currentTheme.layerDrift,
            filter: "blur(26px)",
          }}
        />

        {/* Layer 4: Upper Atmosphere Ambient Warmth (Ethereal dissipation above cup) */}
        <div
          className={`pointer-events-none absolute -inset-20 ${
            !isMobile ? "animate-fog-slow" : ""
          }`}
          style={{
            background: currentTheme.layerAmbient,
            filter: "blur(28px)",
            animationDelay: "-12s",
          }}
        />

        {/* Layer 5: Feathered Edge Depth Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#112015]/30 via-transparent via-15% to-[#112015]/25 pointer-events-none" />
      </div>

      {/* ================= STEAM REVEAL — FIXED OPACITY, INDEPENDENT OF FOG ================= */}
      {/* Lives OUTSIDE fogContainerRef so it is never scaled by PEAK_FOG_OPACITY */}
      {/* Punches a soft luminous window in the steam-rising zone above the cup */}
      <div
        className="pointer-events-none absolute z-[11] hidden md:block"
        style={{
          right: "4%",
          top: "0%",
          width: "22%",
          height: "52%",
          background:
            "radial-gradient(ellipse 60% 80% at 60% 70%, rgba(255,252,245,0.09) 0%, rgba(248,244,232,0.05) 40%, transparent 75%)",
          filter: "blur(18px)",
        }}
        aria-hidden="true"
      />

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
      <header ref={headerRef} className="relative z-30 w-full px-4 py-4 xs:px-6 xs:py-5 sm:px-8 sm:py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Top-left: "ORIGIN PURE" logo/wordmark */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 xs:gap-3.5 text-[#FAF6F0] transition-opacity hover:opacity-85 shrink-0"
            aria-label="Origin Pure Home"
          >
            <div className="relative h-11 w-11 xs:h-[52px] xs:w-[52px] sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#C9A65E]/50 shadow-sm shrink-0 bg-[#F7F7F7]">
              <Image
                src="/prdimg/logo.jpeg"
                alt="Origin Pure Logo"
                fill
                sizes="(max-width: 640px) 52px, 64px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-serif text-base xs:text-lg sm:text-[21px] font-bold tracking-[0.16em] xs:tracking-[0.22em] text-[#FAF6F0]">
              ORIGIN PURE
            </span>
          </Link>

          {/* Center Navigation Links (Desktop: visible at lg+) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.slice(1))}
                className="group relative py-1 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#FAF6F0]/80 transition-colors duration-300 hover:text-[#C9A65E]"
              >
                <span>{link.name}</span>
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#C9A65E] to-[#F9E7B2] transition-all duration-300 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          {/* Top-right: Mood Toggle + Amazon badge image CTA + Mobile/Tablet Hamburger */}
          <div className="flex items-center gap-2 xs:gap-3 shrink-0">
            {/* Circular Site-Wide Mood Toggle */}
            <MoodToggle />

            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop on Amazon"
              className="block w-[105px] xs:w-[124px] sm:w-[150px] shrink-0 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/70"
            >
              <Image
                src="/prdimg/img.png"
                alt="Shop on Amazon"
                width={2163}
                height={727}
                sizes="(max-width: 640px) 124px, 150px"
                className="h-auto w-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.30)]"
                priority
              />
            </a>

            {/* Mobile/Tablet Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 lg:hidden items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-[#FAF6F0] backdrop-blur-md transition-all duration-200 hover:border-[#C9A65E]/60 hover:bg-white/[0.14] hover:text-[#C9A65E] focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/60 active:scale-95 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Dropdown Panel */}
        <div
          className={`absolute left-0 right-0 top-full px-4 xs:px-6 pt-2 pb-4 transition-all duration-300 ease-out lg:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#C9A65E]/30 bg-[linear-gradient(145deg,rgba(16,42,32,0.96)_0%,rgba(10,28,21,0.98)_100%)] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.55),0_0_24px_rgba(201,166,94,0.12)] backdrop-blur-xl">
            <nav className="flex flex-col divide-y divide-white/[0.08]" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.slice(1))}
                  className="group flex items-center justify-between py-3.5 px-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#FAF6F0]/85 transition-all duration-200 hover:text-[#C9A65E] hover:bg-white/[0.04] rounded-lg active:bg-[#C9A65E]/15"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C9A65E]/60 text-sm transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C9A65E]">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ================= MAIN SPLIT HERO BODY ================= */}
      <div className="relative z-20 flex w-full flex-1 flex-col justify-center px-4 pt-2 pb-4 xs:px-6 xs:pt-3 xs:pb-6 sm:px-8 sm:pt-4 sm:pb-6 lg:px-12 lg:py-4">
        <div className="mx-auto w-full max-w-7xl xl:max-w-[1340px] 2xl:max-w-[1400px]">
          <div className="grid grid-cols-1 items-center md:grid-cols-12 md:gap-8 lg:gap-14 xl:gap-20 2xl:gap-24">
            
            {/* LEFT COLUMN (Text zone - 55% width: 7/12 cols) */}
            <div
              className={`flex flex-col justify-center text-center transition-all duration-1000 ease-out md:col-span-7 md:text-left md:pr-2 lg:pr-4 xl:pr-6 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A65E]" aria-hidden="true" />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A65E] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                  Wellness & Natural
                </p>
              </div>

              {/* Large Headline - Crisp, sharp typography with subtle 4px text-shadow (zero blur/glow filter) */}
              <h1 className="mt-3.5 sm:mt-4 font-serif text-4xl xs:text-5xl font-normal leading-[1.08] tracking-[-0.02em] text-[#FAF6F0] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] sm:text-5xl md:text-[50px] lg:text-6xl xl:text-7xl">
                A Collection
                <br />
                In Bloom
              </h1>

              {/* Subtext: Brand botanical sourcing philosophy - Sharp, readable text */}
              <p className="mx-auto mt-4 sm:mt-5 max-w-[480px] font-sans text-sm xs:text-base leading-relaxed text-[#E2ECE4] [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] sm:text-[17px] md:mx-0">
                Whole-leaf botanical infusions sourced from high-altitude regenerative gardens, harvested at peak vitality for daily calm and sustained nourishment.
              </p>

              {/* Two CTA Buttons side-by-side */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4 md:justify-start">
                {/* Primary: Buy on Amazon Badge */}
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shop on Amazon"
                  className="block w-[165px] xs:w-[180px] shrink-0 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/70 sm:w-[210px]"
                >
                  <Image
                    src="/prdimg/img.png"
                    alt="Shop on Amazon"
                    width={2163}
                    height={727}
                    sizes="(max-width: 640px) 180px, 210px"
                    className="h-auto w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
                    priority
                  />
                </a>

                {/* Secondary: Our Story */}
                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-full border border-[#FAF6F0]/40 px-6 py-3 xs:px-7 xs:py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-[4px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF6F0] hover:bg-[#FAF6F0]/10 active:translate-y-0 sm:px-8 sm:py-4"
                >
                  Our Story
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (Open visual focal space for full-bleed blended hot tea cup video) */}
            <div className="hidden md:block md:col-span-5 pointer-events-none" aria-hidden="true" />

          </div>
        </div>
      </div>

      {/* ================= BOTTOM TRUST BADGES ROW (Closing Element) ================= */}
      {/* Positioned flush near the bottom edge with ~48px padding */}
      <div className="relative z-30 w-full pb-8 sm:pb-10 lg:pb-12 xl:pb-14">
        <TrustBar />
      </div>
    </section>
  );
}


