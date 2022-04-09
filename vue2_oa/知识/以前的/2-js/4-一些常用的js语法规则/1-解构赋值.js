深入理解ES6之解构
https://www.jianshu.com/p/ab4e4338047b


<1> 对象和数组都可以解构赋值
	1: 左右两边必须结构一样,所以 左边的 {} 或者 [] 只是 为了形式一样
	2: var、let、const声明的不是{} 或者 [],而是里面的变量
	3: 不使用var、let、const赋值时，需要将解构语句使用（）进行包裹,( {a,b} = {a:1,b:2}  )
	(1) 在对象中通过 属性键来解构
		let {a,b} = {a:1,b:2}
	(2) 在数组中通过 索引来解构
		let [,,t] = [0,1,2];
	
<2> 
	对象解构赋值的左边变量的默认值:    ( {a,b="默认值"} = { a:1 }  )  //()默认会返回 等号右边的表达式
	数组解构赋值的左边变量的默认值:    (  [,,t="默认值"] = [0,1]  )
	
	
<3> 
	嵌套的对象解构,通过:深入下一层 : let { a: { b }} = {a:{b:2}}
	嵌套的数组解构,通过形式深入下一层 : let  [ , [,t] ]  =  [ "red", [ "green", "lightgreen" ], "blue" ];
	
	
<4> 数组在解构赋值中的剩余项
	let [ a, ...b ] =  [ "red", "green", "blue" ]
	
	
<5> 既有函数的解构，也有数组的解构
	let node = {
	    type: "Identifier",
	    loc: {
	      start: {
	      line: 1,
	      column: 1
	       }
	    },
	    range: [0, 3]
	};
	let {
	    loc: { start },            //重点
	    range: [ startIndex ]      //重点
	  } = node;
	console.log(start.line); // 1
	console.log(start.column); // 1
	console.log(startIndex); // 0