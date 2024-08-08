import { useLocalStorage } from "@vueuse/core";
import type { QRData, AppConfig } from '~/types/index'

/* const appConfig = useAppConfig() */

export const qr_data = useLocalStorage<QRData[]>('qr_data', [] as QRData[])
export const color = useLocalStorage('color', '')
