import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store' //vuex

Vue.config.productionTip = false
/**VueSocketIO*************************************************************************************/
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true, //开启debug模式
  connection: 'http://localhost:4000', //连接地址
  options: {
    autoConnect: false, //是否一进网站就链接socket
    query: {
      token: ''
    },
  },
}))


import common from  "@/scss/common/variable.scss"
import layout from  "@/scss/layout/variable.scss"
// console.log(common,layout,"------------------",tablePage)
Vue.prototype.h = `calc(100vh - 114px - ${common.normal_spacingt}  - ${layout.tags_view_item} - 23px - ${layout.head_top_height} - 20px - 40px)`

// import dayjs from 'dayjs'
// Vue.prototype.$day = dayjs

/**VCharts*************************************************************************************/
// import VCharts from 'v-charts'
// Vue.use(VCharts)

import 'echarts/lib/component/dataZoom'
import 'v-charts/lib/style.css'

import VeLine from 'v-charts/lib/line'
Vue.component(VeLine.name,VeLine)
import histogram from 'v-charts/lib/histogram'
Vue.component(histogram.name,histogram)
import pie from 'v-charts/lib/pie'
Vue.component(pie.name,pie)

/**element ui 按需引入*************************************************************************************/
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'//隐藏类
import element from './tools/element.js'
Vue.use(element)

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css';
// Vue.use(ElementUI);

/**vxe-table 按需引入*************************************************************************************/
//import XEUtils from 'xe-utils'
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'
// Vue.use(VXETable)
// VXETable.setup({
// 	size:"small",
// 	table: {
// 		border: true,//显示边框
// 		stripe: true,//斑马线
// 		resizable: true,//手动改变列宽度
// 		showOverflow: true,//溢出悬浮
// 		align: 'center',//居中
// 		highlightCurrentRow:true,//高亮当前行
// 		//height:"auto",//高度自适应父容器 没有这个选项
// 		showFooter: true,//显示底部
// 	},
// })
//按需引入
import XEUtils from 'xe-utils'
import $vxeTable from './tools/vxe-table.js'
Vue.use($vxeTable)



//阿里云图标
import '@/assets/css/icon.css'
/**axios*************************************************************************************/


/***************************************************************************************/
//原始正则
// import * as $reg from "@/tools/reg/index.js"
// Vue.prototype.$reg = $reg

//elementUI框架的表单校验
import * as $check from "@/tools/check/index.js"
Vue.prototype.$check = $check
/***************************************************************************************/
//基础的自定义组件
import * as baseComponents from '@/native/Components/index'
Object.keys(baseComponents).forEach(key => {
  Vue.use(baseComponents[key])
})

/**自动引入*************************************************************************************/
//基础的工具函数
const MF_fn = require.context('@/tools/fn/base', true, /\.js$/)
const fn_obj = MF_fn.keys().reduce((preRes, currentItem) => {
  const moduleName = currentItem.replace(/^\.\/(.*)\.\w+$/, '$1') //文件名
  const ES6module = MF_fn(currentItem) //返回一个文件的暴露的modules
  preRes[moduleName] = ES6module.default // 这里是 export default才会有default,如果是export  就没有default了
  return preRes
}, {})
Vue.prototype.$fn = fn_obj

//api
import api from "@/axios/index"
Vue.prototype.$api = api

//基础的自定义指令
const MF_directives = require.context('@/native/Directives/base', true, /\.js$/)
MF_directives.keys().reduce((preRes, currentItem) => {
  const moduleName = currentItem.replace(/^\.\/(.*)\.\w+$/, '$1') //文件名
  const ES6module = MF_directives(currentItem) //返回一个文件的暴露的modules
  Vue.directive(moduleName, ES6module.default) // 这里是 export default才会有default,如果是export  就没有default了
}, {})

//基础的mixins
const MF_mixins = require.context('@/native/Mixins/base', true, /\.js$/)
MF_mixins.keys().reduce((preRes, currentItem) => {
  const moduleName = currentItem.replace(/^\.\/(.*)\.\w+$/, '$1') //文件名
  const ES6module = MF_mixins(currentItem) //返回一个文件的暴露的modules
  Vue.mixin(ES6module.default) // 这里是 export default才会有default,如果是export  就没有default了
}, {})

//基础的Filters
const MF_filters = require.context('@/native/Filters/base', true, /\.js$/)
MF_filters.keys().reduce((preRes, currentItem) => {
  const moduleName = currentItem.replace(/^\.\/(.*)\.\w+$/, '$1') //文件名
  const ES6module = MF_filters(currentItem) //返回一个文件的暴露的modules
  Vue.filter(moduleName, ES6module.default) // 这里是 export default才会有default,如果是export  就没有default了
}, {})

new Vue({
  router,
  store, //会自动挂载在vue的原型链上 $store
  render: h => h(App)
}).$mount('#app')
