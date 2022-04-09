/* 
符号通过空格分割
 */
export default function(val,num = 4){
	val = val + "" 
	let reg = new RegExp(`(.{${num}})`, 'g')
	return val.replace(reg, "$1 ")
}