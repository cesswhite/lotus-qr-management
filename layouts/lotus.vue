<template>
    <div id="lotus-layout" class="w-full min-h-dvh h-auto bg-gray-50 dark:bg-gray-950">
        <div class="flex w-full h-full">
            <div
                class="fixed top-0 w-full z-10 bg-primary-50/10 dark:bg-gray-950/10 backdrop-blur border-b border-primary-200/50 dark:border-primary-500/50 shadow-xl shadow-primary-400/5 dark:shadow-primary-500/5">
                <UContainer>
                    <LotusToolBar />
                </UContainer>
            </div>
            <div class="w-full mt-[78px] h-full relative overflow-y-scroll scrollbar-hide">
                <UContainer>
                    <slot />
                </UContainer>
            </div>
            <div class="fixed bottom-0">
                <UButton to="https://ecostudios.dev/" target="_blank" color="primary" size="xs" variant="link">
                    Created by Eco Development Studios
                </UButton>
            </div>
        </div>
    </div>
</template>
