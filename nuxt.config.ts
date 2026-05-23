// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxt/fonts'],

  // SSG Configuration
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    routeRules: {
      '/_fonts/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
      },
      '/assets/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
      },
      '/**': {
        headers: { 'Cache-Control': 'public, max-age=0, must-revalidate' }
      }
    }
  },
  fonts: {
    families: [
      { name: 'JetBrains Mono', provider: 'google', display: 'swap' }
    ]
  },
  css: ['~/assets/css/main.css'],
  features: {
    inlineStyles: true,
  },
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
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/jude/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/jude/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/jude/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/jude/apple-touch-icon.png' },
        { rel: 'manifest', href: '/jude/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ],
      meta: [
        { name: 'theme-color', content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#f4f4f5', media: '(prefers-color-scheme: light)' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Jude Mpoyo' },
        { name: 'application-name', content: 'Jude Mpoyo' },
        { name: 'msapplication-TileColor', content: '#18181b' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'author', content: 'Jude Mpoyo' },
      ]
    },
    buildAssetsDir: 'assets',
    baseURL: '/jude/',
  },

  i18n: {
    baseUrl: 'https://jude.jkantech.net/jude',
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