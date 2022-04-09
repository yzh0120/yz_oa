/* 
	  grid布局中 所有单元格加来的宽度可以超过.grid , 因为grid-column-end: 3 影响了后面的 单元格
	 */
	.grid{
		<1>-----------------------------------------------------------------------
		必写
		
		display: grid;               
		width: 1000px;               
		height: 600px;               
		
		<2>-----------------------------------------------------------------------
		必写 在.grid中划分单元格并且设置大小 :单元格是100 * 100,具体值看grid-template-columns.js ,
		
		grid-template-columns: 30% 70%;
		grid-template-rows: 50% 50%;
		
		<3>-----------------------------------------------------------------------
		 设置区域  一个区域至少占一个单元格:
		(1) 和grid-template-columns以及grid-template-rows围成的单元格一一对应
		(2) grid-template-areas的值形成的必须是个长方形(或者正方形),但可以使用grid-column-end设置非长方形图形

		grid-template-areas:'left right_top '
							'right_bottom right_bottom ';
		
		<4>-----------------------------------------------------------------------
		注意 : 只能控制item在单元格布局 不能控制item里面的内容布局
		stretch是默认值,所以item的默认宽高是100%
		 
		justify-items: start | end | center | stretch(默认值);
		align-items: start | end | center | stretch(默认值);
		
		<5>-----------------------------------------------------------------------
		  控制整行或者整列的单元格集合在.grid中的布局 
		
		justify-content: start(默认值) | end | center | stretch | space-around | space-between | space-evenly;
		align-content: start(默认值) | end | center | stretch | space-around | space-between | space-evenly;
		
		<6>-----------------------------------------------------------------------
		column-gap:20px   列与列的间隔
		row-gap: 20px     设置行与行的间隔
		 			
		gap: 20px;
		
		<7>-----------------------------------------------------------------------
		因为 grid-row-start: 4;grid-column-start: 导致一些项目的指定位置，在现有网格的外部
		通过grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高,
		它们的写法与grid-template-columns和grid-template-rows完全相同
		参考: 1-grid-auto-rows.html
		 
		grid-auto-rows: 50px; 
		
		<8>-----------------------------------------------------------------------
		 item在网格的放置顺序
		(1) grid-auto-flow: row;(默认值 先行后列) column(先列后行)
		(2) 前一个单元格设置了 grid-column-start: 1;grid-column-end: 3,导致上一行有空位,但是
			单元格会紧挨着前一个单元格导致保持在同一行
		(3) grid-auto-flow: row dense 
		在 grid-auto-flow: row; 的基础上尽量填满空格
		 
		grid-auto-flow: column;
	}
/* *************************************************************************************************** */
	.item{
		<1>-----------------------------------------------------------------------
		width和height
		
		<2>-----------------------------------------------------------------------
		(1) 默认从1开始
		(2) grid-column-start: 没有 grid-column-end 默认 grid-column-end就是当前 ,所以只能向前设置
		(3) grid-column-end:没有 grid-column-start 默认 grid-column-start就是当前 ,所以只能向后设置
		(4) grid-row-start
		grid-row-end
		
		grid-column-start: 1; 这个单元格 在 多个col中的单元线的开始 后面的不清楚（如果没有end 默认grid-column-end: n+1） end同理 默认start n-1
		grid-column-end: 3; 这个单元格 在 多个col中的单元线的结束 
		
		<3>-----------------------------------------------------------------------
		 justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
		 align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。
		 
		justify-self: start | end | center | stretch（默认值）;
		align-self: start | end | center | stretch（默认值）;
	}