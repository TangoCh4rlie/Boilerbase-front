export const apiUrl = () => {
    const runtimeConfig = useRuntimeConfig();
    return runtimeConfig.public.apiUrl;
};