<1>			动画名字         动画持续时间      规定动画的速度曲线。默认是 "ease"。
 animation : animation-name | animation-duration | animation-timing-function 
 	
 | animation-fill-mode   ->规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。

 | animation-delay   ->延迟 规定动画何时开始。默认是 0。
 
 | animation-iteration-count ->规定动画被播放的次数。默认是 1。
                                                                               先执行一遍动画，然后再反向执行一遍动画：
 | animation-direction    -> 	规定动画播放方向。默认是 "normal"。animation-direction:alternate;
																			暂停动画
 | animation-play-state    ->  规定动画是否正在运行或暂停。默认是 "running"。 animation-play-state:paused;
 
 
 
 所有属性 参考  https://www.runoob.com/css3/css3-animations.html