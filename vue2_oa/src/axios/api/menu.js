import {
    get,
    post
} from '@/axios/request.js'

export function saveMenu(data, other) {
    return post('/menu/saveMenu', data, other)
}

export function menuTree(data, other) {
    return get('/menu/menuTree', data, other)
}

export function pageListByParentId(data, other) {
    return post('/menu/pageListByParentId', data, other)
}