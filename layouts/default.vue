<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header/>
        <div class="flex-grow">
            <slot/>
        </div>
        <div>
            <footer class="py-6 text-center text-sm text-muted-foreground">
                <p>A SuperSympa project</p>
                <p>© 2024 BoilerBase. All rights reserved.</p>
            </footer>
        </div>
    </div>
</template>

<style scoped>

</style>