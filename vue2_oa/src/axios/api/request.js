import {
  get,
  post
} from '@/axios/request.js'

export function twoHundred(data, other) {
  return post('/request/twoHundred', data, other)
}

export function notTwoHundred(data, other) {
  return post('/request/notTwoHundred', data, other)
}

export function loading(data, other) {
  return post('/request/loading', data, other)
}

export function socket(data, other) {
  return get('/socket', data, other)
}
