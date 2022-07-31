import vuetifyOptions from "./vuetify.options"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
  head: {
    titleTemplate: '%s - Grand',
    title: 'Grand',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/global.css',
    '~/assets/styles/tailwind.css'
  ],
  loadingIndicator: {
    name: 'circle',
    color: '#c8a45d',
    background: 'white',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
    {
      src: '~/plugins/axios-accessor.js',
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxt/postcss8',
  ],



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    ...vuetifyOptions
  },

  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'ar',
    defaultDirection: 'rtl',
    lazy: true,
    langDir: 'locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl' },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   onlyOnRoot: true, // recommended,
    // },
    detectBrowserLanguage: false,
  },
  devtools: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
