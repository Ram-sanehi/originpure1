"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { categories, getProductCardBg, getProductCategory, getProductDetails, productCategories } from "@/lib/catalog";
import { siteConfig } from "@/lib/site-config";

function StarRating({ rating, reviews }: { rating: string; reviews: number }) {
  return (
    <div className="mt-3 flex items-center gap-2 font-sans text-xs" aria-label={`${rating} out of 5 stars from ${reviews} reviews`}>
      <span className="tracking-[0.12em] text-[#B88D27]" aria-hidden="true">★★★★<span className="text-[#B88D27]/35">★</span></span>
      <span className="font-semibold text-[#1B4332]">{rating}</span>
      <span className="text-[#52615A]">({reviews})</span>
    </div>
  );
}

export default function ShopCollection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("ALL");
  const [sort, setSort] = useState("featured");

  const visibleProducts = useMemo(() => {
    const filtered = activeCategory === "ALL" ? [...products] : products.filter((product) => productCategories[product.name] === activeCategory);
    return filtered.sort((a, b) => {
      if (sort === "rated") return Number(getProductDetails(b.name).rating) - Number(getProductDetails(a.name).rating);
      if (sort === "price") return Number(getProductDetails(a.name).price.replace(/[^0-9]/g, "")) - Number(getProductDetails(b.name).price.replace(/[^0-9]/g, ""));
      if (sort === "bestsellers") return Number(getProductDetails(b.name).reviews) - Number(getProductDetails(a.name).reviews);
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [activeCategory, sort]);

  return (
    <main className="min-h-screen bg-[#F7F7F2] text-[#1B4332]">
      <header className="border-b border-[#1B4332]/10 bg-[#0B241B] px-6 py-8 text-[#FFF8E7] md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Link href="/" className="inline-flex items-center gap-3.5 font-serif text-lg sm:text-[21px] font-bold tracking-[0.22em] text-[#FFF8E7] transition-opacity hover:opacity-85">
            <div className="relative h-[52px] w-[52px] sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-[#C9A65E]/50 shadow-sm shrink-0 bg-[#F7F7F7]">
              <Image src="/prdimg/logo.jpeg" alt="Origin Pure Logo" fill sizes="64px" className="object-cover" />
            </div>
            <span>ORIGIN PURE</span>
          </Link>
          <Link href="/#collection" className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F9E7B2]">Back to home</Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6E7772]">The complete collection</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#073B32]">Nine mindful blends for every ritual.</h1>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#1B4332]/70 sm:text-lg">Whole-leaf botanical blends made for brighter mornings, quieter evenings, and everything in between.</p>
        </div>

        <div className="my-12 grid gap-4 border-y border-[#1B4332]/10 py-5 font-sans text-sm text-[#1B4332]/70 sm:grid-cols-3">
          <p><strong className="font-semibold text-[#1B4332]">{siteConfig.ratingFormatted}★</strong> average rating</p>
          <p><strong className="font-semibold text-[#1B4332]">{siteConfig.reviewCount}</strong> verified reviews</p>
          <p><strong className="font-semibold text-[#1B4332]">{siteConfig.cupsBrewedFormatted}</strong> cups brewed</p>
        </div>

        <div className="flex flex-col gap-5 border-b border-[#1B4332]/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] touch-pan-x -mx-1 px-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 min-h-[44px] rounded-full border px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer ${activeCategory === category ? "border-[#1B4332] bg-[#1B4332] text-white" : "border-[#1B4332]/20 text-[#1B4332]/65 hover:border-[#1B4332]/50"}`}
              >
                {category === "ALL" ? "All blends" : category}
                <span className="ml-1.5 opacity-55">{category === "ALL" ? products.length : products.filter((product) => productCategories[product.name] === category).length}</span>
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/60">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-[44px] rounded-full border border-[#1B4332]/20 bg-transparent px-3 py-2 font-sans text-xs tracking-normal text-[#1B4332] outline-none cursor-pointer">
              <option value="featured">Featured</option>
              <option value="price">Price: Low to High</option>
              <option value="rated">Highest Rated</option>
              <option value="bestsellers">Bestsellers First</option>
            </select>
          </label>
        </div>

        <p className="mt-8 font-sans text-sm text-[#1B4332]/60">{visibleProducts.length} {visibleProducts.length === 1 ? "blend" : "blends"}</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const category = getProductCategory(product.name);
            const details = getProductDetails(product.name);
            const packSize = product.facts.find((fact) => fact.label === "Tea bags")?.value ?? "20 bags";

            return (
              <article key={product.id} className="group flex min-h-[625px] flex-col overflow-hidden rounded-[1.25rem] border border-[#1B4332]/[0.08] shadow-[0_16px_40px_rgba(27,67,50,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_56px_rgba(27,67,50,0.13),0_6px_18px_rgba(27,67,50,0.06)] will-change-transform" style={{ backgroundColor: getProductCardBg(product.name) }}>
                <div className="relative flex h-[310px] items-center justify-center px-6 pt-8 pb-5 md:h-[335px]">
                  <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`} className="relative flex h-full w-full max-w-[275px] sm:max-w-[285px] items-center justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src={product.images.hero}
                        alt={product.name}
                        fill
                        sizes="(max-width: 767px) 85vw, (max-width: 1280px) 30vw, 24vw"
                        className="object-contain drop-shadow-[0_12px_22px_rgba(27,67,50,0.08)] drop-shadow-[0_3px_6px_rgba(0,0,0,0.04)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
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
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" aria-label={`Shop ${product.name} on Amazon`} className="block w-[112px] shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/40">
                      <Image src="/prdimg/img.png" alt="Shop on Amazon" width={2163} height={727} sizes="112px" className="h-auto w-full drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
