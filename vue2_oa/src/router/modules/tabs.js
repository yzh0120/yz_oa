let layout = () => import("@/layout/index.vue")
export default { 
    path: '/tabs',//修改
    name: 'tabs',//修改
    redirect: {name:"tabs-one"},//修改
    component:  layout,
    meta: {
        title: '封装切换框',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'base',//修改
            name: 'tabs-one',//修改
            component: () => import(/* webpackChunkName: "tabs-one" */ "@/views/tabs/one.vue"),//修改
            meta: {
                title: '平分宽度的切换框',//修改
                icon: 'e627;',
            }
        },
        // {
        //     path: 'msg',//修改
        //     name: 'alert-msg',//修改
        //     component: () => import(/* webpackChunkName: "alert-msg" */ "@/views/alert/msg.vue"),//修改
        //     meta: {
        //         title: '信息弹窗',//修改
        //         icon: 'e627;',
        //     }
        // }
    ]
}