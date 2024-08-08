<template>
  <AppFullLoading />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>


<script setup lang="ts">
useSeoMeta({
  title: 'Lotus | QR Management',
  ogTitle: 'Lotus | QR Management',
  description:
    'Easily manage QR Codes in seconds,create, customize, and manage your QR codes effortlessly',
  ogDescription:
    'Easily manage QR Codes in seconds,create, customize, and manage your QR codes effortlessly',
  ogImage: '/og-index.png',
  twitterCard: 'summary_large_image',
});
</script>