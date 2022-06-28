import createAxios from '../../../utils/axios'
import { authMenu } from '../../controllerUrls'

export function getMenuRules() {
    return createAxios({
        url: authMenu + 'index',
        method: 'get',
    })
}
