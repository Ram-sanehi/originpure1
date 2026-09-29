import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FromLeafToCup from "@/components/FromLeafToCup";
import StorySection from "@/components/StorySection";
import FinalCTAFooter from "@/components/FinalCTAFooter";

export const metadata: Metadata = {
  title: "Our Story & Process – Origin Pure",
  description:
    "Discover the Origin Pure story. Pure whole-leaf botanicals sourced with care, crafted with precision, and delivered cleanly from leaf to cup.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1B4332]">
      {/* Brand Navigation Header */}
      <header className="border-b border-[#1B4332]/10 bg-[#0B241B] px-6 py-8 text-[#FFF8E7] md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Link
            href="/"
            className="group inline-flex items-center transition-opacity hover:opacity-90 shrink-0"
            aria-label="Origin Pure - Wellness & Natural"
          >
            <div className="relative h-14 w-14 xs:h-16 xs:w-16 sm:h-[72px] sm:w-[72px] shrink-0 overflow-hidden rounded-xl border-[1.5px] border-[#C9A65E]/75 shadow-sm bg-[#FAF7F2] p-1.5">
              <Image
                src="/prdimg/origin-pure-logo.png"
                alt="Origin Pure - Wellness & Natural"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/shop"
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF8E7]/80 hover:text-[#F9E7B2] transition-colors"
            >
              Shop Blends
            </Link>
            <Link
              href="/"
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F9E7B2]"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Our Story section containing text about sourcing and quality */}
      <StorySection />

      {/* Reusable "From Leaf to Cup" brand video process section */}
      <FromLeafToCup />

      {/* Footer */}
      <FinalCTAFooter />
    </main>
  );
}
