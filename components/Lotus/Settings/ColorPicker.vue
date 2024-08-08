<template>
    <LotusSettingsSection>
        <template #text>
            Choose and select the color you want to be the primary color for your app.
        </template>
        <template #component>
            <div class="w-full flex">
                <template v-for="(color, index) in colors" :key="index">
                    <div class="w-full h-8 relative cursor-pointer">
                        <button type="button" @click="setPrimaryColor(color)" class="size-8 center-center rounded-full"
                            :class="getPrimaryColor(color)" />
                        <div v-if="color === appConfig.ui.primary"
                            class="center-center z-10 flex items-center justify-center">
                            <UIcon name="i-heroicons-check" class="text-base text-white" />
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </LotusSettingsSection>
</template>

<script setup lang="ts">


const appConfig = useAppConfig()

onMounted(() => {
    appConfig.ui.primary = color.value
})

const colors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary'))

const getPrimaryColor = (color: string) => { return `bg-${color}-500` }

function setPrimaryColor(_color: string) {
    appConfig.ui.primary = _color
    color.value = _color
}
</script>
