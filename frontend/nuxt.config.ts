// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    // Server-only: SSR calls go through docker internal network
    apiBaseServer: process.env.NUXT_API_BASE_SERVER || process.env.API_BASE_URL || 'http://localhost:4000/api',
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:4000/api',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    'v-gsap-nuxt',
    '@nuxt/image',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@peterbud/nuxt-query',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'ru', file: 'ru.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
  },
  nuxtQuery: {
    autoImports: ['useQuery', 'useMutation', 'useQueryClient'],
    devtools: true,
    queryClientOptions: {
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000,      // 5 min — data treated as fresh
          gcTime: 30 * 60 * 1000,         // 30 min — cache kept in memory
          refetchOnWindowFocus: false,     // don't refetch just because user switches tabs
          retry: 1,
        },
      },
    },
  },
  ssr: true,
  antd: {
    extractStyle: true,
  },
  components: [{ path: '~/components', pathPrefix: false }],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  app: {
    layoutTransition: { name: 'layout' },
    head: {
      title: 'Streamly — Your Premium Streaming Destination',
      meta: [
        {
          name: 'description',
          content:
            'Stream thousands of movies and TV series in stunning quality. Your premium streaming destination.',
        },
        { name: 'theme-color', content: '#0a0a0a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Streamly' },
        { property: 'og:title', content: 'Streamly — Your Premium Streaming Destination' },
        {
          property: 'og:description',
          content: 'Stream thousands of movies and TV series in stunning quality.',
        },
        { property: 'og:image', content: '/og-default.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@streamly' },
        { name: 'twitter:title', content: 'Streamly' },
        {
          name: 'twitter:description',
          content: 'Stream thousands of movies and TV series in stunning quality.',
        },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'viewport',
          content: 'width=width=device-width, user-scalable=no, initial-scale=1.0',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
  image: {
    domains: ['images.unsplash.com', 'i.pravatar.cc', 'image.tmdb.org'],
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  vgsap: {
    composable: true,
  },
  vite: {
    optimizeDeps: {
      include: [
        '@ant-design/icons-vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'dayjs',
        'dayjs/plugin/advancedFormat',
        'dayjs/plugin/customParseFormat',
        'dayjs/plugin/localeData',
        'dayjs/plugin/quarterOfYear',
        'dayjs/plugin/weekOfYear',
        'dayjs/plugin/weekYear',
        'dayjs/plugin/weekday',
        'gsap',
        'gsap/ScrollTrigger',
        'web-haptics',
      ],
    },
  },
})
