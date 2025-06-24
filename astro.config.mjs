import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import {defineConfig} from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://harshnpatel.in',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel()
});