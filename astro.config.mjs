// @ts-check
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  env: {
    schema: {
      SHOW_TEXT: envField.boolean({
        context: 'server',
        access: 'public',
        default: true
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: 'server',
        access: 'public'
      })
    }
  },

  adapter: vercel()
});