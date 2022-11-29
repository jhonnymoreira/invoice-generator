import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import process from 'node:process';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const { PORT } = process.env;

export default defineConfig({
  integrations: [tailwind(), react(), compress()],
  output: 'static',
  server: {
    port: Number(PORT) || 3000,
  },
});
