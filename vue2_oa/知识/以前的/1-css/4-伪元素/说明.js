<1> 没有样式干扰的伪元素:
	::before 和 ::after 都是行内元素,宽高都由 content 决定,除非 position : absolute  (folat 也可以 .display:block也可以)
	分别在content前面和后面
	
	
<2> 绝对定位后的伪元素:
	::before 和 ::after 就像两个 不同类名的span,两个属性一模一样,只是名称不一样,