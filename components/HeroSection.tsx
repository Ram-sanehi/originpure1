"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AMAZON_URL } from "@/lib/amazon";

const navLinks = [
  { name: "Our Process", href: "#process" },
  { name: "Blends", href: "#collection" },
  { name: "The Ritual", href: "#ritual" },
  { name: "Our Story", href: "#story" },
];

const heroTrustLabels = [
  "PURE BY ORIGIN",
  "NO ADDITIVES",
  "NO ARTIFICIAL FLAVOURS",
  "NO PRESERVATIVE",
] as const;

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled by browser policy
        });
      }
    }
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
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-black text-[#FAF6F0] md:h-[100vh] md:h-[100svh] md:min-h-[700px]"
    >
      {/* ================= HERO VIDEO (public/videos/hero.mp4) ================= */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero.mp4?v=2" type="video/mp4" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ================= TOP BAR (ABSOLUTE OVERLAY ON HERO) ================= */}
      {/* Transparent overlay over the video with ~96px height */}
      <header ref={headerRef} className="absolute top-0 left-0 right-0 z-30 w-full px-4 py-4 xs:px-6 xs:py-5 sm:px-8 sm:py-6 lg:px-12 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Top-left: Origin Pure square brand logo */}
          <div className="flex flex-1 justify-start">
            <Link
              href="/"
              className="group inline-flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/60 rounded-xl"
              aria-label="Origin Pure - Wellness & Natural"
            >
              {/* Square Emblem housing the original logo */}
              <div className="relative h-14 w-14 xs:h-16 xs:w-16 sm:h-[72px] sm:w-[72px] shrink-0 overflow-hidden rounded-xl border-[1.5px] border-[#C9A65E]/75 shadow-[0_2px_14px_rgba(0,0,0,0.35),0_0_12px_rgba(201,166,94,0.22)] bg-[#FAF7F2] p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#F9E7B2] group-hover:shadow-[0_2px_18px_rgba(0,0,0,0.4),0_0_18px_rgba(201,166,94,0.35)]">
                <Image
                  src="/prdimg/origin-pure-logo.png"
                  alt="Origin Pure - Wellness & Natural"
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop: visible at lg+, centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.slice(1))}
                className="group relative py-1 font-sans text-[13px] lg:text-[14px] font-medium uppercase tracking-[0.11em] text-[#FAF6F0]/85 transition-colors duration-300 hover:text-[#C9A65E]"
              >
                <span>{link.name}</span>
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#C9A65E] to-[#F9E7B2] transition-all duration-300 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          {/* Top-right: Amazon badge image CTA + Mobile/Tablet Hamburger */}
          <div className="flex flex-1 items-center justify-end gap-2 xs:gap-3 shrink-0">
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
          <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#C9A65E]/30 bg-[linear-gradient(145deg,rgba(18,18,15,0.96)_0%,rgba(13,13,11,0.98)_100%)] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.55),0_0_24px_rgba(201,166,94,0.12)] backdrop-blur-xl">
            <nav className="flex flex-col divide-y divide-white/[0.08]" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.slice(1))}
                  className="group flex items-center justify-between py-3.5 px-3 font-sans text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.11em] text-[#FAF6F0]/85 transition-all duration-200 hover:text-[#C9A65E] hover:bg-white/[0.04] rounded-lg active:bg-[#C9A65E]/15"
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

      {/* ================= MAIN HERO BODY ================= */}
      {/* 
        Mobile (<768px): pt-[55vh] so all text is placed below the 55vh video.
        Desktop (>=768px): flex-1 justify-center pt-[144px].
      */}
      <div className="relative z-20 flex w-full flex-1 flex-col justify-center px-4 pt-[130px] pb-28 xs:px-6 xs:pb-32 sm:px-8 md:pt-[144px] md:pb-24 lg:px-12">
        <div className="mx-auto w-full max-w-7xl xl:max-w-[1340px] 2xl:max-w-[1400px]">
          <div className="grid grid-cols-1 items-center md:grid-cols-12 md:gap-8 lg:gap-14 xl:gap-20 2xl:gap-24">
            
            {/* LEFT COLUMN (Text zone - 55% width on desktop) */}
            <div
              className={`flex flex-col justify-center text-left transition-all duration-1000 ease-out md:col-span-7 md:pr-2 lg:pr-4 xl:pr-6 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* Eyebrow Label — clean 13-14px, 0.11em letter-spacing */}
              <div className="flex items-center justify-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A65E]" aria-hidden="true" />
                <p
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                  className="font-sans text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.11em] text-[#C9A65E]"
                >
                  Wellness &amp; Natural
                </p>
              </div>

              {/* Large Headline — with soft text-shadow for readability without overlays */}
              <h1
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
                className="mt-3.5 sm:mt-4 font-serif text-4xl xs:text-5xl font-normal leading-[1.1] tracking-[-0.01em] text-[#FAF6F0] sm:text-5xl md:text-[50px] lg:text-6xl xl:text-7xl"
              >
                A Collection
                <br />
                In Bloom
              </h1>

              {/* Subtext: Brand botanical sourcing philosophy — with soft text-shadow */}
              <p
                style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
                className="mt-4 sm:mt-5 max-w-[500px] font-sans text-[17px] sm:text-[18px] leading-[1.6] text-[#E2ECE4]"
              >
                Whole-leaf botanical infusions sourced from high-altitude regenerative gardens, harvested at peak vitality for daily calm and sustained nourishment.
              </p>

              {/* Two CTA Buttons side-by-side */}
              <div className="mt-7 flex flex-wrap items-center justify-start gap-3 sm:mt-8 sm:gap-4">
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
                  className="inline-flex items-center justify-center rounded-full border border-[#FAF6F0]/40 px-6 py-3 xs:px-7 xs:py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#FAF6F0] shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-[4px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF6F0] hover:bg-[#FAF6F0]/10 active:translate-y-0 sm:px-8 sm:py-4"
                >
                  Our Story
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= FLUSH FIT-CONTENT BOTTOM GLASS PILL ================= */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-fit max-w-[95vw] rounded-t-[24px] md:rounded-t-[999px] rounded-b-none border-t border-x border-b-0 border-white/35 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Desktop (>=768px): Oval top (40-44px tall), flush flat bottom, padding 0 36px, 14px dividers with 28px gaps */}
        <div className="hidden md:flex h-[42px] items-center px-[36px] whitespace-nowrap">
          {heroTrustLabels.map((label, index) => (
            <React.Fragment key={label}>
              {index > 0 && (
                <div
                  style={{ background: "rgba(255, 255, 255, 0.25)" }}
                  className="h-[14px] w-px shrink-0 mx-[28px]"
                  aria-hidden="true"
                />
              )}
              <span className="font-sans text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#FAF6F0] select-none">
                {label}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile (<768px): 2x2 grid inside rounded-t-[24px] flush bottom pill */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 py-2.5 px-6 md:hidden text-center whitespace-nowrap">
          {heroTrustLabels.map((label) => (
            <span
              key={label}
              className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.10em] text-[#FAF6F0] select-none"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


