"use client";

import React from "react";
import { useMood } from "@/context/MoodContext";

export default function MoodToggle({ className = "" }: { className?: string }) {
  const { cycleMood, currentTheme } = useMood();

  return (
    <button
      type="button"
      onClick={cycleMood}
      title={`Mood: ${currentTheme.name} (Click to switch)`}
      aria-label={`Current fog mood: ${currentTheme.name}. Click to switch between Cream, White, and Gold.`}
      className={`group relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 bg-black/45 shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#C9A65E]/70 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A65E]/60 ${className}`}
    >
      {/* Outer subtle glow matching mood */}
      <span
        className="absolute inset-0 rounded-full opacity-30 transition-all duration-500 group-hover:opacity-60"
        style={{
          boxShadow: `0 0 12px ${currentTheme.swatchColor}`,
        }}
        aria-hidden="true"
      />

      {/* Circular swatch dot showing active tone */}
      <span
        className="relative h-2.5 w-2.5 rounded-full border border-black/30 shadow-inner transition-all duration-500 group-hover:scale-110"
        style={{
          backgroundColor: currentTheme.swatchColor,
        }}
        aria-hidden="true"
      />

      {/* Tiny discreet letter indicator */}
      <span className="sr-only">{currentTheme.name}</span>
    </button>
  );
}
