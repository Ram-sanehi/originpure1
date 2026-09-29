"use client";

import { useEffect, useRef, useState } from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Sourced by hand",
    description:
      "Handpicking only whole, tender tea leaves and pristine botanicals from trusted high-altitude gardens at peak freshness.",
  },
  {
    number: "02",
    title: "Crafted with precision",
    description:
      "Careful slow-curing and small-batch processing designed to protect essential botanical oils, delicate aroma, and authentic vitality.",
  },
  {
    number: "03",
    title: "Packed with care",
    description:
      "Sealed into plant-based, biodegradable pyramid bags providing full space for leaves to unfurl, breathe, and infuse.",
  },
];

interface FromLeafToCupProps {
  id?: string;
  className?: string;
}

export default function FromLeafToCup({
  id = "process",
  className = "",
}: FromLeafToCupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  // Single gentle fade-in on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    sectionObserver.observe(section);
    return () => sectionObserver.disconnect();
  }, []);

  // Video autoplay when in view, pause when out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px",
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby="leaf-to-cup-heading"
      className={`relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-y border-[#1B4332]/8 ${className}`}
    >
      <div
        className={`relative mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-700 ease-out ${
          hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Two-column layout: Left phone directly on section background, Right content vertically centered */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-14 xl:gap-20">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Phone frame directly on warm cream section background        */}
          {/* Thin dark border (5-6px), 9:16 aspect ratio, soft shadow, video only      */}
          {/* ========================================================================= */}
          <div className="flex w-full justify-center self-center">
            {/* Mobile: 85% width centered, Desktop: max-w ~360px */}
            <div className="relative w-[85%] max-w-[340px] sm:max-w-[360px]">
              
              {/* Phone chassis: 5-6px border thickness, smooth matching radius, dark frame */}
              <div className="relative rounded-[42px] sm:rounded-[46px] bg-[#161C19] p-[5px] sm:p-[6px] shadow-[0_20px_45px_-10px_rgba(27,67,50,0.20),0_8px_20px_-6px_rgba(0,0,0,0.12)] border border-[#2D3A32]/60 ring-1 ring-white/10">
                
                {/* Inner Screen Display (9:16 Aspect Ratio) with matching inner radius */}
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[37px] sm:rounded-[40px] bg-[#0C1B14]">
                  <video
                    ref={videoRef}
                    src="/videos/process.mp4"
                    poster="/videos/process-poster.jpg"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    style={{ objectFit: "cover", backgroundColor: "#0C1B14" }}
                    className="h-full w-full object-cover block"
                  >
                    <source src="/videos/process.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Soft, calm shadow grounding the phone */}
              <div
                className="pointer-events-none mx-auto mt-4 h-3 w-3/4 rounded-full bg-[#1B4332]/8 blur-md"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Eyebrow, Heading, Intro Paragraph & Cream Step Cards        */}
          {/* Vertically centered against the phone column                              */}
          {/* ========================================================================= */}
          <div className="flex flex-col justify-center self-center text-left">
            {/* Section Eyebrow: Small gold uppercase, letter-spaced */}
            <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B88D27]">
              OUR PROCESS
            </p>

            {/* Heading: From Leaf to Cup (dark green serif) */}
            <h2
              id="leaf-to-cup-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#1B4332]"
            >
              From Leaf to Cup
            </h2>

            {/* Intro Paragraph */}
            <p className="mt-3 max-w-xl font-sans text-base sm:text-[17px] leading-relaxed text-[#1B4332]/75">
              Witness the thoughtful journey of pure whole-leaf botanicals—from ethical hillside harvests to the fragrant, mindful cup in your hands.
            </p>

            {/* 3 Cream Step Cards with Large Gold Numerals & Dotted Connectors */}
            <div className="mt-8 relative flex flex-col gap-5">
              {/* Subtle continuous vertical connector linking step numerals */}
              <div
                className="pointer-events-none absolute left-[48px] sm:left-[64px] top-12 bottom-12 -translate-x-1/2 w-px border-l-2 border-dotted border-[#B88D27]/35 z-0 hidden sm:block"
                aria-hidden="true"
              />

              {steps.map((item, index) => (
                <article
                  key={item.number}
                  className="relative z-10 flex items-center gap-5 sm:gap-6 rounded-[1.5rem] border border-[#1B4332]/10 bg-[#F7F1E5] px-6 py-6 sm:px-8 sm:py-7 shadow-[0_12px_30px_rgba(27,67,50,0.035)]"
                >
                  {/* LARGE Gold Serif Numeral: ~36px on mobile, 48-52px on desktop */}
                  <div className="w-12 sm:w-16 shrink-0 text-center font-serif text-[34px] sm:text-[48px] lg:text-[52px] leading-none text-[#B88D27]/85 select-none">
                    {item.number}
                  </div>

                  {/* Title & Description stacked to the right */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl sm:text-[22px] font-medium leading-tight text-[#1B4332]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 font-sans text-sm sm:text-[15px] leading-[1.6] text-[#2C3E33]/85">
                      {item.description}
                    </p>
                  </div>

                  {/* Dotted gold vertical connector between adjacent cards */}
                  {index < steps.length - 1 && (
                    <div
                      className="pointer-events-none absolute -bottom-5 left-[48px] sm:left-[64px] -translate-x-1/2 h-5 z-20 flex flex-col items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="h-full w-px border-l-2 border-dotted border-[#B88D27]/60" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
