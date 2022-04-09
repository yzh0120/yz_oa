/* 
 VUE 路由守卫 next() / next({ ...to, replace: true }) / next(‘/‘) 说明
 https://blog.csdn.net/qq_41912398/article/details/109231418
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes.js'
import store from '@/vuex/store' //vuex
import api from "@/axios/index"
import { Loading } from "element-ui"; //ui提示
import * as Cookie from "@/tools/cookjs.js"

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

let whiteListName = ["login", "404", "401"] //白名单

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
router.afterEach((to, from)=>{
	store.state.router.elMainLoading = false
})
router.beforeEach(async (to, from, next) => {
	store.state.router.elMainLoading = true
	if (to.matched.length === 0) { //前往的路由不存在
		//from.fullPath ? next({name: from.fullPath}) : next('/404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
		next('/404')//中断当前导航的afterEach,又进入一次路由守卫的beforeEach,等待 next()放行
	} else {//前往的路由存在
		if (Cookie.get("token")) { //如果浏览器有token
			// if(true){
			if (to.path === '/login') { //如果去登录页 直接跳转首页
				next({path: '/'})//中断当前导航的afterEach,又进入一次路由守卫的beforeEach,等待 next()放行
			} else { //有token 去非登录页 
				if(!store.state.router.routes.length){//动态路由 角色路由是[],説明未登錄
					let other = {
						load:{
							text:"正在获取用户信息",
							no:true,
						}
					}
					let loadingInstance = Loading.service({
					  lock: true,
					  text: "多接口加载中",
					  // spinner: "el-icon-loading",
					  background: "rgba(255, 255, 255, 0.7)",
					});
					// let arr =await Promise.all([
					Promise.all([
						api.user.getUserInfo({},other),//token 在头部
						new Promise((resolve )=>{
							setTimeout(function(){
								resolve('随便什么数据');
							}, 1);
						}),
					])
					.then((arr)=>{
						// this.$nextTick(() => {
						  // 以服务的方式调用的 Loading 需要异步关闭
						  loadingInstance.close();
						// });
						store.commit("user/info_fn", arr[0].data)//保存用户信息
						store.dispatch('router/asyncRoutes',arr[1].data).then((accessRoutes)=>{//保存路由
							router.addRoutes(accessRoutes)
							next({...to,replace: true})//如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next)直到其中的next({ ...to})能找到对应的路由为止。
						})
					})
					
				} else {
					next()//放行
				}
			}
		} else { //如果没有token
			if (whiteListName.indexOf(to.name) !== -1) { //白名单
				next()//放行
			} else { //非白名单，跳转登录页
				next(`/login`)//中断当前导航的afterEach,又进入一次路由守卫的beforeEach,等待 next()放行
			}
		}

	}




})

export default router
