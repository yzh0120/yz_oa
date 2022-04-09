import {
    get,
    post
} from '@/axios/request.js'

// export function demoget(data,code){
//     return get('/demoget',data,code)
// }

// export function demoget1(data,code){
//     return get('/demoget1',data,code)
// }

export function demoget(data, other) {
    return get('/demoget', data, other)
}

export function demoget1(data, other) {
    return get('/demoget1', data, other)
}

export function demoPost(data, other) {
    return post('/demoPost', data, other)
}

export function demoTable(data, other) {
    return post('/demoTable', data, other)
}
