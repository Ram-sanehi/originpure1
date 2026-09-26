"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  side: "left" | "right";
  phase: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    image: "/images/process/step_1_harvest.webp",
    alt: "Hands carefully selecting freshly harvested whole botanical tea leaves",
    title: "Carefully Sourced Botanicals",
    description: "Premium herbs selected from trusted growers.",
    side: "left",
    phase: "Ethical Harvest",
  },
  {
    step: "02",
    image: "/images/process/step_2_dried.webp",
    alt: "Whole dried botanicals and chamomile flowers naturally curing on rustic linen",
    title: "Naturally Dried",
    description: "Preserving aroma, flavour, and character.",
    side: "right",
    phase: "Natural Curing",
  },
  {
    step: "03",
    image: "/images/process/step_3_pyramid.webp",
    alt: "Pyramid tea bag filled with vibrant whole botanical herbs and flowers",
    title: "Packed In Pyramid Bags",
    description: "More room for herbs to fully infuse.",
    side: "left",
    phase: "Whole-Leaf Cut",
  },
  {
    step: "04",
    image: "/images/process/step_4_biodegradable.webp",
    alt: "Plant-based biodegradable pyramid tea bag with natural string and tag",
    title: "Plant-Based & Biodegradable",
    description: "Designed with sustainability in mind.",
    side: "right",
    phase: "Zero-Plastic Bags",
  },
];

