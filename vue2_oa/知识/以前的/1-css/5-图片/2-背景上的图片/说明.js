<1> 背景图片的规律
	1: 无论父元素的宽高是多少, 背景图片会展现出图片的原始尺寸,只是会被过小的父元素溢出隐藏
	2: 当背景图片小于父元素,默认会重复铺满,
	
	
<2> background的属性:
	1:  background-color:背景颜色 支持 red , #fff ,rgb().  作用域padding和content
	
	2:  background-size  :第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 "auto"。  (和图片有关)
				contain; 中文释义“包含”。保持原有尺寸比例。保证图片长边可以显示出来,所以容器有可能有空白部分
				cover;   中文释义“覆盖”。保持原有尺寸比例。保证图片短边可以显示出来,所以图片有可能有显示不全
				
	3:  background-repeat: 规定如何重复背景图像        no-repeat,
	
	4:  background-clip:
		border-box	背景被裁剪到边框盒。	
		padding-box	背景被裁剪到内边距框。
		content-box	背景被裁剪到内容框。
		
	5:  background-attachment      :当父元素出现了滚动条
		  scroll	默认值。背景图像会随着页面其余部分的滚动而移动。
		  fixed	当滚动条滚动时，背景图像不会移动。
		  inherit	规定应该从父元素继承 background-attachment 属性的设置。
		  
	6:  background-image: 图片的路径     url("")  
	
	7:  background-origin:
		border-box	背景图像边界框的相对位置     默认值  图片从父元素的border开始放置
		padding-box	背景图像填充框的相对位置     图片从父元素的padding开始放置
		content-box	背景图像的相对位置的内容框   图片从父元素的内容区开始放置
		
	8:	: background-position:
		图片小于背景的时候,图片 如何放置在背景中
		值:	                            描述:
		left top                         如果仅指定一个关键字，其他值将会是"center"
		left center
		left bottom
		right top
		right center
		right bottom
		center top
		center center
		center bottom
		************************************
		x% y%           第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。
						如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％
		************************************							
		 x px y px      第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。
						如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions