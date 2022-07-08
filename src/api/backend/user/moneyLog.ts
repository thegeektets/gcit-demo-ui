import createAxios from '../../../utils/axios'
import { userMoneyLog } from '../../controllerUrls'

export function add(userId: string) {
    return createAxios({
        url: userMoneyLog + 'add',
        method: 'get',
        params: {
            userId: userId,
        },
    })
}
