<script setup lang="ts">
async function login() {
    const clientId = 'Iv23liRAlnT23lQE2Avs';
    const redirectUri = encodeURIComponent('http://localhost:3000/github/callback');
    const scope = 'public_profile';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
}
</script>

<template>
    <UButton @click="login">Login</UButton>
</template>