<template>
    <div>
        <Head>
            <Title>{{ product.title }} | Nuxt 3 JS</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id
    
    // fetch product details
    const { data: product } = await useFetch(uri)
    // if always appears the same product info is because the fetch only starts one time
    // if you specify the id in te useFetch it detects when the ID changes
    // const { data: product } = await useFetch(uri, { key: id })

    if (!product.value) {
        // 'fatal' is used to throw the error in the client side
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }
</script>