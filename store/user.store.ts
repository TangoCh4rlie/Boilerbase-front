import {defineStore} from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }),

    getters: {
        getUser: (state) => state.user,
    },

    actions: {
        setUser(user) {
            console.log('setUser', user);
            this.user = user;
        },
    },
})