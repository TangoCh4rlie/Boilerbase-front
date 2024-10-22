export default defineNuxtRouteMiddleware(() => {
    if (user === null) {
        return navigateTo('/login');
    }
})