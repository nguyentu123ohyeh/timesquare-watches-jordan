import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({

  base: "/timesquare-watches-jordan/",

  tanstackStart: {
    prerender: {
      enabled: true,
    },
  },

});