<script setup lang="ts">
    import {useUserStore} from "~/store/user.store";
    import type {User} from "~/models/user.model";

    const userStore = useUserStore();
    const user: User = userStore.getUser;

    // TODO: faire un middleware pour ça
    if (user === null) {
        navigateTo('/login');
    }

    const logout = () => {
        userStore.logout();
        navigateTo('/');
    }
</script>

<template>
    <p>Username: {{ user.username }}</p>
    <UAvatar
        :src="user.avatar"
        :alt="user.username"
        size="lg"
    />
    <UButton
        label="Logout"
        size="lg"
        icon="i-heroicons-arrow-left-start-on-rectangle"
        trailing
        @click="logout()"
    />
</template>

<style scoped>

</style>