<template>
    <div>
        <LotusDashboardHeader title="Dashboard" description="View all your created QR codes in one place." />
        <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-full md:col-span-6 lg:col-span-4">
                <LotusDashboardTile>
                    <template #title>
                        Total QR Codes
                    </template>
                    <template #value>
                        <span v-if="qr_data">
                            {{ qr_data.length }}
                        </span>
                    </template>
                </LotusDashboardTile>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>