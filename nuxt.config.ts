import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['notivue/nuxt'
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {},
  css: [
    'notivue/notification.css', // Only needed if using built-in <Notification />
    'notivue/animations.css', // Only needed if using default animations
    'primevue/resources/themes/aura-light-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'flag-icon-css/css/flag-icons.min.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue'] // Đảm bảo các thành phần PrimeVue được biên dịch đúng cách
  },
  plugins: [
    '~/plugins/primevue.js',
  ],
  app: {
    head: {
      title: 'Equarus Solutions - Building Global Brands Owned By Vietnamese People.',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/gif', href: 'layout/images/logo.jpg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@300;400;500;600;700&display=swap',
        },
      ]
    }
  }
})