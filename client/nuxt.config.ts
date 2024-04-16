// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-typed-router",
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-orm/nuxt",
    "nuxt-quasar-ui",
  ],
  ssr: false,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        port: 3001,
      },
    },
  },
});
