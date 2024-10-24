<template>
    <div class="relative">
        <USlideover v-model="isOpenFormToCreate">
            <LotusAdminCreate @done="updateTable" />
        </USlideover>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4">
            <LotusDashboardHeader title="Administrator" />
            <UButton icon="i-heroicons-plus" color="primary" variant="solid" size="sm"
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
