let layout = () => import("@/layout/index.vue")
export default { 
    path: '/baseForm',//修改
    name: 'baseForm',//修改
    redirect: {name:"baseForm-base"},//修改
    component:  layout,
    meta: {
        title: '封装el-form',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'base',//修改
            name: 'baseForm-base',//修改
            component: () => import(/* webpackChunkName: "baseForm-base" */ "@/views/base-form/base.vue"),//修改
            meta: {
                title: '基础表单',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'row',//修改
            name: 'baseForm-row',//修改
            component: () => import(/* webpackChunkName: "baseForm-row" */ "@/views/base-form/row-form.vue"),//修改
            meta: {
                title: '响应式表单',//修改
                icon: 'e74a;',
            }
        },
		{
		    path: 'span',//修改
		    name: 'baseForm-span',//修改
		    component: () => import(/* webpackChunkName: "baseForm-span" */ "@/views/base-form/span.vue"),//修改
		    meta: {
		        title: 'span表单',//修改
		        icon: 'e74a;',
		    }
		},
        {
            path: 'slot',//修改
            name: 'baseForm-slot',//修改
            component: () => import(/* webpackChunkName: "baseForm-slot" */ "@/views/base-form/slot-form.vue"),//修改
            meta: {
                title: '含有插槽的表单',//修改
                icon: 'e690;',
            }
        },
        {
            path: 'link',//修改
            name: 'baseForm-link',//修改
            component: () => import(/* webpackChunkName: "baseForm-link" */ "@/views/base-form/link-form.vue"),//修改
            meta: {
                title: '条件联动表单',//修改
                icon: 'ec97;',
            }
        },
		{
		    path: 'over',//修改
		    name: 'baseForm-over',//修改
		    component: () => import(/* webpackChunkName: "baseForm-over" */ "@/views/base-form/over-form.vue"),//修改
		    meta: {
		        title: '表单内容悬浮显示',//修改
		        icon: 'e637;',
		    }
		},
		{
		    path: 'inline',//修改
		    name: 'baseForm-inline',//修改
		    component: () => import(/* webpackChunkName: "baseForm-inline" */ "@/views/base-form/inline-form.vue"),//修改
		    meta: {
		        title: '行内表单',//修改
		        icon: 'e66a;',
		    }
		},
        {
		    path: 'set',//修改
		    name: 'baseForm-set',//修改
		    component: () => import(/* webpackChunkName: "baseForm-base" */ "@/views/base-form/set.vue"),//修改
		    meta: {
		        title: '设置表单的值',//修改
		        icon: 'e627;',
		    }
		},
    ]
}