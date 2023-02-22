<template>
    <div class="card text-center">
        <img :src="product.image" :alt="product.title" class="thumb h-28 m-0-auto">
        <p class="font-bold text-gray-500 m-4 truncate"> {{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
.m-0-auto {
    margin: 0 auto;
}
</style>