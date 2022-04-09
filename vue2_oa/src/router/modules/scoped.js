let layout = () => import("@/layout/index.vue")
export default { 
    path: '/scoped',//修改
    name: 'scoped',//修改
    redirect: {name:"scoped-col"},//修改
    component:  layout,
    meta: {
        title: '用户权限',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'col',//修改
            name: 'scoped-col',//修改
            component: () => import(/* webpackChunkName: "scoped-col" */ "@/views/scoped/col.vue"),//修改
            meta: {
                title: '用户看见的表格的列权限',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'btn',//修改
            name: 'scoped-btn',//修改
            component: () => import(/* webpackChunkName: "scoped-btn" */ "@/views/scoped/btn.vue"),//修改
            meta: {
                title: '用户看见的按钮权限',//修改
                icon: 'e627;',
            }
        },
    ]
}