"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // Store the callback in a stable variable so the exact same reference is
    // used for both gsap.ticker.add() and gsap.ticker.remove().
    // Passing a fresh inline arrow to .remove() would never match the added fn
    // and the RAF loop would leak forever on component unmount.
    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    // lagSmoothing(500, 33): allow up to 500ms catch-up over 33ms — prevents
    // animation snapping during CPU spikes without fully disabling smoothing.
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(rafCallback); // same reference — correctly removed
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

