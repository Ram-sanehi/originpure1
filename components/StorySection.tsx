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

function SproutIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true"><path d="M12 20V9M12 13C8 13 6 10.6 6 7c3.8 0 6 2 6 6ZM12 10c.3-3.4 2.5-5.4 6-5.4 0 3.8-2.1 5.8-6 5.8Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BagIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true"><path d="M7 8h10l1 12H6L7 8Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" /><path d="M9 8V6a3 3 0 0 1 6 0v2M9 12h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" /></svg>;
}

function CupIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true"><path d="M5 9h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" /><path d="M17 11h2a2 2 0 0 1 0 4h-2M8 5c0 1 1 1 1 2M12 4c0 1 1 1 1 2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" /></svg>;
}

function PrincipleIcon({ type }: { type: string }) {
  if (type === "sprout") return <SproutIcon />;
  if (type === "bag") return <BagIcon />;
  if (type === "cup") return <CupIcon />;
  return <LeafIcon />;
}

export default function StorySection() {
  return (
    <section id="story" className="bg-[#FAF6F0] py-20 text-[#27231F] lg:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B5652E]">OUR STORY</p>
          <h2 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#27231F] md:text-6xl">
            From a Simple Idea to a Better Cup
          </h2>

          <blockquote className="mt-8 max-w-xl border-l border-[#B5652E] pl-5 font-serif text-xl italic leading-8 text-[#B5652E] md:text-2xl">
            Origin Pure was created with a simple belief: tea should be as honest as the ingredients that go into it.
          </blockquote>

          <div className="mt-9 max-w-2xl space-y-5 text-[15px] leading-7 text-[#4F4943] md:text-base">
            <p>When our team at Foxgle began exploring herbal infusions, we noticed a common problem. Many products looked natural on the outside, but were filled with artificial flavouring, unnecessary additives, or low-quality ingredients that masked the true character of the herbs.</p>
            <p className="font-semibold text-[#27231F]">We wanted to do things differently.</p>
            <p>Instead of focusing on endless varieties, we focused on creating a small collection of carefully crafted blends made from real botanicals, thoughtfully sourced ingredients, and biodegradable pyramid bags designed to give the herbs enough space to fully infuse.</p>
            <p>Every blend was developed with one goal in mind — delivering a clean, balanced cup that tastes natural, feels comforting, and fits easily into everyday life.</p>
            <p>Today, Origin Pure continues to grow from the same philosophy: keep it simple, keep it honest, and never compromise on quality.</p>
            <p>What started as an idea inside Foxgle has become a commitment to creating herbal infusions that people can genuinely trust and enjoy.</p>
          </div>

          <div className="mt-10 border-t border-[#B5652E]/25 pt-6">
            <p className="font-serif text-xl font-semibold text-[#27231F]">Origin Pure by Foxgle</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#B5652E]"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" /></svg>Coimbatore, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Right column: Just the cup image with Origin Pure logo */}
        <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden rounded-[24px] bg-[#3B2A20] shadow-[0_24px_70px_rgba(65,45,30,0.18)]">
          <Image
            src="/images/about.png"
            alt="Origin Pure freshly brewed herbal tea cup"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-full w-full object-cover object-center"
            priority
          />
          {/* Subtle vignette for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      </div>

      {/* Principles row */}
      <div className="mx-auto mt-14 max-w-[1200px] border-t border-[#B5652E]/15 px-6 pt-10 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle.label} className="flex flex-col items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B4332]/10 text-[#1B4332]">
                <PrincipleIcon type={principle.icon} />
              </div>
              <p className="mt-3 text-xs font-bold tracking-[0.14em] text-[#27231F] uppercase">{principle.label}</p>
              <p className="mt-1 text-xs leading-5 text-[#4F4943]">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
