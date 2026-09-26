"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Product, products } from "@/lib/products";
import { getProductCategory, getProductDetails } from "@/lib/catalog";
import { getReviewsForProduct } from "@/lib/reviews";

function Stars({ rating }: { rating: number | string }) {
  const value = Number(rating);
  return (
    <span className="tracking-[0.12em] text-[#B88D27]" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => <span key={index} className={index < Math.round(value) ? "" : "text-[#B88D27]/30"}>★</span>)}
    </span>
  );
}

function AmazonImageLink({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" aria-label={`Shop ${product.name} on Amazon`} className={`block shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/40 ${large ? "w-[220px] sm:w-[250px]" : "w-[112px]"}`}>
      <Image src="/prdimg/img.png" alt="Shop on Amazon" width={2163} height={727} sizes={large ? "250px" : "112px"} className="h-auto w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.22)]" />
    </a>
  );
}

function TeaBagsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 9h10l1.5 11H5.5L7 9Z" />
      <path d="M12 9V4M9 4h6" />
      <path d="M10 14h4" />
    </svg>
  );
}

function WeightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
      <path d="M12 4V2" />
    </svg>
  );
}

function SteepIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 4h10M7 20h10" />
      <path d="M7 4c0 4.5 5 5.5 5 8s-5 3.5-5 8M17 4c0 4.5-5 5.5-5 8s5 3.5 5 8" />
    </svg>
  );
}

function FormatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19.5 4.5C13 4.8 7.7 7 6 11.1c-1.3 3.2.5 6.6 3.9 6.7 4.4.1 7.4-4.4 9.6-13.3Z" />
      <path d="M4.5 20c2.1-4.5 5.8-7.3 11.2-9.2" />
    </svg>
  );
}

function FactIcon({ label }: { label: string }) {
  const norm = label.toLowerCase();
  if (norm.includes("tea bag") || norm.includes("bag")) return <TeaBagsIcon />;
  if (norm.includes("weight")) return <WeightIcon />;
  if (norm.includes("steep")) return <SteepIcon />;
  return <FormatIcon />;
}

const THUMBNAIL_LABELS = ["Product", "Ingredients", "Benefits", "How to Brew"];

