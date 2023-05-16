import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
  typescript: {
    shim: false,
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
