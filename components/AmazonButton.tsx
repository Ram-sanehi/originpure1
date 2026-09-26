import React from "react";
import { siteConfig } from "@/lib/site-config";

export interface AmazonButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "gold" | "black";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

/**
 * Official Amazon Smile / Mark SVG following Amazon brand guidelines:
 * - Proper proportions preserved without distortion
 * - Distinct clear space around mark
 * - High contrast against button background
 */
function AmazonSmileIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M15.42 13.96c-.39-.49-1.02-.75-1.74-.71-.22.01-.35.17-.32.36.19.98 1.17 1.71 2.27 1.71.35 0 .71-.08 1.04-.23.33-.14.33-.42.08-.62-.4-.3-1.01-.44-1.33-.51zm-1.89-7.85c-3.1 0-5.7 1.8-6.4 4.5-.1.4.2.7.6.7h1.4c.3 0 .6-.2.7-.5.4-1.3 1.7-2.2 3.2-2.2 1.9 0 3.3 1.1 3.3 2.9v.7c-4.4.3-7.5 1.5-7.5 4.5 0 2.2 1.7 3.7 4.1 3.7 2 0 3.3-.8 4.1-2.1v1.6c0 .4.3.7.7.7h1.4c.4 0 .7-.3.7-.7v-8.8c0-3.3-2.5-4.8-5.8-4.8zm1.8 7.4c0 1.7-1.4 3-3.4 3-1.4 0-2.3-.8-2.3-1.9 0-1.5 1.6-2.2 4.1-2.4v.6c.9 0 1.6.2 1.6.7z" />
      <path d="M21.7 18.2c-.3-.4-1.4-.2-2.1.3-.8.6-1.9 1.1-3.1 1.4-3.5.9-7.2.2-10.4-1.6-.3-.2-.6-.1-.7.2l-.4.7c-.1.2 0 .5.3.7 3.7 2.2 8.1 3 12.3 2 1.4-.3 2.7-.9 3.8-1.7.6-.4.9-1 .8-1.5-.1-.2-.3-.1-.2-.1z" />
    </svg>
  );
}

/**
 * Shared AmazonButton component.
 * Ensures consistent "Buy on Amazon →" label, brand colors (gold or black),
 * and compliant Amazon logo usage across the entire site.
 */
export default function AmazonButton({
  variant = "gold",
  size = "md",
  href,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  "aria-label": ariaLabel = "Buy on Amazon",
  ...props
}: AmazonButtonProps) {
  const targetUrl = href || siteConfig.amazonUrl;

  const variantClasses = {
    gold: "bg-gold text-black hover:bg-[#b58824] shadow-[0_4px_14px_rgba(201,154,46,0.3)] active:bg-[#9e761d]",
    black:
      "bg-black text-white hover:bg-[#181818] ring-1 ring-white/15 hover:ring-white/30 shadow-[0_4px_14px_rgba(0,0,0,0.35)] active:bg-[#111111]",
  }[variant];

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  }[size];

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }[size];

  return (
    <a
      href={targetUrl}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      <AmazonSmileIcon className={`${iconSizes} shrink-0`} />
      <span>Buy on Amazon →</span>
    </a>
  );
}
