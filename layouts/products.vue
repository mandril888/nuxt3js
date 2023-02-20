<template>
    <div>
        <HeaderApp></HeaderApp>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <div class="shadow-sm bg-white">
            <footer class="container mx-auto p-4 felx justify-between">
                <ul class="flex gap-4">
                    <li><a href="#">test@test.com</a></li>
                    <li><a href="#">612345678</a></li>
                </ul>
            </footer>
        </div>
    </div>
</template>