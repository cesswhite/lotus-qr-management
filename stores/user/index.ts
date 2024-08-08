
export const userStore = defineStore('userStore', {
    state: () => ({
        user: ''
    }),
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(userStore, import.meta.hot))
}