<script setup lang="ts">

</script>

<template>
    <UContainer class="flex flex-col items-center justify-center mt-24 mb-8 gap-y-4">
        <h2 class="text-4xl font-bold pb-2">Welwome to BoilerBase</h2>
        <p class="text-slate-500">
            Discover, share and use the best boilerplates for your projects.
            Save time and start coding faster!
        </p>
        <UButton size="lg" icon="i-heroicons-code-bracket" trailing>
            Explore Boilerplates
        </UButton>
    </UContainer>
    <UContainer class="w-3/5">
        <HomeTable />
    </UContainer>
</template>
