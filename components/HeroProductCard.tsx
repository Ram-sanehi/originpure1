"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { catalogDetails } from "@/lib/catalog";

// Import all 9 thumbnails directly for bulletproof resolution and static optimization
import thumbButterflyPea from "@/public/thumbnails/ButterflyPea.png";
import thumbChamomileLemon from "@/public/thumbnails/ChamomileLemon.png";
import thumbCloveLemon from "@/public/thumbnails/CloveLemon.png";
import thumbHibiscusLemonBalm from "@/public/thumbnails/HibiscusLemonBalm.png";
import thumbLemonFennel from "@/public/thumbnails/LemonFennel.png";
import thumbLemonGinger from "@/public/thumbnails/LemonGinger.png";
import thumbLemonTulsi from "@/public/thumbnails/LemonTulsi.png";
import thumbLemonTurmeric from "@/public/thumbnails/LemonTurmeric.png";
import thumbMoringaLemonGrass from "@/public/thumbnails/MoringaLemonGrass.png";

// Import all 9 blend hero images
import prdButterflyPea from "@/public/prdimg/ButterflyPea/1.png";
import prdChamomileLemon from "@/public/prdimg/ChamomileLemon/1.png";
import prdCloveLemon from "@/public/prdimg/CloveLemon/1.png";
import prdHibiscusLemonBalm from "@/public/prdimg/HibiscusLemonBalm/1.png";
import prdLemonFennel from "@/public/prdimg/LemonFennel/1.png";
import prdLemonGinger from "@/public/prdimg/LemonGinger/1.png";
import prdLemonTulsi from "@/public/prdimg/LemonTulsi/1.png";
import prdLemonTurmeric from "@/public/prdimg/LemonTurmeric/1.png";
import prdMoringaLemonGrass from "@/public/prdimg/MoringaLemonGrass/1.png";

interface BlendItem {
  id: string;
  name: string;
  slug: string;
  folder: string;
  color: string;
  rating: string;
  price: string;
  productImage: StaticImageData;
  thumbImage: StaticImageData;
  fallbackThumbUrl: string;
}

const collectionNames = [
  "Butterfly Pea Blue Tea",
  "Lemon Tulsi",
  "Chamomile Lemon",
  "Clove Lemon",
  "Hibiscus Lemon Balm",
  "Lemon Turmeric",
  "Lemon Fennel",
  "Lemon Ginger",
  "Moringa Lemongrass",
] as const;

const blendImagesMap: Record<
  string,
  {
    folder: string;
    productImage: StaticImageData;
    thumbImage: StaticImageData;
  }
> = {
  "Butterfly Pea Blue Tea": {
    folder: "ButterflyPea",
    productImage: prdButterflyPea,
    thumbImage: thumbButterflyPea,
  },
  "Lemon Tulsi": {
    folder: "LemonTulsi",
    productImage: prdLemonTulsi,
    thumbImage: thumbLemonTulsi,
  },
  "Chamomile Lemon": {
    folder: "ChamomileLemon",
    productImage: prdChamomileLemon,
    thumbImage: thumbChamomileLemon,
  },
  "Clove Lemon": {
    folder: "CloveLemon",
    productImage: prdCloveLemon,
    thumbImage: thumbCloveLemon,
  },
  "Hibiscus Lemon Balm": {
    folder: "HibiscusLemonBalm",
    productImage: prdHibiscusLemonBalm,
    thumbImage: thumbHibiscusLemonBalm,
  },
  "Lemon Turmeric": {
    folder: "LemonTurmeric",
    productImage: prdLemonTurmeric,
    thumbImage: thumbLemonTurmeric,
  },
  "Lemon Fennel": {
    folder: "LemonFennel",
    productImage: prdLemonFennel,
    thumbImage: thumbLemonFennel,
  },
  "Lemon Ginger": {
    folder: "LemonGinger",
    productImage: prdLemonGinger,
    thumbImage: thumbLemonGinger,
  },
  "Moringa Lemongrass": {
    folder: "MoringaLemonGrass",
    productImage: prdMoringaLemonGrass,
    thumbImage: thumbMoringaLemonGrass,
  },
};

const blendsData: BlendItem[] = collectionNames
  .map((name) => {
    const prd = products.find((p) => p.name === name);
    if (!prd) return null;
    const details = catalogDetails[name] ?? { rating: "4.6", price: "₹399" };
    const imgInfo = blendImagesMap[name];
    if (!imgInfo) return null;
    return {
      id: prd.id,
      name: prd.name,
      slug: prd.slug,
      folder: imgInfo.folder,
      color: prd.color || "#0E2318",
      rating: details.rating || "4.6",
      price: details.price || "₹399",
      productImage: imgInfo.productImage,
      thumbImage: imgInfo.thumbImage,
      fallbackThumbUrl: `/thumbnails/${imgInfo.folder}.png`,
    };
  })
  .filter((item): item is BlendItem => Boolean(item));

