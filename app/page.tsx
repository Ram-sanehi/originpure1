import HeroSection from "@/components/HeroSection";
import RitualSection from "@/components/RitualSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToBrewSection from "@/components/HowToBrewSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import WhyOriginPure from "@/components/WhyOriginPure";
import StorySection from "@/components/StorySection";
import FinalCTAFooter from "@/components/FinalCTAFooter";
import BrandStory from "@/components/BrandStory";
import ProductStack from "@/components/ProductStack";
import ProductFeatures from "@/components/ProductFeatures";
import OurProcess from "@/components/OurProcess";
import PreferAmazon from "@/components/PreferAmazon";
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
        <HeroSection />
        <BrandStory />
        <ProductStack />
        <ProductFeatures />
        <RitualSection />
        <BenefitsSection />
        <HowToBrewSection />
        <ReviewsCarousel />
        <WhyOriginPure />
        <StorySection />
        <OurProcess />
        <PreferAmazon />
        <FinalCTAFooter />
      </div>
    </main>
  );
}

