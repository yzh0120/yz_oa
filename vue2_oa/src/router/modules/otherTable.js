let layout = () => import("@/layout/index.vue")
export default { 
    path: '/otherTable',//修改
    name: 'otherTable',//修改
    redirect: {name:"otherTable-shu"},//修改
    component:  layout,
    meta: {
        title: '其他表格',//修改
        icon: 'e62a;',
    },
    children: [
        {
		    path: 'shu',//修改
		    name: 'otherTable-shu',//修改
		    component: () => import(/* webpackChunkName: "otherTable-shu" */ "@/views/otherTable/element-shu.vue"),//修改
		    meta: {
		        title: 'element竖向table',//修改
		        icon: 'e63f;',
		    }
		},
		{
		    path: 'shu-vxe',//修改
		    name: 'otherTable-shu-vxe',//修改
		    component: () => import(/* webpackChunkName: "otherTable-shu" */ "@/views/otherTable/vxe-shu.vue"),//修改
		    meta: {
		        title: 'vxe竖向table',//修改
		        icon: 'e63f;',
		    }
		},
		{
		    path: 'table',//修改
		    name: 'otherTable-table',//修改
		    component: () => import(/* webpackChunkName: "otherTable-table" */ "@/views/otherTable/table.vue"),//修改
		    meta: {
		        title: '原生table',//修改
		        icon: 'e63f;',
		    }
		},
    ]
}