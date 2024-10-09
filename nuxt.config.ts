export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
      // The private keys which are only available server-side
      // Keys within public are also exposed client-side
      public: {
          apiUrl: 'http://localhost:3001/'
      }
  },
  colorMode: {
    preference: 'system'
  },

  modules: ['@nuxt/ui', '@nuxt/icon', '@pinia/nuxt']
})