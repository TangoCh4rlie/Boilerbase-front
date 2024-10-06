<script setup lang="ts">
import type {User} from "~/models/user.model";

const { username } = useRoute().params

const { data } = await useFetch<User>('http://localhost:3001/user/username/' + username)
</script>

<template>
  <p>Username: {{ username }}</p>
  <p>Data: {{ data }}</p>
</template>

<style scoped>

</style>