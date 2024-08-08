<template>
    <div>
        <div class="flex px-3 py-3.5 border-b border-primary-300 dark:border-primary-700">
            <UInput v-model="q" placeholder="Filter by name..." size="lg" color="primary" />
        </div>
        <UTable v-if="filteredRows" :rows="filteredRows" :columns="columns" :loading="loading">
            <template #active-data="{ row }">
                <UToggle v-model="row.active" @update:model-value="(value) => toogleActivateQR(value, row)" />
            </template>
            <template #actions-data="{ row }">
                <div class="flex flex-col gap-1">
                    <UButton block @click="openModalAndSetData(row)" color="primary" variant="link"
                        icon="i-heroicons-eye-20-solid" label="QR Code" />
                    <UButton block @click="openModalToEditQRCode(row)" color="sky" variant="link"
                        icon="i-heroicons-pencil-20-solid" label="Edit" />
                    <UButton block @click="opemModalToDeleteQRCode(row)" color="red" variant="link"
                        icon="i-heroicons-trash-20-solid" label="Delete" />
                </div>
            </template>
        </UTable>
        <USlideover v-model="isOpenFormToEdit">
            <LotusAdminEdit :data="current_qr_data!" @done="doneAndUpdateTable" />
        </USlideover>
        <UModal v-model="isOpenModalToSeeQR">
            <div class="p-4">
                <div id="svg-qr-code" v-html="svg" class="size-96 mx-auto" />
                <div class="px-12 py-8">
                    <p class="font-semibold text-gray-400 dark:text-gray-50/80">
                        {{ current_qr_data?.url }}
                    </p>
                </div>
                <div class="w-full">
                    <UButton block icon="i-heroicons-cloud-arrow-down" size="lg" @click="downloadSvgAsSvg">
                        Download QR Code
                    </UButton>
                </div>
            </div>
        </UModal>
        <UModal v-model="isOpenToDelete">
            <div class="p-4">
                <div class="w-full md:w-1/2 mx-auto flex items-center justify-center flex-col gap-1">
                    <div class="size-auto">
                        <UIcon name="i-heroicons-trash" class="text-3xl text-red-500" />
                    </div>
                    <div class="font-semibold text-xl text-red-500">
                        Delete QR Code
                    </div>
                    <p class="mb-4 text-base text-red-300 text-center">
                        Are you sure you want to delete this QR code?

                    </p>
                    <div class="flex gap-2 items-center">
                        <UButton @click="deleteQRCode" :loading="loading" color="red" size="lg">
                            Yes, delete QR code
                        </UButton>
                        <UButton @click="isOpenToDelete = false" color="gray" variant="link" :loading="loading"
                            size="lg">
                            No, cancel
                        </UButton>
                    </div>
                </div>
            </div>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import {
    renderSVG,
} from 'uqr'
import type { QRData } from '~/types/index'

const toast = useToast()
const q = ref('')
const loading = ref(false)
const isOpenToDelete = ref(false)
const isOpenFormToEdit = ref(false)
const isOpenModalToSeeQR = ref(false)
const current_qr_data = ref<QRData | null>(null)
const svg = ref('')

const columns = [{
    key: 'id',
    label: 'ID'
}, {
    key: 'name',
    label: 'Name'
}, {
    key: 'url',
    label: 'URL'
}, {
    key: 'actions',
    label: 'Actions'
}]

function opemModalToDeleteQRCode(row: QRData) {
    isOpenToDelete.value = true
    current_qr_data.value = row
}

function openModalToEditQRCode(row: QRData) {
    current_qr_data.value = row
    isOpenFormToEdit.value = true
}

function deleteQRCode() {
    loading.value = true;
    const idToDelete = current_qr_data.value?.id
    const index = qr_data.value.findIndex(qr => qr.id === idToDelete);
    if (index !== -1) {
        qr_data.value.splice(index, 1);
        toast.add({
            id: 'delete_qr_code',
            color: 'green',
            title: 'Done',
            description: 'QR code deleted successfully',
            icon: 'i-heroicons-check-circle',
        });
    } else {
        toast.add({
            id: 'error_qr_code_not_found',
            color: 'red',
            title: 'Error',
            description: 'QR code not found',
            icon: 'i-heroicons-x-circle',
        });
    }
    loading.value = false;
    isOpenToDelete.value = false;
}


async function openModalAndSetData(row: QRData) {
    svg.value = renderSVG(row.url)
    current_qr_data.value = row
    isOpenModalToSeeQR.value = true
}

async function doneAndUpdateTable() {
    isOpenFormToEdit.value = false
}

const filteredRows = computed(() => {
    if (!q.value) {
        return qr_data.value
    }

    if (qr_data.value) {
        return qr_data.value.filter((qr: QRData) => {
            return Object.values(qr).some((value) => {
                return String(value).toLowerCase().includes(q.value.toLowerCase())
            })
        })
    }
})

function downloadSvgAsSvg() {
    const svg = document.querySelector('#svg-qr-code');

    if (!svg) {
        console.error('SVG element not found.');
        return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr_${current_qr_data?.value?.name.toLowerCase()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
}

watch(() => filteredRows.value, (newValue, oldValue) => {
    isOpenFormToEdit.value = false
})

</script>