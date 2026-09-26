"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


const overallRating = 4.6;
const totalRatings = 2100;

interface ReviewItem {
  name: string;
  productName: string;
  rating: number;
  verifiedPurchase: boolean;
  reviewText: string;
  date: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Ram",
    productName: "Moringa Lemongrass",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "I look forward to this every evening. It feels light, clean, and calming without being overly sweet. A genuinely refreshing wellness tea.",
    date: "May 2026",
  },
  {
    name: "Alex P.",
    productName: "Lemon Ginger",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "The citrus notes are bright and the ginger gives it a really grounding finish. It has become my daily go-to after lunch.",
    date: "Apr 2026",
  },
  {
    name: "Nina S.",
    productName: "Lemon Tulsi",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Smooth, fresh, and surprisingly soothing. I enjoy it both hot and iced, and it tastes clean without any artificial aftertaste.",
    date: "Mar 2026",
  },
  {
    name: "Derek L.",
    productName: "Lemon Fennel",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "This is one of the few teas that feels energizing but still calming. The delicate fennel sweetness paired with crisp lemon is remarkable.",
    date: "Feb 2026",
  },
  {
    name: "Priya V.",
    productName: "Chamomile Lemon",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Great flavor and easy to steep. I especially like the citrus brightness and the fact that it feels so gentle on the stomach before sleep.",
    date: "Jan 2026",
  },
  {
    name: "Sam K.",
    productName: "Hibiscus Lemon Balm",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Beautiful vibrant ruby liquor and a noticeable wellness feel. It sits well in my routine and tastes far more premium than expected.",
    date: "Dec 2025",
  },
  {
    name: "Lena T.",
    productName: "Butterfly Pea Blue Tea",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "This tea feels premium from the first sip. The royal blue color is mesmerizing and the earthy, delicate finish makes it deeply restorative.",
    date: "Nov 2025",
  },
  {
    name: "Jordan M.",
    productName: "Chamomile Clove Lemon",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "I like how gentle it is on the palate and how fresh it tastes without bitterness. The clove warmth and lemon zesty notes balance wonderfully.",
    date: "Oct 2025",
  },
  {
    name: "Harper W.",
    productName: "Lemon Turmeric",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "The golden turmeric warmth is perfectly balanced with citrus. It feels grounding and invigorating at the same time.",
    date: "Sep 2025",
  },
  {
    name: "Elliot B.",
    productName: "Moringa Lemongrass",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "A crisp, fresh ritual I genuinely look forward to. The lemongrass keeps it light and the moringa makes it feel deeply clean and wholesome.",
    date: "Aug 2025",
  },
  {
    name: "Kavita S.",
    productName: "Butterfly Pea Blue Tea",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Brewing this has become my favorite mindful pause of the day. A squeeze of lemon transforms it to brilliant purple — botanical poetry in a cup.",
    date: "Jul 2025",
  },
  {
    name: "Marcus D.",
    productName: "Hibiscus Lemon Balm",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Tart, floral, and deeply satisfying. The lemon balm brings a soothing calm that makes it the ultimate afternoon reset.",
    date: "Jun 2025",
  },
  {
    name: "Vikram N.",
    productName: "Lemon Ginger",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Pure ginger zest without harsh pungency. So comforting on rainy mornings or whenever I need a clean digestive pick-me-up.",
    date: "May 2025",
  },
  {
    name: "Meera K.",
    productName: "Lemon Tulsi",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "The holy basil aroma is pure sanctuary. Clean whole leaves with zero artificial flavors — exactly what true tea should be.",
    date: "Apr 2025",
  },
  {
    name: "Rohan G.",
    productName: "Lemon Fennel",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Such a pleasant, soothing herbal cup after dinner. Naturally sweet notes of fennel seed blended with real lemon peel.",
    date: "Mar 2025",
  },
  {
    name: "Chloe M.",
    productName: "Chamomile Lemon",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Mellow chamomile flowers with a delicate uplifting lemon twist. It calms my mind instantly at bedtime.",
    date: "Feb 2025",
  },
  {
    name: "Anita R.",
    productName: "Chamomile Clove Lemon",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Spicy, aromatic, and invigorating. The clove note is warm and comforting while the green tea stays light and crisp.",
    date: "Jan 2025",
  },
  {
    name: "Dev P.",
    productName: "Lemon Turmeric",
    rating: 5,
    verifiedPurchase: true,
    reviewText:
      "Rich golden glow and an earthy yet zesty cup. Highly recommended for daily wellness and refreshing balance.",
    date: "Dec 2024",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#C7A35D]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article className="flex h-[230px] sm:h-[240px] w-[320px] sm:w-[360px] md:w-[380px] shrink-0 flex-col justify-between rounded-2xl border border-[#1B4332]/10 bg-[#FFFDF8] p-6 shadow-[0_4px_18px_rgba(27,67,50,0.04)] select-none">
      <div>
        {/* Top-left: Star rating; Top-right: Verified badge */}
        <div className="flex items-center justify-between gap-2">
          <StarRow rating={review.rating} />
          {review.verifiedPurchase && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#1B4332]/5 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[#1B4332]/70">
              <svg className="h-3 w-3 text-[#C7A35D]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Clean, contained review text with consistent quote marks and fixed line clamp */}
        <p className="mt-4 font-serif text-[14px] sm:text-[15px] italic leading-[1.65] text-[#2D382E] line-clamp-3">
          “{review.reviewText}”
        </p>
      </div>

      {/* Review card footer: Author name, date, blend */}
      <div className="mt-4 border-t border-[#1B4332]/10 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1B4332]">
            {review.name}
          </span>
          <span className="font-sans text-[11px] font-medium text-[#1B4332]/45">
            {review.date}
          </span>
        </div>
        <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C7A35D] truncate">
          {review.productName}
        </p>
      </div>
    </article>
  );
}

