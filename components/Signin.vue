<script setup lang="ts">
const username = ref<string>("");
const password = ref<string>("");

function login() {
    console.log(username.value, password.value);
}
</script>

<template>
    <UContainer>
        <div class="flex flex-col items-center">
            <h3 class="text-3xl font-bold my-8">Sign in</h3>
            <UForm class="w-96">
                <UContainer class="mb-4">
                    <label class="text-sm">Email</label>
                    <UInput
                        v-model="username"
                        type="string"
                        placeholder="Username"
                    />
                </UContainer>
                <UContainer class="mb-4">
                    <label class="text-sm">Password</label>
                    <UInput
                        v-model="password"
                        type="password"
                        placeholder="Password"
                    />
                </UContainer>
                <UButton
                    @click="login"
                    class="justify-center"
                >
                    Sign in
                </UButton>
            </UForm>
        </div>
    </UContainer>
</template>