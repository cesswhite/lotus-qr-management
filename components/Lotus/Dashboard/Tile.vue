<template>
    <div v-motion-fade-visible
        class="w-full h-48 rounded-xl border-primary-500/50 bg-primary-50/50 hover:bg-primary-50 dark:bg-gray-900/50 hover:dark:bg-gray-900 border p-4 flex flex-col items-start justify-between">
        <div class="text-xl font-semibold text-primary-600">
            <slot name="title" />
        </div>
        <div class="text-left text-6xl font-bold text-primary-600 w-full">
            <slot name="value" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>