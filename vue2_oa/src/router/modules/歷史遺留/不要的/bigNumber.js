let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: 'bigNumber',//修改
    name: 'bigNumber',//修改
    redirect: {name:"bigNumber-base"},//修改
    component:  blank,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'bigNumber-base',//修改
            component: () => import(/* webpackChunkName: "bigNumber-base" */ "@/views/bigNumber/base.vue"),//修改
            meta: {
                title: 'js运算精度丢失',//修改
                icon: 'e6fc;',
            }
        }
    ]
}