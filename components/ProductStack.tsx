"use client";

import Image from "next/image";
import Link from "next/link";
import { AMAZON_URL } from "@/lib/amazon";
import { products } from "@/lib/products";
import { useState } from "react";

const productCategories: Record<string, string> = {
  "Butterfly Pea Blue Tea": "CALMING",
  "Chamomile Lemon": "CALMING",
  "Chamomile Clove Lemon": "GROUNDING",
  "Clove Lemon": "GROUNDING",
  "Hibiscus Lemon Balm": "REFRESHING",
  "Lemon Fennel": "DIGESTIVE",
  "Lemon Ginger": "DIGESTIVE",
  "Lemon Tulsi": "GROUNDING",
  "Lemon Turmeric": "GROUNDING",
  "Moringa Lemongrass": "ENERGIZING",
};

const collectionNames = [
  "Butterfly Pea Blue Tea",
  "Lemon Tulsi",
  "Chamomile Lemon",
  "Chamomile Clove Lemon",
  "Hibiscus Lemon Balm",
  "Lemon Turmeric",
  "Lemon Fennel",
  "Lemon Ginger",
  "Moringa Lemongrass",
];

const collectionProducts = collectionNames
  .map((name) => products.find((product) => product.name === name || (name === "Chamomile Clove Lemon" && product.id === "clove-lemon")))
  .filter((product): product is (typeof products)[number] => Boolean(product));

const categories = ["ALL", "CALMING", "CITRUS", "GROUNDING", "DIGESTIVE", "REFRESHING", "ENERGIZING"];

const categoryStyles: Record<string, string> = {
  CALMING: "#EEF5F2",
  CITRUS: "#F8F1D8",
  GROUNDING: "#F3E8DB",
  DIGESTIVE: "#EEF1DE",
  REFRESHING: "#F6E6E5",
  ENERGIZING: "#E8F0DD",
};

const productCardBg: Record<string, string> = {
  "Butterfly Pea Blue Tea": "#EEF5F2",
  "Lemon Tulsi": "#F3E8DB",
  "Chamomile Lemon": "#EEF5F2",
  "Chamomile Clove Lemon": "#F3E8DB",
  "Clove Lemon": "#F3E8DB",
  "Hibiscus Lemon Balm": "#F6E6E5",
  "Lemon Turmeric": "#F3E8DB",
  "Lemon Fennel": "#EEF1DE",
  "Lemon Ginger": "#F3E8DB",
  "Moringa Lemongrass": "#E8F0DD",
};

const catalogDetails: Record<string, { rating: string; reviews: number; price: string; badges?: string[] }> = {
  "Butterfly Pea Blue Tea": { rating: "4.6", reviews: 238, price: "₹399", badges: ["Caffeine-Free"] },
  "Chamomile Lemon": { rating: "4.6", reviews: 162, price: "₹399", badges: ["Caffeine-Free"] },
  "Chamomile Clove Lemon": { rating: "4.5", reviews: 119, price: "₹399" },
  "Clove Lemon": { rating: "4.5", reviews: 119, price: "₹399" },
  "Hibiscus Lemon Balm": { rating: "4.7", reviews: 207, price: "₹399", badges: ["Bestseller"] },
  "Lemon Fennel": { rating: "4.5", reviews: 131, price: "₹399" },
  "Lemon Ginger": { rating: "4.8", reviews: 286, price: "₹399", badges: ["Bestseller"] },
  "Lemon Tulsi": { rating: "4.6", reviews: 176, price: "₹399", badges: ["Caffeine-Free"] },
  "Lemon Turmeric": { rating: "4.7", reviews: 154, price: "₹399", badges: ["New"] },
  "Moringa Lemongrass": { rating: "4.8", reviews: 312, price: "₹399", badges: ["Bestseller"] },
};

function StarRating({ rating, reviews }: { rating: string; reviews: number }) {
  return (
    <div className="mt-3 flex items-center gap-2 font-sans text-xs" aria-label={`${rating} out of 5 stars from ${reviews} reviews`}>
      <span className="tracking-[0.12em] text-[#B88D27]" aria-hidden="true">★★★★<span className="text-[#B88D27]/35">★</span></span>
      <span className="font-semibold text-[#1B4332]">{rating}</span>
      <span className="text-[#52615A]">({reviews})</span>
    </div>
  );
}

