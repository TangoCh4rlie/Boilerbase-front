import {apiUrl} from "~/utils/host";

export const likeUnlikeBoilerplate = async (boilerplateId: number) => {
    const response: { status: string, message: string } = await $fetch(apiUrl() + 'like/' + boilerplateId, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${useCookie('access-token').value}`
        }
    })
    if (response.status !== 200) {
        //TODO Faire une meilleur gestion des erreurs
        console.error('Failed to like/unlike boilerplate:', response.message)
    }
}