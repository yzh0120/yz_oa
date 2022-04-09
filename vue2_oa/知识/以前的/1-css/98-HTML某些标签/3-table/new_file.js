<1> table边框单线

table {
  border-collapse: collapse;
}
table,
table tr td {
  border: 1px solid #ccc;
}
table tr td {
  padding: 5px 10px;
}

<2> 键值对 的偶数个
	table tr td:nth-child(odd){
	  background-color:#f9f9f9;
	  width: 8%;
	}
	
	
<3> 跨行跨列 （colspan跨列 ，rowspan跨行）
	碰到了colspan="2"后，就会预先占2列的位置。然后读第2行，先读第1列，再读第2列。
	
	<table>标签总结（colspan跨列 ，rowspan跨行）
	https://www.cnblogs.com/mmzuo-798/p/6732738.html