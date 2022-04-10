import axios from 'axios';
import router from '@/router/index'; //路由 跳转
import store from '@/vuex/store'; //vuex
import { Message, MessageBox} from 'element-ui'; //ui提示
import * as Cookie from "@/tools/cookjs.js"
// import forDelTemp from "@/tools/fn/forDelTemp.js";
import { encrypt, decrypt } from '@/tools/aes.js';



/*
let headers = {
    'Content-Type' : "application/x-www-form-urlencoded"
  }
*/

axios.defaults.timeout = 120000; //超时时间



// axios.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )
/* 
 axios.interceptors.request.use(
     config => {//在参数后面添加固定的url  //console.log(config.url, "config.url") 不包括 baseUrl
		config.headers = (config.headers, {
			  "timespan": "1000000",
			  "token": "68ac9407de90cafd200b2b33f2353338",
			})
         if (config.method == "get") {
             config.params = Object.assign(config.params, {//config.params 必须是对象
                 key: store.state.user.key
             })
			 if(config.params.param){
				 config.params.param = encodeURI(JSON.stringify(config.params.param))//约定
			 }
			 
         } else if (config.method == "post") {//  post 在 api里写?  这里也写? 会冲突 ,所以区分
             if (config.url.includes("?")) {
				 config.url = config.url + `&key=${process.env.VUE_APP_key}`
			 } else {
				 config.url = config.url + `?key=${process.env.VUE_APP_key}`
			 }
         }
         return config;
     },
     error => {
         return Promise.reject(error);
     }
 )
 */
//http response 拦截器
axios.interceptors.response.use(
	
    res => { // 在2xx的范围       // res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
        if (res.status === 200) { // 如果状态码是200  会执行.then的第一个函数
            return Promise.resolve(res)
        } else { //除了200 在2xx的范围 会执行.then的第二个函数  Promise.reject(res)  1
            return Promise.reject(res)
        }
    },
    err => { // 请求失败 //不在2xx的范围  // 会执行.then的第二个函数
        if (err && err.response) { //有响应 但是不在2xx的范围
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    break;
                case 401:
                    // err.message = '未授权，请重新登录';
                    MessageBox.alert("未授权，请重新登录", "提示", {
                        confirmButtonText: '确定',
                        callback: action => {
							store.commit("router/preUserId_fn", store.state.user.info.username);//保存上一个用户信息
                            
							
							Cookie.remove("token");//1 重置token'
							store.commit("user/info_fn", {//2 重置用户信息
								username: '',
								roleArr: []
							});
							store.state.router.routes = []//3 重置路由
							store.commit("router/set_pageStack", [])//4 重置页面栈
							router.push({//5 跳转登录页
								path: "/login",
							})
							
							//删除页面栈 缓存因为切换了layout和登录页面,所以自动清空了
							//let delTemp = []
							// let temp = store.state.router.pageStack.filter((item, index) => {
							// 			if ( item.meta && item.meta.fixed ) {
							// 			  return true;
							// 			} else {
							// 			  //delTemp.push(item)
							// 			  return false;
							// 			}
							// });
							// store.commit("router/set_pageStack", temp);
							//forDelTemp(delTemp)
                        }
                    })
                    break;
                case 403:
                    err.message = '拒绝访问'
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    err.message = '请求方法未允许'
                    break;
                case 408:
                    err.message = '请求超时'
                    break;
                case 500:
                    err.message = '服务器端出错'
                    break;
                case 501:
                    err.message = '网络未实现'
                    break;
                case 502:
                    err.message = '网络错误'
                    break;
                case 503:
                    err.message = '服务不可用'
                    break;
                case 504:
                    err.message = '网络超时'
                    break;
                case 505:
                    err.message = 'http版本不支持该请求'
                    break;
                default:
                    err.message = `连接错误${err.response.status}`
            }
        } else { //没有响应 请求超时 等待超过 ,会执行.then的第二个函数
            err.message = "连接到服务器失败"
        }
        Message({
            message: err.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(err.response);
    }
)




//具体的封装
export async function get(url, data = {}, other = {}) {
    if (other.tip) { //有tip的请求 必须 有catch（）判断 err 是不是 cancel 
	//MessageBox.confirm很奇怪 当点击了取消 这个提示直接中断代码 return cancel,所以后面不需要判断是cancel还收confirm'
        await MessageBox.confirm(other.tip, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        })
        return realAxios('get', url, data, other)

    } else {
        return realAxios('get', url, data, other)
    }
}


export async function post(url, data = {}, other = {}) {
    if (other.tip) { //因为会触发catch，所以有tip的请求 必须判断 err 是不是 cancel ，
	//MessageBox.confirm很奇怪 当点击了取消 这个提示直接中断代码 return cancel,所以后面不需要判断是cancel还收confirm'
        await MessageBox.confirm(other.tip, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        })
        return realAxios('post', url, data, other)

    } else {
        return realAxios('post', url, data, other)
    }
}


//最终的请求
function realAxios(method, url, data = {}, other = {}) {
    let {
        load={text:"加载中..."},//加载对象 , 每次都会使用这个对象 所以必须有默认值,默认的text 是 "正在加载中"
        code = {}
    } = other
	let {successCode = 200, needSuccessCode = true } = code
    // 加载操作
    toggleLoading(load, true)

    let headers = {
        "Authorization": Cookie.get("token") ? Cookie.get("token"):undefined,
        'Content-Type': "application/json; charset=utf-8"
    }
    let baseURL = process.env.VUE_APP_BASE_API
    return new Promise((resolve, reject) => {
        let obj;
        if (method == 'post') {
            obj = {
                method: 'post', //请求方式
                url: url, //路由
                baseURL: baseURL, //基础路由
                data: {p:encrypt(JSON.stringify(data))}, //参数
                headers: headers //请求头部
            }
        } else {
            obj = {
                method: 'get', //请求方式
                url: url, //路由
                baseURL: baseURL, //基础路由
                params: data, //参数
                headers: headers //请求头部
            }
        }
        axios(obj).then(
            res => { //原生res 包括了header
                toggleLoading(load, false, "over")
               
                if (needSuccessCode &&  successCode != res.data.code) {//判断自定义code是否相同
                    Message({
                        message: res.data.info,
                        type: 'error',
                        duration: 3 * 1000
                    })
                    reject(res.data)
                } else {
                    res.data.data = JSON.parse(decrypt(res.data.data))
                    if (other.headers) {
                        resolve(res)//之所以不返回 res.data.data  是防止在页面中使用了res.data.!data
                    } else {
                        resolve(res.data)//之所以不返回 res.data.data  是防止在页面中使用了res.data.!data
                    }
					
				}
            }
        ).catch(
            err => {
                toggleLoading(load, false,"over")
                reject(err)
            }
        )
    })
}


/* 
let other ={
	tip:'提示//删除提示
	load =: {加载动画   存在obj,必定是区域加载
		  no:true  不加载动画
		  obj : this.tableData,
		  // loading : 'loading',
		  text
	 } 	  
	code:{正确争取返回的代码
		needSuccessCode:true
		successCode:200
	}
}
*/
// 某块区域的加载loading
function toggleLoading(load, val,over) {
	if(load && load.no){
		return ;
	}
    if (load && load.obj) {//例如table的loading
        load.loading = load.loading ? load.loading : 'loading'
        load.obj[load.loading] = val
    }else{//整块main区域加载
	console.log(load.text,"load.text")
		store.commit("axios/axiosLoading_Fn",
			{
				loading:val,
				text : load.text
			}
		)
	}
}