"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroMarquee from "@/components/HeroMarquee";
import TrustBar from "@/components/TrustBar";
import { AMAZON_URL } from "@/lib/amazon";



const navLinks = [
  { name: "Collections", href: "#collection" },
  { name: "Our Story", href: "#story" },
  { name: "Our Process", href: "#process" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
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
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
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

          {/* Top-right: Amazon badge image CTA + Mobile/Tablet Hamburger */}
          <div className="flex items-center gap-2.5 xs:gap-3 shrink-0">
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
      <div className="relative z-20 my-auto flex w-full flex-1 items-center px-4 pt-4 pb-4 xs:px-6 xs:pt-6 sm:px-8 sm:pt-8 sm:pb-6 lg:px-12 lg:py-10">
        <div className="mx-auto grid max-w-7xl xl:max-w-[1340px] 2xl:max-w-[1400px] grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-12 md:gap-8 lg:gap-14 xl:gap-20 2xl:gap-24">
          
          {/* LEFT COLUMN (Text zone - 55% width: 7/12 cols) */}
          <div
            className={`flex flex-col justify-center text-center transition-all duration-1000 ease-out md:col-span-7 md:text-left md:pr-2 lg:pr-4 xl:pr-6 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A65E]" aria-hidden="true" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A65E]">
                Wellness & Natural
              </p>
            </div>

            {/* Large Headline */}
            <h1 className="mt-3.5 sm:mt-4 font-serif text-4xl xs:text-5xl font-normal leading-[1.08] tracking-[-0.02em] text-[#FAF6F0] sm:text-5xl md:text-[50px] lg:text-6xl xl:text-7xl">
              A Collection
              <br />
              In Bloom
            </h1>

            {/* Subtext: Brand botanical sourcing philosophy */}
            <p className="mx-auto mt-4 sm:mt-5 max-w-[480px] font-sans text-sm xs:text-base leading-relaxed text-[#D6E2D8]/80 sm:text-[17px] md:mx-0">
              Whole-leaf botanical infusions sourced from high-altitude regenerative gardens, harvested at peak vitality for daily calm and sustained nourishment.
            </p>

            {/* Two CTA Buttons side-by-side */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4 md:justify-start">
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
                  className="h-auto w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                  priority
                />
              </a>

              {/* Secondary: Our Story */}
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-[#FAF6F0]/40 px-6 py-3 xs:px-7 xs:py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF6F0] hover:bg-[#FAF6F0]/10 active:translate-y-0 sm:px-8 sm:py-4"
              >
                Our Story
              </a>
            </div>

            {/* Trust Row below buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 xs:gap-2.5 font-sans text-[10.5px] xs:text-[11px] font-semibold uppercase tracking-[0.16em] xs:tracking-[0.18em] text-[#C9A65E]/90 sm:mt-10 md:justify-start">
              <span>100% Natural</span>
              <span className="text-[#C9A65E]/40" aria-hidden="true">·</span>
              <span>Small Batch</span>
              <span className="text-[#C9A65E]/40" aria-hidden="true">·</span>
              <span>Whole Botanicals</span>
            </div>
          </div>

          {/* RIGHT COLUMN (Marquee zone - 45% width: 5/12 cols) */}
          <div className="relative flex items-center justify-center md:justify-end md:col-span-5">
            {/* TWO-COLUMN VERTICAL MARQUEE */}
            <HeroMarquee mounted={mounted} />
          </div>

        </div>
      </div>

      {/* ================= BOTTOM TRUST BADGES BAR ================= */}
      <TrustBar />
    </section>
  );
}
