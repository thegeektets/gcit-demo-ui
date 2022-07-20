import { defineStore } from 'pinia'
import { ADMIN_INFO } from './constant/cacheKey'
import { AdminInfo } from './interface'

export const useAdminInfo = defineStore('adminInfo', {
    state: (): AdminInfo => {
        return {
            id: 0,
            email: '',
            username: '',
            nickname: '',
            avatar: '',
            lastlogintime: '',
            token: '',
            fcm_token: '',
        }
    },
    actions: {
        removeToken() {
            this.token = ''
            this.fcm_token = ''
        },
    },
    persist: {
        key: ADMIN_INFO,
    },
})
