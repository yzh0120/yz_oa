let layout = () => import("@/layout/index.vue")
export default { 
    path: '/panel',//修改
    name: 'panel',//修改
    redirect: {name:"panel-base"},//修改
    component:  layout,
    meta: {
        title: '封装伸缩框',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'base',//修改
            name: 'panel-base',//修改
            component: () => import(/* webpackChunkName: "panel-base" */ "@/views/panel/base.vue"),//修改
            meta: {
                title: '基础伸缩框',//修改
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