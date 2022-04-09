1: CommonJS 加载的是一个对象(即module.exports属性),所以在js引擎运行阶段加载对象,
	所以支持传入一个表达式或者一个if进行判断是否加载模块
2: CommonJS的变量是一份导出值的拷贝,var count=require('./calculator').count ,count 和 require('./calculator').count是两个不同的变量
	如果是简单数据类型的话,就不可以动态改变
	如果是复杂数据类型:因为两个不同的变量保存了同一个内存地址,可以动态改变
	

<1> js引擎刚开始的时候,module.exports和exports都指向同一个内存地址,
	(1) 直接给module.exports赋值导致内存改变: module.exports = {a:1}, require('./calculator.js')也依然指向 module.exports
	(2) 直接给exports赋值导致内存改变: exports = {a:1}, require('./calculator.js')也依然指向 module.exports,
	所以如果必须使用exports,只能使用 exports.function1 = func1;这样的写法,或者使用 exports = module.exports 这个用来重新建立引用关系的
	不需要使用exports可以改变module.exports内存指向
	
	
<2> 暴露模块
	暴露阶段:    module.exports={name:"calculator"};
	引入阶段:    const name=require('./calculator.js').name;