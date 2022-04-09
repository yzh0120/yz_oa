import pageComponent from './base/page.vue'
import tablePageComponent from './base/table-page.vue'
import navTablePageComponent from './base/nav-table-page.vue'

import basePagerComponent from './inPage/base-pager.vue' //分页
import baseAlertComponent from './inPage/base-alert.vue' //弹出框
import baseFormComponent from './inPage/base-form/index.vue' //基础表单
import baseTableComponent from './inPage/base-table/base-table.vue' //基础表格
import basePanelComponent from './inPage/panel.vue' //折叠面板
import svgIconComponent from './inPage/svgIcon.vue' //svg
import detailComponent from './inPage/detail/detail.vue' //detail
import detailLinkComponent from './inPage/detail/detail-link.vue' //detail
import fileListComponent from './inPage/fileList.vue' //detail
import fileListShowComponent from './inPage/fileListShow.vue'//upload
import oneFileComponent from './inPage/oneFile.vue'//upload
import moneyInputComponent from './inPage/moneyInput.vue'//upload

export const moneyInput = {
    install: function (Vue) {
        Vue.component('moneyInput', moneyInputComponent)
    }
}

export const oneFile = {
    install: function (Vue) {
        Vue.component('oneFile', oneFileComponent)
    }
}

export const fileListShow = {
    install: function (Vue) {
        Vue.component('fileListShow', fileListShowComponent)
    }
}

export const fileList = {
    install: function (Vue) {
        Vue.component('fileList', fileListComponent)
    }
}

export const detailLink = {
    install: function (Vue) {
        Vue.component('detailLink', detailLinkComponent)
    }
}

export const detail = {
    install: function (Vue) {
        Vue.component('detail', detailComponent)
    }
}

export const svgIcon = {
    install: function (Vue) {
        Vue.component('svgIcon', svgIconComponent)
    }
}

export const basePager = {
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install: function (Vue) {
        Vue.component('pager', basePagerComponent)
    }
}



export const alert = {
    install: function (Vue) {
        Vue.component('alert', baseAlertComponent)
    }
}

export const baseForm = {
    install: function (Vue) {
        Vue.component('baseForm', baseFormComponent)
    }
}

export const baseTable = {
    install: function (Vue) {
        Vue.component('baseTable', baseTableComponent)
    }
}

export const panel = {
    install: function (Vue) {
        Vue.component('panel', basePanelComponent)
    }
}
// --------------------------------------------------------------------------------------

export const tablePage = {
    install: function (Vue) {
        Vue.component('tablePage', tablePageComponent)
    }
}

export const page = {
    install: function (Vue) {
        Vue.component('page', pageComponent)
    }
}



export const navTablePage = {
    install: function (Vue) {
        Vue.component('navTablePage', navTablePageComponent)
    }
}
