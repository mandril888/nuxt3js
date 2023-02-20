<template>
    <div>
        <p>Product details:</p>
        <ul>
            <li>ID: {{ id }}</li>
        </ul>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>