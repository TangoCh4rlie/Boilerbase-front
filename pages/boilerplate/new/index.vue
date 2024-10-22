<script setup lang="ts">
import {z} from "zod";
import type {FormSubmitEvent} from "#ui/types";
import type {GitRepos} from "~/models/gitRepos.model";
import {availableLanguages} from "~/utils/availableLanguages";
import {apiUrl} from "~/utils/host";
import {useUserStore} from "~/store/user.store";

definePageMeta({
    middleware: 'auth'
})

const userStore = useUserStore()

const {data} = await useFetch<GitRepos[]>("https://api.github.com/users/TangoCh4rlie/repos");

const repos: GitRepos[] = data.value || [];
const names: string[] = Array.isArray(repos) ? repos.map((item: GitRepos) => item.name) : [];

const newBoilerplateValidator = z.object({
    name: z.string("Cannot be empty"),
    description: z.string("Cannot be empty"),
    projectName: z.string(),
})

type NewBoilerplateValidator = z.output<typeof newBoilerplateValidator>

const boilerplate = reactive({
    name: undefined,
    description: undefined,
    projectName: undefined,
});

const language = ref('');
const languages = ref<{ label: string, color: string }[]>([]);
const languagesEnum = availableLanguages;

function addLanguage() {
    try {
        if (languages.value.find((item) => item.label === language.value)) {
            language.value = '';
        } else {
            languages.value.push(languagesEnum.find((item) => item.label === language.value));
            language.value = '';
        }
    } catch (error) {
        console.error('Error adding language:', error);
    }
}

// Quand un projet est sélectionné, ça auto-remplit des champs.
watch(() => boilerplate.projectName, async (newValue) => {
    boilerplate.name = '';
    boilerplate.description = '';
    languages.value = [];
    const repo: GitRepos = repos.find((item: GitRepos) => item.name === newValue);

    boilerplate.name = newValue;

    if (repo.description != null) {
        boilerplate.description = repo.description;
    }
    if (repo.language != null) {
        language.value = repo.language || '';
        addLanguage()
    }
});

async function onSubmit(event: FormSubmitEvent<NewBoilerplateValidator>) {
    const gitUrl = repos.find((item: GitRepos) => item.name === event.data.projectName)?.html_url;

    const {data} = await useFetch<{ status: number, message: string }>(apiUrl() + "boilerplate", {
        method: "POST",
        body: JSON.stringify({
            name: event.data.name,
            description: event.data.description,
            gitUrl: gitUrl,
            languages: languages.value.map((item) => item.label),
            authorId: userStore.getUser?.id
        })
    });

    if (data.value.status === 500) {
        // TODO: afficher une erreur à l'utilisateur
        console.error('Error creating boilerplate:', data.value.message);
    }
}
</script>

<template>
    <div class="max-w-xl mx-auto p-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Create a new Boilerplate</h3>
        <UForm :schema="newBoilerplateValidator" :state="boilerplate" @submit="onSubmit">
            <UFormGroup label="Git URL" name="gitUrl" required class="my-4">
                <UInputMenu v-model="boilerplate.projectName" :options="names"/>
            </UFormGroup>
            <UFormGroup label="Boilerplate name" name="boilerplate_name" required class="my-4">
                <UInput v-model="boilerplate.name"/>
            </UFormGroup>
            <UFormGroup label="Description" name="description" required class="my-4">
                <UInput v-model="boilerplate.description"/>
            </UFormGroup>
            <UFormGroup label="Language" name="language" required class="my-4">
                <UBadge
                    v-for="(item, index) in languages"
                    :key="index"
                    :label="item.label"
                    :color="item.color"
                    @click="languages.pop()"
                    class="mb-2 mx-0.5"
                />
                <UInputMenu v-model="language" :options="availableLanguages.map((item) => item.label)"
                            @change="addLanguage"/>
            </UFormGroup>
            <div class="mt-6 text-center">
                <UButton type="submit ">
                    Create
                </UButton>
            </div>
        </UForm>
    </div>
</template>