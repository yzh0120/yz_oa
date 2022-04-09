<1> ?.
	(1) 不是null或undefined就会向后执行,是的话返回undefined,?.前面的对象必须先定义!!!
	(2) 报错写法 :
		 // 左侧是new
		 new a?.()
		 new a?.b()
		 // 左侧是 super
		 super?.()
		 super?.foo
		 
		 // 链判断运算符的右侧有模板字符串
		 a?.`{b}`
		 a?.b`{c}`
		 
		 // 链判断运算符的右侧有赋值运算符
		 a?.b = c
		 
	(3) (a?.b).c
		上面代码中，?.对圆括号外部没有影响，不管a对象是否存在，圆括号后面的.c总是会执行。
		
		
<2> ??
	(1) 只有运算符左侧的值为null或undefined时，才会返回右侧的值。(不包括 false 0 '',所以和 || 区分开)
		const animationDuration = response.settings?.animationDuration ?? 300