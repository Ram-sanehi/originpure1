"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type FogMood = "cream" | "white" | "gold";

export interface FogThemeDefinition {
  name: string;
  swatchColor: string;
  tintColor: string;
  accentColor: string;
  base: string;
  layerBase: string;
  layerSteam: string;
  layerDrift: string;
  layerAmbient: string;
}

export const MOOD_THEMES: Record<FogMood, FogThemeDefinition> = {
  cream: {
    name: "Beige/Cream",
    swatchColor: "#FAF6EE",
    tintColor: "rgba(250, 246, 238, 0.35)",
    accentColor: "#FAF6EE",
    base: "transparent",
    layerBase:
      "radial-gradient(ellipse 95% 75% at 65% 55%, rgba(246, 240, 226, 0.18) 0%, rgba(240, 230, 212, 0.10) 42%, rgba(235, 222, 200, 0.03) 68%, transparent 88%)",
    layerSteam:
      "radial-gradient(ellipse 65% 55% at 76% 62%, rgba(250, 244, 232, 0.20) 0%, rgba(244, 234, 216, 0.12) 38%, rgba(238, 224, 202, 0.03) 65%, transparent 85%), radial-gradient(ellipse 45% 65% at 72% 38%, rgba(248, 242, 230, 0.15) 0%, rgba(242, 232, 214, 0.08) 42%, transparent 75%)",
    layerDrift:
      "radial-gradient(ellipse 90% 45% at 55% 80%, rgba(244, 238, 224, 0.14) 0%, rgba(238, 230, 214, 0.07) 45%, transparent 85%)",
    layerAmbient:
      "radial-gradient(ellipse 70% 50% at 60% 25%, rgba(248, 238, 214, 0.10) 0%, rgba(240, 228, 200, 0.04) 50%, transparent 80%)",
  },
  white: {
    name: "White",
    swatchColor: "#FFFFFF",
    tintColor: "rgba(255, 255, 255, 0.38)",
    accentColor: "#FFFFFF",
    base: "transparent",
    layerBase:
      "radial-gradient(ellipse 95% 75% at 65% 55%, rgba(250, 250, 250, 0.19) 0%, rgba(242, 244, 248, 0.10) 42%, rgba(235, 238, 244, 0.03) 68%, transparent 88%)",
    layerSteam:
      "radial-gradient(ellipse 65% 55% at 76% 62%, rgba(255, 255, 255, 0.22) 0%, rgba(248, 250, 254, 0.13) 38%, rgba(240, 244, 250, 0.03) 65%, transparent 85%), radial-gradient(ellipse 45% 65% at 72% 38%, rgba(252, 252, 255, 0.17) 0%, rgba(245, 248, 252, 0.09) 42%, transparent 75%)",
    layerDrift:
      "radial-gradient(ellipse 90% 45% at 55% 80%, rgba(248, 250, 254, 0.16) 0%, rgba(240, 244, 250, 0.08) 45%, transparent 85%)",
    layerAmbient:
      "radial-gradient(ellipse 70% 50% at 60% 25%, rgba(250, 252, 255, 0.11) 0%, rgba(242, 246, 252, 0.04) 50%, transparent 80%)",
  },
  gold: {
    name: "Warm Gold",
    swatchColor: "#F5D061",
    tintColor: "rgba(248, 232, 192, 0.35)",
    accentColor: "#E8BA45",
    base: "transparent",
    layerBase:
      "radial-gradient(ellipse 95% 75% at 65% 55%, rgba(248, 236, 206, 0.18) 0%, rgba(240, 222, 175, 0.10) 42%, rgba(230, 205, 150, 0.03) 68%, transparent 88%)",
    layerSteam:
      "radial-gradient(ellipse 65% 55% at 76% 62%, rgba(252, 242, 215, 0.20) 0%, rgba(246, 230, 185, 0.12) 38%, rgba(235, 210, 155, 0.03) 65%, transparent 85%), radial-gradient(ellipse 45% 65% at 72% 38%, rgba(250, 238, 208, 0.15) 0%, rgba(242, 224, 178, 0.08) 42%, transparent 75%)",
    layerDrift:
      "radial-gradient(ellipse 90% 45% at 55% 80%, rgba(246, 232, 195, 0.14) 0%, rgba(238, 220, 175, 0.07) 45%, transparent 85%)",
    layerAmbient:
      "radial-gradient(ellipse 70% 50% at 60% 25%, rgba(250, 236, 195, 0.10) 0%, rgba(240, 222, 170, 0.04) 50%, transparent 80%)",
  },
};

const MOOD_ORDER: FogMood[] = ["cream", "white", "gold"];

interface MoodContextType {
  mood: FogMood;
  setMood: (mood: FogMood) => void;
  cycleMood: () => void;
  currentTheme: FogThemeDefinition;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMoodState] = useState<FogMood>("cream");

  // Load from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("site_fog_mood") as FogMood | null;
      if (saved && MOOD_THEMES[saved]) {
        setMoodState(saved);
      }
    }
  }, []);

  // Update document root CSS variables when mood changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const theme = MOOD_THEMES[mood];
      const root = document.documentElement;
      root.style.setProperty("--mood-tint-color", theme.tintColor);
      root.style.setProperty("--mood-accent-color", theme.accentColor);
      root.style.setProperty("--mood-swatch-color", theme.swatchColor);
    }
  }, [mood]);

  const setMood = (newMood: FogMood) => {
    setMoodState(newMood);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("site_fog_mood", newMood);
    }
  };

  const cycleMood = () => {
    const currentIndex = MOOD_ORDER.indexOf(mood);
    const nextIndex = (currentIndex + 1) % MOOD_ORDER.length;
    setMood(MOOD_ORDER[nextIndex]);
  };

  return (
    <MoodContext.Provider
      value={{
        mood,
        setMood,
        cycleMood,
        currentTheme: MOOD_THEMES[mood],
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    // Return fallback if rendered outside provider
    return {
      mood: "cream" as FogMood,
      setMood: () => {},
      cycleMood: () => {},
      currentTheme: MOOD_THEMES.cream,
    };
  }
  return context;
}
