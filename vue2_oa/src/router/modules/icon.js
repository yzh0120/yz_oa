
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: '/icon',//修改
    name: 'icon',//修改
    redirect: {name:"icon-base"},//修改
    component:  layout,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'icon-base',//修改
            component: () => import(/* webpackChunkName: "icon-base" */ "@/views/icon/base.vue"),//修改
            meta: {
                title: '图标',//修改
                icon: 'e64f;',
            }
        }
    ]
}