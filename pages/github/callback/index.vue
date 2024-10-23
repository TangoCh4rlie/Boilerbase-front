<script setup lang="ts">
import {apiUrl} from "~/utils/host";

const route = useRoute()
const { data } = await useFetch<{ access_token: string}>(apiUrl() + "auth/github/callback?code=" + route.query.code);
const accessToken = useCookie('access-token');

if (accessToken === undefined) {
    const accessToken = useCookie('access-token', {
        maxAge: 60 * 60 * 24 * 7,
        // TODO: mettre a true quand y'aura de https
        secure: false,
        httpOnly: true,
        sameSite: 'strict',
    });
    accessToken.value = data.value.access_token;
} else {
    accessToken.value = data.value.access_token;
}

navigateTo('/');

</script>

<template>
    <p>Authentication in progress</p>
</template>