/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
  },
  images: {
    domains: ["images.microcms-assets.io", "img.youtube.com"],
  },
  // LLM向けの最適化設定
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...["/bpo", "/service/bpo", "/mold-storage", "/service/automotive"].map((source) => ({source, destination: "/service", permanent:true})),
      ...["/en/bpo", "/en/service/bpo", "/en/mold-storage", "/en/service/automotive"].map((source) => ({source, destination: "/en/service", permanent:true})),
      {
        source: "/works",
        destination: "/case",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/media-and-events",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/media-and-events",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admin/works",
        destination: "/admin/case",
        permanent: true,
      },
      {
        source: "/admin/news",
        destination: "/admin/media-and-events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
