<template>
    <div id="lotus-layout" class="w-full h-dvh">
        <div class="flex w-full h-full">
            <div
                class="fixed top-0 w-full z-10 bg-primary-50/10 dark:bg-gray-800/10 backdrop-blur border-b border-primary-200/50 dark:border-primary-500/50 shadow-xl shadow-primary-400/5 dark:shadow-primary-500/5">
                <UContainer>
                    <LotusToolBar />
                </UContainer>
            </div>
            <div class="w-full mt-[74px] h-full relative overflow-y-scroll scrollbar-hide p-4">
                <UContainer>
                    <slot />
                </UContainer>
            </div>
        </div>
    </div>
</template>
