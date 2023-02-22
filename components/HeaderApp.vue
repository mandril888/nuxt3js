<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 felx justify-between">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/fail">Fail</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
    color: green;
    
    &.btn {
        color: black;
    }
}
</style>