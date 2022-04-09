1:  new Set()类型是类似数组的但成员不可重复的数据类型,
	let set = new Set([0,1,2,3,4,5])   参数必须具备遍历器接口:字符串, 数组, set, map,
	参数大多数是数组
	
	
<1> set.add(6)
	以 new Set() 的形式返回: 添加新成员后的set,
	
	
<2> set.has(6)
	以布尔值的形式返回: set是否存在参数,
	
	
<3> set.delete(6)
	以布尔值的形式返回:set是否成功删除参数,(如果set中不存在参数,意味着删除失败则返回false)
	
	
<4> set.clear()
	返回 Set(0) {}: 清空set所有成员,
	
	
<5> forEach和数组的forEach一样,item是值的复制

	let set = new Set([999,2,2]);
	set.forEach(function (item,index,ownerSet) {//item === index
		item = item +1        
	})
	console.log(set)
	
	
<6> 将set结构转化为普通数组
	(1) [...set]
	(2) Array.from(set)