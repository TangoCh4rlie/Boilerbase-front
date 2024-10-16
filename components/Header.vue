<script setup lang="ts">

const onClickProfile = () => {
    if (useCookie('access-token').value === undefined) {
        navigateTo('/login');
    } else {
        navigateTo('/profile');
    }
}
</script>

<template>
    <div class="m-2">
        <UContainer class="flex items-center">
            <UContainer class="flex items-center gap-x-2 cursor-pointer" @click="navigateTo('/')">
                <UAvatar
                    src="https://avatars.githubusercontent.com/u/50408224?v=4"
                    alt="Boilerbase Logo"
                    size="lg"
                />
                <h1 class="text-3xl font-bold">BoilerBase</h1>
            </UContainer>
            <UContainer class="flex items-center gap-x-8">
                <ULink to="/">Home</ULink>
                <ULink to="/boilerplate">Boilerplates</ULink>
            </UContainer>
            <UContainer class="flex items-center gap-x-4">
                <UInput
                    icon="i-heroicons-magnifying-glass-20-solid"
                    color="white"
                    :trailing="false"
                    placeholder="Search..."
                />
                <UIcon name="i-heroicons-user" class="w-6 h-6" @click="onClickProfile"/>
            </UContainer>
        </UContainer>
    </div>
</template>
