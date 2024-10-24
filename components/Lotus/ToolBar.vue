<template>
    <div class="flex items-center w-full justify-between gap-2 py-4">
        <div class="size-5">
            <AppLogo />
        </div>
        <div class="hidden md:flex items-start justify-start gap-x-4 w-auto">
            <AppNavigation />
        </div>
        <div class="flex items-center justify-end">
            <AppSwitchMode />
            <UButton @click="openMenuResponsive = true" class="md:hidden" size="sm" icon="i-heroicons-bars-3"
                variant="link" />
        </div>
        <USlideover v-model="openMenuResponsive">
            <div class="flex flex-col items-start justify-start gap-y-2 w-auto p-4">
                <div class="flex items-center justify-between w-full">
                    <div class="size-5">
                        <AppLogo />
                    </div>
                    <UButton @click="openMenuResponsive = false" icon="i-heroicons-x-mark" size="sm" variant="link"
                        aria-hidden="true" />
                </div>
                <div class="flex flex-col items-start justify-start gap-y-6 w-auto mt-12">
                    <AppNavigation />
                </div>
            </div>
        </USlideover>
    </div>
</template>


<script setup lang="ts">
const openMenuResponsive = ref(false)
</script>
