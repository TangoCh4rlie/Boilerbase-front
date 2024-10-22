<script setup lang="ts">
import {useUserStore} from "~/store/user.store";

const userStore = useUserStore()

onMounted(async () => {
    await userStore.fetchUser()
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>