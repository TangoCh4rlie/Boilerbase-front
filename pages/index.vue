<script setup lang="ts">
import {useUserStore} from "~/store/user.store";
import type { User } from "~/models/user.model";

const userStore = useUserStore();
const localUser = ref<User>(userStore.getUser);

onMounted(() => {
    fetchUser();
});

const fetchUser = async () => {
    if (useCookie('access-token').value !== undefined) {
        const user: User = await fetch("http://localhost:3001/user/me", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${useCookie('access-token').value}`
            }
        }).then(res => res.json());
        if (user) {
            userStore.setUser(user);
        }
    }
}

watch(userStore.user, () => {
    localUser.value = userStore.getUser;
});
</script>

<template>
    <UContainer class="flex flex-col items-center justify-center mt-24 mb-8 gap-y-4">
        <h2 class="text-4xl font-bold pb-2">Welwome to BoilerBase</h2>
        <p class="text-slate-500 dark:text-slate-400">
            Discover, share and use the best boilerplates for your projects.
            Save time and start coding faster!
        </p>
        <UButton size="lg" icon="i-heroicons-code-bracket" trailing>
            Explore Boilerplates
        </UButton>
    </UContainer>
    <UContainer class="w-3/5">
        <HomeTable :user="localUser"/>
    </UContainer>
</template>
