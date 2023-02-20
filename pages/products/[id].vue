<template>
    <div>
        <p>Product details:</p>
        <ul>
            <li>ID: {{ id }}</li>
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params
</script>