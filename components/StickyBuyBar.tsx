"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AMAZON_URL } from "@/lib/amazon";

interface StickyBuyBarProps {
  amazonUrl?: string;
  productName?: string;
}

export default function StickyBuyBar({ amazonUrl, productName }: StickyBuyBarProps = {}) {
  const targetUrl = amazonUrl || AMAZON_URL;
  const label = productName ? `Shop ${productName} on Amazon` : "Shop on Amazon";
  const [visible, setVisible] = useState(false);
  const [hideAtFinalCta, setHideAtFinalCta] = useState(false);

  useEffect(() => {
    const inlineCta = document.getElementById("inline-amazon-cta");
    const finalCta = document.querySelector("[data-final-cta]");

    let inlineCtaBottom = 0;
    const updateInlineCtaPos = () => {
      if (inlineCta) {
        const rect = inlineCta.getBoundingClientRect();
        inlineCtaBottom = rect.bottom + window.scrollY;
      }
    };
    updateInlineCtaPos();

    let ticking = false;
    const checkVisibility = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          setVisible(scrollY > inlineCtaBottom);
          ticking = false;
        });
      }
    };

    // Run initial check
    checkVisibility();

    const handleResize = () => {
      updateInlineCtaPos();
      checkVisibility();
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    let finalCtaObserver: IntersectionObserver | null = null;
    if (finalCta) {
      finalCtaObserver = new IntersectionObserver(
        ([entry]) => {
          setHideAtFinalCta(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
      finalCtaObserver.observe(finalCta);
    }

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", handleResize);
      if (finalCtaObserver) finalCtaObserver.disconnect();
    };
  }, []);

  return (
    <>

      <AnimatePresence>
        {visible && !hideAtFinalCta && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed right-3 top-3 z-50 md:right-6 md:top-6"
          >
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block w-[min(42vw,180px)] transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E1BE5B]/70 focus:ring-offset-2 focus:ring-offset-transparent md:w-[210px]"
            >
              <Image
                src="/prdimg/img.png"
                alt="Shop on Amazon"
                width={2163}
                height={727}
                sizes="(max-width: 768px) 42vw, 210px"
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
