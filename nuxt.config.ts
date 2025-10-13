// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/devtools",
    "@nuxtjs/sitemap",
  ],

  site: {
    url: "https://harshnpatel.in",
    name: "Harsh N Patel | Portfolio",
  },

  sitemap: {
    urls: [
      {
        loc: "/",
        changefreq: "monthly",
        priority: 1.0,
      },
    ],
  },

  shadcn: {
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});