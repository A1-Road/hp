/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://a-oneroad.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml", "/admin/*", "/api/*", "/_next/*", "/static/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/*", "/api/*", "/_next/*", "/static/*"],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
    ],
    additionalSitemaps: ["https://a-oneroad.com/server-sitemap.xml"],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : config.priority,
      lastmod: new Date().toISOString(), // ← 常に付与しても良い
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    return [
      { loc: "/" },
      { loc: "/about-us" },
      { loc: "/case" },
      { loc: "/media-and-events" },
      { loc: "/contact" },
      // 必要に応じて追加
    ];
  },
};
