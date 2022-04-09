<1> var date = new Date(),date是一个具体的时刻,而date的方法则是获取这个时刻的年或者 月 日 秒 毫秒
	(1) 获取某个时刻的年份
		date.getFullYear()         2020
		
	(2) 获取某个时刻的月份
		date.getMonth()            0 ~ 11
		
	(3) 获取某个时刻的日期
		date.getDate()             1 ~ 31
		
	(4) 获取某个时刻的小时
		date.getHours()            0 ~ 23
		
	(5) 获取某个时刻的分钟
		date.getMinutes()          0 ~ 59
		
	(6) 获取某个时刻的秒
		date.getSeconds()          0 ~ 59
		
	(7) 获取某个时刻的毫秒
		date.getMilliseconds()     0 ~ 999
		
	(8) 获取某个时刻是星期几
		date.getDay()              1 ~ 7
		
	(9) 获取某个时刻距离 1970年1月1日0时0分0秒 的毫秒数
		date.getTime()
		
<2> 利用new Date()设置时间
	(1) 参数是毫秒数
		new Date(1607997492815)
	(2) 参数是字符串
		new Date('2020/7/1 12:1:4')    这个是标准写法
		new Date('2020-7-1 12:1:4')    ios不兼容
	
	
<3> 通过Date对象的方法修改时间
	var date = new Date(),date是一个具体的时刻,而date的方法则是修改这个时刻的年或者 月 日 秒 毫秒
	
	注意: 1 参数month、dateNumber可以超出常规的0 ~ 11、1 ~ 31的取值范围，也可以为负数, Date对象内部会自动计算并转换为对应的日期。
		  2 参数month的值比实际月份小1,所以ate.setMonth( 0 )是一月。
		  3 设置日期函数的返回值都是当前日期对象距离1970 年 1 月 1 日的毫秒值
		  4 设置日期函数的参数为空会返回NaN,并且使得 date 重置为 Invalid Date
	
	(1) 修改某个时刻的年
		date.setFullYear(2020,10,3)    date.setFullYear( year [, month [, dateNumber]] )
		如果提供了dateNumber参数，就必须提供month参数
	
	(2) 修改某个时刻的月份
		date.setMonth(   数字类型   )
		date.setMonth( date.getMonth() + 1 )
		
	(3) 修改某个时刻的日期
		date.setDate(   数字类型   )
		date.setDate( date.getDate() + 1 )
		
	(4) 修改某个时刻的小时
		date.setHours(  数字类型 )
		date.setHours(  date.getHours() +10000  )
		
	(5) 修改某个时刻的分钟
		date.setMinutes(  数字类型 )
		date.setMinutes( date.getMinutes()+10000 )
		
	(6) 修改某个时刻的秒
		date.setSeconds( 数字类型 )
		date.setSeconds( date.getSeconds()+10000 )
		
	(7) 修改某个时刻的毫秒
		date.setMilliseconds( 数字类型 )
		date.setMilliseconds( date.getMilliseconds()+10000 )
		
		
		=---------------------------------------------
		js 日期格式化函数 DateFormat 
		https://www.cnblogs.com/bldf/p/6323519.html