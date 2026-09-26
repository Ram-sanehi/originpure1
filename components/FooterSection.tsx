import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="border-t border-[#1B4332]/10 bg-[#1B4332] text-[#FFF8E7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="flex items-center gap-3.5">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 shadow-sm shrink-0 bg-[#F7F7F7]">
            <Image
              src="/prdimg/logo.jpeg"
              alt="Origin Pure Logo"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-3xl tracking-tight">Origin Pure</p>
            <p className="mt-1 text-sm text-[#FFF8E7]/70">Slow-brewed wellness for the everyday ritual.</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-[#FFF8E7]/75">
          <a href="#blend" className="transition hover:text-[#D4A017]">Blends</a>
          <a href="#ritual" className="transition hover:text-[#D4A017]">Ritual</a>
          <a href="#story" className="transition hover:text-[#D4A017]">Story</a>
        </div>
      </div>
    </footer>
  );
}
