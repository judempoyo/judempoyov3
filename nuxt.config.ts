// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],

  // SSG Configuration
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false 
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    },
    buildAssetsDir: 'assets',
    baseURL: '/jude/',
  },

  i18n: {
    baseUrl: 'https://jude.jkantech.net/jude', 
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English', language: 'en-US' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français', language: 'fr-FR' }
    ],
    experimental: {
      strictSeo: true
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }

})