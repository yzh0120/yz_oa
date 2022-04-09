let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


export default { 
    path: '/system',//修改
    name: 'system',//修改
    // redirect: {name:"print-base"},//修改
    component:  layout,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'menu',//修改
            name: 'system/menu',//修改
            component: () => import(/* webpackChunkName: "print-base" */ "@/views/system/menu.vue"),//修改
            meta: {
                title: '菜单管理',//修改
                icon: 'e638;',
            }
        }
    ]
}