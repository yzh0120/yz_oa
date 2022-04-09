let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


export default { 
    path: 'print',//修改
    name: 'print',//修改
    redirect: {name:"print-base"},//修改
    component:  blank,
	meta:{
		title: '-----',
		icon: 'e623;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'print-base',//修改
            component: () => import(/* webpackChunkName: "print-base" */ "@/views/print/base.vue"),//修改
            meta: {
                title: '打印机',//修改
                icon: 'e638;',
            }
        }
    ]
}