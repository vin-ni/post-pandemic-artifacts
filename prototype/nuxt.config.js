const siteTitle = 'post-pandemic-artifacts'
const siteUrl = ''
const siteDescription = ''
const siteImage = {
  url: `/ogimage.png`,
  height: 630,
  width: 1200,
  type: 'image/png',
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server', // static
  router: {
    base: '/',
  },

  loading: {
    color: '#000000',
    height: '1px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      // Twitter Card data
      { name: 'twitter:title', content: siteTitle, hid: 'va' },
      { name: 'twitter:description', content: siteDescription, hid: 'va' },
      { name: 'twitter:image', content: siteImage.url, hid: 'va' },
      // Open Graph
      { property: 'og:title', content: siteTitle, hid: 'va' },
      {
        property: 'og:description',
        content: siteDescription,
        hid: 'og:description',
      },
      { property: 'og:type', content: 'Website' },
      { property: 'og:url', content: siteUrl },
      { property: 'og:image', content: siteImage.url, hid: 'og:image' },
      // { property: 'og:image:type', content: siteImage.type },
      // { property: 'og:image:width', content: siteImage.width },
      // { property: 'og:image:height', content: siteImage.height },
      { property: 'theme-color', content: '#FFFFFF' },
    ],
    link: [
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/criticalzones/swamp-game/favicon/favicon.ico',
      // },
      // {
      //   rel: 'shortcut icon',
      //   href: '/criticalzones/swamp-game/favicon/favicon.ico',
      //   type: 'image/x-icon',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   sizes: '180x180',
      //   href: '/criticalzones/swamp-game/favicon/apple-touch-icon.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '32x32',
      //   href: '/criticalzones/swamp-game/favicon/favicon-32x32.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '512x512',
      //   href: '/criticalzones/swamp-game/favicon/android-chrome-512x512.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '192x192',
      //   href: '/criticalzones/swamp-game/favicon/android-chrome-192x192.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '16x16',
      //   href: '/criticalzones/swamp-game/favicon/favicon-16x16.png',
      // },
      // {
      //   rel: 'manifest',
      //   href: '/favicon/site.webmanifest',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/plugins.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Swiper won’t load otherwise ??
    standalone: true,
  },

  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.HOST || '127.0.0.1', // default: localhost 0.0.0.0 for sharing // 127.0.0.1 for online
  },
}
