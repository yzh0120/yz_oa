let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: 'scope',//修改
    name: 'scope',//修改
    redirect: {name:"scope-base"},//修改
    component:  blank,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'scope-base',//修改
            component: () => import(/* webpackChunkName: "scope-base" */ "@/views/scope/base.vue"),//修改
            meta: {
                title: '不同角色权限管理',//修改
                icon: 'e612;',
            }
        }
    ]
}