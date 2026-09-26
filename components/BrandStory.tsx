"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waitForImagesReady } from "@/components/RevealImage";
import IngredientsMarquee from "@/components/IngredientsMarquee";

gsap.registerPlugin(ScrollTrigger);

const folds = [
  "Pure by Origin.",
  "No additives. No artificial flavours.",
  "Plant-based tea bags. Clean ritual, naturally.",
];

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const phraseRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const setup = () => {
      ctx = gsap.context(() => {
        const phrases = phraseRefs.current.filter(Boolean) as HTMLParagraphElement[];

        gsap.set(phrases, {
          opacity: 0,
          y: 40,
          filter: "blur(8px)",
        });

        phrases.forEach((phrase) => {
          gsap.to(phrase, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: phrase,
              start: "top 88%",
              once: true,
              toggleActions: "play none none reverse",
            },
            onComplete: () => {
              gsap.set(phrase, { clearProps: "filter" });
            },
          });
        });

        const storyImage = sectionRef.current?.querySelector<HTMLElement>(".story-philosophy-image");
        if (storyImage) {
          gsap.fromTo(
            storyImage,
            { scale: 0.96, y: 18 },
            {
              scale: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: storyImage,
                start: "top 82%",
                once: true,
              },
            }
          );

          gsap.to(storyImage, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: storyImage,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      }, sectionRef);
    };

    const cleanup = waitForImagesReady(sectionRef.current, setup);

    return () => {
      cleanup();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-page-section
      data-tone="story"
      className="relative overflow-hidden bg-transparent py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(26,67,50,0.12),_transparent_36%)]" />

      {/* TOP SECTION: Philosophy & Story */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-12">
        <div className="story-philosophy-image relative min-h-[280px] xs:min-h-[340px] sm:min-h-[420px] overflow-hidden rounded-[2rem] border border-[#C9A65E]/30 bg-[#EDE8DC] shadow-[0_28px_64px_-16px_rgba(27,67,50,0.18),0_12px_28px_-8px_rgba(0,0,0,0.06)] ring-1 ring-[#C9A65E]/20 ring-offset-4 ring-offset-[#FDFDFD] lg:min-h-[560px] xl:min-h-[620px]">
          <Image
            src="/webimg/2.png"
            alt="Botanical tea leaves harvested for an Origin Pure infusion"
            fill
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,40,32,0.01)_55%,rgba(18,40,32,0.34)_100%)]" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2.5">
            <span className="h-5 w-px bg-[#C9A65E]" aria-hidden="true" />
            <svg
              className="h-3.5 w-3.5 text-[#C9A65E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A65E]">
              GREEN TEA PHILOSOPHY
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {folds.map((phrase, index) => (
              <motion.p
                key={phrase}
                ref={(node) => {
                  phraseRefs.current[index] = node;
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.22, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#1B4332]"
              >
                {phrase}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 max-w-lg font-sans text-base leading-relaxed text-[#1B4332]/70"
          >
            Origin Pure was shaped around one belief: tea should feel as clean and alive as the plants it comes from. We source the whole leaf, skip the fluff, and keep the ritual simple, grounded, and plant-first.
          </motion.p>

          {/* Minimal 3-pillar stat/callouts to balance vertical height */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-3 gap-3 border-t border-[#1B4332]/12 pt-6 sm:mt-10 sm:gap-4 sm:pt-8"
          >
            <div className="flex flex-col">
              <span className="font-serif text-base font-medium tracking-tight text-[#1B4332] sm:text-lg">
                Whole Leaf
              </span>
              <span className="mt-1 font-sans text-[11px] sm:text-xs text-[#1B4332]/65">
                Pure unbroken botanicals
              </span>
            </div>

            <div className="flex flex-col border-l border-[#1B4332]/12 pl-3 sm:pl-4">
              <span className="font-serif text-base font-medium tracking-tight text-[#1B4332] sm:text-lg">
                No Additives
              </span>
              <span className="mt-1 font-sans text-[11px] sm:text-xs text-[#1B4332]/65">
                Zero essences or fillers
              </span>
            </div>

            <div className="flex flex-col border-l border-[#1B4332]/12 pl-3 sm:pl-4">
              <span className="font-serif text-base font-medium tracking-tight text-[#1B4332] sm:text-lg">
                Plant-Based
              </span>
              <span className="mt-1 font-sans text-[11px] sm:text-xs text-[#1B4332]/65">
                Biodegradable mesh
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SECTION: Ingredients Showcase */}
      <div className="relative mx-auto mt-20 max-w-7xl border-t border-[#1B4332]/12 px-4 sm:px-6 pt-14 lg:mt-28 lg:px-12 lg:pt-18">
        {/* Extremely faint (3.5% opacity) organic paper-grain texture across section background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Barely-visible botanical line sprig illustration in the top-right corner */}
        <svg
          viewBox="0 0 160 160"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-10 h-36 w-36 sm:right-10 sm:top-12 sm:h-48 sm:w-48 lg:right-16 lg:h-56 lg:w-56 text-[#1B4332]/[0.045] -rotate-12 select-none"
        >
          <path
            d="M20 145C45 125 75 90 135 25"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M52 110C42 104 36 94 40 82C52 86 58 98 52 110Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M62 98C72 90 84 88 90 98C82 108 70 106 62 98Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M84 72C76 64 74 52 82 42C92 48 94 60 84 72Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M96 60C106 50 118 48 122 58C114 68 102 68 96 60Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M135 25C132 18 136 12 142 14C144 20 140 24 135 25Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>

        {/* Section Header */}
        <div className="relative z-10 max-w-2xl">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/60">
            what&apos;s inside
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#1B4332]">
            Every Pure Botanical We Brew.
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#1B4332]/70">
            Every blend is crafted exclusively with 100% whole botanicals, flowers, seeds, and leaves. No synthetic essences, no preservatives.
          </p>
        </div>

        {/* Running Marquee Ingredients Strip */}
        <div className="relative z-10 mt-10 sm:mt-12">
          <IngredientsMarquee />
        </div>
      </div>
    </section>
  );
}

