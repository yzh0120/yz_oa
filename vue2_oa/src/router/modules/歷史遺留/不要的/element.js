let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

export default { 
    path: 'element',//修改
    name: 'element',//修改
    redirect: {name:"element-tree"},//修改
    component:  blank,
	meta:{
		title: 'element',//修改
		icon: 'e64f;',
	},
    children: [
		{
			path: 'checkbox',//修改
			name: 'element-checkbox',//修改
			component: () => import(/* webpackChunkName: "element-checkbox" */ "@/views/element/checkbox.vue"),//修改
			meta: {
			    title: 'checkbox',//修改
			    icon: 'e64f;',
			},
		},
		{
			path: 'addForm',//修改
			name: 'element-addForm',//修改
			component: () => import(/* webpackChunkName: "element-file" */ "@/views/element/addForm/index.vue"),//修改
			meta: {
			    title: '动态表单',//修改
			    icon: 'e64f;',
			},
		},
        {
            path: 'tree',//修改
            name: 'element-tree',//修改
            component: blank,//修改
			redirect: {name:"element-tree-base"},//修改
            meta: {
                title: 'tree',//修改
                icon: 'e64f;',
            },
			children:[
				{
					path: 'base',//修改
					name: 'element-tree-base',//修改
					component: () => import(/* webpackChunkName: "element-tree-base" */ "@/views/element/tree/base.vue"),//修改
					meta: {
					    title: '基础tree',//修改
					    icon: 'e64f;',
					},
				},
				{
					path: 'loading',//修改
					name: 'element-tree-loading',//修改
					component: () => import(/* webpackChunkName: "element-tree-loading" */ "@/views/element/tree/loading.vue"),//修改
					meta: {
					    title: '动态加载tree',//修改
					    icon: 'e64f;',
					},
				},
				{
					path: 'checkbox',//修改
					name: 'element-tree-checkbox',//修改
					component: () => import(/* webpackChunkName: "element-tree-checkbox" */ "@/views/element/tree/checkbox.vue"),//修改
					meta: {
					    title: '复选框tree',//修改
					    icon: 'e64f;',
					},
				}
			]
        }
    ]
}