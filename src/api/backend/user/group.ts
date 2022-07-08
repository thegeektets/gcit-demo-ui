import createAxios from '../../../utils/axios'
import { userRule } from '../../controllerUrls'

export function getUserRules() {
    return createAxios({
        url: userRule + 'index',
        method: 'get',
    })
}
