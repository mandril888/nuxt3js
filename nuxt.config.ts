// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nust 3 JS',
            meta: [
                { name: 'description', content: 'Metadescription of Nuxt 3 JS' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
    runtimeConfig: {
        currencyApiKey: process.env.CURRENCY_API_KEY
    }
})
