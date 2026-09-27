"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoodProvider } from "@/context/MoodContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const isTouchDevice = coarsePointerQuery.matches || navigator.maxTouchPoints > 0;
    const shouldReduceMotion = reducedMotionQuery.matches;

    if (isTouchDevice || shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.8,        // was 1.1 — faster settle
      smoothWheel: true,
      wheelMultiplier: 1.0, // was 0.92 — native scroll speed, no artificial throttle
      touchMultiplier: 1.1,
      lerp: 0.14,           // was 0.1 — less per-frame lag
    });

    // Sync GSAP ScrollTrigger with Lenis so scroll-tied animations track correctly
    lenis.on("scroll", ScrollTrigger.update);

    // Feed Lenis into GSAP ticker so it runs on the same RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <MoodProvider>{children}</MoodProvider>;
}

