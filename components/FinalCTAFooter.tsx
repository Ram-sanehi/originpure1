"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/lib/products";
import { AMAZON_URL } from "@/lib/amazon";
import { siteConfig } from "@/lib/site-config";

export default function FinalCTAFooter() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (productId: string) => {
    setFailedImages((previous) => (previous[productId] ? previous : { ...previous, [productId]: true }));
  };

  return (
    <>
      <section
        data-final-cta
        data-page-section
        data-tone="cta"
        className="relative overflow-hidden pt-20 pb-8 sm:pb-10 lg:pt-28 lg:pb-12 text-[#FFF8E7] selection:bg-transparent selection:text-[#F9E7B2] bg-[#0B241B]"
      >
        {/* ================= TEA GARDEN PHOTO BACKGROUND WITH STRONG DARK OVERLAY ================= */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/webimg/1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          {/* Deep botanical dark green multiply blend (75-85% net opacity) */}
          <div className="absolute inset-0 bg-[#0B241B]/80 mix-blend-multiply" />
          {/* Directional gradient vignette to prioritize foreground readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B241B]/92 via-[#091F17]/78 to-[#0B241B]/95" />
          {/* Radial ambient lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,160,23,0.16),_transparent_40%),radial-gradient(ellipse_at_bottom,_rgba(11,36,27,0.7),_transparent_60%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-12">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F9E7B2]/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            ORIGIN PURE
          </p>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Ready to find your daily ritual?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-[#FFF8E7]/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            Explore a complete collection of botanical blends made for brighter mornings, quieter evenings, and everything in between.
          </p>

          <Link
            href="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#F9E7B2]/60 px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#FFF8E7] shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-[#F9E7B2] hover:bg-[#F9E7B2] hover:text-[#0B241B]"
          >
            Shop the Full Range <span aria-hidden="true">→</span>
          </Link>

          <div className="mt-14 text-left">
            <div className="mb-4 flex items-center justify-between">
              <p className="select-none font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F9E7B2]/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                Browse all blends
              </p>
              <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#FFF8E7]/50 sm:hidden">
                Swipe to explore →
              </span>
            </div>

            {/* Responsive Container:
                - Mobile: horizontal scrollable strip with snap-scroll
                - Tablet: 2 rows of 5 items (grid-cols-5)
                - Desktop: single unified 9-item grid (grid-cols-9)
            */}
            <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-5 sm:gap-3.5 sm:overflow-visible sm:pb-0 lg:grid-cols-9 lg:gap-2.5">
              {products.map((product) => {
                const hasFailedImage = Boolean(failedImages[product.id]);

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="group relative flex w-[125px] shrink-0 snap-start flex-col items-center justify-between rounded-2xl border border-white/[0.12] bg-[#122E22]/80 backdrop-blur-md p-2.5 sm:w-auto sm:p-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C9A65E]/50 hover:bg-[#163D2D]/95 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35),0_0_18px_rgba(201,166,94,0.15)] cursor-pointer"
                  >
                    {/* Standardized Aspect Ratio & Framing Box */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#091D15]/80 p-1.5">
                      {hasFailedImage ? (
                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#143325] text-xl font-semibold tracking-wider text-[#F9E7B2]">
                          {product.name.charAt(0)}
                        </div>
                      ) : (
                        <Image
                          src={product.images.hero}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 125px, (max-width: 1024px) 150px, 110px"
                          className="object-contain p-0.5"
                          onError={() => handleImageError(product.id)}
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Standardized Label with Aligned 2-Line Baseline */}
                    <div className="mt-2.5 flex h-8 w-full items-center justify-center px-0.5 text-center">
                      <span className="line-clamp-2 font-sans text-[10px] sm:text-[10.5px] font-medium uppercase leading-tight tracking-[0.06em] text-[#FFF8E7]/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-colors duration-200 group-hover:text-[#F9E7B2]">
                        {product.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Integrated Promo Card Panel */}
          <div className="mt-10 sm:mt-12 md:mt-14">
            <div
              className="mx-auto mb-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent sm:mb-10"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#F9E7B2]/25 bg-[linear-gradient(145deg,rgba(20,54,42,0.88)_0%,rgba(14,38,29,0.92)_50%,rgba(9,25,19,0.95)_100%)] px-6 py-8 text-center text-[#FFF8E7] shadow-[0_24px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:px-12 md:py-10">
              {/* Subtle background glow & texture */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.20),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(249,231,178,0.06),_transparent_35%)]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,248,231,0.8)_0.7px,transparent_0.7px)] [background-size:16px_16px]"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-2xl">
                {/* Pill-shaped badge at top */}
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Available on Amazon India"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F9E7B2]/30 bg-[#F9E7B2]/10 px-3.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F9E7B2] transition-colors duration-200 hover:bg-[#F9E7B2]/20 hover:border-[#F9E7B2]/50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" aria-hidden="true" />
                  <span>Available on Amazon India</span>
                </a>

                {/* Bold serif headline */}
                <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-[-0.02em] text-white">
                  Pick your blend. Try a pack.
                </h2>

                {/* Short subtext line */}
                <p className="mx-auto mt-3.5 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-[#FFF8E7]/80">
                  Nine 100% natural botanical infusions crafted for everyday calm, digestion, and vitality. Delivered fresh to your doorstep.
                </p>

                {/* Prominent CTA button */}
                <div className="mt-7 flex justify-center">
                  <a
                    href={AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shop on Amazon"
                    className="block w-[190px] shrink-0 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E1BE5B]/70 sm:w-[220px] md:w-[240px]"
                  >
                    <Image
                      src="/prdimg/img.png"
                      alt="Shop on Amazon"
                      width={2163}
                      height={727}
                      sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 240px"
                      className="h-auto w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.32)]"
                    />
                  </a>
                </div>

                {/* Small trust line below the button */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-sans text-xs text-[#FFF8E7]/70 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[#F9E7B2]">
                    <span aria-hidden="true">★</span>
                    <span className="font-semibold text-white">4.6 / 5</span>
                    <span className="text-[#FFF8E7]/70">rating on Amazon (2,100+ reviews)</span>
                  </span>
                  <span className="hidden text-[#FFF8E7]/35 sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <span>Easy 7-day returns & replacements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#FDFDFD] text-[#1B4332]">
        {/* Soft, organic curved transition from dark green CTA section into white footer */}
        <div className="w-full overflow-hidden leading-none bg-[#FDFDFD]" aria-hidden="true">
          <svg
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            className="block h-6 w-full sm:h-8 md:h-10 text-[#0B241B] fill-current"
          >
            <path d="M0,0 L1440,0 L1440,8 C1000,38 440,38 0,8 Z" />
            <path
              d="M0,8 C440,38 1000,38 1440,8"
              fill="none"
              stroke="#D4A017"
              strokeOpacity="0.32"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-5 pb-9 sm:px-6 sm:pt-7 sm:pb-11 lg:px-12">
          {/* Main Footer Row */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 xs:gap-3.5 sm:gap-4 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/60 rounded-full"
              aria-label="Origin Pure - Wellness & Natural"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 overflow-hidden rounded-full border-[1.5px] border-[#C9A65E]/70 shadow-[0_2px_12px_rgba(27,67,50,0.10)] bg-[#FAF7F2] p-1 transition-all duration-300 group-hover:scale-105 group-hover:border-[#C9A65E]">
                <Image
                  src="/prdimg/origin-pure-logo.png"
                  alt="Origin Pure Logo"
                  fill
                  sizes="64px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="text-left leading-tight">
                <p className="font-serif text-[18px] sm:text-[21px] md:text-[22px] font-bold tracking-[0.14em] text-[#1B4332] leading-tight transition-colors duration-300 group-hover:text-[#0B241B]">
                  Origin Pure
                </p>
                <p className="font-sans text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8F6A28] mt-0.5 transition-colors duration-300 group-hover:text-[#B88D27]">
                  Wellness &amp; Natural
                </p>
              </div>
            </Link>

            {/* Center: Minimal Navigation Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1 font-sans text-xs sm:text-[13px] font-medium tracking-[0.04em] text-[#1B4332]/70"
            >
              <Link href="/shop" className="inline-flex min-h-[44px] items-center px-1.5 transition-colors hover:text-[#B88D27]">
                Shop Blends
              </Link>
              <a href="/#story" className="inline-flex min-h-[44px] items-center px-1.5 transition-colors hover:text-[#B88D27]">
                Our Story
              </a>
              <a href="/#ritual" className="inline-flex min-h-[44px] items-center px-1.5 transition-colors hover:text-[#B88D27]">
                The Ritual
              </a>
            </nav>

            {/* Right: Social & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[#1B4332]/75">
              <span className="font-sans text-xs sm:text-[13px] text-[#1B4332]/60">© 2026 Origin Pure</span>

              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Origin Pure on Instagram (@${siteConfig.instagramHandle})`}
                  className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#1B4332]/15 text-[#1B4332]/75 transition-all duration-200 hover:border-[#D4A017] hover:bg-[#D4A017]/10 hover:text-[#D4A017]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#1B4332]/15 text-[#1B4332]/75 transition-all duration-200 hover:border-[#D4A017] hover:bg-[#D4A017]/10 hover:text-[#D4A017]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom-most row: Understated agency credit */}
          <div className="mt-6 border-t border-[#1B4332]/[0.08] pt-4 text-center">
            <p className="font-sans text-[11px] sm:text-xs text-[#1B4332]/50 tracking-[0.02em]">
              Designed &amp; Developed by{" "}
              <a
                href="https://scalvex.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1B4332]/70 underline decoration-[#B88D27]/40 underline-offset-3 transition-colors hover:text-[#B88D27] hover:decoration-[#B88D27] py-1 px-1 inline-flex items-center"
              >
                Scalvex
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
