<template>
    <div>
        <UContainer class="mt-12">
            <UForm :validate="validate" :state="state" class="grid grid-cols-4 gap-4" @submit="onSubmit">
                <UFormGroup label="Name" name="name" help="Name to identify the QR code" size="lg" class="col-span-full"
                    required>
                    <UInput v-model="state.name" color="gray" />
                </UFormGroup>
                <UFormGroup label="URL" name="url" size="lg" class="col-span-full" required>
                    <UInput v-model="state.url" color="gray" type="text"
                        :ui="{ base: '!pl-14 relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0' }">
                        <template #leading>
                            <span class="text-gray-500 dark:text-gray-400 text-xs">https://</span>
                        </template>
                    </UInput>
                </UFormGroup>
                <div class="col-span-full">
                    <UButton block type="submit" size="lg">
                        Create
                    </UButton>
                </div>
            </UForm>
        </UContainer>
    </div>
</template>



<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { QRData } from '~/types/index';

const state = reactive({
    name: undefined,
    active: undefined,
    url: undefined,
})
const emit = defineEmits(['done'])
const toast = useToast();
const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Field required' })
    if (!state.url) errors.push({ path: 'url', message: 'Field required' })

    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    let data_to_add: QRData = {
        id: qr_data.value ? qr_data.value?.length + 1 : 1,
        created_at: new Date(),
        name: state.name || '',
        url: `https://${state.url}`,
    }
    qr_data.value.push(data_to_add)
    toast.add({
        id: 'error',
        color: 'green',
        title: 'Done',
        description: 'QR code created successfully',
        icon: 'i-heroicons-check-circle',
    });
    state.name = undefined
    state.url = undefined
    emit('done')
}
</script>
