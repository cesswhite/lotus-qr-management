<template>
    <div>
        <LotusDashboardHeader title="Dashboard" description="Here you can see all the qr created" />
        <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-full md:col-span-6 lg:col-span-4">
                <LotusDashboardTile>
                    <template #title>
                        Total QR Codes
                    </template>
                    <template #value>
                        {{ qr_data.length }}
                    </template>
                </LotusDashboardTile>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>