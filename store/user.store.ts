import {defineStore} from "pinia";
import type {User} from "~/models/user.model";
import {apiUrl} from "~/utils/host";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null as User | null,
    }),

    getters: {
        getUser: (state): User | null => state.user,
    },

    actions: {
        async fetchUser() {
            const token = useCookie('access-token').value;
            if (token !== undefined) {
                try {
                    const response = await fetch(apiUrl() + "user/me", {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    this.user = await response.json();
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                    this.user = null;  // Handle error case
                }
            } else {
                this.user = null;  // No token, set user to null
            }
        },

        setUser(user) {
            this.user = user;
        },

        logout() {
            const tokenCookie = useCookie('access-token');
            tokenCookie.value = null;

            this.user = null;
        }
    },
})