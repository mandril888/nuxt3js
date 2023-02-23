export default defineEventHandler ( async(e) => {

    // handle query params
    const { name } = getQuery(e)

    // handle post data
    const { age } = await readBody(e)

    // api call with private key
    // const currencyApiKey = process.env.CURRENCY_API_KEY
    const { currencyApiKey } = useRuntimeConfig()
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`
    const { data } = await $fetch(uri)

    return {
        message: `Testing server routes => ${name} & ${age}`,
        data
    }

})