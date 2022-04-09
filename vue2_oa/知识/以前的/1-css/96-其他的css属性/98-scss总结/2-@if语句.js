 @if 语句
 
<1>语法:
	@if ($direction == top) { // 上三角
	border-bottom-color: $color;
	}
	
<2>例子:
	@mixin triangle($width:100px,$direction:top,$color:$bgBlueLight) {
		height: 0;
		width: 0;
		border: $width solid transparent;
		@if ($direction == top) { // 上三角
		border-bottom-color: $color;
		}
		@if ($direction == bottom) { // 下三角
		border-top-color: $color;
		}
		@if ($direction == left) { // 左三角
		border-right-color: $color;
		}
		@if ($direction == right) { // 右三角
		border-left-color: $color;
		}
	}