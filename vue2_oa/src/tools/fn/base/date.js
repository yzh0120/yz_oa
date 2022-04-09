//https://www.cnblogs.com/cjrfan/p/9154539.html
import dayjs from 'dayjs'
/* 
.format('YYYY-MM-DD dddd HH:mm:ss.SSS A') 
 */
// 增加时间
function add(date,num,unit = "day",format="YYYY-MM-DD"){
	return dayjs(date).add(num, unit).format(format)
}
//格式化时间对象
function str(date,format="YYYY-MM-DD"){
	//var date = new Date(date.replace(/-/g, "/").replace(/T/g, " "))
	return dayjs(date).format(format)
}

//时间差
function diff(date1,date2,unit = "day"){
	return dayjs(date1).diff(dayjs(date2),unit)
}

export default{
	add,
	str,
	diff
}


/* 
 Format	Output	Description
 YY	18	两位数的年份
 YYYY	2018	四位数的年份
 M	1-12	月份，从 1 开始
 MM	01-12	月份，两位数
 MMM	Jan-Dec	简写的月份名称
 MMMM	January-December	完整的月份名称
 D	1-31	月份里的一天
 DD	01-31	月份里的一天，两位数
 d	0-6	一周中的一天，星期天是 0
 dd	Su-Sa	最简写的一周中一天的名称
 ddd	Sun-Sat	简写的一周中一天的名称
 dddd	Sunday-Saturday	一周中一天的名称
 H	0-23	小时
 HH	00-23	小时，两位数
 m	0-59	分钟
 mm	00-59	分钟，两位数
 s	0-59	秒
 ss	00-59	秒 两位数
 SSS	000-999	秒 三位数
 Z	+5:00	UTC 的偏移量
 ZZ	+0500	UTC 的偏移量，数字前面加上 0
 A	AM	PM
 a	am	pm
 
 */

