

import XEUtils from 'xe-utils'
//https://x-extends.github.io/xe-utils/#/

//节流
function throttle(callback, wait,options){
	return XEUtils.throttle(callback, wait,options)
}

//防抖
function debounce(callback, wait,options){
	return XEUtils.debounce(callback, wait,options)
}

//分组
function groupBy(data, key){
	return XEUtils.groupBy(data, key)
}

//数组去重
function uniq (array){
	return XEUtils.uniq(array)
}

//将数组进行排序
function orderBy(array,props){
	return XEUtils.uniq(array,props)
}

//获取一个指定范围内随机数
function random(min, max){
	 return XEUtils.random(min, max)
}

//获取数组最小值
function min(arr,props){
	  return XEUtils.min(arr,props)
}

//获取数组最大值
function max(arr,props){
	return XEUtils.max(arr,props)
}

// 将数值四舍五入
function round(num, digits){
	return XEUtils.round(num, digits)
}

export default{
	throttle,
	debounce,
	groupBy,
	uniq,
	orderBy,
	random,
	min,
	max,
	round
}
