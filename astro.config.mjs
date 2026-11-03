// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import migratedPages from './src/data/pages.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmeticimplantdentistrywp.com',
  redirects: {
    '/contact-us/': '/contact/',
    '/services/emergency-dentistry/': '/services/emergency-dentist/',
    '/services/clear-braces/': '/services/braces/',
    '/services/emergency-dentistry-2/': '/services/emergency-dentistry-ppc/',
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Astro dev does not run Cloudflare Pages Functions. Read the existing
      // public endpoint locally; production still uses its same-origin function.
      proxy: {
        '/api/google-reviews': {
          target: 'https://cidwp-new.pages.dev',
          changeOrigin: true,
          secure: true,
        },
      },
    },
  },

  integrations: [mdx(), sitemap({
    filter: (url) => {
      const path = new URL(url).pathname;
      if (['/404/', '/design-review/', '/migration-review/', '/contact-us/', '/services/emergency-dentistry/', '/services/clear-braces/', '/services/emergency-dentistry-2/'].includes(path)) return false;
      return !migratedPages.some(page => page.path === path && page.robots.includes('noindex'));
    },
  })]
});