export default function ReviewsCarousel() {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion settings
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsBannerVisible(true);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsBannerVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (bannerRef.current) {
        observer.observe(bannerRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!stripRef.current) return;

    const ctx = gsap.context(() => {
      // Stately, perfectly linear continuous scroll (80s duration for comfortable reading pace)
      const tween = gsap.to(stripRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 80,
        repeat: -1,
      });
      tweenRef.current = tween;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tween.pause();
      }
    }, stripRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Gentle deceleration on hover/touch rather than abrupt stop
  const handlePause = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 0,
        duration: 0.7,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  // Gentle acceleration when resuming scroll
  const handleResume = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 0.7,
        ease: "power2.inOut",
        overwrite: true,
      });
    }
  };

  const handleScrollToReviews = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("customer-reviews") || document.getElementById("reviews");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", "#customer-reviews");
      }
    }
  };

  return (
    <section
      id="reviews"
      data-page-section
      data-tone="reviews"
      className="relative overflow-hidden bg-[#F5EEE2] py-24 md:py-32 scroll-mt-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(199,163,93,0.10), transparent 38%), linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgba(27,67,50,0.3) 0.6px, transparent 0.6px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* ================= CLEAN HEADER ================= */}
        <div id="customer-reviews" className="mx-auto mb-10 max-w-3xl text-center scroll-mt-28">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/60">
            The Origin Pure experience
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1B4332]">
            4.6 out of 5
          </h2>
          <div
            className="mt-3 flex items-center justify-center gap-2 font-sans text-[#1B4332]/70"
            aria-label={`Overall rating ${overallRating.toFixed(1)} out of 5`}
          >
            <StarRow rating={5} />
            <span className="font-sans text-xs sm:text-sm font-medium">
              Based on {totalRatings.toLocaleString()}+ verified reviews
            </span>
          </div>
          <div className="mx-auto mt-6 h-px w-24 bg-[#C7A35D]/80" />
        </div>

        {/* ================= HORIZONTAL AUTO-SCROLLING MARQUEE STRIP ================= */}
        <div
          className="marquee-container group relative -mx-6 sm:-mx-8 lg:-mx-12 xl:-mx-16 overflow-hidden py-4 select-none"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
          role="region"
          aria-label="Verified customer testimonials marquee"
        >
          {/* Soft-gradient edge masks matching the warm section background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-[#F5EEE2] via-[#F5EEE2]/90 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-36 md:w-48 bg-gradient-to-l from-[#F5EEE2] via-[#F5EEE2]/90 to-transparent"
          />

          {/* Hardware-accelerated CSS mask for smooth alpha fading at edges */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
            }}
          >
            {/* Continuous running track (Set 1 + Set 2 for seamless infinite loop) */}
            <div ref={stripRef} className="flex w-fit will-change-transform">
              {/* Set 1 */}
              <div className="flex shrink-0 items-center gap-5 sm:gap-6 pr-5 sm:pr-6">
                {reviews.map((review) => (
                  <ReviewCard
                    key={`${review.productName}-${review.name}`}
                    review={review}
                  />
                ))}
              </div>

              {/* Set 2 (Clone for infinite seamless loop) */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-5 sm:gap-6 pr-5 sm:pr-6"
              >
                {reviews.map((review, idx) => (
                  <ReviewCard
                    key={`${review.productName}-${review.name}-clone-${idx}`}
                    review={review}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= DISTINCT FEATURED TESTIMONIAL BANNER (CLOSING STATEMENT) ================= */}
        <div
          ref={bannerRef}
          className={`mt-14 sm:mt-20 relative mx-auto max-w-4xl lg:max-w-5xl overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-[#C7A35D]/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE3] px-5 py-8 xs:px-8 xs:py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20 text-center shadow-[0_22px_50px_-12px_rgba(27,67,50,0.08),0_10px_24px_-6px_rgba(199,163,93,0.14),0_1px_3px_rgba(0,0,0,0.03)] ring-1 ring-white/60 transition-all duration-1000 ease-out ${
            isBannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle warm radial accent glow in the center */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_25%,_rgba(199,163,93,0.16)_0%,_transparent_70%)]"
          />

          {/* Symmetrical Botanical Line-Illustration Accents: Top-Left */}
          <svg
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-2 sm:left-2 sm:top-2 h-28 w-28 sm:h-48 sm:w-48 text-[#C7A35D]/20 select-none transition-opacity duration-700"
          >
            <path d="M140 145C115 125 85 90 25 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M108 110C118 104 124 94 120 82C108 86 102 98 108 110Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            <path d="M98 98C88 90 76 88 70 98C78 108 90 106 98 98Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            <path d="M76 72C84 64 86 52 78 42C68 48 66 60 76 72Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          </svg>

          {/* Symmetrical Botanical Line-Illustration Accents: Bottom-Right (Mirrored) */}
          <svg
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -bottom-2 sm:right-2 sm:bottom-2 h-28 w-28 sm:h-48 sm:w-48 text-[#C7A35D]/20 select-none rotate-180 transition-opacity duration-700"
          >
            <path d="M140 145C115 125 85 90 25 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M108 110C118 104 124 94 120 82C108 86 102 98 108 110Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            <path d="M98 98C88 90 76 88 70 98C78 108 90 106 98 98Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            <path d="M76 72C84 64 86 52 78 42C68 48 66 60 76 72Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          </svg>

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* PROMINENT QUOTATION MARK ICON WITH SOFT GOLD GRADIENT & RADIANT GLOW */}
            <div className="relative mx-auto mb-5 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
              {/* Soft ambient gold glow behind circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(199,163,93,0.36)_0%,_transparent_70%)] blur-md"
              />
              {/* Circle container with soft gold gradient, hairline border & inner bevel highlight */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-[#C7A35D]/60 bg-gradient-to-b from-[#FFFDF8] via-[#F6EAD2] to-[#E3C886] text-[#7A5415] shadow-[0_4px_18px_rgba(199,163,93,0.28),inset_0_1px_1px_rgba(255,255,255,0.9)] ring-4 ring-[#C7A35D]/15">
                <svg className="h-5 w-5 sm:h-7 sm:w-7 fill-current text-[#7A5415]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <blockquote className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] italic leading-relaxed text-[#1B4332] lg:leading-[1.38]">
              “The kind of tea that makes your whole evening slow down in the best possible way.”
            </blockquote>

            {/* ATTRIBUTION WITH ELEGANT AVATAR FOR RAM */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <div
                className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#C7A35D]/50 bg-gradient-to-br from-[#FFFDF8] via-[#F4E8CF] to-[#DEC385] shadow-[0_2px_8px_rgba(199,163,93,0.22)] ring-2 ring-[#C7A35D]/20 select-none"
                aria-label="Ram avatar"
              >
                <span className="font-serif text-[13px] sm:text-[14px] font-bold tracking-tight text-[#1B4332]">
                  R
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C7A35D]" aria-hidden="true" />
                <cite className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4332]/75 not-italic">
                  Ram · Verified Buyer · Moringa Lemongrass
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CLEAR CENTERED CTA ================= */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#customer-reviews"
            onClick={handleScrollToReviews}
            aria-label="See why customers love Origin Pure tea blends"
            className="group inline-flex items-center gap-3 rounded-full border border-[#1B4332] bg-[#1B4332] px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] shadow-md shadow-[#1B4332]/15 transition-all duration-200 hover:bg-[#143427] hover:shadow-lg hover:shadow-[#1B4332]/25 cursor-pointer"
          >
            <span>See Why They Love It</span>
            <span
              className="text-[#E5A93C] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
