let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


export default { 
    path: '/party',//修改
    name: 'party',//修改
    // redirect: {name:"print-base"},//修改
    component:  layout,
	meta:{
		title: '单位组织',
		icon: 'e623;',
	},
    children: [
        {
            path: 'role',//修改
            name: 'party/role',//修改
            component: () => import(/* webpackChunkName: "print-base" */ "@/views/party/role.vue"),//修改
            meta: {
                title: '角色管理',//修改
                icon: 'e638;',
            }
        }
    ]
}