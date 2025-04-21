/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["enagntzfkzzwhduehadz.supabase.co"],
  },
  async redirects() {
    return [
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
