import { defineStore } from 'pinia'
import { SiteConfig } from './interface'
import { SITE_CONFIG } from './constant/cacheKey'

export const useSiteConfig = defineStore('siteConfig', {
    state: (): SiteConfig => {
        return {
            site_name: 'Meight Mission Control',
            record_number: '',
            version: '1.0.0',
        }
    },
    actions: {},
    persist: {
        key: SITE_CONFIG,
    },
})
