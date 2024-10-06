<script setup lang="ts">
import type {Boilerplate} from "~/models/boilerplate.model";

const {data} = await useFetch<Boilerplate[]>('http://localhost:3001/boilerplate/')
</script>

<template>
  <h1>Boilerplates</h1>
  <ul>
    <li v-for="item in data" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.gitUrl }}</p>
      <p>{{ item.author.username }}</p>
    </li>
  </ul>
</template>

<style scoped>

</style>