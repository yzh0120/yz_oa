import {
    get,
    post
} from '@/axios/request.js'


export function pageList(data, other) {
    return post('/role/pageList', data, other)
}

export function save(data, other) {
    return post('/role/save', data, other)
}

export function update(data, other) {
    return post('/role/update', data, other)
}

export function del(data, other) {
    return post('/role/del', data, other)
}