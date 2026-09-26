import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-950": "var(--green-950)",
        "green-800": "var(--green-800)",
        cream: "var(--cream)",
        "cream-deep": "var(--cream-deep)",
        gold: "var(--gold)",
        "gold-text": "var(--gold-text)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        black: "var(--black)",
        white: "var(--white)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        heading: "-0.02em",
        eyebrow: "0.16em",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
