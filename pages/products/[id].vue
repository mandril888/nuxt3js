<template>
    <div>
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
    // if always appears the same product info is becouse the fetch only starts one time
    // if you specify the id in te useFetch it detects when the ID cahnges
    // const { data: product } = await useFetch(uri, { key: id })
</script>