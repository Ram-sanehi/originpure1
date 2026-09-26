import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Boil",
    description: "Heat fresh water to 80-85°C",
    image: "/images/brew_steps/step_1_boil.webp",
    alt: "Boiling water in a minimalist kettle with rising steam",
  },
  {
    number: "02",
    title: "Steep",
    description: "Place tea bag in a cup, pour hot water, steep 3-5 minutes",
    image: "/images/brew_steps/step_2_steep.webp",
    alt: "Biodegradable tea bag steeping in glass cup with swirling golden infusion",
  },
  {
    number: "03",
    title: "Enjoy",
    description: "Remove the tea bag, relax and enjoy your refreshing cup",
    image: "/images/brew_steps/step_3_enjoy.webp",
    alt: "Hands holding and enjoying a warm cup of herbal tea",
  },
  {
    number: "04",
    title: "Best Enjoyed",
    description: "Hot or iced, enjoy it your way, any time of day",
    image: "/images/brew_steps/step_4_best_enjoyed.webp",
    alt: "Sunlit glass cup of tea on a coaster evoking hot or iced any time of day",
  },
];

export default function HowToBrewSection() {
  return (
    <section className="relative overflow-hidden bg-[#1B4332] py-12 text-[#FFF8E7] lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF8E7]/70">Brew guide</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#FFF8E7]">How to Brew</h2>
          </div>
          <p className="hidden font-sans text-xs text-[#FFF8E7]/60 sm:block">A simple four-step ritual</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6 items-stretch">
            {steps.map(({ number, title, description, image, alt }) => (
              <article
                key={number}
                className="brew-step group relative z-10 flex h-full flex-col overflow-hidden rounded-xl border border-[#1B4332]/10 bg-white text-[#1B4332] shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)] sm:rounded-[1.2rem]"
              >
                {/* Full-width rectangular photo filling the top portion (roughly 40-50% of card) */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#FAF6EE]">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content below the image with consistent padding and equal card height */}
                <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                  <div>
                    <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1B4332]/50">
                      {number}
                    </div>
                    <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-medium leading-tight text-[#1B4332]">
                      {title}
                    </h3>
                    <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#1B4332]/70">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
