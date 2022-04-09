Object.keys( )不会走原型链,所以遍历对象自身的可枚举的属性键
for in 会走原型链,所以遍历对象自身和继承的可枚举的属性键,可以使用 hasOwnProperty 来过滤原型链上的属性
Object.getOwnPropertyNames(): 用来获取对象自身的全部属性名,不论自身对象是否设置了可枚举，都可以获取到


<1> Object.assign(目标对象,源对象1,源对象2,…)
	以对象的形式返回: 将多个源对象的属性拷贝到目标对象,如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
	
	
<2> 遍历对象的属性
	for (let key of Object.keys(  {a:1,b:2}  ) ){
				 //key是 字符串
				 obj[key] = xxx
	}
	(1) Object.keys(obj)
		以数组的形式返回: 对象属性的所有键组成的一维数组,
	(2) Object.values(  {a:1,b:2}  )
		以数组的形式返回: 对象属性的所有value组成的一维数组,
	(3) Object.entries(  {a:1,b:2}  )
		以数组的形式返回: 对象属性的所有键值对组成的二维数组,
		
		
<3> Object.is(参数,参数) 
	以布尔值的形式返回: 判断两个参数是否相等,
	NaN 和 NaN相等,+0 不等于 -0    
	 
	 
<4> Object.create(参数作为实例对象的原型)
	var b = Object.create( {rep:'apple'} )
	Object.getPrototypeOf(b) -->  {rep: "apple"}
	console.log(  b  ) --> {}
	衍生:
	(1)new Object(参数是对象本身)
	var b = new Object( {rep:'apple'} )
	b -->{rep: "apple"}
	
	
<5> {a:1}.hasOwnProperty(属性名称字符串)
	以布尔值的形式返回: 对象的自身的属性键是否包含参数
	