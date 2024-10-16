import {defineStore} from "pinia";
import type {User} from "~/models/user.model";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }),

    getters: {
        getUser: (state): User => state.user,
    },

    actions: {
        setUser(user) {
            this.user = user;
        },
    },
})