<script setup lang="ts">
import type {Boilerplate} from "~/models/boilerplate.model";
import {likeUnlikeBoilerplate} from "~/services/user.service";
import type {User} from "~/models/user.model";

const props = defineProps<{
    boilerplate: Boilerplate,
    user: User
}>();

const token = useCookie('access-token').value;

const isLiked = ref(false);

watchEffect(() => {
    isLiked.value = props.user.likes?.some(like => like.boilerplateId === props.boilerplate.id) ?? false;
});

const likeBoilerplate = (boilerplateId: number) => {
    if (isLiked.value) {
        props.user.likes = props.user.likes.filter(like => like.boilerplateId !== boilerplateId);
        props.boilerplate.likesCounter--;
        likeUnlikeBoilerplate(boilerplateId);
    } else {
        props.user.likes.push({ boilerplateId });
        props.boilerplate.likesCounter++;
        likeUnlikeBoilerplate(boilerplateId);
    }

    isLiked.value = !isLiked.value;
}
</script>

<template>
    <UContainer
        @click="navigateTo(`/boilerplate/${props.boilerplate.name}`)"
        class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 p-4 w-full"
    >
        <div class="flex items-center justify-start gap-4">
            <div class="flex items-center w-36">
                <UAvatar
                    :src="props.boilerplate.author.avatar"
                    alt="Avatar"
                    class="w-12 h-12 rounded-full"
                />
                <h4 class="text-md">{{ props.boilerplate.author.username }}</h4>
            </div>
            <div class="flex flex-col w-96">
                <h3 class="font-semibold text-lg">{{ props.boilerplate.name }}</h3>
            </div>
        </div>

        <div class="flex ml-auto space-x-4">
            <div
                @click.stop="likeBoilerplate(props.boilerplate.id)"
                class="flex items-center gap-1 cursor-default"
            >
                <UIcon
                    :name="isLiked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'"
                    :class="isLiked ? 'bg-purple-600' : ''"
                />
                <span>{{ props.boilerplate.likesCounter }}</span>
            </div>
            <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-arrow-trending-up"/>
                <span>{{ props.boilerplate.usesCounter }}</span>
            </div>
        </div>
    </UContainer>
</template>
