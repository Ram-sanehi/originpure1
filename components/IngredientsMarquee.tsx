"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ALL_UNIQUE_BOTANICALS } from "@/lib/ingredients";

export default function IngredientsMarquee() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!stripRef.current) return;

    const ctx = gsap.context(() => {
      // Stately, perfectly linear continuous scroll (70s duration)
      const tween = gsap.to(stripRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 70,
        repeat: -1,
      });
      tweenRef.current = tween;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tween.pause();
      }
    }, stripRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Gentle deceleration on hover/touch rather than abrupt stop
  const handlePause = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 0,
        duration: 0.7,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  // Gentle acceleration when resuming scroll
  const handleResume = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 0.7,
        ease: "power2.inOut",
        overwrite: true,
      });
    }
  };

  return (
    <div
      className="marquee-container group relative -mx-6 sm:-mx-8 lg:-mx-12 xl:-mx-16 overflow-hidden py-4 sm:py-6 select-none"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      role="region"
      aria-label="Pure botanical ingredients index"
    >
      {/* Hardware-accelerated CSS mask for true, smooth edge alpha fade directly to section background */}
      <div
        className="relative w-full overflow-hidden py-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
        }}
      >
        {/* Continuous running strip (Set 1 + Set 2) */}
        <div ref={stripRef} className="flex w-fit will-change-transform">
          {/* Set 1 */}
          <div className="flex shrink-0 items-start gap-16 sm:gap-20 md:gap-24 pr-16 sm:pr-20 md:pr-24">
            {ALL_UNIQUE_BOTANICALS.map((botanical) => (
              <div
                key={botanical.id}
                className="flex flex-col items-center text-center shrink-0 w-32 sm:w-36 md:w-40"
              >
                {/* Circular image with refined gold hairline and organic drop shadow */}
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full bg-[#FAF7F0] ring-1 ring-[#B88D27]/25 shadow-[0_6px_18px_-2px_rgba(27,67,50,0.08),0_2px_6px_rgba(27,67,50,0.04)]">
                  <Image
                    src={botanical.image}
                    alt={botanical.name}
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Ingredient Name: bolder serif with breathing room */}
                <p className="mt-4 sm:mt-5 font-serif text-base sm:text-lg md:text-[19px] font-semibold tracking-[-0.01em] text-[#1B4332] whitespace-nowrap">
                  {botanical.name}
                </p>

                {/* Editorial Category Tag: smaller, lighter, uppercase tracked */}
                <p className="mt-1.5 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F6A1E] whitespace-nowrap">
                  {botanical.badge}
                </p>
              </div>
            ))}
          </div>

          {/* Set 2 (Clone for infinite seamless looping) */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-start gap-16 sm:gap-20 md:gap-24 pr-16 sm:pr-20 md:pr-24"
          >
            {ALL_UNIQUE_BOTANICALS.map((botanical) => (
              <div
                key={`${botanical.id}-clone`}
                className="flex flex-col items-center text-center shrink-0 w-32 sm:w-36 md:w-40"
              >
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full bg-[#FAF7F0] ring-1 ring-[#B88D27]/25 shadow-[0_6px_18px_-2px_rgba(27,67,50,0.08),0_2px_6px_rgba(27,67,50,0.04)]">
                  <Image
                    src={botanical.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-4 sm:mt-5 font-serif text-base sm:text-lg md:text-[19px] font-semibold tracking-[-0.01em] text-[#1B4332] whitespace-nowrap">
                  {botanical.name}
                </p>

                <p className="mt-1.5 font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F6A1E] whitespace-nowrap">
                  {botanical.badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
