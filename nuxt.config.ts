// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: ["@nuxt/ui", '@nuxtjs/supabase'],
  supabase: {
    redirect: true,
    redirectOptions:{
      callback: '/app',
      login: '/auth/login',
      exclude: ['/auth/signup', '/'],
      cookieRedirect: true,
    }
  }
})