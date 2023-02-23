export default defineEventHandler ( async(e) => {

    const { code } = e.context.params
    const currencyApiKey = process.env.CURRENCY_API_KEY
    // const { currencyApiKey } = useRuntimeConfig()

    const uri = 'https://api.currencyapi.com/v3/latest?currencies=EUR&apikey=TmEBEaNVTQq6rJFaIOVtlVVzk7GiV8JxagTVDyXe'
    // REVIEW --> not working with backticks and variables
    // const uri = `https://api.currencyapi.com/v3/latest?apiKey=${currencyApiKey}&currencies=${code}`
    
    const { data } = await $fetch(uri)

    return { data }

})