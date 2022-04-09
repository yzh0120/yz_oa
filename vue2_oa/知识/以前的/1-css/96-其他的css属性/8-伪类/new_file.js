a:link {color:#FF0000;}           未访问的链接 
a:visited {color:#00FF00;}        已访问的链接 
a:hover {color:#FF00FF;}          鼠标划过链接 
a:active {color:#0000FF;}         已选中的链接 

:focus                            获得焦点的,


<1> 静态伪类:只能用于超链接的样式。如下：
	:link 超链接点击之前,
	:visited 链接被访问过之后,
	
<2> 动态伪类：针对所有标签都适用的样式。如下：
	:hover “悬停”：鼠标放到标签上的时候
	:active “激活”： 鼠标点击标签，但是不松手时。
	:focus 是某个标签获得焦点时的样式（比如某个输入框获得焦点）,
	
	
<3> 超链接的四种状态, 必须按照固定的顺序写：
	a:link 、a:visited 、a:hover 、a:active