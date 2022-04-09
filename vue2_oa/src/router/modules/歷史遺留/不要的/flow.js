let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


export default { 
    path: 'flow',//修改
    name: 'flow',//修改
    redirect: {name:"flow-base"},//修改
    component:  blank,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'flow-base',//修改
            component: () => import(/* webpackChunkName: "flow-base" */ "@/views/flow/base.vue"),//修改
            meta: {
                title: 'flow封装',//修改
                icon: 'e64f;',
            }
        }
    ]
}