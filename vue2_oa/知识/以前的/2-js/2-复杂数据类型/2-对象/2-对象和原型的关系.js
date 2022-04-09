<1> 原型链就是__proto__把各个函数(类,构造器)的prototype链接起成一条线 


<2>      __proto__和constructor属性是对象(实例)所独有的,   
		prototype属性是函数(类,构造器)所独有的,而它永远指向一个对象
		所以:	
		对象(实例).__proto__ === 函数(类,构造器).prototype
		对象(实例).constructor === 函数(类,构造器)
		
		
<3> 获取和设置对象(实例)的原型:
	(1)获取某个对象(实例)的原型
	Object.getPrototypeOf(某个对象)
	(2)设置某个对象(实例)的原型
	Object.setPrototypeOf(某个对象,原型对象)
	
	
<4> instanceof 
	对象(实例) instanceof 函数(类,构造器)
	以布尔值的形式返回  判断对象(实例) 是否是 函数(类,构造器)的实例
	
	衍生: isPrototypeOf,
	函数(类,构造器).prototype.isPrototypeOf(  对象(实例)  )
	以布尔值的形式返回 函数(类,构造器).prototype是否存在对象(实例)的原型链之中
	
	
<5> 类的取值函数（getter）和存值函数（setter）
	class A {
	    constructor() {}
	    get prop() { return "getter";} //访问 prop 属性
	    set prop(value) { console.log("setter:" + value);} //设置 prop 属性
		
		var a = new A;//实例化
		a.prop; // "getter"
		a.prop = 123; // "setter 123"
	}
	 