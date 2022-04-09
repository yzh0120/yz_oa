import {get,post} from '@/axios/request.js'

//登录接口
export function pager(data, other) {
    return post('/table/pager', data, other)
}

