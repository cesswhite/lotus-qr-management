<template>
    <div>
        <UContainer class="mt-12">
            <UForm :validate="validate" :state="state" class="grid grid-cols-4 gap-4" @submit="onSubmit">
                <UFormGroup label="Name" name="name" help="Name to identify the QR code" size="lg" class="col-span-full"
                    required>
                    <UInput v-model="state.name" color="gray" />
                </UFormGroup>
                <UFormGroup label="URL" name="url" help="URL to redirect after scanning" size="lg" class="col-span-full"
                    required>
                    <UInput v-model="state.url" color="gray" type="text"
                        :ui="{ base: '!pl-14 relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0' }">
                        <template #leading>
                            <span class="text-gray-500 dark:text-gray-400 text-xs">https://</span>
                        </template>
                    </UInput>
                </UFormGroup>
                <div class="col-span-full">
                    <UButton block type="submit" size="lg">
                        Edit
                    </UButton>
                </div>
            </UForm>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { QRData } from '~/types/index'
import type { FormError, FormSubmitEvent } from '#ui/types'

const props = defineProps<{
    data: QRData
}>()
const state = reactive({
    name: '',
    active: false,
    url: '',
})
const emit = defineEmits(['done'])
const toast = useToast();

onMounted(() => {
    state.name = props.data.name
    state.url = props.data.url.replace(/^https?:\/\//, '');
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Field required' })
    if (!state.url) errors.push({ path: 'url', message: 'Field required' })

    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    const idToEdit = props.data.id
    const index = qr_data.value.findIndex(qr => qr.id === idToEdit);

    if (index !== -1) {
        qr_data.value[index] = {
            ...qr_data.value[index],
            name: state.name || '',
            url: `https://${state.url}`,
            created_at: new Date(),
        };
        toast.add({
            id: 'success',
            color: 'green',
            title: 'Updated',
            description: 'QR code updated successfully',
            icon: 'i-heroicons-check-circle',
        });
        emit('done')
    } else {
        toast.add({
            id: 'error',
            color: 'red',
            title: 'Error',
            description: 'QR code not found',
            icon: 'i-heroicons-x-circle',
        });
    }
    state.name = '';
    state.url = '';
}

</script>
