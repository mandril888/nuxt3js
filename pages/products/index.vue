<template>
    <div>
        <h1 class="mb-10">Products</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products/')

    useHead({
        title: 'Products page | Nuxt 3 JS',
        meta: [
            { name: 'description', content: 'All the products' }
        ],
    })
</script>