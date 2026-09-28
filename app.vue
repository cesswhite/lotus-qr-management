<template>
  <!-- <AppFullLoading /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>


<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()
const siteUrl = 'https://lotus.ecostudios.dev'
const canonical = computed(() => `${siteUrl}${route.path.replace(/\/+$/, '') || '/'}`)
const isPublicPage = computed(() => route.path === '/')
// Published Lotus preview already used in the studio's template catalog.
const ogImage = 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/lotus_cufka0.webp'

onMounted(() => {
  appConfig.ui.primary = color.value
})

useSeoMeta({
  title: 'Lotus | QR Management',
  ogTitle: 'Lotus | QR Management',
  description:
    'Easily manage QR Codes in seconds,create, customize, and manage your QR codes effortlessly',
  ogDescription:
    'Easily manage QR Codes in seconds,create, customize, and manage your QR codes effortlessly',
  ogImage,
  ogType: 'website',
  ogSiteName: 'Lotus',
  ogUrl: () => canonical.value,
  twitterImage: ogImage,
  robots: () => isPublicPage.value ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  twitterCard: 'summary_large_image',
});

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
  script: isPublicPage.value ? [{
    key: 'lotus-schema',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://www.ecostudios.dev/#organization', name: 'Eco Development Studios', url: 'https://www.ecostudios.dev/' },
        { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Lotus', url: `${siteUrl}/`, inLanguage: 'en', publisher: { '@id': 'https://www.ecostudios.dev/#organization' } },
        { '@type': 'WebApplication', '@id': `${siteUrl}/#app`, name: 'Lotus', url: `${siteUrl}/`, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web browser', description: 'Create, customize, and control your QR codes locally with no need for databases, microservices, or deployments.', creator: { '@id': 'https://www.ecostudios.dev/#organization' } },
      ],
    }),
  }] : [],
}))
</script>
