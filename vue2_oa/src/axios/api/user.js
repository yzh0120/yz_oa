import {get,post} from '@/axios/request.js'

// //登录接口
// export function user_login(data, other) {
//     return post('/login/userLogin', data, other)
// }
// //获取用户信息接口
// export function get_user(data, other) {
//     return post('/login/getUser', data, other)
// }


//获取验证码
export function getCaptcha(data, other) {
    return get('/captcha', data, other)
}

//登录
export function login(data, other) {
    return post(`/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`, data, other)
}

//获取用户信息
export function sysUserInfo(data, other) {
    return get(`/sys/userInfo`, data, other)
}

//登出
export function logout(data, other) {
    return get(`/logout`, data, other)
}
