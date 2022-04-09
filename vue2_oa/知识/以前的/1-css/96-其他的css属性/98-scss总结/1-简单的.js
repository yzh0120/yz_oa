sass揭秘之@mixin，%，@function
https://www.cnblogs.com/danghuijian/p/6097119.html

<1> $red:red;
	$red:red; !default;  默认值


<2> & 代表父元素


<3> $占位符:
	%symbolDemo{
		@include wh(100px,100px);
		background-color: $green;
	}
	@extend symbolDemo
	

	

	
	