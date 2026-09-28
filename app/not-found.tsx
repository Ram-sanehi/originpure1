import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFD] px-6 py-20 text-center text-[#1B4332]">
      <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-full border-[1.5px] border-[#C9A65E]/70 shadow-md bg-[#FAF7F2] p-1">
        <Image
          src="/prdimg/origin-pure-logo.png"
          alt="Origin Pure"
          fill
          sizes="64px"
          className="object-contain p-0.5"
        />
      </div>

      <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#B88D27]">
        404 — Blend Not Found
      </p>

      <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1B4332]">
        This page steeped away.
      </h1>

      <p className="mx-auto mt-4 max-w-md font-sans text-sm sm:text-base leading-relaxed text-[#1B4332]/70">
        The botanical blend or ritual page you are searching for is no longer here. Return home to discover our whole-leaf infusions.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/shop"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#1B4332] px-6 py-3 font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#FDFDFD] shadow-sm transition-all duration-200 hover:bg-[#122E22] hover:shadow-md"
        >
          Explore All Blends
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#1B4332]/25 bg-white/70 px-6 py-3 font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1B4332] transition-colors duration-200 hover:border-[#1B4332]/60 hover:bg-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
