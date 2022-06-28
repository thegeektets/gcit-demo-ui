import createAxios from '../../../utils/axios'
import { securityDataRecycle } from '../../controllerUrls'

export function add() {
    return createAxios({
        url: securityDataRecycle + 'add',
        method: 'get',
    })
}
