-------------------------------------------------------------------------------------
text-align:center  <  folat  <   flex  <  position  <  margin (padding) 

padding增加元素具体大小,而margin只是边界
1
需要指定 left : 0或者 top : 0 才能在margin-left或者 margin-top起作用
需要指定 right : 0或者 bottom : 0 才能在margin-right或者 margin-bottom起作用同时left或者top方向失效
在position控制之上, 就算left没有其他物体,margin-left:1px(padding-left:1px ;)都会移动
但是不会带动flex控制下的该元素后面的物体

2
在flex 控制之上, 就算left没有其他物体,margin-left:1px(padding-left:1px ;)都会移动
并且带动flex控制下的该元素后面的物体移动
如果是 justify-content: space-around; 则后面的元素移动速度较小 当两个元素紧挨着的时候,移动速度一样
如果是 justify-content: center; 两个元素移动速度一样 (因为两个元素紧挨着)

3
float : right 挤不过 float : left
在folat 控制之上,对于前面的元素
就算left没有其他物体,margin-left:1px(padding-left:1px ;)都会移动
但是不会带动flex控制下的该元素后面的物体,但是当移动元素触碰到后面的元素 ,后面的元素后向下移动,并在下一行
保持 float : right(后面元素原始状态) 状态

在folat 控制之上,对于后面的元素
margin-left(padding-left)的值需要大于(父元素的width-前面元素所占空间 包括margin-left)才会向下移动,(挤不过float : left)
-------------------------------------------------------------------------------------
position 默认就可以覆盖float和flex


