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
      title: "Harsh Patel - FOSS Enthusiast • Developer • FreeLancer",
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
        { rel: "icon", type: "image/x-icon", href: "/harshnpatel.jpeg" },
        { rel: "canonical", href: "https://harshnpatel.in" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Harsh Patel - Blog RSS Feed",
          href: "/rss.xml",
        },
        {
          rel: "author",
          href: "/humans.txt",
        },
        {
          rel: "me",
          href: "https://github.com/harshpatel5940",
        },
        {
          rel: "me",
          href: "https://twitter.com/harshpatel5940",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
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
      const { readdir, readFile } = await import("fs/promises");
      const { join } = await import("path");

      const baseUrl = "https://harshnpatel.in";
      const publicDir = resolve(process.cwd(), "app/public");
      const contentDir = resolve(process.cwd(), "content/blog");

      // Read blog posts for RSS and sitemap
      let blogPosts = [];
      try {
        const files = await readdir(contentDir);
        const markdownFiles = files.filter((file) => file.endsWith(".md"));

        for (const file of markdownFiles) {
          const filePath = join(contentDir, file);
          const content = await readFile(filePath, "utf-8");

          // Extract frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title: ["'](.+?)["']/);
            const descMatch = frontmatter.match(/description: ["'](.+?)["']/);
            const dateMatch = frontmatter.match(/date: ["'](.+?)["']/);
            const publishedMatch = frontmatter.match(/published: (true|false)/);

            if (
              titleMatch &&
              descMatch &&
              dateMatch &&
              (!publishedMatch || publishedMatch[1] === "true")
            ) {
              const slug = titleMatch[1]
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

              blogPosts.push({
                title: titleMatch[1],
                description: descMatch[1],
                date: dateMatch[1],
                slug: slug,
                url: `${baseUrl}/blog/${slug}`,
              });
            }
          }
        }

        // Sort by date (newest first)
        blogPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
      } catch (error) {
        console.warn(
          "⚠️ Could not read blog posts for RSS/sitemap generation:",
          error instanceof Error ? error.message : String(error),
        );
      }

      // Generate RSS with blog posts
      const rssItems = blogPosts
        .map(
          (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>hi@harshnpatel.in (Harsh Patel)</author>
    </item>`,
        )
        .join("");

      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Harsh Patel - Blog]]></title>
    <description><![CDATA[Software developer and tech enthusiast specializing in full-stack development, cloud computing, and open-source projects.]]></description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>hi@harshnpatel.in (Harsh Patel)</managingEditor>
    <webMaster>hi@harshnpatel.in (Harsh Patel)</webMaster>
    <generator>Nuxt.js Static Site Generator</generator>
    <category>Technology</category>
    <category>Software Development</category>
    <category>Programming</category>
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title><![CDATA[Harsh Patel - Blog]]></title>
      <link>${baseUrl}/blog</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <ttl>1440</ttl>${rssItems}
  </channel>
</rss>`;

      const currentDate = new Date().toISOString().split("T")[0];

      // Base URLs for sitemap
      const baseUrls = [
        {
          loc: baseUrl,
          lastmod: currentDate,
          changefreq: "weekly",
          priority: "1.0",
        },
        {
          loc: `${baseUrl}/blog`,
          lastmod: currentDate,
          changefreq: "daily",
          priority: "0.9",
        },
        {
          loc: `${baseUrl}/about`,
          lastmod: currentDate,
          changefreq: "monthly",
          priority: "0.7",
        },
      ];

      // Add blog post URLs to sitemap
      const blogUrls = blogPosts.map((post) => ({
        loc: post.url,
        lastmod: new Date(post.date).toISOString().split("T")[0],
        changefreq: "monthly",
        priority: "0.8",
      }));

      const allUrls = [...baseUrls, ...blogUrls];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
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
        console.log(
          `✅ Generated RSS feed with ${blogPosts.length} posts at /rss.xml`,
        );

        writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap, "utf-8");
        console.log(
          `✅ Generated sitemap with ${allUrls.length} URLs at /sitemap.xml`,
        );
      } catch (error) {
        console.error("❌ Error generating static files:", error);
      }
    },
  },
});
