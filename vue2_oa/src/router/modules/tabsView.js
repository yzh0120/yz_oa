let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: '/tagsView',//修改
    name: 'tagsView',//修改
    redirect: {name:"tagsView-base"},//修改
    component:  layout,
	meta:{
		title: '标签页',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'tagsView-base',//修改
            component: () => import(/* webpackChunkName: "tagsView-base" */ "@/views/tagsView/base.vue"),//修改
            meta: {
                title: '标签页操作',//修改
                icon: 'e75d;',
            }
        }
    ]
}