import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://runlab.fit',
  output: 'static',
  integrations: [sitemap()],
});
