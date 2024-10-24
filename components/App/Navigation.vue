<template>
    <UButton to="/lotus" icon="i-heroicons-home" color="primary" variant="ghost" size="sm"
        :class="{ 'opacity-50': route.name !== 'lotus' }" :padded=false>
        Dashboard
    </UButton>
    <UButton to="/lotus/admin" icon="i-heroicons-qr-code" color="primary" variant="ghost" size="sm"
        :class="{ 'opacity-50': route.name !== 'lotus-admin' }" :padded=false>
        Admin
    </UButton>
    <UButton to="/lotus/settings" icon="i-heroicons-cog-8-tooth" color="primary" variant="ghost" size="sm"
        :class="{ 'opacity-50': route.name !== 'lotus-settings' }" :padded=false>
        Settings
    </UButton>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
