<template>
    <div>
        <h1>Products</h1>
        <p><NuxtLink to="/products/123">123</NuxtLink></p>
        <p><NuxtLink to="/products/aaa">aaa</NuxtLink></p>
        <p><NuxtLink to="/products/test">test</NuxtLink></p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
</script>