import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Automatically detect subpath for GitHub Pages if deployed to user.github.io/repo-name
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://duyverse.github.io';

export default defineConfig({
  site: site,
  base: base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
