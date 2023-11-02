// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NuxtBoost",
      meta: [{ name: "description", content: "Everything about NuxtBoost" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/tailwind-light/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css"
  ],
  plugins: [
    "~/plugins/directives.client.ts",
    "~/plugins/vue-tel-input.ts",
    "~/plugins/primevue.ts"
  ],
  build: {
    transpile: ["primevue", "@vuepic/vue-datepicker"]
  },
  imports: {
    dirs: ["stores"]
  },
  /**
   * Environment variables
   */
  runtimeConfig: {
    public: {
      baseURL: ""
    }
  },
  /**
   * Modules configuration
   */
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@tailvue/nuxt",
    "@vee-validate/nuxt",
    "dayjs-nuxt",
    "vue3-carousel-nuxt",
    "@nuxt/devtools"
  ],
  /**
   * Pinia configuration
   */
  pinia: {
    storesDirs: ["./stores/**"]
    // autoImports: ["defineStore", "acceptHMRUpdate"]
  },
  /**
   * Internalization configuration
   */
  i18n: {
    detectBrowserLanguage: false,
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English (US)",
        file: "en-US.json"
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Español (ES)",
        file: "es-ES.json"
      }
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts"
  },
  /**
   * VeeValidate Configuration
   */
  veeValidate: {
    autoImports: true
  },
  /**
   * Carousel Configuration
   */
  carousel: {
    prefix: "Nuxt"
  },
  /**
   * Dayjs Configuration
   */
  dayjs: {
    locales: ["en", "fr"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "America/New_York"
  }
});
