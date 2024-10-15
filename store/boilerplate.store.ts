import type {Boilerplate} from "~/models/boilerplate.model";

export const useBoilerplateStore = defineStore('boilerplateStore', {
    state: () => ({
        boilerplates: [] as Boilerplate[],
    }),

    getters: {
        getBoilerplates: (state) => state.boilerplates,

        getBoilerplateById: (state) => {
            return (id: number) => state.boilerplates.find(b => b.id === id);
        },
    },

    actions: {
        addBoilerplate(boilerplate: Boilerplate) {
            this.boilerplates.push(boilerplate);
        },

        removeBoilerplate(id: number) {
            this.boilerplates = this.boilerplates.filter(b => b.id !== id);
        },

        updateBoilerplate(updatedBoilerplate: Boilerplate) {
            const index = this.boilerplates.findIndex(b => b.id === updatedBoilerplate.id);
            if (index !== -1) {
                this.boilerplates[index] = updatedBoilerplate;
            }
        },

        setBoilerplates(boilerplates: Boilerplate[]) {
            this.boilerplates = boilerplates;
        },

        setLikeCounter(like: number, id: number) {
            const boilerplate: Boilerplate = state.boilerplates.find(b => b.id === id);
            if (boilerplate) {
                boilerplate.like = like;
            }
        }
    },
});