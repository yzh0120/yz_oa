
import {
		ColorPicker,
		Collapse,
		CollapseItem,
		Descriptions,//类似于原生table
		DescriptionsItem,//类似于原生table
		Autocomplete,//自动补全
		Tooltip,//文字提示
		Image,//图片
		TabPane,//标签页
		Tabs,//标签页
		Card,//拉片
		Divider,//分割线
		Main,//布局
		DropdownItem,//下拉菜单
		DropdownMenu,//下拉菜单
		Dropdown,//下拉菜单         头部有用到
		BreadcrumbItem,// 面包屑
		Breadcrumb,// 面包屑
		Header,//布局
		Scrollbar,//滚动条
		Aside,//布局
		Container,//布局
		Drawer,//抽屉
	    Select,//选择器
	    Option,//选择器
	    OptionGroup,//选择器
	    Input,//输入框
	    InputNumber,//计数器
	    Radio,//单选
	    Tree,//树状图
	    //Dialog,//对话框
	    Row,//响应式
	    Col,//响应式
	    Checkbox,//多选框
	    CheckboxButton,//多选框
	    CheckboxGroup,//多选框
	    //Cascader,//级联选择器
	    Switch,//开关
	    Slider,//布局
	    TimeSelect,//时间选择
	    TimePicker,//时间选择
	    DatePicker,//日期选择
	    Upload,//上传
	    //Rate,//星星
	    //Transfer,//穿梭框
	    Form,//表单
	    FormItem,//表单
	    Table,//表格
	    TableColumn,//表格
	    Tag,//标签
	    Button,//按钮
	    Progress,//进度条
	    Pagination,//分页
	    Badge,//消息 标记
	    Avatar,//头像
	    Alert,//警告
	    Loading,//加载
	    Message,//消息提示
	    MessageBox,//消息提示
	    Notification,//通知
	    Menu,//导航栏
	    MenuItemGroup,//导航栏
	    MenuItem,//导航栏
	    Submenu,//导航栏
	    RadioGroup,//单选
	    RadioButton//单选
	
	} from 'element-ui'
	const element = {
	    install: function(Vue) {
			Vue.prototype.$ELEMENT = { size: 'small'};
			
			
			Vue.use(ColorPicker)
			Vue.use(Collapse)
			Vue.use(CollapseItem)
			Vue.use(DescriptionsItem)
			Vue.use(Descriptions)
			Vue.use(Autocomplete)
			Vue.use(Tooltip)
			Vue.use(Image)
			Vue.use(TabPane)
			Vue.use(Tabs)
			Vue.use(Card)
			Vue.use(Divider)
			Vue.use(Main)
			Vue.use(DropdownItem)
			Vue.use(DropdownMenu)
			Vue.use(Dropdown)
			Vue.use(BreadcrumbItem)
			Vue.use(Breadcrumb)
			Vue.use(Header)
			Vue.use(Scrollbar)
			Vue.use(Aside)
			Vue.use(Container)
			Vue.use(Drawer)
	        Vue.use(Select)
	        Vue.use(Option)
	        Vue.use(OptionGroup)
	        Vue.use(Input)
	        Vue.use(InputNumber)
	        Vue.use(Radio)
	        Vue.use(Tree)
	        // Vue.use(Dialog)
	        Vue.use(Row)
	        Vue.use(Col)
	        Vue.use(Checkbox)
	        Vue.use(CheckboxButton)
	        Vue.use(CheckboxGroup)
	        // Vue.use(Cascader)
	        Vue.use(Switch)
	        Vue.use(Slider)
	        Vue.use(TimePicker)
	        Vue.use(TimeSelect)
	        Vue.use(DatePicker)
	        Vue.use(Upload)
	        // Vue.use(Rate)
	        // Vue.use(Transfer)
	        Vue.use(Form)
	        Vue.use(FormItem)
	        Vue.use(Table)
	        Vue.use(TableColumn)
	        Vue.use(Tag)
	        Vue.use(Button)
	        Vue.use(Progress)
	        Vue.use(Pagination)
	        Vue.use(Badge)
	        Vue.use(Avatar)
	        Vue.use(Alert)
	        Vue.use(Loading)
	        Vue.use(Menu)
	        Vue.use(MenuItem)
	        Vue.use(MenuItemGroup)
	        Vue.use(Submenu)
	        Vue.use(RadioGroup)
	        Vue.use(RadioButton)
	
	
	        Vue.prototype.$message = Message;
	        Vue.prototype.$confirm = MessageBox.confirm;
	        Vue.prototype.$alert = MessageBox.alert;
	        Vue.prototype.$notify = Notification;

	    }
}

export default element 

