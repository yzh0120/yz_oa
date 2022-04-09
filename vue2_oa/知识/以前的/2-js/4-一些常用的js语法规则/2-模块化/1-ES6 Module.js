1: ES6 模块是在编译期加载模块.在js引擎运行期之前,当然无法处理带有表达式的import 如：import { 'f' + 'oo' } from 'my_module',
2: ES6 模块定义在作用域最外层,
3: ES6 模块的变量是只读的动态映射,在导入的文件中无权修改模块,但可以通过模块暴露的函数动态改变引入变量,
4: ES6 模块的js无权访问任何普通文件的变量


<1> ES6 Module 两种不同的暴露模块
	(1) 
	暴露阶段: let key2  = '这是key2'
		  export {key1,key2}
	引入阶段: import {key1,key2} from './2.js';
			import * as moduleAll from './3.js'  //整个引入  moduleAll.a   moduleAll.b
	
	(2) 
	暴露阶段: export default {}
	引入阶段: import obj from './2.js';


<2> 注意:如果暴露出去的不是对象.需要提供统一对外接口(声明 function,let,const,var)
	例如:
	export function fn(){
		console.log('这是 export function')
	}
	export const str = '这是 export const str'
	
	
<3> 设置模块别名:
	(1) 在暴露阶段设置别名, 
	export {
		name as a,
		age as b,
		showName as c
	}
	(2) 在引入阶段设置别名
	import {name as a,age as b} from './2.js';
	
	
 Webpack学习笔记——CommonJS与ES6 Module的区别之动态与静态和值拷贝与动态映射
 https://blog.csdn.net/qq_42683219/article/details/103939237
	
	

