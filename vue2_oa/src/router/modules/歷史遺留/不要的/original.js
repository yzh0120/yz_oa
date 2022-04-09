let layout = () => import("@/layout/index.vue")

let blank = () => import("@/views/blank.vue")
export default { 
		path: 'original',
		name: 'original',
		redirect: {name:"originalWhere"},
		component:  blank,
		meta: {
			title: '原生',
			icon: 'e64f;',
		},
		children: [
			
			{
				path: 'where',
				name: 'originalWhere',
				component: blank,
				redirect:{name:'originalWhereDomWhere'},
				meta: {
					title: '位置',
					icon: 'e64f;',
				},
				children: [
					
					{
						path: 'domWhere',
						name: 'originalWhereDomWhere',
						component: () => import(/* webpackChunkName: "about" */ "@/views/original/where/domWhere/index.vue"),
						meta: {
							title: 'dom在文档或者窗口的位置',
							icon: 'e64f;',
						}
					},
					{
						path: 'mouseWhere',
						name: 'originalWhereMouseWhere',
						component: () => import(/* webpackChunkName: "about" */ "@/views/original/where/mouseWhere/index.vue"),
						meta: {
							title: '鼠标在文档或者窗口的位置',
							icon: 'e64f;',
						}
					},
				]
			},
			{
				path: 'event',
				name: 'originalEvent',
				component: blank,
				redirect:{name:'originalEventMouseEvent'},
				meta: {
					title: '事件',
					icon: 'e64f;',
				},
				children: [
					{
						path:'mouseEvent',
						name:'originalEventMouseEvent',
						component:()=>import('@/views/original/event/mouseEvent/index.vue'),
						meta: {
							title: '鼠标事件',
							icon: 'e64f;',
						},
					}
				]
			},
		]
}