function ThumbnailButton({
  blend,
  isActive,
  onSelect,
}: {
  blend: BlendItem;
  isActive: boolean;
  onSelect: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-label={`Select ${blend.name}`}
      onClick={onSelect}
      className={`relative aspect-square flex-1 h-9 sm:h-10 max-w-[42px] rounded-lg overflow-hidden p-0.5 cursor-pointer shrink-0 border-2 transition-colors duration-150 ${
        isActive
          ? "border-[#E5A93C] ring-1 ring-[#E5A93C] shadow-[0_0_10px_rgba(229,169,60,0.5)] z-10"
          : "border-white/20 hover:border-white/50 opacity-75 hover:opacity-100"
      }`}
      style={{
        backgroundColor: isActive ? "#0E2318" : "rgba(14, 35, 24, 0.8)",
      }}
    >
      <div className="relative h-full w-full rounded flex items-center justify-center overflow-hidden bg-[#16291C]">
        {/* Skeleton shimmer before load */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 animate-pulse bg-white/15 z-10" />
        )}

        {/* Fallback container if image fails to load - never shows broken icon */}
        {hasError ? (
          <div
            className="h-full w-full flex items-center justify-center text-[10px] font-bold text-white uppercase select-none"
            style={{ backgroundColor: blend.color }}
            aria-label={blend.name}
          >
            {blend.name.slice(0, 2)}
          </div>
        ) : (
          <Image
            src={blend.thumbImage}
            alt=""
            fill
            sizes="44px"
            unoptimized
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-cover object-center transition-opacity duration-150 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </button>
  );
}

interface HeroProductCardProps {
  mousePos?: { x: number; y: number };
  mounted?: boolean;
}

export default function HeroProductCard({
  mounted = true,
}: HeroProductCardProps) {
  // Default to Lemon Turmeric (index 5)
  const [activeIndex, setActiveIndex] = useState(5);

  const currentBlend = blendsData[activeIndex] ?? blendsData[0];

  return (
    <div
      className={`relative w-full max-w-[440px] sm:w-[440px] flex flex-col shrink-0 select-none transition-opacity duration-500 rounded-[28px] border border-white/20 bg-[#122417] shadow-[0_24px_50px_rgba(0,0,0,0.5),0_6px_20px_rgba(0,0,0,0.35)] overflow-hidden ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ================= FIXED MAIN IMAGE CONTAINER ================= */}
      {/* Fixed height and object-fit: cover guarantees no shift regardless of image aspect ratio */}
      <div className="relative h-[290px] sm:h-[320px] w-full shrink-0 overflow-hidden bg-[#162719]">
        <Link
          href={`/products/${currentBlend.slug}`}
          className="group block relative h-full w-full cursor-pointer"
          aria-label={`View ${currentBlend.name}`}
        >
          {/* Pre-rendered image stack: pure opacity swap for instant, zero-reflow transitions */}
          {blendsData.map((blend, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div
                key={blend.id}
                className={`absolute inset-0 transition-opacity duration-200 ease-out ${
                  isSelected
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={blend.productImage}
                  alt={blend.name}
                  fill
                  priority={idx === 5 || idx === 0}
                  unoptimized
                  sizes="(max-width: 640px) 440px, 440px"
                  className="object-cover object-center pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            );
          })}

          {/* Vignette depth gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20" />
        </Link>

        {/* RATING BADGE: FIXED POSITION & SIZE */}
        <div className="absolute right-3.5 top-3.5 z-30 pointer-events-none">
          <div className="inline-flex h-7 min-w-[96px] items-center justify-center gap-1.5 rounded-full border border-white/30 bg-black/80 px-3 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
            <svg
              className="h-3 w-3 fill-[#E5A93C] text-[#E5A93C] shrink-0"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="transition-opacity duration-150">{currentBlend.rating}</span>
            <span className="text-white/40">·</span>
            <span className="transition-opacity duration-150">{currentBlend.price}</span>
          </div>
        </div>
      </div>

      {/* ================= FIXED CARD CONTENT AREA ================= */}
      <div className="p-4 sm:p-5 flex flex-col shrink-0">
        {/* FIXED LABEL ROW: fixed height and flex layout prevent any shift */}
        <div className="h-6 w-full flex items-center justify-between shrink-0">
          <span
            className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#E5EBE5] uppercase shrink-0"
            style={{
              fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
            }}
          >
            9 MINDFUL BLENDS
          </span>

          <span
            className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#C9A65E] uppercase text-right truncate pl-2 transition-opacity duration-150"
            style={{
              fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
            }}
          >
            {currentBlend.name}
          </span>
        </div>

        {/* FIXED THUMBNAIL SELECTOR STRIP: fixed height and fixed gap ensure rock-solid stability */}
        <div
          role="tablist"
          aria-label="Select mindful tea blend"
          className="mt-3 h-10 sm:h-11 flex items-center justify-between gap-1 sm:gap-1.5 shrink-0 w-full"
        >
          {blendsData.map((blend, idx) => (
            <ThumbnailButton
              key={blend.id}
              blend={blend}
              isActive={idx === activeIndex}
              onSelect={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* FIXED ACTION LINK ROW */}
        <div className="mt-3.5 h-7 flex items-center justify-center shrink-0">
          <Link
            href={`/products/${currentBlend.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-medium text-white/90 shadow-sm backdrop-blur-sm transition-all hover:border-[#C9A65E] hover:text-[#C9A65E] hover:bg-black/60"
          >
            <span>View {currentBlend.name}</span>
            <span
              className="text-[#C9A65E] transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
