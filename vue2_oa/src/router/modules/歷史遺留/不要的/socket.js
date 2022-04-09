let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: 'socket',//修改
    name: 'socket',//修改
    redirect: {name:"socket-base"},//修改
    component:  blank,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'socket-base',//修改
            component: () => import(/* webpackChunkName: "socket-base" */ "@/views/socket/base.vue"),//修改
            meta: {
                title: 'socket封装',//修改
                icon: 'e64f;',
            }
        }
    ]
}