/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // generateEtags removed: false was preventing browsers from sending
  // If-None-Match conditional requests, forcing full re-downloads on repeat visits.
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days cache for optimized assets
  },
  async headers() {
    return [
      {
        // Static assets: images, fonts, video — 1 year immutable
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;


