<template>
    <Transition name="fade">
        <div v-show="progress !== 0"
            class="fixed z-[200] top-0 left-0 w-full h-dvh bg-primary-50/50 dark:bg-primary-950/50 backdrop-blur-md flex items-center justify-center">
            <div class="size-20 animate-pulse">
                <AppLogo />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const { progress } = useLoadingIndicator({
    // This is how progress is calculated by default
    estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50)
})
</script>