grid-template-rows: 50% 50%;
	(1) grid-template-rows: 50px 50px;

	(2) grid-template-rows: 50% 50%;
	
	(3) 使用repeat(次数,模式)函数，简化重复的值
	grid-template-columns: repeat(3, 33.33%); grid-template-columns: repeat(2, 100px 20px 80px);
	 
	(4) repeat(auto-fill, 单元格固定大小) 单元格的大小是固定的，但是容器的大小不确定,动态根据容器大小添加删除单元格
	grid-template-columns: repeat(auto-fill, 100px);

	(5) 为了方便表示比例关系，网格布局提供了fr关键字（fr 意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。
	grid-template-columns: 1fr 2fr;

	(6) minmax()函数产生一个长度范围，表示列宽不小于100px，不大于1fr
	grid-template-columns: 1fr  minmax(100px, 1fr);

	(7) auto关键字表示由浏览器自己决定长度。第二列的宽度，基本上等于剩余空间
	grid-template-columns: 100px auto 100px;