"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Thin client-only leaf component for the page-level background colour animation.
// Kept separate so page.tsx can be a React Server Component (no "use client" needed there).
export default function PageScrollEffect() {
  useEffect(() => {
    const layer = document.getElementById("page-background-layer");
    if (!layer) return;

    const sectionPairs = [
      {
        section: document.querySelector('[data-tone="hero"]'),
        from: "#0d1f17",
        to: "#FDFDFD",
      },
      {
        section: document.querySelector('[data-tone="story"]'),
        from: "#FDFDFD",
        to: "#F7F7F7",
      },
      {
        section: document.querySelector('[data-tone="stack"]'),
        from: "#F7F7F7",
        to: "#FDFDFD",
      },
      {
        section: document.querySelector('[data-tone="reviews"]'),
        from: "#FDFDFD",
        to: "#1B4332",
      },
      {
        section: document.querySelector('[data-tone="cta"]'),
        from: "#1B4332",
        to: "#1B4332",
      },
    ].filter((pair) => pair.section);

    if (!sectionPairs.length) return;

    gsap.set(layer, {
      background: sectionPairs[0].from,
      willChange: "background-color",
      force3D: true,
    });

    const triggers = sectionPairs.map(({ section, from, to }) => {
      if (!section) return null;

      return gsap.fromTo(
        layer,
        { background: from },
        {
          background: to,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      triggers.forEach((trigger) => {
        if (trigger) trigger.scrollTrigger?.kill();
      });
    };
  }, []);

  // Renders nothing — pure side-effect component
  return null;
}
