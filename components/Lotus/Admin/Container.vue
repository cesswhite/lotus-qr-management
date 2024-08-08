<template>
    <div class="relative">
        <USlideover v-model="isOpenFormToCreate">
            <LotusAdminCreate @done="updateTable" />
        </USlideover>
        <div class="flex items-center justify-between">
            <LotusDashboardHeader title="Administrator" />
            <UButton icon="i-heroicons-plus" color="primary" variant="solid" size="lg"
                @click="isOpenFormToCreate = true">
                Create QR code
            </UButton>
        </div>
        <div class="mt-6">
            <LotusAdminTable />
        </div>

    </div>
</template>

<script setup lang="ts">
const isOpenFormToCreate = ref(false)

function updateTable() {
    isOpenFormToCreate.value = false
}
</script>