export default function ProductStack() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const visibleProducts = activeCategory === "ALL"
    ? collectionProducts
    : collectionProducts.filter((product) => productCategories[product.name] === activeCategory);

  return (
    <section
      id="collection"
      data-page-section
      data-tone="stack"
      className="relative bg-transparent py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">The collection</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#073B32]">Nine mindful blends for every ritual.</h2>
          </div>
        </div>

        <div className="mb-5 flex items-end justify-between gap-4">
          <p className="font-sans text-sm text-[#1B4332]/60">{visibleProducts.length} {visibleProducts.length === 1 ? "blend" : "blends"}</p>
          <p className="hidden font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/50 sm:block">Whole leaf · plant-based bags</p>
        </div>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] touch-pan-x -mx-1 px-1 md:flex-wrap md:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`relative shrink-0 min-h-[44px] rounded-full border px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer after:absolute after:bottom-[-6px] after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-[#D4A017] after:transition-all after:duration-300 ${
                activeCategory === category
                  ? "border-[#1B4332] bg-[#1B4332] text-white after:w-8"
                  : "border-[#1B4332]/20 bg-transparent text-[#1B4332]/68 after:w-0 hover:border-[#1B4332]/55 hover:text-[#1B4332] hover:after:w-4"
              }`}
            >
              {category === "ALL" ? "All blends" : category}
              <span className="ml-1.5 opacity-55">{category === "ALL" ? collectionProducts.length : collectionProducts.filter((product) => productCategories[product.name] === category).length}</span>
            </button>
          ))}
        </div>

        <div className="mb-10 grid gap-4 border-y border-[#1B4332]/10 py-5 font-sans text-sm text-[#1B4332]/70 sm:grid-cols-3">
          <p><strong className="font-semibold text-[#1B4332]">4.7★</strong> average rating</p>
          <p><strong className="font-semibold text-[#1B4332]">1,200+</strong> verified reviews</p>
          <p><strong className="font-semibold text-[#1B4332]">50,000+</strong> cups brewed</p>
        </div>

        <div key={activeCategory} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            (() => {
              const category = productCategories[product.name] ?? "BOTANICAL";
              const details = catalogDetails[product.name] ?? { rating: "4.6", reviews: 100, price: "₹399" };
              const packSize = product.facts.find((fact) => fact.label === "Tea bags")?.value ?? "20 bags";

              return (
            <article
              key={product.id}
              className="group flex min-h-[625px] flex-col overflow-hidden rounded-[1.25rem] border border-[#1B4332]/[0.08] shadow-[0_16px_40px_rgba(27,67,50,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_56px_rgba(27,67,50,0.13),0_6px_18px_rgba(27,67,50,0.06)] will-change-transform animate-[catalog-card-in_500ms_ease_both]"
              style={{ backgroundColor: productCardBg[product.name] ?? categoryStyles[category] ?? "#FFFFFF", animationDelay: `${index * 55}ms` }}
            >
              <div className="relative flex h-[310px] items-center justify-center px-6 pt-8 pb-5 md:h-[335px]">
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="relative flex h-full w-full max-w-[275px] sm:max-w-[285px] items-center justify-center"
                >
                  {/* Subtle soft grounding shadow beneath the product box & ingredients */}
                  <div
                    className="pointer-events-none absolute bottom-1 left-1/2 h-6 w-[74%] -translate-x-1/2 rounded-[50%] bg-[#0B241B]/[0.09] blur-md transition-all duration-500 ease-out group-hover:w-[80%] group-hover:bg-[#0B241B]/[0.13] group-hover:blur-lg"
                    aria-hidden="true"
                  />
                  <div className="relative h-full w-full">
                    <Image
                      src={product.images.hero}
                      alt={product.name}
                      fill
                      sizes="(max-width: 767px) 85vw, (max-width: 1280px) 30vw, 24vw"
                      className="object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.09)] drop-shadow-[0_3px_5px_rgba(0,0,0,0.05)]"
                      priority={index < 3}
                    />
                  </div>
                </Link>
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View ${product.name} details`}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#1B4332]/15 bg-white/70 text-sm text-[#1B4332]/65 opacity-0 shadow-sm transition-all duration-300 hover:bg-white hover:text-[#1B4332] group-hover:opacity-100 cursor-pointer"
                >
                  i
                </Link>
              </div>

              <div className="flex flex-1 flex-col px-7 pb-7 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">{category}</p>
                  <div className="flex gap-1">{details.badges?.map((badge) => <span key={badge} className="rounded-full bg-white/60 px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1B4332]/70">{badge}</span>)}</div>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="group/title mt-2 inline-flex items-center gap-1.5 font-serif text-2xl font-medium leading-tight text-[#1B4332] visited:text-[#1B4332] transition-colors duration-200 hover:text-[#B88D27] hover:underline decoration-[#B88D27]/50 underline-offset-4 decoration-1 cursor-pointer w-fit"
                  aria-label={`View ${product.name}`}
                >
                  <span>{product.name}</span>
                  <span
                    className="inline-block font-sans text-base text-[#B88D27] transition-transform duration-200 group-hover/title:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
                <StarRating rating={details.rating} reviews={details.reviews} />
                <p className="mt-3 line-clamp-2 font-sans text-sm leading-relaxed text-[#1B4332]/70">{product.tagline}</p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <div>
                    <p className="font-sans text-lg font-semibold text-[#1B4332]">{details.price}</p>
                    <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.16em] text-[#1B4332]/55">{packSize}</p>
                  </div>
                  <a
                    href={product.amazonUrl || AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Shop ${product.name} on Amazon`}
                    className="group block w-[112px] shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/40"
                  >
                    <Image
                      src="/prdimg/img.png"
                      alt="Shop on Amazon"
                      width={2163}
                      height={727}
                      sizes="112px"
                      className="h-auto w-full drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)]"
                    />
                  </a>
                </div>
              </div>
            </article>
              );
            })()
          ))}
        </div>

        {/* TAGLINE & CTA BUTTON */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-4 border-t border-[#1B4332]/10 pt-10 pb-2 text-center">
          <p className="font-sans text-sm text-[#1B4332]/65">Plant-based tea bags, packed for a clean daily ritual.</p>
          <a
            href="/shop"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C9A65E] px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#1B4332] shadow-[0_10px_24px_rgba(201,166,94,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#BA9348] hover:shadow-[0_14px_28px_rgba(201,166,94,0.32)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/60"
          >
            <span>Shop the Full Collection</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

    </section>
  );
}
