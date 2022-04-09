<1> 文档流:
	1: 任何行内元素(包含inline-block),不显示设置宽高的情况下:默认宽高由内容决定
	2: 任何block元素,不显示设置宽高的情况下:高度默认由内容决定,而宽度默认父元素的100%
	3: 元素从左到右,从上到下排列
	
	
<2> 脱离文档流
	所有元素不显示设置宽高的情况下:默认宽高由内容决定,
	
	
<3> 触发脱离文档流:
	1 position: absolute;    [fixed]
	2 float: left;    [right]
	
	
<4> 
	inline元素:         span,
	inline-block元素 :  img , input ,button,
	block元素:          div