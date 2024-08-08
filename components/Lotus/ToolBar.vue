<template>
    <div class="flex items-center w-full justify-between gap-2 py-4">
        <div class="size-8">
            <AppLogo />
        </div>
        <div class="hidden md:flex items-start justify-start gap-2 w-auto">
            <AppNavigation />
        </div>
        <div class="flex items-center justify-end">
            <AppSwitchMode />
            <UButton @click="openMenuResponsive = true" class="md:hidden" size="xl" icon="i-heroicons-bars-3"
                variant="link" />
        </div>
        <USlideover v-model="openMenuResponsive">

            <div class="flex flex-col items-start justify-start gap-2 w-auto p-8">
                <div class="flex items-center justify-between w-full">
                    <div class="size-6">
                        <AppLogo />
                    </div>
                    <UButton @click="openMenuResponsive = false" icon="i-heroicons-x-mark" size="lg" variant="link"
                        aria-hidden="true" />
                </div>
                <AppNavigation />
            </div>
        </USlideover>
    </div>
</template>


<script setup lang="ts">
const openMenuResponsive = ref(false)
</script>
