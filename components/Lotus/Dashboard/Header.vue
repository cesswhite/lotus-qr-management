<template>
    <div v-motion-fade-visible class="w-auto flex flex-col gap-2">
        <h1 class="text-4xl text-primary-500 dark:text-primary-500 font-bold">{{ props.title }}</h1>
        <p class="text-lg text-primary-500/70 dark:text-primary-500/80 font-normal w-full md:w-1/2">{{ props.description
            }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    description?: string
}>()
</script>
