//从text中获得数字
export default function(str){
	return str.replace(/[^0-9 \.]/ig,"");
}