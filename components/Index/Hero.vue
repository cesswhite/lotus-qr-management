<template>
    <UContainer>
        <div class="h-full min-h-dvh flex">
            <div class="flex flex-col items-center justify-center w-1/2 mx-auto">
                <div
                    class="relative rounded-full px-3 py-1 text-sm leading-6 text-primary-500 dark:text-primary-500/90 ring-1 ring-primary-500/80 hover:ring-primary-500 dark:ring-primary-500/80 dark:hover:ring-primary-500">
                    QR codes management
                </div>
                <h1
                    class="text-4xl text-center font-bold tracking-tight text-primary-500 dark:text-primary-500 sm:text-6xl mt-2">
                    Easily manage QR Codes in seconds </h1>
                <p class="mt-6 text-lg leading-8 text-center text-primary-700/70 dark:text-primary-100/50">
                    Create, customize, and manage your QR codes effortlessly and local.
                    <br>
                    No Database, no microservices, no deploy
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <UButton to="/lotus" color="primary" size="lg" variant="solid" icon="i-heroicons-qr-code">
                        Start to management
                    </UButton>
                    <!-- 
                    <UButton @click="signInWithGitHub" color="primary" size="lg" variant="solid" icon="i-ci-github">
                        Get started with GitHub
                    </UButton> -->
                </div>
            </div>
        </div>
    </UContainer>
</template>



<script setup lang="ts">


</script>
