/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io", "img.youtube.com"],
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
