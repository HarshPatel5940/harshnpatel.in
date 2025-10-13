<template>
    <div class="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import personal from "./content/personal.json";

// SEO
useHead({
    title: personal.seo.title,
    meta: [
        {
            name: "description",
            content: personal.seo.description,
        },
        {
            name: "keywords",
            content: personal.seo.keywords,
        },
        {
            property: "og:title",
            content: personal.seo.title,
        },
        {
            property: "og:description",
            content: personal.seo.description,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://harshnpatel.in" },
        {
            property: "og:image",
            content: "https://harshnpatel.in/harshnpatel.jpeg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@harshpatel5940" },
        { name: "twitter:title", content: personal.seo.title },
        { name: "twitter:description", content: personal.seo.description },
        {
            name: "twitter:image",
            content: "https://harshnpatel.in/harshnpatel.jpeg",
        },
    ],
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/harshnpatel.jpeg",
        },
        {
            rel: "shortcut icon",
            type: "image/jpeg",
            href: "/harshnpatel.jpeg",
        },
        {
            rel: "apple-touch-icon",
            href: "/harshnpatel.jpeg",
        },
    ],
    script: [
        {
            innerHTML: `
        (function() {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

          if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
            type: "text/javascript",
        },
    ],
});
</script>