// Smooth curved connector from left card to center node
function CurvedConnectorLeft() {
  return (
    <svg
      viewBox="0 0 56 40"
      fill="none"
      className="h-10 w-8 shrink-0 text-[#C89B3C] lg:w-12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="connector-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1B4332" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#2F6146" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B88D27" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 0,20 C 18,10 38,30 56,20"
        stroke="url(#connector-grad-left)"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

// Smooth curved connector from center node to right card
function CurvedConnectorRight() {
  return (
    <svg
      viewBox="0 0 56 40"
      fill="none"
      className="h-10 w-8 shrink-0 text-[#C89B3C] lg:w-12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="connector-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B88D27" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2F6146" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1B4332" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M 0,20 C 18,30 38,10 56,20"
        stroke="url(#connector-grad-right)"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function OurProcess() {
  return (
    <section
      id="process"
      aria-labelledby="our-process-heading"
      className="bg-[#FAF6F0] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 overflow-hidden"
    >
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5651D]">
          Our Process
        </p>
        <h2
          id="our-process-heading"
          className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#231F1C]"
        >
          From Farm To Cup
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#6E665D] sm:text-[17px]">
          A thoughtful path from whole botanicals to the cup waiting in your kitchen.
        </p>
      </div>

      {/* TIMELINE CONTAINER (max-w-4xl for balanced whitespace) */}
      <div className="relative mx-auto mt-14 max-w-4xl sm:mt-18 md:mt-20">
        {/* ========================================================================= */}
        {/* DESKTOP VIEW (1025px+): 3-column Zigzag with spine, nodes & connectors     */}
        {/* ========================================================================= */}
        <div className="relative hidden lg:block">
          {/* Soft Gradient Spine: Dark Green to Gold */}
          <div
            className="absolute left-1/2 top-8 bottom-8 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#1B4332] via-[#2F6146] to-[#B88D27] shadow-[0_0_8px_rgba(27,67,50,0.15)]"
            aria-hidden="true"
          />

          {/* Animated Flow Dashes along vertical spine */}
          <svg
            className="pointer-events-none absolute left-1/2 top-8 bottom-8 h-[calc(100%-64px)] w-2 -translate-x-1/2"
            preserveAspectRatio="none"
            viewBox="0 0 8 100"
            aria-hidden="true"
          >
            <line
              x1="4"
              y1="0"
              x2="4"
              y2="100"
              stroke="#F9E7B2"
              strokeOpacity="0.75"
              strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-spine-flow"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 3-Column Grid: [Left Slot] [Center Spine/Node] [Right Slot] with exact equal row spacing */}
          <div className="grid grid-cols-[1fr_80px_1fr] gap-y-16 items-center">
            {steps.map(({ step, image, alt, title, description, side, phase }, index) => {
              const isLeft = side === "left";

              return (
                <React.Fragment key={step}>
                  {/* COLUMN 1: LEFT SLOT */}
                  <div className="flex h-full items-center justify-end">
                    {isLeft ? (
                      /* Left Card with Curved S-Connector */
                      <div className="flex w-full items-center justify-end">
                        <motion.article
                          initial={{ opacity: 0, x: -24, y: 12 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="group w-full max-w-[400px] min-h-[128px] flex items-center rounded-2xl border border-[#E7DFD4]/85 bg-white/95 p-5 lg:p-6 shadow-[0_4px_22px_rgba(40,55,45,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88D27]/35 hover:shadow-[0_12px_32px_rgba(40,55,45,0.09)]"
                        >
                          <div className="flex items-center gap-4 text-left w-full">
                            <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl border border-[#1B4332]/12 bg-[#FAF6F0] shadow-[0_4px_12px_rgba(27,67,50,0.08)] ring-1 ring-white/60">
                              <Image
                                src={image}
                                alt={alt}
                                fill
                                sizes="72px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B88D27]">
                                {phase}
                              </span>
                              <h3 className="mt-0.5 font-serif text-2xl font-medium leading-snug tracking-[-0.01em] text-[#231F1C]">
                                {title}
                              </h3>
                              <p className="mt-1 font-sans text-sm leading-relaxed text-[#6E665D]">
                                {description}
                              </p>
                            </div>
                          </div>
                        </motion.article>

                        {/* Smooth Curved S-Connector */}
                        <CurvedConnectorLeft />
                      </div>
                    ) : (
                      /* Empty Space opposite right card */
                      <div className="w-full" aria-hidden="true" />
                    )}
                  </div>

                  {/* COLUMN 2: CENTER SPINE & NUMBERED NODE */}
                  <div className="relative flex h-full items-center justify-center">
                    {/* Consistent Outlined Node across all steps */}
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-serif text-lg font-bold bg-white text-[#B5651D] border-2 border-[#D4A574] shadow-[0_4px_14px_rgba(70,50,30,0.08)] ring-4 ring-[#FAF6F0] transition-transform duration-300 hover:scale-105"
                      aria-label={`Step ${step}`}
                    >
                      {step}
                    </div>

                    {/* Directional Downward Arrow Indicator */}
                    {index < steps.length - 1 && (
                      <div
                        className="pointer-events-none absolute top-1/2 translate-y-[80px] -translate-x-1/2 left-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#B88D27] bg-[#FAF6F0] text-[#B88D27] shadow-[0_2px_8px_rgba(184,141,39,0.22)]"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 14 14"
                          className="h-3.5 w-3.5 fill-none stroke-[#B88D27] stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                        >
                          <path d="M3.5 5.25L7 8.75L10.5 5.25" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* COLUMN 3: RIGHT SLOT */}
                  <div className="flex h-full items-center justify-start">
                    {!isLeft ? (
                      /* Right Card with Curved S-Connector */
                      <div className="flex w-full items-center justify-start">
                        {/* Smooth Curved S-Connector */}
                        <CurvedConnectorRight />

                        <motion.article
                          initial={{ opacity: 0, x: 24, y: 12 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="group w-full max-w-[400px] min-h-[128px] flex items-center rounded-2xl border border-[#E7DFD4]/85 bg-white/95 p-5 lg:p-6 shadow-[0_4px_22px_rgba(40,55,45,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88D27]/35 hover:shadow-[0_12px_32px_rgba(40,55,45,0.09)]"
                        >
                          <div className="flex items-center gap-4 text-left w-full">
                            <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl border border-[#1B4332]/12 bg-[#FAF6F0] shadow-[0_4px_12px_rgba(27,67,50,0.08)] ring-1 ring-white/60">
                              <Image
                                src={image}
                                alt={alt}
                                fill
                                sizes="72px"
                                className="object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B88D27]">
                                {phase}
                              </span>
                              <h3 className="mt-0.5 font-serif text-2xl font-medium leading-snug tracking-[-0.01em] text-[#231F1C]">
                                {title}
                              </h3>
                              <p className="mt-1 font-sans text-sm leading-relaxed text-[#6E665D]">
                                {description}
                              </p>
                            </div>
                          </div>
                        </motion.article>
                      </div>
                    ) : (
                      /* Empty Space opposite left card */
                      <div className="w-full" aria-hidden="true" />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLET VIEW (768px-1024px): Single-column centered stack with spine       */}
        {/* ========================================================================= */}
        <div className="relative hidden md:block lg:hidden mx-auto max-w-xl">
          {/* Vertical spine running behind the numbered nodes */}
          <div
            className="absolute left-[27px] top-6 bottom-6 w-[2.5px] rounded-full bg-gradient-to-b from-[#1B4332] via-[#2F6146] to-[#B88D27]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map(({ step, image, alt, title, description, phase }, index) => (
              <div key={step} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative flex items-center gap-5"
                >
                  {/* Numbered Node on the spine */}
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-lg font-bold bg-white text-[#B5651D] border-2 border-[#D4A574] shadow-[0_4px_14px_rgba(70,50,30,0.08)] ring-4 ring-[#FAF6F0]"
                    aria-label={`Step ${step}`}
                  >
                    {step}
                  </div>

                  {/* Card */}
                  <article className="group min-w-0 flex-1 rounded-2xl border border-[#E7DFD4]/85 bg-white/95 p-5 shadow-[0_4px_22px_rgba(40,55,45,0.05)] transition-all duration-300 hover:border-[#B88D27]/35 hover:shadow-[0_8px_28px_rgba(40,55,45,0.08)]">
                    <div className="flex items-center gap-4 text-left">
                      <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-[#1B4332]/12 bg-[#FAF6F0] shadow-sm ring-1 ring-white/60">
                        <Image
                          src={image}
                          alt={alt}
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B88D27]">
                          {phase}
                        </span>
                        <h3 className="mt-0.5 font-serif text-xl font-medium leading-snug tracking-[-0.01em] text-[#231F1C]">
                          {title}
                        </h3>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-[#6E665D]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </article>
                </motion.div>

                {/* Arrow between nodes */}
                {index < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute left-[27px] -translate-x-1/2 top-[calc(100%+14px)] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-[#B88D27] bg-[#FAF6F0] text-[#B88D27] shadow-xs"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 14 14"
                      className="h-2.5 w-2.5 fill-none stroke-[#B88D27] stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                    >
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (<768px): Fully stacked single-column without separate spine   */}
        {/* ========================================================================= */}
        <div className="relative block md:hidden space-y-4 sm:space-y-5">
          {steps.map(({ step, image, alt, title, description, phase }, index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative w-full overflow-hidden rounded-2xl border border-[#E7DFD4]/90 bg-white p-4 shadow-[0_4px_18px_rgba(70,50,30,0.05)] transition-all duration-300"
            >
              <div className="flex items-start gap-3.5 text-left">
                {/* Photo with Numbered Badge positioned at top-left */}
                <div className="relative shrink-0">
                  <div className="relative h-[68px] w-[68px] overflow-hidden rounded-xl border border-[#1B4332]/12 bg-[#FAF6F0] shadow-sm">
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="68px"
                      className="object-cover"
                    />
                  </div>
                  {/* Badge at top-left of photo */}
                  <span
                    className="absolute -top-1.5 -left-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B4332] text-white font-serif text-[11px] font-bold shadow-sm border border-[#F9E7B2]/40"
                    aria-label={`Step ${step}`}
                  >
                    {step}
                  </span>
                </div>

                {/* Content: [step label / phase] -> [title] -> [description] */}
                <div className="min-w-0 flex-1">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B88D27]">
                    {phase}
                  </span>
                  <h3 className="mt-0.5 font-serif text-lg font-medium leading-snug tracking-[-0.01em] text-[#231F1C]">
                    {title}
                  </h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-[#6E665D]">
                    {description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
