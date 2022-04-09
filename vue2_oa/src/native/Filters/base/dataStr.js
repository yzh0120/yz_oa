/* 
日期字符串化
 */
import dayjs from 'dayjs'
export default function(date,format="YYYY-MM-DD"){
	return dayjs(date).format(format)
}