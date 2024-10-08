// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s | NuxtBoost",
      title: "NuxtBoost",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Boost your productivity with NuxtBoost - work smarter, not harder."
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://nuxt-boost.vercel.app"
        },
        {
          property: "og:title",
          content:
            "NuxtBoost | Boost your productivity with NuxtBoost - work smarter, not harder."
        },
        {
          property: "og:description",
          content:
            "Boost your productivity with NuxtBoost - work smarter, not harder."
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/bladencove/image/upload/v1700328807/RC/nb-light.svg"
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          property: "twitter:url",
          content: "https://nuxt-boost.vercel.app"
        },
        {
          property: "twitter:title",
          content:
            "NuxtBoost | Boost your productivity with NuxtBoost - work smarter, not harder."
        },
        {
          property: "twitter:description",
          content:
            "Boost your productivity with NuxtBoost - work smarter, not harder."
        },
        {
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/bladencove/image/upload/v1700328807/RC/nb-light.svg"
        },
        { name: "theme-color", content: "#1e1e2e" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        }
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }]
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
    transpile: ["primevue"]
  },
  imports: {
    dirs: ["store"]
  },
  /**
   * Environment variables
   */
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    public: {
      baseURL: process.env.API_BASE_URL
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
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth"
  ],
  /**
   * Pinia configuration
   */
  pinia: {
    storesDirs: ["./store/**"]
    // autoImports: ["defineStore", "acceptHMRUpdate"]
  },
  /**
   * Internalization configuration
   */
  i18n: {
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
  },
  /**
   * Nuxt Color Mode Configuration
   */
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light"
  },
  /**
   * External Image Provider Configuration
   */
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/bladencove/image/upload/RC"
    }
  },
  /**
   * nuxt-auth configuration
   */
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs"
    }
  }
});
