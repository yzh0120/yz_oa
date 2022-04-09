<1> 
	div + p :  div 同级的后面一个p 必须紧紧相邻 需要有同一个父级
	
	div ~ div :  div后面所有的同级div 需要有同一个父级
	
	div > div :  div直接子元素
	
	div.class :  .class 和 div 的交集
	
	div,p     :   div  和  p  的并集,
	
	div[class="ddd"]
	
	
<2> 
	1 p:nth-child(odd)   先找到p元素的父元素 ,看父元素第odd个是不是p元素 如果不是选择失败 如果是 添加样式
	  p:last-child( 父元素中最后一个p元素的背景色： )和 p:first-child 和 :nth-child同理,
	  
	2 p:nth of type(n)   先找到p元素的父元素 ,找父元素第n个p元素