<script setup lang="ts">
    import {useUserStore} from "~/store/user.store";
    import type {User} from "~/models/user.model";

    const userStore = useUserStore();
    const user: User = userStore.user;
</script>

<template>
    <p>Username: {{ user.username }}</p>
    <UAvatar
        :src="user.avatar"
        :alt="user.username"
        size="lg"
    />
</template>

<style scoped>

</style>