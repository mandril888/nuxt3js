<template>
    <div>
        <HeaderApp></HeaderApp>
        <p>Product details:</p>
        <ul>
            <li>ID: {{ id }}</li>
        </ul>
    </div>
</template>

<script setup>
    import HeaderApp from "/components/HeaderApp"
    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>