<1> 函数的形参被实参赋值后依然是undefined才会有默认值
	function foo( x= 'Hello', y = 'World' ) { 
			  console.log(x, y);						
	}
	foo(undefined,2)   //执行:
	Hello 2            //控制台打印
	
	
<2> 在形参的括号内进行解构赋值:	
	function foo({ a= 'Hello', b = 'World' } = obj) { 
		  console.log(a, b);						
	}
	foo({a:1,b:2})       //执行:
	1 2                  //控制台打印