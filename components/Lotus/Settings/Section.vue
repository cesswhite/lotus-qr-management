<template>
    <div class="grid grid-cols-12">
        <div class="col-span-full md:col-span-2 text-sm text-primary-500/70 dark:text-primary-500/80">
            <slot name="text" />
        </div>
        <div class="col-span-full md:col-span-10">
            <slot name="component" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
