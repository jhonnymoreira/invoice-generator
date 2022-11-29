import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind(), react(), compress()],
  output: 'static',
});
