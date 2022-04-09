let layout = () => import("@/layout/index.vue")
export default { 
    path: '/file',//修改
    name: 'file',//修改
    redirect: {name:"file-fileTable"},//修改
    component:  layout,
    meta: {
        title: '文件',//修改
        icon: 'e62a;',
    },
    children: [
        {
            path: 'fileTable',//修改
            name: 'file-fileTable',//修改
            component: () => import(/* webpackChunkName: "file-fileTable" */ "@/views/file/fileTable.vue"),//修改
            meta: {
                title: 'table文件',//修改
                icon: 'e627;',
            }
        },
        {
            path: 'up',//修改
            name: 'file-up',//修改
            component: () => import(/* webpackChunkName: "file-up" */ "@/views/file/up.vue"),//修改
            meta: {
                title: '单个文件上传',//修改
                icon: 'e627;',
            }
        },
    ]
}