"use client";

import React from "react";
import Image from "next/image";
import { AMAZON_URL } from "@/lib/amazon";

function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function TruckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M14 8h4.5a2 2 0 0 1 1.6.8L23 13v4a1 1 0 0 1-1 1h-2" />
      <circle cx="7.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function UndoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <polyline points="3 3 3 8 8 8" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function HeadsetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function CreditCardIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

interface AmazonTrustFeature {
  icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
}

const trustFeatures: AmazonTrustFeature[] = [
  {
    icon: ShieldCheckIcon,
    title: "Secure Payments",
  },
  {
    icon: TruckIcon,
    title: "Fast Delivery",
  },
  {
    icon: UndoIcon,
    title: "Easy Returns",
  },
  {
    icon: CheckCircleIcon,
    title: "Verified Customer Reviews",
  },
  {
    icon: HeadsetIcon,
    title: "Amazon Customer Support",
  },
  {
    icon: CreditCardIcon,
    title: "Trusted Checkout Experience",
  },
];

export default function PreferAmazon() {
  return (
    <section
      aria-labelledby="prefer-amazon-heading"
      className="border-t border-[#E8DDD3] bg-[#F7EEE6] px-6 py-16 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* LEFT COLUMN: Text Content & CTA */}
          <div className="max-w-xl text-left">
            {/* Eyebrow Label */}
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#B5651D]">
              A Familiar Way to Shop
            </p>

            {/* Heading */}
            <h2
              id="prefer-amazon-heading"
              className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-[#231F1C] sm:text-4xl md:text-[36px]"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
              }}
            >
              Prefer Buying
              <br />
              Through Amazon?
            </h2>

            {/* Body Text */}
            <p
              className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-[#6E665D]"
              style={{
                fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
              }}
            >
              Many customers feel more comfortable purchasing from Amazon when trying a new brand for the first time. We make that choice easy.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop on Amazon"
                className="block w-[180px] shrink-0 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4A017]/70 sm:w-[210px]"
              >
                <Image
                  src="/prdimg/img.png"
                  alt="Shop on Amazon"
                  width={2163}
                  height={727}
                  sizes="(max-width: 640px) 180px, 210px"
                  className="h-auto w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
                />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3-column x 2-row grid of small feature cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {trustFeatures.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex flex-col justify-between rounded-xl border border-[#EADBCE]/80 bg-white p-5 text-left shadow-[0_2px_8px_rgba(40,30,20,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
              >
                {/* Outline Icon */}
                <div className="text-[#231F1C]">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Card Title */}
                <h3
                  className="mt-4 font-sans text-[14px] font-bold leading-snug text-[#231F1C]"
                  style={{
                    fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
                  }}
                >
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
