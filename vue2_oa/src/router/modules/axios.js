
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: '/axios',//修改
    name: 'axios',//修改
    redirect: {name:"axios-base"},//修改
    component:  layout,
	meta:{
		title: '-----',
		icon: 'dashboard',
	},
    children: [
        {
            path: 'base',//修改
            name: 'axios-base',//修改
            component: () => import(/* webpackChunkName: "axios-base" */ "@/views/axios/base.vue"),//修改
            meta: {
                title: 'axios封装',//修改
                icon: 'dashboard',
            }
        }
    ]
}