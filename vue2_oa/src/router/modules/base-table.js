let layout = () => import("@/layout/index.vue")


export default { 
    path: '/baseTable',//修改
    name: 'baseTable',//修改
    redirect: {name:"baseTable-base"},//修改
    component:  layout,
    meta: {
        title: '封装el-table',//修改
        icon: 'ebe8;',
    },
    children: [
        {
            path: 'base',//修改
            name: 'baseTable-base',//修改
            component: () => import(/* webpackChunkName: "baseTable-base" */ "@/views/base-table/base.vue"),//修改
            meta: {
                title: '基础表格',//修改
                icon: 'ebe8;',
            }
        },
        {
            path: 'formatter',//修改
            name: 'baseTable-formatter',//修改
            component: () => import(/* webpackChunkName: "baseTable-formatter" */ "@/views/base-table/formatter-table.vue"),//修改
            meta: {
                title: '格式化字段的表格',//修改
                icon: 'e630;',
            }
        },
        {
            path: 'slot',//修改
            name: 'baseTable-slot',//修改
            component: () => import(/* webpackChunkName: "baseTable-slot" */ "@/views/base-table/slot-table.vue"),//修改
            meta: {
                title: '插槽的表格',//修改
                icon: 'e690;',
            }
        },
        {
            path: 'checkbox',//修改
            name: 'baseTable-checkbox',//修改
            component: () => import(/* webpackChunkName: "baseTable-checkbox" */ "@/views/base-table/checkbox-table.vue"),//修改
            meta: {
                title: '多选的表格',//修改
                icon: 'e669;',
            }
        },
  //       {
  //           path: 'pager',//修改
  //           name: 'baseTable-pager',//修改
  //           component: () => import(/* webpackChunkName: "baseTable-pager" */ "@/views/base-table/pager-table.vue"),//修改
  //           meta: {
  //               title: '和分页同步的表格',//修改
  //               icon: 'e706;',
  //           }
  //       },
		{
		    path: 'moreHead',//修改
		    name: 'baseTable-MoreHead',//修改
		    component: () => import(/* webpackChunkName: "baseTable-MoreHead" */ "@/views/base-table/moreHead.vue"),//修改
		    meta: {
		        title: '多级表头',//修改
		        icon: 'e636;',
		    }
		},
		{
		    path: 'sort',//修改
		    name: 'baseTable-sort',//修改
		    component: () => import(/* webpackChunkName: "baseTable-sort" */ "@/views/base-table/sort-table.vue"),//修改
		    meta: {
		        title: '表格排序',//修改
		        icon: 'e64e;',
		    }
		},
		{
		    path: 'sum',//修改
		    name: 'baseTable-sum',//修改
		    component: () => import(/* webpackChunkName: "baseTable-sum" */ "@/views/base-table/sum-table.vue"),//修改
		    meta: {
		        title: '合计',//修改
		        icon: 'e635;',
		    }
		},
		{
		    path: 'tip',//修改
		    name: 'baseTable-tip',//修改
		    component: () => import(/* webpackChunkName: "baseTable-tip" */ "@/views/base-table/tip-table.vue"),//修改
		    meta: {
		        title: '内容溢出隐藏并悬浮显示',//修改
		        icon: 'e637;',
		    }
		},
		{
		    path: 'fixed',//修改
		    name: 'baseTable-fixed',//修改
		    component: () => import(/* webpackChunkName: "baseTable-fixed" */ "@/views/base-table/fixed-table.vue"),//修改
		    meta: {
		        title: '固定列',//修改
		        icon: 'e63f;',
		    }
		},
		{
		    path: 'hover-other',//修改
		    name: 'baseTable-hover',//修改
		    component: () => import(/* webpackChunkName: "baseTable-hover" */ "@/views/base-table/hover-other.vue"),//修改
		    meta: {
		        title: '悬浮显示其他字段',//修改
		        icon: 'e63f;',
		    }
		},
		
		{
		    path: 'expand',//修改
		    name: 'baseTable-expand',//修改
		    component: () => import(/* webpackChunkName: "baseTable-expand" */ "@/views/base-table/expand.vue"),//修改
		    meta: {
		        title: '展开行',//修改
		        icon: 'e63f;',
		    }
		},
		{
		    path: 'tree',//修改
		    name: 'baseTable-tree',//修改
		    component: () => import(/* webpackChunkName: "baseTable-tree" */ "@/views/base-table/tree.vue"),//修改
		    meta: {
		        title: 'tree表格',//修改
		        icon: 'e63f;',
		    }
		},

    ]
}