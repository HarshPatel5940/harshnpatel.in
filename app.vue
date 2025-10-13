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
        {
            rel: "canonical",
            href: "https://harshnpatel.in",
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
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: personal.personal.name,
                url: "https://harshnpatel.in",
                image: "https://harshnpatel.in/harshnpatel.jpeg",
                email: personal.personal.email,
                jobTitle: "SDE",
                description: personal.seo.description,
                alumniOf: {
                    "@type": "Organization",
                    name: "SRM Institute of Science and Technology",
                },
                sameAs: [
                    personal.links.github,
                    personal.links.linkedin,
                    personal.links.twitter,
                    personal.links.fiverr,
                ],
                knowsAbout: [
                    "Full Stack Development",
                    "Cloud Computing",
                    "TypeScript",
                    "Go",
                    "Open Source Software",
                ],
            }),
        },
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Harsh Nikul Patel Portfolio",
                url: "https://harshnpatel.in",
                description: personal.seo.description,
                author: {
                    "@type": "Person",
                    name: personal.personal.name,
                },
            }),
        },
    ],
});
</script>
