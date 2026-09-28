import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B4332",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://originpuretea.com"),
  title: "Origin Pure – Citrus Vitality Moringa Lemongrass Green Tea",
  description:
    "Origin Pure Citrus Vitality blends moringa, lemongrass, and green tea for a bright, uplifting ritual that supports daily wellness and sustained calm energy.",
  openGraph: {
    title: "Origin Pure – Citrus Vitality Moringa Lemongrass Green Tea",
    description:
      "A citrus-forward wellness tea with moringa, lemongrass, and green tea for a fresh, uplifting daily ritual.",
    url: "https://originpuretea.com",
    images: [
      {
        url: "/images/1.png",
        width: 640,
        height: 800,
        alt: "Origin Pure Citrus Vitality Moringa Lemongrass Green Tea",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/prdimg/logo-circular.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "robots": "index,follow",
    "og:type": "product",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* next/font/google automatically handles Google Fonts preconnect — no manual tags needed.
            Keeping only the Amazon preconnect which next/font does not manage. */}
        <link rel="preconnect" href="https://www.amazon.in" />
        <link rel="dns-prefetch" href="https://www.amazon.in" />
      </head>
      <body className="bg-cream text-ink antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
