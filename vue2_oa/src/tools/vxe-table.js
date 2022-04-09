import {
	// VXETable,//核心
	
	// // 功能模块
	// Header,//头部
	// Footer,//尾部
	Icon,//图标
	// Filter,//过滤
	// Edit,//编辑
	// Menu,//菜单
	// Export,//导出
	// Keyboard,
	// Validator,//校验
	
	//可选组件
    Modal,//弹窗
	// Column,//列
	Table,//表格
	Grid,//高级表格
	// Toolbar,//工具栏
	// Button,//按钮
	// Input,//输入框
	// Textarea,//文本域
	// Select,//下拉框
	// Optgroup,
	// Option,
	// Switch,//开关
	
	
} from 'vxe-table'



const vxeTable = {
	install: function(Vue) {
		// Vue.use(VXETable)
		// Vue.use(Footer)
		// Vue.use(Header)
		Vue.use(Icon)
		// Vue.use(Filter)//vxe.error.useErr
		// Vue.use(Edit)//vxe.error.useErr
		// Vue.use(Menu)//vxe.error.useErr
		// Vue.use(Export)//vxe.error.useErr
		// Vue.use(Keyboard)//vxe.error.useErr
		// Vue.use(Validator)//vxe.error.useErr
		
		//可选组件
		Vue.use(Modal)
		// Vue.use(Column)
		Vue.use(Table)
		Vue.use(Grid)
		// Vue.use(Toolbar)
		// Vue.use(Button)
		// Vue.use(Input)
		// Vue.use(Textarea)
		// Vue.use(Select)
		// Vue.use(Optgroup)
		// Vue.use(Option)
		// Vue.use(Switch)

		
	}
	
}
export default vxeTable 


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