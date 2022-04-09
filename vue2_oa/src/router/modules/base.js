let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属
export default { 
    path: '/base',//修改
    name: 'base',//修改
    redirect: {name:"base-where"},//修改
    component:  layout,
    meta: {
        title: '前端基础',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'where',//修改
            name: 'base-where',//修改
            component: blank,
            meta: {
                title: '位置',//修改
                icon: 'e627;',
            },
			children: [
				{
				    path: 'dom',//修改
				    name: 'base-where-dom',//修改
				    component: () => import(/* webpackChunkName: "base-where-dom" */ "@/views/base/where/dom/index.vue"),//修改
				    meta: {
				        title: 'dom的位置',//修改
				        icon: 'e627;',
				    }
				},
				{
				    path: 'mouse',//修改
				    name: 'base-where-mouse',//修改
				    component: () => import(/* webpackChunkName: "base-where-mouse" */ "@/views/base/where/mouse/index.vue"),//修改
				    meta: {
				        title: '鼠标的位置',//修改
				        icon: 'e627;',
				    }
				}
			]
        },
		
		{
		    path: 'event',//修改
		    name: 'base-event',//修改
		    component: blank,
		    meta: {
		        title: '事件',//修改
		        icon: 'e627;',
		    },
			children: [
				{
				    path: 'move',//修改
				    name: 'base-event-move',//修改
				    component: () => import(/* webpackChunkName: "move" */ "@/views/base/event/mouseEvent/move.vue"),//修改
				    meta: {
				        title: '鼠标move事件',//修改
				        icon: 'e627;',
				    }
				},
				{
				    path: 'mouseover',//修改
				    name: 'base-event-mouseover',//修改
				    component: () => import(/* webpackChunkName: "mouseover" */ "@/views/base/event/mouseEvent/mouseover.vue"),//修改
				    meta: {
				        title: '鼠标mouseover事件',//修改
				        icon: 'e627;',
				    }
				},
				{
				    path: 'mouseenter',//修改
				    name: 'base-event-mouseenter',//修改
				    component: () => import(/* webpackChunkName: "mouseenter" */ "@/views/base/event/mouseEvent/mouseenter.vue"),//修改
				    meta: {
				        title: '鼠标mouseenter事件',//修改
				        icon: 'e627;',
				    }
				},
				{
				    path: 'mousewheel',//修改
				    name: 'base-event-mousewheel',//修改
				    component: () => import(/* webpackChunkName: "mousewheel" */ "@/views/base/event/mouseEvent/mousewheel.vue"),//修改
				    meta: {
				        title: '鼠标mousewheel事件',//修改
				        icon: 'e627;',
				    }
				},
			]
		},
       
	   {
		 path: 'css',//修改
		 name: 'base-css',//修改
		 component: blank,
		 meta: {
		     title: 'css',//修改
		     icon: 'e627;',
		 },  
		 children: [
		     {
		         path: 'three',//修改
		         name: 'base-css-three',//修改
		         component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/three.vue"),//修改
		         meta: {
		             title: '三角形',//修改
		             icon: 'e64f;',
		         }
		     },
		 	{
		 	    path: '0.5px',//修改
		 	    name: 'base-css-0.5px',//修改
		 	    component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/0.5px.vue"),//修改
		 	    meta: {
		 	        title: '0.5px',//修改
		 	        icon: 'e64f;',
		 	    }
		 	},
		 	{
		 	    path: 'filter',//修改
		 	    name: 'base-css-filter',//修改
		 	    component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/filter.vue"),//修改
		 	    meta: {
		 	        title: 'filter',//修改
		 	        icon: 'e64f;',
		 	    }
		 	},
			{
			    path: 'drag',//修改
			    name: 'base-css-drag',//修改
			    component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/drag.vue"),//修改
			    meta: {
			        title: 'drag',//修改
			        icon: 'e64f;',
			    }
			},
			{
			    path: 'scrollIntoView',//修改
			    name: 'base-css-scrollIntoView',//修改
			    component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/scrollIntoView.vue"),//修改
			    meta: {
			        title: '跳转',//修改
			        icon: 'e64f;',
			    }
			},
			
			// {
			//     path: 'transition',//修改
			//     name: 'base-css-vue-transition-transition',//修改
			//     component: () => import(/* webpackChunkName: "css-base" */ "@/views/base/css/vue/transition.vue"),//修改
			//     meta: {
			//         title: '单个元素transition',//修改
			//         icon: 'e64f;',
			//     }
			// },
			
			{
			    path: 'vue-transition',//修改
			    name: 'base-css-vue-transition',//修改
			    component: blank,
			    meta: {
			        title: 'vue过渡',//修改
			        icon: 'e64f;',
			    },
				children:[
					{
					    path: 'transition',//修改
					    name: 'base-css-vue-transition-transition',//修改
					    component: () => import(/* webpackChunkName: "base-css-vue-transition-transition" */ "@/views/base/css/vue/transition.vue"),//修改
					    meta: {
					        title: '单个元素transition',//修改
					        icon: 'e64f;',
					    }
					},
					{
					    path: 'transitionGroup',//修改
					    name: 'base-css-vue-transition-transitionGroup',//修改
					    component: () => import(/* webpackChunkName: "base-css-vue-transition-transitionGroup" */ "@/views/base/css/vue/transitionGroup.vue"),//修改
					    meta: {
					        title: 'transitionGroup',//修改
					        icon: 'e64f;',
					    }
					},
				]
			}
		 ]
	   }
    ]
}