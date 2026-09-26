"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/lib/products";
import { AMAZON_URL } from "@/lib/amazon";

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
        className="relative overflow-hidden pt-20 pb-14 text-[#FFF8E7] selection:bg-transparent selection:text-[#F9E7B2] lg:pt-28 lg:pb-18"
        style={{ backgroundColor: "#0B241B" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,160,23,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#F9E7B2]/80">ORIGIN PURE</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Ready to find your daily ritual?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#FFF8E7]/75 md:text-lg">
            Explore a complete collection of botanical blends made for brighter mornings, quieter evenings, and everything in between.
          </p>

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#F9E7B2]/60 px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#FFF8E7] transition-colors hover:border-[#F9E7B2] hover:bg-[#F9E7B2] hover:text-[#0B241B]"
          >
            Shop the Full Range <span aria-hidden="true">→</span>
          </a>

          <div className="mt-14 text-left">
            <p className="mb-4 select-none text-[10px] font-medium uppercase tracking-[0.28em] text-[#F9E7B2]/70">
              Browse all blends
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 lg:grid-cols-9">
              {products.map((product) => {
                const hasFailedImage = Boolean(failedImages[product.id]);

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="group flex min-w-0 flex-col items-center gap-2 text-center opacity-80 transition duration-300 hover:opacity-100"
                  >
                    <span className="relative block aspect-[7/10] w-full max-w-[88px] overflow-hidden rounded-xl border border-white/10 bg-[#0E2A1F] p-1.5 shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition duration-300 group-hover:border-[#F9E7B2]/70 group-hover:shadow-[0_0_0_1px_rgba(249,231,178,0.28),0_0_20px_rgba(249,231,178,0.16)]">
                      <span className="absolute inset-0 rounded-[11px] bg-black/15 transition duration-300 group-hover:bg-black/5" />

                      {hasFailedImage ? (
                        <span className="absolute inset-0 flex items-center justify-center rounded-[11px] bg-[#122F24] text-2xl font-semibold tracking-[0.12em] text-[#F9E7B2]">
                          {product.name.charAt(0)}
                        </span>
                      ) : (
                        <Image
                          src={product.images.hero}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 28vw, 88px"
                          className="rounded-[9px] object-cover transition duration-500 group-hover:scale-[1.05]"
                          onError={() => handleImageError(product.id)}
                          loading="lazy"
                        />
                      )}
                    </span>

                    <span className="flex min-h-[2.8rem] items-start justify-center px-1 text-center text-[9px] uppercase leading-4 tracking-[0.08em] text-[#FFF8E7]/70 group-hover:text-[#F9E7B2]">
                      <span className="line-clamp-2">{product.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Integrated Promo Card Panel */}
          <div className="mt-12 sm:mt-14 md:mt-16">
            <div
              className="mx-auto mb-10 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/12 to-transparent sm:mb-12"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#F9E7B2]/20 bg-[linear-gradient(145deg,rgba(18,48,37,0.78)_0%,rgba(14,38,29,0.85)_50%,rgba(8,23,17,0.92)_100%)] px-6 py-8 text-center text-[#FFF8E7] shadow-[0_20px_45px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:rounded-[1.35rem] sm:px-8 sm:py-9 md:px-12 md:py-10">
              {/* Subtle background glow & texture */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(249,231,178,0.06),_transparent_35%)]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,248,231,0.8)_0.7px,transparent_0.7px)] [background-size:16px_16px]"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-2xl">
                {/* Pill-shaped badge at top */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F9E7B2]/30 bg-[#F9E7B2]/10 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F9E7B2] sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" aria-hidden="true" />
                  <span>Available on Amazon India</span>
                </div>

                {/* Bold serif headline */}
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                  Pick your blend. Try a pack.
                </h2>

                {/* Short subtext line */}
                <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-[#FFF8E7]/80 sm:text-base sm:leading-7">
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
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-[#FFF8E7]/70 sm:text-sm">
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

      <footer className="border-t border-[#1B4332]/10 bg-[#FDFDFD] py-8 text-[#1B4332]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-12">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#1B4332]/15 shadow-sm shrink-0 bg-[#F7F7F7]">
              <Image
                src="/prdimg/logo.jpeg"
                alt="Origin Pure Logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-2xl tracking-tight">Origin Pure</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#1B4332]/60">Wellness & Natural</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[#1B4332]/75">
            <span className="text-sm">© 2026 Origin Pure</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B4332]/15 transition hover:border-[#D4A017] hover:text-[#D4A017]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
