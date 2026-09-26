"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const rituals = [
  { title: "Bloom", copy: "Steep with warm water and let the leaves open slowly for a fuller aroma." },
  { title: "Breathe", copy: "Pause for one quiet minute before the first sip to ease the day into focus." },
  { title: "Return", copy: "Finish with one small ritual of stillness — the kind that stays with you." },
];

export default function RitualSection() {
  return (
    <section id="ritual" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-8">
        {/* Left Dark Green Card */}
        <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-[#123A2B] p-8 text-[#FFF8E7] shadow-[0_24px_70px_rgba(27,67,50,0.16)] md:p-12 lg:p-14">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DCC378]/80">THE RITUAL</p>

            <div className="relative mt-5 w-full max-w-[430px] overflow-hidden rounded-[1.25rem] border border-[#DCC378]/25 bg-[#0D2C22] shadow-[0_16px_34px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,195,120,0.18),_transparent_42%),linear-gradient(180deg,rgba(7,24,17,0.06),rgba(7,24,17,0.38))]" />
              <div className="relative h-[180px] overflow-hidden md:h-[190px]">
                <Image
                  src="/images/9.png"
                  alt="Tea leaves and a calming tea ritual"
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  className="object-cover object-center saturate-[0.82] contrast-[1.04] brightness-[0.82]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-xl lg:mt-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#FFF8E7]">
              A calmer pace, one cup at a time.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md font-sans text-sm sm:text-base leading-relaxed text-[#FFF8E7]/70">
              Each blend is designed to make room for a slower, more attentive rhythm. Let the water warm, let the leaves open, and let the day arrive at its own pace.
            </p>
          </div>
        </div>

        {/* Right 3-Step Stacked Cards */}
        <div className="relative flex h-full flex-col justify-between gap-4 md:gap-5">
          {/* Subtle vertical connecting line linking steps 01 -> 02 -> 03 */}
          <div
            className="pointer-events-none absolute left-[44px] md:left-[60px] top-12 bottom-12 -translate-x-1/2 w-px border-l border-dashed border-[#B88D27]/40 z-0 hidden sm:block"
            aria-hidden="true"
          />

          {rituals.map((ritual, index) => (
            <motion.article
              key={ritual.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-1 items-center gap-5 rounded-[1.25rem] border border-[#1B4332]/10 bg-[#F7F1E5] px-6 py-6 shadow-[0_12px_30px_rgba(27,67,50,0.035)] transition-all duration-300 hover:border-[#C9A65E]/30 hover:shadow-[0_16px_36px_rgba(27,67,50,0.06)] md:px-8 md:py-7"
            >
              <div className="w-10 shrink-0 font-serif text-4xl leading-none text-[#B88D27]/75 md:w-14 md:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="max-w-xl">
                <h3 className="font-serif text-xl sm:text-2xl font-medium leading-tight text-[#1B4332]">{ritual.title}</h3>
                <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-[#1B4332]/70">{ritual.copy}</p>
              </div>

              {/* Dotted connector thread bridging the gap between cards */}
              {index < rituals.length - 1 && (
                <div
                  className="pointer-events-none absolute -bottom-4 md:-bottom-5 left-[44px] md:left-[60px] -translate-x-1/2 h-4 md:h-5 z-20 flex flex-col items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="h-full w-px border-l border-dashed border-[#B88D27]/60" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
