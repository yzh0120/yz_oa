let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属

// import business from "./business.js"
// import original from "./original.js"
import css from "./css.js"
// import element from "./element.js"
// import scope from "./scope.js"
// import socket from "./socket.js"
// import flow from "./flow.js"
// import tagsView from "./tagsView.js"
// import bigNumber from "./bigNumber.js"
// // import axios from "./axios.js"
import print from "./print.js"

export default { 
	path:"/other",
	name:"other",
	redirect: {name:"bigNumber-base"},//修改
	component:  layout,
	meta:{
		title: '其他的',
		icon: 'e64f;',
	},
	children:[
		// business,
		// original,
		css,
		// element,
		// scope,
		// socket,
		// flow,
		// tagsView,
		// bigNumber,
		// axios,
		print
	],
}