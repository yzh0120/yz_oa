let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: 'business',//修改
    name: 'business',//修改
    redirect: {name:"business-tree"},//修改
    component:  blank,
	meta:{
		title: 'business',//修改
		icon: 'e64f;',
	},
    children: [
		{
			path: 'approve',//修改
			name: 'business-approve',//修改
			component: () => import(/* webpackChunkName: "business-approve" */ "@/views/business/approve/index.vue"),//修改
			meta: {
			    title: '审批',//修改
			    icon: 'e64f;',
			},
		},
		{
			path: 'tableFile',//修改
			name: 'business-tableFile',//修改
			component: () => import(/* webpackChunkName: "business-file" */ "@/views/business/tableFile.vue"),//修改
			meta: {
			    title: '文件上传',//修改
			    icon: 'e64f;',
			},
		},
		// {
		// 	path: 'file',//修改
		// 	name: 'business-file',//修改
		// 	component: () => import(/* webpackChunkName: "business-file" */ "@/views/business/file.vue"),//修改
		// 	meta: {
		// 	    title: '文件上传组件',//修改
		// 	    icon: 'e64f;',
		// 	},
		// },
    ]
}