<template>
    <div>
        <h1 class="mb-7">About</h1>
        <p class="mb-7">{{ data.message }}</p>
        <p>Euro: {{ data.data.EUR.value }}</p>
    </div>
</template>

<script setup>
    useHead({
        title: 'About page | Nuxt 3 JS',
        meta: [
            { name: 'description', content: 'Info about the family team' }
        ],
    })

    const { data } = await useFetch('/api/test?name=mario', {
        method: 'post',
        body: { age: 30 }
    })
</script>