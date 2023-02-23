export default defineEventHandler ( async(e) => {

    // handle query params
    const { name } = getQuery(e)

    // handle post data
    const { age } = await readBody(e)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=TmEBEaNVTQq6rJFaIOVtlVVzk7GiV8JxagTVDyXe')

    return {
        message: `Testing server routes => ${name} & ${age}`,
        data
    }

})