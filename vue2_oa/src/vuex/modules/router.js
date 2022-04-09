import baseRoutes from '@/router/routes'

import type from '@/tools/fn/base/type'
import deepClone from '@/tools/fn/base/deepClone'


let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属




export default {
	namespaced: true, //带命名空间
	state: {
		routes: [], //角色的路由   baseRouter + 后台返回的shuju  作用在侧边栏是permission
		pageStack: [], //页面栈
		addRoutes: [], //没啥用
		elMainLoading: false, //路由跳转
		//缓存实例
		keepAliveComponentInstance: {},
		
		preRoute: null,//最后的路由
		preUserId: undefined,//上一个用户的的id
		selectedTagPath: {}, //当前路由，或者右键选择的路由
	},

	mutations: {
		set_selectedTagPath(state, params) {
			state.selectedTagPath = params
		},
		preUserId_fn(state, params){
			state.preUserId = params
		},
		preRoute_fn(state, params) {
			if (params && params.name !== 'login' && params.name !== '404' && params.name !== '401') {
				state.preRoute = params
			} else {

			}
		},
		keepAliveComponentInstance_fn(state, params) {
			state.keepAliveComponentInstance = params
		},
		add_pageStack(state, params) { //增加一个路由对象	进入页面
			let flag = state.pageStack.every((item, index) => {
				if (item.path == params.path) {
					let xxx = deepClone(item)
					xxx.query = params.query
					// xxx.params = params.params  只需要query 和 写在path里的params就可以了
					state.pageStack.splice(index, 1, xxx)
					return false //数组里面存在相同的path
				} else {
					return true //新的path
				}
			})
			if (flag) {//如果 页面栈里面没有 此路由则可以添加进
				state.pageStack.push(params)
			} 
			
			// setItem(state.pageStack)
		},
		set_pageStack(state, params) { //设置页面栈 
			state.pageStack = params
			
			// setItem(state.pageStack)
		},
		set_routes: (state, params) => { //路由合并 仅触发一次
			state.addRoutes = params //这个没啥用
			state.routes = baseRoutes.concat(params)


			getFixed(state.routes) //获取 固定页面
			fatherPathToPath(fixedRoutes)//将固定页面的fatherPath 赋值给 path 
			state.pageStack = state.pageStack.concat(fixedRoutes) //在页面栈添加固定页
			fixedRoutes = []//退出登录重置
			//可以添加会话的历史记录,也是session记录的开关,不需要隐藏上面的代码
			//state.pageStack = state.pageStack.concat(getItem()) 
		},
	},
	actions: {
		//第一次登录的时候获取 角色的权限相匹配的路由
		asyncRoutes({
			commit
		}, user_route) {
			return new Promise(resolve => {
				// let xxx = [{
				// 	path: '/axios1', //修改
				// 	name: 'axios1', //修改
				// 	redirect: {
				// 		name: "axios1-base"
				// 	}, //修改
				// 	component: "layout",
				// 	children: [{
				// 		path: 'base', //修改
				// 		name: 'axios1-base', //修改
				// 		component: "axios/base", //修改
				// 		meta: {
				// 			title: 'axios封装', //修改
				// 			icon: 'e64f;',
				// 		}
				// 	}]
				// }]
				
				//let accessedRoutes = change(translateDataToTree(user_route))   //后台返回的字段不一样,且是一维数组 
				let accessedRoutes = user_route ? user_route : []//只是临时用而已
				commit('set_routes', accessedRoutes) //给侧边栏是permission
				resolve(filterAsyncRoutes(accessedRoutes)) //给 route 此时需要转换
			})
		},

	},
}




/* 异步添加********************************************************************************** */
// 可选
// 1 将后台返回的数据转换为树形结构
function translateDataToTree(data) {
  let parents = data.filter(value => value.parentId == 'undefined' || value.parentId == null || value.parentId == 0)
  let children = data.filter(value => value.parentId !== 'undefined' && value.parentId != null && value.parentId != 0)
  let translator = (parents, children) => {
    parents.forEach((parent) => {
      children.forEach((current, index) => {
        if (current.parentId === parent.moduleId) {
          let temp = JSON.parse(JSON.stringify(children))
          temp.splice(index, 1)
          translator([current], temp)
          typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
        }
      })
    })
  }

  translator(parents, children)
  return parents
}

//递归后台传来的多维路由，替换字段
function change(asyncRouterMap) { 
  let arr = [];
  asyncRouterMap.filter(route => {
    let obj = {
      meta: {}
    };
    if (route.target) {
      obj.name = route.enCode
      obj.meta.title = route.fullName
      obj.meta.icon = route.icon
      // obj.meta.noCache = false
      obj.path = route.urlAddress
      obj.hidden = !route.isMenu
      obj.component = route.target
    }
    // console.log(route.children, "obj.children")
    if (route.children && route.children.length) {
      obj.children = change(route.children)

    }
    arr.push(obj)
    return true
  })
  return arr
}


const _import = require('@/router/_import_')

function filterAsyncRoutes(routes) {
	const res = []

	routes.filter(route => {
		const tmp = {
			...route
		}
		if (tmp.component == "layout") { //布局
			tmp.component = layout;
		} else if(tmp.component == "blank"){
			tmp.component = blank;
		}else {
			tmp.component = _import(tmp.component)
		}

		if (tmp.children && tmp.children.length) {
			tmp.children = filterAsyncRoutes(tmp.children)
		}
		res.push(tmp)
		return true
	})
	return res
}

/* 获取固定路由**固定页面 
不支持 保存query** 但是session保存的页面支持 ???? (退出登录 刷新页面 都可以保存query)****************************************************************************** */
// 递归
let fixedRoutes = [] //固定路由

function fatherPathToPath(routes) {
      routes.forEach((item) => {
        //迭代
		
		if(item.selfPath){
			item.selfPath = item.selfPath.replace("//","/")
		}
		
        item.path = item.selfPath;
        if (item.children) {
          fatherPathToPath(item.children);
        }
      });
    }

function getFixed(routes,fatherPath) {
	routes.forEach((item) => { //迭代
	    let path  = item.path;
		if(!path.includes("/")){
			path = "/"+path
		}
		if (fatherPath) {
	        item.selfPath = fatherPath + path;
	    } else {
	        item.selfPath = path;
	    }
		if (item.meta && item.meta.fixed && !item.meta.hidden) {
			fixedRoutes.push(deepClone(item))
		}
		if (item.children) {
			getFixed(item.children,item.selfPath)
		}
	})
	// fixedRoutes.forEach((item) => { //添加固定路由
	// 	item.fullPath = item.path = item.meta.fixed
	// })
}
/* 会话存储页面栈********************************************************************************** */
function setItem(value){
	let arr = []
	value.forEach((item)=>{
		let obj = {}
		obj.path = item.path
		obj.name = item.name
		obj.query = deepClone(item.query)
		obj.meta = deepClone(item.meta)
		// obj.matched = deepClone(item.matched)
		arr.push(obj)
	})
	
	sessionStorage.setItem("page",JSON.stringify(arr))
}
function getItem(){
	let arr = [] 
	let returnArr = [] 
	if(JSON.parse(sessionStorage.getItem("page"))){
		arr = JSON.parse(sessionStorage.getItem("page"))
		
		arr.forEach((item1,index1)=>{//过滤固定页面
			if(
				fixedRoutes.every((item2,index2)=>{
					return item1.path != item2.path
				})
			)
			{
				returnArr.push(item1)
			}
			
		})
		// console.log(returnArr,'-----------------0000')
	}else{
		returnArr = []
	}
	return returnArr
}
