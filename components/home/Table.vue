<script setup lang="ts">
import type { Boilerplate } from "~/models/boilerplate.model";
import { apiUrl } from "~/utils/host";
import {useBoilerplateStore} from "~/store/boilerplate.store";

const boilerplateStore = useBoilerplateStore();

const { data } = await useFetch<Boilerplate[]>(apiUrl() + "boilerplate");
boilerplateStore.setBoilerplates(data);

</script>

<template>
    <div class="flex flex-col items-center">
        <h3 class="text-3xl font-bold my-8">Top boilerplates of the month</h3>
        <ul>
            <li v-for="item in boilerplateStore.getBoilerplates" :key="item.id">
                <HomeRow :boilerplate="item" class="my-2"/>
            </li>
        </ul>
    </div>
</template>
