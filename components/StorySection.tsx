import Image from "next/image";

const principles = [
  { label: "REAL BOTANICALS", description: "No artificial flavouring.", icon: "leaf" },
  { label: "THOUGHTFULLY SOURCED", description: "From trusted farms.", icon: "sprout" },
  { label: "BIODEGRADABLE BAGS", description: "For a fuller infusion.", icon: "bag" },
  { label: "CLEAN, BALANCED TASTE", description: "Just nature, nothing else.", icon: "cup" },
];

function LeafIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true"><path d="M19.5 4.5C13 4.8 7.7 7 6 11.1c-1.3 3.2.5 6.6 3.9 6.7 4.4.1 7.4-4.4 9.6-13.3Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 20c2.1-4.5 5.8-7.3 11.2-9.2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" /></svg>;
}

function SproutIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true"><path d="M12 20V9M12 13C8 13 6 10.6 6 7c3.8 0 6 2 6 6ZM12 10c.3-3.4 2.5-5.4 6-5.4 0 3.8-2.1 5.8-6 5.8Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true"><path d="M7 8h10l1 12H6L7 8Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" /><path d="M9 8V6a3 3 0 0 1 6 0v2M9 12h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" /></svg>;
}

function CupIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true"><path d="M5 9h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" /><path d="M17 11h2a2 2 0 0 1 0 4h-2M8 5c0 1 1 1 1 2M12 4c0 1 1 1 1 2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" /></svg>;
}

function PrincipleIcon({ type }: { type: string }) {
  if (type === "sprout") return <SproutIcon className="h-5 w-5" />;
  if (type === "bag") return <BagIcon className="h-5 w-5" />;
  if (type === "cup") return <CupIcon className="h-5 w-5" />;
  return <LeafIcon className="h-5 w-5" />;
}

export default function StorySection() {
  return (
    <section id="story" className="bg-[#FAF6F0] pt-20 pb-16 text-[#27231F] lg:pt-28 lg:pb-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-20 lg:px-10">
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5652E]">OUR STORY</p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#27231F]">
              From a Simple Idea to a Better Cup
            </h2>

            <blockquote className="mt-8 max-w-xl border-l border-[#B5652E] pl-5 font-serif text-xl sm:text-2xl italic leading-relaxed text-[#B5652E]">
              Origin Pure was created with a simple belief: tea should be as honest as the ingredients that go into it.
            </blockquote>

            <div className="mt-8 max-w-2xl space-y-4 font-sans text-sm sm:text-base leading-[1.8] sm:leading-[1.75] text-[#4F4943]">
              <p>When our team at Foxgle began exploring herbal infusions, we noticed a common problem. Many products looked natural on the outside, but were filled with artificial flavouring, unnecessary additives, or low-quality ingredients that masked the true character of the herbs.</p>
              <p className="font-semibold text-[#27231F]">We wanted to do things differently.</p>
              <p>Instead of focusing on endless varieties, we focused on creating a small collection of carefully crafted blends made from real botanicals, thoughtfully sourced ingredients, and biodegradable pyramid bags designed to give the herbs enough space to fully infuse.</p>
              <p>Every blend was developed with one goal in mind — delivering a clean, balanced cup that tastes natural, feels comforting, and fits easily into everyday life.</p>
              <p>Today, Origin Pure continues to grow from the same philosophy: keep it simple, keep it honest, and never compromise on quality.</p>
              <p>What started as an idea inside Foxgle has become a commitment to creating herbal infusions that people can genuinely trust and enjoy.</p>
            </div>
          </div>

          <div className="mt-8 border-t border-[#B5652E]/20 pt-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B5652E]/25 bg-[#F4ECE1] text-[#B5652E] shadow-sm">
                <LeafIcon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold tracking-tight leading-snug text-[#27231F]">Origin Pure by Foxgle</p>
                <p className="mt-0.5 flex items-center gap-1.5 font-sans text-xs text-[#B5652E]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" aria-hidden="true">
                    <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Image with balanced height and subtle caption trust element */}
        <div className="flex flex-col justify-between gap-3.5 h-full">
          <div className="relative min-h-[440px] sm:min-h-[500px] flex-1 overflow-hidden rounded-[24px] bg-[#3B2A20] shadow-[0_20px_60px_rgba(65,45,30,0.16)]">
            <Image
              src="/images/about.png"
              alt="Origin Pure freshly brewed herbal tea cup"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover object-center"
            />
            {/* Subtle vignette for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>

          {/* Subtle caption/trust element below the image */}
          <div className="flex items-center justify-between rounded-xl border border-[#B5652E]/15 bg-[#F4ECE1]/80 px-4 py-2.5 text-xs text-[#4F4943]">
            <div className="flex items-center gap-2 font-medium text-[#27231F]">
              <LeafIcon className="h-3.5 w-3.5 text-[#B5652E]" />
              <span className="font-sans text-[12px] tracking-wide">Pure Whole-Leaf Botanicals</span>
            </div>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#B5652E]">
              Crafted at Origin
            </span>
          </div>
        </div>
      </div>

      {/* Principles row */}
      <div className="mx-auto mt-16 max-w-[1200px] border-t border-[#B5652E]/18 px-6 pt-12 pb-2 lg:mt-20 lg:px-10 lg:pt-14 lg:pb-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {principles.map((principle) => (
            <div key={principle.label} className="flex items-center gap-3.5 sm:gap-4">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-[#B5652E]/25 bg-[#F4ECE1] text-[#1B4332] shadow-[0_2px_8px_rgba(65,45,30,0.06)]">
                <PrincipleIcon type={principle.icon} />
              </div>
              <div className="min-w-0">
                <p className="font-sans text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#27231F] leading-tight">
                  {principle.label}
                </p>
                <p className="mt-1 font-sans text-xs sm:text-[13px] leading-snug text-[#4F4943]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
