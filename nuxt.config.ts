export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  srcDir: "app",
  serverDir: "server",

  css: ["./app/app.css"],

  unocss: {
    nuxtLayers: true,
  },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],

  app: {
    head: {
      title: "Harsh Patel - Student • Developer • FreeLancer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Software developer and tech enthusiast specializing in full-stack development, cloud computing, and open-source projects. Currently studying BTech CSE at SRM University.",
        },
        {
          name: "keywords",
          content:
            "Harsh Patel, Software Developer, Full Stack Developer, Student, Freelancer, TypeScript, Go, Node.js, Cloud Computing",
        },
        { name: "author", content: "Harsh Patel" },
        {
          property: "og:title",
          content: "Harsh Patel - Student • Developer • FreeLancer",
        },
        {
          property: "og:description",
          content:
            "Software developer and tech enthusiast specializing in full-stack development, cloud computing, and open-source projects.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://harshnpatel.in" },
        {
          property: "og:image",
          content: "https://harshnpatel.in/og-image.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@harshpatel5940" },
        { name: "theme-color", content: "#0ea5e9" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://harshnpatel.in" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Harsh Patel - Blog RSS Feed",
          href: "/rss.xml",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://harshnpatel.in",
      siteName: "Harsh Patel",
      siteDescription:
        "Software developer and tech enthusiast specializing in full-stack development, cloud computing, and open-source projects.",
      language: "en",
    },
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
    publicAssets: [
      {
        baseURL: "/",
        dir: "public",
      },
    ],
    routeRules: {
      "/blogs": { redirect: "/blog" },
      "/blogs/**": { redirect: "/blog/**" },
    },
  },

  hooks: {
    "nitro:build:before": async () => {
      const { writeFileSync } = await import("fs");
      const { resolve } = await import("path");

      const baseUrl = "https://harshnpatel.in";
      const publicDir = resolve(process.cwd(), "app/public");

      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Harsh Patel - Blog]]></title>
    <description><![CDATA[Software developer and tech enthusiast specializing in full-stack development, cloud computing, and open-source projects.]]></description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>hi@harshnpatel.in (Harsh Patel)</managingEditor>
    <webMaster>hi@harshnpatel.in (Harsh Patel)</webMaster>
    <generator>Nuxt.js Static Site Generator</generator>
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title><![CDATA[Harsh Patel - Blog]]></title>
      <link>${baseUrl}</link>
    </image>
  </channel>
</rss>`;

      const currentDate = new Date().toISOString().split("T")[0];
      const urls = [
        {
          loc: baseUrl,
          lastmod: currentDate,
          changefreq: "weekly",
          priority: "1.0",
        },
        {
          loc: `${baseUrl}/blog`,
          lastmod: currentDate,
          changefreq: "weekly",
          priority: "0.9",
        },
        {
          loc: `${baseUrl}/rss.xml`,
          lastmod: currentDate,
          changefreq: "weekly",
          priority: "0.8",
        },
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

      try {
        writeFileSync(resolve(publicDir, "rss.xml"), rss, "utf-8");
        console.log("✅ Generated RSS feed at /rss.xml");

        writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap, "utf-8");
        console.log("✅ Generated sitemap at /sitemap.xml");
      } catch (error) {
        console.error("❌ Error generating static files:", error);
      }
    },
  },
});
