<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>Product details:</p>
        <ul>
            <li>ID: {{ id }}</li>
            <li>Product ID: {{ id }}</li>
        </ul>
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
</script>