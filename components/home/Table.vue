<script setup lang="ts">
import type { Boilerplate } from "~/models/boilerplate.model";
import { apiUrl } from "~/utils/host";

const props = defineProps<{
    user: User
}>();

const { data } = await useFetch<Boilerplate[]>(apiUrl() + "boilerplate/top", {
    headers: {
        Authorization: `Bearer ${useCookie('access-token').value}`
    }
});

</script>

<template>
    <div class="flex flex-col items-center m-10">
        <h3 class="text-3xl font-bold my-8">Top boilerplates of the month</h3>
        <ul>
            <li v-for="item in data" :key="item.id">
                <HomeRow :boilerplate="item" :user="props.user" class="my-2"/>
            </li>
        </ul>
    </div>
</template>
