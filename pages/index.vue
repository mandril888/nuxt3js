<template>
    <div>
        <h1 class="mb-7">Home</h1>
        <p>EUR: {{ data.data.EUR.value }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/EUR')
</script>