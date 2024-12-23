// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@nuxtjs/robots", { configPath: "~/config/robots.config" }],
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
  ],
  app: {
    head: {
      link: [],
    },
  },
  googleFonts: {
    families: {
      "Open Sans": "300..800",
    },
  },
  css: ["/styles/main.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
