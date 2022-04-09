let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


export default { 
    path: '/menu',//修改
    name: 'menu',//修改
    redirect: {name:"menu-base"},//修改
    component:  layout,
	meta:{
		title: '多级菜单',//修改
		icon: 'e64f;',
	},
    children: [
        {
            path: 'base',//修改
            name: 'menu-base',//修改
            component: () => import(/* webpackChunkName: "menu-base" */ "@/views/menu/base.vue"),//修改
            meta: {
                title: '菜单1',//修改
                icon: 'e64f;',
				// hidden:true,
            }
        },
		// {
		// 	path: 'two',//修改
		// 	name: 'menu-two',//修改
		// 	redirect: {name:"menu-two-one"},//修改
		// 	component:  blank,
		// 	meta: {
		// 	    title: '菜单2',//修改
		// 	    icon: 'e64f;',
		// 	},
		// 	children: [
		// 		{
		// 		    path: 'one',//修改
		// 		    name: 'menu-two-one',//修改
		// 		    component: () => import(/* webpackChunkName: "menu-base" */ "@/views/menu/base.vue"),//修改
		// 		    meta: {
		// 		        title: '菜单2-1',//修改
		// 		        icon: 'e64f;',
		// 				hidden:true,
		// 		    }
		// 		},
		// 		{
		// 		    path: 'two',//修改
		// 		    name: 'menu-two-two',//修改
		// 		    component: () => import(/* webpackChunkName: "menu-base" */ "@/views/menu/base.vue"),//修改
		// 		    meta: {
		// 		        title: '菜单2-2',//修改
		// 		        icon: 'e64f;',
		// 		    }
		// 		}
		// 	]
		// }
    ]
}