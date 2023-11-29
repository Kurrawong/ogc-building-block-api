// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/ol.js', ssr: false }
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      DATASET_LIST_URL: process.env.DATASET_LIST_URL,
      DATASET_OBJECT_URL: process.env.DATASET_OBJECT_URL            
    },
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
    vendor: ['ol'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
