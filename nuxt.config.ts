// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,
  pages: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/image'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      // TypeScript config here
    }
  },
  css: [
    '~/assets/css/global.css'
  ],
  routeRules: {
    '/proxy/static/**': { proxy: 'https://static.asagi.cc/resources/genshin-senior-high/**' },
  },
  image: {
    dir: '.'
  }
})
