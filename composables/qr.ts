import { useLocalStorage } from "@vueuse/core";
import type { QRData } from '~/types/index'

export const qr_data = useLocalStorage<QRData[]>('qr_data', [] as QRData[])
export const color = useLocalStorage('color', '')
