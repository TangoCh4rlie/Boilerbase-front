import {useUserStore} from "~/store/user.store";

export default defineNuxtRouteMiddleware(() => {
    const userStore = useUserStore();
    if (userStore.getUser === null) {
        return navigateTo('/login');
    }
})