export default function ProductPage({ product }: { product: Product }) {
  const details = getProductDetails(product.name);
  const category = getProductCategory(product.name);
  const galleryImages = product.images.gallery.length > 0 ? product.images.gallery : [product.images.hero];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || galleryImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, activeIdx, galleryImages.length]);

  const reviews = getReviewsForProduct(product.name);
  const benefits = ["No Additives", "Plant-Based Bags", details.badges?.[0] ?? "Botanical Blend", "Daily Ritual"];

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#1B4332]">
      <header className="border-b border-[#1B4332]/10 bg-[#0B241B] px-4 py-4 sm:px-8 sm:py-6 md:px-12 text-[#FFF8E7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-5">
          <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3.5 font-serif text-base sm:text-[21px] font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#FFF8E7] transition-opacity hover:opacity-85 shrink-0">
            <div className="relative h-11 w-11 xs:h-[52px] xs:w-[52px] sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#C9A65E]/50 shadow-sm shrink-0 bg-[#F7F7F7]">
              <Image src="/prdimg/logo.jpeg" alt="Origin Pure Logo" fill sizes="(max-width: 640px) 52px, 64px" className="object-cover" />
            </div>
            <span>ORIGIN PURE</span>
          </Link>
          <Link href="/shop" className="shrink-0 font-sans text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#F9E7B2] hover:text-[#FAF6F0] transition-colors py-2 px-1">Shop all blends</Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 xs:px-6 xs:py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          {/* Left Column: Product Image & Interactive Thumbnails */}
          <div
            className="rounded-[2rem] border border-[#1B4332]/10 bg-[#FCFAF5]/90 p-4 xs:p-5 sm:p-6 shadow-[0_24px_70px_rgba(27,67,50,0.06)] md:p-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-[#C9A65E]/30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFFDF9] via-[#FAF3E6] to-[#EFE2CC] shadow-[inset_0_2px_8px_rgba(201,166,94,0.08),0_4px_24px_rgba(27,67,50,0.04)]">
              {/* Warm radiant botanical ambient lighting */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,166,94,0.18)_0%,_rgba(244,231,197,0.22)_45%,_transparent_72%)] blur-2xl"
                aria-hidden="true"
              />
              {/* Subtle top ambient sheen */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B4332]/[0.03] via-transparent to-white/50"
                aria-hidden="true"
              />
              {galleryImages.map((image, idx) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-[400ms] ease-in-out ${
                    activeIdx === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={activeIdx !== idx}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - ${THUMBNAIL_LABELS[idx] || `View ${idx + 1}`}`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain p-6 md:p-10 drop-shadow-[0_16px_30px_rgba(40,30,20,0.12)]"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-4 gap-2.5 sm:gap-3">
              {galleryImages.map((image, idx) => {
                const isActive = activeIdx === idx;
                const label = THUMBNAIL_LABELS[idx] || `View ${idx + 1}`;
                return (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View ${product.name} ${label}`}
                    aria-pressed={isActive}
                    className="group relative flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer min-h-[44px]"
                  >
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-2 border-[#C9A65E] ring-2 ring-[#C9A65E]/30 bg-[#FFFDF9] shadow-md"
                          : "border-[#1B4332]/12 bg-white/90 shadow-xs group-hover:border-[#C9A65E] group-hover:-translate-y-1 group-hover:shadow-[0_10px_22px_rgba(27,67,50,0.12),0_0_12px_rgba(201,166,94,0.18)]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={label}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`font-sans text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                        isActive ? "text-[#073B32] font-bold" : "text-[#1B4332]/60 group-hover:text-[#B5652E]"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Title, Details, Specs, and Trust */}
          <div className="pt-1 lg:pt-3">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#1B4332]/60">
              <Link href="/" className="hover:text-[#1B4332] transition">Home</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-[#1B4332] transition">Blends</Link>
              <span>/</span>
              <span className="text-[#073B32] font-medium">{product.name}</span>
            </div>

            {/* Collection eyebrow */}
            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5652E]">
              {product.id === "clove-lemon" ? "Chamomile Citrus · Grounding Herbal Infusion" : category}
            </p>

            <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-[#073B32]">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 font-sans text-sm text-[#1B4332]/70">
              <Stars rating={details.rating} />
              <a href="#reviews" className="underline decoration-[#B88D27]/50 underline-offset-4 font-medium">
                {details.rating} · {details.reviews} verified reviews
              </a>
            </div>

            <p className="mt-5 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-[#1B4332]/75">
              {product.tagline} A clean, plant-first blend designed to make the everyday ritual feel considered.
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-3.5">
              <span className="font-sans text-2xl font-semibold text-[#1B4332]">{details.price}</span>
              <span className="font-sans text-sm text-[#1B4332]/60">
                · {product.facts.find((fact) => fact.label === "Tea bags")?.value ?? "20 bags"}
              </span>
              {details.badges?.map((badge) => (
                <span key={badge} className="rounded-full bg-[#F4E7C5] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1B4332]">
                  {badge}
                </span>
              ))}
            </div>

            <div id="inline-amazon-cta" className="mt-7">
              <AmazonImageLink product={product} large />
            </div>

            {/* Restyled 4 Info Tiles with Icons */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.facts.slice(0, 4).map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#1B4332]/10 bg-white/75 p-3.5 shadow-sm transition hover:border-[#1B4332]/25 hover:bg-white"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B4332]/8 text-[#1B4332]">
                    <FactIcon label={fact.label} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/55">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 font-sans text-sm sm:text-[15px] font-medium text-[#073B32]">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Content: Key Botanicals Strip & Trust Badges to balance vertical height */}
            <div className="mt-5 rounded-2xl border border-[#1B4332]/10 bg-[#FAF6F0]/80 p-4">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/60">
                Key Botanicals in this Blend
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.ingredients.slice(0, 3).map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#1B4332]/10 bg-white px-3 py-1 font-sans text-xs font-medium text-[#073B32] shadow-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B5652E]" />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#1B4332]/10 pt-3.5 font-sans text-xs text-[#1B4332]/75">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1B4332]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Plant-Based Bags
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1B4332]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Zero Additives
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1B4332]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Sealed at Origin
              </span>
            </div>

            {/* Balanced Closing Strip: Shipping & Returns Reassurance */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-[#1B4332]/10 bg-white/70 px-4 py-3 text-xs text-[#1B4332]/75 shadow-xs">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#B5652E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="font-medium text-[#073B32]">Prime Eligible</span>
                <span className="text-[#1B4332]/35" aria-hidden="true">·</span>
                <span>Fast, free shipping on Amazon</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-[#073B32]">
                <svg className="h-4 w-4 text-[#1B4332] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7-Day Easy Returns</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-[#1B4332]/10 pt-16">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">What is inside</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#073B32]">Quiet essentials, thoughtfully blended.</h2>
          {/* Static Product-Specific Ingredients Grid (3, 4, or 5 columns balanced) */}
          <div
            className={`mt-8 grid gap-4 items-stretch ${
              product.ingredients.length === 5
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
                : product.ingredients.length === 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {product.ingredients.map((ingredient, index) => {
              const count = product.ingredients.length;
              const isOrphanCentered =
                (count === 5 && index === 4) ||
                (count === 3 && index === 2);

              return (
                <article
                  key={ingredient.name}
                  className={`group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#1B4332]/10 bg-white/75 shadow-xs transition-all duration-300 hover:border-[#C9A65E]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(27,67,50,0.06)] ${
                    isOrphanCentered
                      ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full lg:col-span-1 lg:max-w-none"
                      : ""
                  }`}
                >
                  {/* Full-width rectangular image filling top 40-50% */}
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#FAF7F0]">
                    {ingredient.image ? (
                      <Image
                        src={ingredient.image}
                        alt={ingredient.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#E9F0E5] font-sans text-xl font-semibold text-[#1B4332]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    )}
                  </div>

                  {/* Content below the image with consistent padding and equal card height */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-serif text-xl sm:text-[22px] font-medium leading-snug tracking-[-0.01em] text-[#073B32]">
                        {ingredient.name}
                      </h3>
                      <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#1B4332]/65">
                        {ingredient.note}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-14 sm:mt-18 lg:mt-20 rounded-2xl sm:rounded-[2rem] bg-[#1B4332] px-4 py-8 xs:px-6 xs:py-10 sm:p-10 md:p-12 text-[#FFF8E7]">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F9E7B2]/75">The ritual</p>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em]">Brew it simply.</h2>
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {[
              {
                number: "01",
                description: "Boil fresh water to 90–95°C.",
                image: "/images/brew_steps/step_1_boil.webp",
                alt: "Boiling water in a minimalist kettle with rising steam",
              },
              {
                number: "02",
                description: `Steep one bag for ${product.facts.find((fact) => fact.label === "Steep")?.value ?? "3–4 min"}.`,
                image: "/images/brew_steps/step_2_steep.webp",
                alt: "Biodegradable tea bag steeping in glass cup with swirling golden infusion",
              },
              {
                number: "03",
                description: "Sip warm, or pour over ice and make it your own.",
                image: "/images/brew_steps/step_4_best_enjoyed.webp",
                alt: "Sunlit cup of tea served warm or over ice",
              },
            ].map((step, index) => (
              <article
                key={step.number}
                className={`group relative z-10 flex h-full flex-col overflow-hidden rounded-xl border border-[#1B4332]/10 bg-white text-[#1B4332] shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)] sm:rounded-[1.2rem] ${
                  index === 2 ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1 lg:max-w-none" : ""
                }`}
              >
                {/* Full-width rectangular photo filling the top portion (aspect-[16/10]) */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#FAF6EE]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content below the image with white background, gold numerals, and clean typography */}
                <div className="flex flex-1 flex-col justify-between p-4 xs:p-5 lg:p-6 bg-white">
                  <div>
                    <div className="font-serif text-3xl sm:text-4xl font-bold leading-none text-[#B88D27]">
                      {step.number}
                    </div>
                    <p className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#1B4332]/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">Why you&apos;ll love it</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <div key={benefit} className="rounded-full border border-[#1B4332]/12 bg-white/65 px-5 py-4 text-center font-sans text-sm">✦ {benefit}</div>)}</div>
        </section>

        <section id="reviews" className="mt-20 border-t border-[#1B4332]/10 pt-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">Customer reviews</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em]">A ritual worth returning to.</h2>
            </div>
            <div className="text-left md:text-right">
              <div className="flex items-center gap-2">
                <Stars rating={details.rating} />
                <strong>{details.rating} / 5</strong>
              </div>
              <p className="mt-1 font-sans text-sm text-[#1B4332]/60">{details.reviews} verified reviews</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {(reviews.length ? reviews : [
              { name: "Origin Pure community", reviewText: "A thoughtful botanical blend with a clean finish and an easy daily rhythm.", rating: 5, productName: product.name, date: "2026" },
              { name: "Verified Purchaser", reviewText: "Smooth, deeply satisfying herbal infusion with remarkable botanical aroma.", rating: 5, productName: product.name, date: "2026" },
              { name: "Daily Ritualist", reviewText: "Pure ingredients and beautiful packaging. A staple in my morning routine.", rating: 5, productName: product.name, date: "2026" }
            ]).map((review) => (
              <article
                key={`${review.name}-${review.date}-${review.reviewText.slice(0, 10)}`}
                className="flex flex-col justify-between rounded-[1.4rem] border border-[#1B4332]/10 bg-white/70 p-6 shadow-[0_14px_35px_rgba(27,67,50,0.05)] transition-all duration-300 hover:border-[#C9A65E]/40 hover:bg-white hover:shadow-[0_18px_40px_rgba(27,67,50,0.08)]"
              >
                <div>
                  <Stars rating={review.rating} />
                  <p className="mt-4 font-serif text-lg sm:text-xl italic leading-relaxed text-[#1B4332]/85">
                    “{review.reviewText}”
                  </p>
                </div>
                <div className="mt-6 border-t border-[#1B4332]/10 pt-4 flex items-center justify-between text-[#1B4332]/60 font-sans text-[11px]">
                  <span className="font-semibold uppercase tracking-[0.18em]">
                    {review.name}
                  </span>
                  <span className="text-[#1B4332]/50">
                    {review.date}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`See all reviews for ${product.name} on Amazon`}
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B88D27] hover:text-[#9A731C] hover:underline decoration-[#B88D27]/50 underline-offset-4 transition-colors"
            >
              See all reviews →
            </a>
          </div>
        </section>

        <section className="mt-20 border-t border-[#1B4332]/10 pt-16">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">You might also like</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal leading-[1.15] tracking-[-0.02em]">Explore another ritual.</h2>
            </div>
            <Link href="/shop" className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B88D27]">View all</Link>
          </div>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {products.filter((candidate) => candidate.id !== product.id).slice(0, 4).map((candidate) => {
              const candidateDetails = getProductDetails(candidate.name);
              const candidateCategory = getProductCategory(candidate.name);
              const packSize = candidate.facts.find((fact) => fact.label === "Tea bags")?.value ?? "20 bags";

              return (
                <article
                  key={candidate.id}
                  className="w-[240px] sm:w-[260px] shrink-0 snap-start flex flex-col justify-between rounded-[1.25rem] border border-[#1B4332]/10 bg-white/75 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A65E]/40 hover:bg-white hover:shadow-[0_16px_36px_rgba(27,67,50,0.08)]"
                >
                  <Link href={`/products/${candidate.slug}`} className="group flex flex-col">
                    <div className="relative h-44 w-full">
                      <Image
                        src={candidate.images.hero}
                        alt={candidate.name}
                        fill
                        sizes="260px"
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                      />
                    </div>
                    <p className="mt-4 font-serif text-xl font-medium text-[#1B4332] group-hover:text-[#B88D27] transition-colors leading-tight">
                      {candidate.name}
                    </p>
                    <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#6E7772]">
                      {candidateCategory}
                    </p>
                    {/* Star rating + review count below category tag */}
                    <div className="mt-2.5 flex items-center gap-1.5 font-sans text-xs" aria-label={`${candidateDetails.rating} out of 5 stars from ${candidateDetails.reviews} reviews`}>
                      <span className="tracking-[0.1em] text-[#B88D27]" aria-hidden="true">★★★★<span className="text-[#B88D27]/35">★</span></span>
                      <span className="font-semibold text-[#1B4332]">{candidateDetails.rating}</span>
                      <span className="text-[#1B4332]/50 text-[11px]">({candidateDetails.reviews})</span>
                    </div>
                    {/* Price below rating */}
                    <p className="mt-2 font-sans text-sm font-semibold text-[#1B4332]">
                      {candidateDetails.price} <span className="font-normal text-xs text-[#1B4332]/55">· {packSize}</span>
                    </p>
                  </Link>

                  {/* Actions: View blend link & Buy on Amazon CTA button */}
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#1B4332]/10 pt-3">
                    <Link
                      href={`/products/${candidate.slug}`}
                      className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B4332]/75 hover:text-[#B88D27] transition-colors"
                    >
                      View blend →
                    </Link>
                    <a
                      href={candidate.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buy ${candidate.name} on Amazon`}
                      className="block w-[90px] shrink-0 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30"
                    >
                      <Image
                        src="/prdimg/img.png"
                        alt="Buy on Amazon"
                        width={2163}
                        height={727}
                        sizes="90px"
                        className="h-auto w-full drop-shadow-sm"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
