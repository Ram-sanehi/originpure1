import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Shared Container component enforcing max-width 1200px and consistent horizontal padding.
 * Ensures all left and right edges align across every section of the page.
 */
export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  background?: "cream" | "green-950" | "green-800" | "white" | "transparent";
}

/**
 * Shared Section wrapper applying consistent vertical section padding:
 * 96px desktop (py-24), 64px mobile (py-16).
 */
export function Section({
  children,
  className = "",
  as: Component = "section",
  background = "cream",
  ...props
}: SectionProps) {
  const bgClasses = {
    cream: "bg-cream text-ink",
    "green-950": "bg-green-950 text-cream",
    "green-800": "bg-green-800 text-cream",
    white: "bg-white text-ink",
    transparent: "bg-transparent",
  }[background];

  return (
    <Component
      className={`py-16 md:py-24 ${bgClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
