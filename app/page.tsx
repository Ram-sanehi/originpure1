import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import FromLeafToCup from "@/components/FromLeafToCup";
import ProductStack from "@/components/ProductStack";
import WhyOriginPure from "@/components/WhyOriginPure";
import RitualSection from "@/components/RitualSection";
import HowToBrewSection from "@/components/HowToBrewSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import StorySection from "@/components/StorySection";
import FinalCTAFooter from "@/components/FinalCTAFooter";
import PageScrollEffect from "@/components/PageScrollEffect";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Origin Pure – Citrus Vitality Moringa Lemongrass Green Tea",
  description:
    "Origin Pure Citrus Vitality blends moringa, lemongrass, and green tea for a bright, refreshing wellness ritual that supports energy, focus, and everyday calm.",
  image: ["https://originpuretea.com/prdimg/ButterflyPea/1.png"],
  brand: {
    "@type": "Brand",
    name: "Origin Pure",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: 2100,
  },
} as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FDFDFD] text-[#1B4332] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page background colour scroll animation — client-only leaf component */}
      <PageScrollEffect />

      <div id="page-background-layer" className="pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-10">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Philosophy ("Pure by Origin") + "What's inside" botanicals */}
        <BrandStory />

        {/* 3. Our Process ("From Leaf to Cup" video section) */}
        <FromLeafToCup id="process" />

        {/* 4. Collection (9 blends) */}
        <ProductStack />

        {/* 5. Why Origin Pure (4 benefit cards) */}
        <WhyOriginPure />

        {/* 6. The Ritual, then How to Brew */}
        <RitualSection />
        <HowToBrewSection />

        {/* 7. Reviews */}
        <ReviewsCarousel />

        {/* 8. Our Story (Foxgle story) */}
        <StorySection />

        {/* 9 & 10. Single combined Amazon CTA section + Footer */}
        <FinalCTAFooter />
      </div>
    </main>
  );
}

