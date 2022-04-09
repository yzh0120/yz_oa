<1> CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。要实现这一点，必须规定两项内容：
	1 transition要指定添加效果的CSS属性
	2 transition要指定效果的持续时间。
	
	
<2> transition : 属性名               |            持续时间 |                    动画类型 |        延迟时间
	transition : transition-property | transition-duration | transition-timing-function | transition-delay,
	
	
<3>  多个属性:transition: width 0.3s ease-out 0.5s, height 0.3s ease-out 0.3s;
	 这里联想：
	 css中，如果一个效果有多个值，中间没有括号 ： transition: width 0.3s ease-out 0.5s
	 如果一个属性有多个效果，有括号：transition: width 0.3s ease-out 0.5s, height 0.3s ease-out 0.3s;
	 
	 
<4> 1 transition 作用的 属性名 必须在本元素样式内有显式地定义出来,哪怕值是0 width:0，然后在通过其他动作（例如hover）改变样式
 
	2 写在 元素或者( hover )上都可以,但写在 元素上 移出时候也有动画,写在hover 上无移出动画,所以建议写在元素上
	
	
<5>	注意:transition作用于 display 和 auto无效