1 : new Map()是类似于对象的但键名可以为任意数据类型的数据类型 ,
	let twoArr = [ // 定义一个二维数组,  数组中的都有两个元素
	    ['key1' ,  'value 1'],   // key 是 字符串 "key1", value 是字符串 "value 1"
	    [{} ,  10086] ,          // key 是个对象, value 是数值 10086
	    [ 5,  {} ]              // key 是个数值类型, value 是对象
	]
	let map = new Map(twoArr);  // 将数组传入 Map 构造函数中,参数必须有遍历器接口:字符串, 数组, set, map,参数大多数是二维数组
	
	
<1> map.set("key", "value")
	以 new Map() 的形式返回: 增加新映射后的set,
	
	
<2> map.get("key")
	以任意数据结构返回: 键映射的value,
	
	
<3> map.has("key")
	以布尔值的形式返回: map的所有键中是否存在参数,
	
	
<4> map.delete("key")
	以布尔值的形式返回: map是否成功删除参数键,(如果map的所有键中不存在参数,意味着删除失败则返回false)
	
	
<5> map.clear()  
	返回 undefined: 清空map结构,
	
	
<6> forEach和数组的forEach一样,item是值的复制
	let twoArr = [ // 定义一个二维数组,  数组中的都有两个元素
		[1 ,  20]
	]
	let map = new Map(twoArr)
	map.forEach(function (value,  key,  ownerMap) {
		console.log(key,value)    
	})
	
	
<7> 将map转化为普通对象
	(1) Object.fromEntries(map)
	衍生:
	将map转化为普通数组
	(1)  [...map]
	(2)  Array.from(map)