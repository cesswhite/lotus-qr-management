<template>
    <div class="flex flex-col gap-2 p-2">
        <UButton @click="signOut" block label="Close session" color="gray" variant="ghost"
            icon="i-heroicons-arrow-left-on-rectangle-solid"
            class="opacity-50 hover:opacity-80 transition-all duration-150 ease-in-out underline-offset-8 flex items-center !justify-start" />
    </div>
</template>
<script setup lang="ts">


const signOut = async () => {

    navigateTo('/');

    localStorage.clear();
};


</script>