// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const baseURL = `/${(process.env.NUXT_APP_BASE_URL || '/jude/').split('/').filter(Boolean).join('/')}/`.replace(/\/+/g, '/')
const siteOrigin = new URL(process.env.NUXT_PUBLIC_SITE_URL || 'https://jude.jkantech.net').origin
const siteBase = `${siteOrigin}${baseURL}`
const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxt/fonts'],

  runtimeConfig: {
    public: {
      siteUrl: siteOrigin,
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '243975889135',
    },
  },

  // SSG Configuration
  ssr: true,
  nitro: {
    preset: 'static',
    hooks: {
      compiled: async (nitro) => {
        const directory = nitro.options.output.publicDir
        await mkdir(directory, { recursive: true })
        const en = escapeXml(siteBase)
        const fr = escapeXml(`${siteBase}fr/`)
        const alternates = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="fr" href="${fr}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"><url><loc>${en}</loc>${alternates}</url><url><loc>${fr}</loc>${alternates}</url></urlset>\n`
        const apache = await readFile(fileURLToPath(new URL('./public/.htaccess', import.meta.url)), 'utf8')
        await Promise.all([
          writeFile(resolve(directory, 'sitemap.xml'), sitemap),
          writeFile(resolve(directory, 'robots.txt'), `User-agent: *\nAllow: ${baseURL}\nSitemap: ${siteBase}sitemap.xml\n`),
          writeFile(resolve(directory, '.htaccess'), apache.replace('__APP_BASE_URL__', baseURL)),
        ])
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/fr']
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
    providers: { bunny: false },
    families: [
      { name: 'JetBrains Mono', provider: 'google', display: 'swap' }
    ]
  },
  css: ['~/assets/css/main.css'],
  features: {
    inlineStyles: false,
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
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    },
    buildAssetsDir: 'assets',
    baseURL,
  },

  i18n: {
    baseUrl: siteOrigin,
    trailingSlash: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English', language: 'en-US' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français', language: 'fr-FR' }
    ],
    experimental: {
      strictSeo: true
    },
    
    detectBrowserLanguage: false
  }

})