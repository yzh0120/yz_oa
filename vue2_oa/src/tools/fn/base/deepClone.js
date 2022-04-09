//深度克隆
import XEUtils from 'xe-utils'
export default function deepClone(target) {
    // let result; // 定义一个变量
    // if (typeof target === 'object') { // 如果当前需要深拷贝的是一个对象的话

    //     if (Array.isArray(target)) { // 如果是一个数组的话
    //         result = [];
    //         for (let i in target) { // 将result赋值为一个数组，并且执行遍历
    //             result.push(deepClone(target[i])) // 递归克隆数组中的每一项
    //         }
    //     } else if (target === null) { // 判断如果当前的值是null的话；直接赋值为null
    //         result = null;

    //     } else if (target.constructor === RegExp) { // 判断如果当前的值是一个RegExp对象的话，直接赋值   
    //         result = target;
    //     } else { // 否则是普通对象，直接for in循环，递归赋值对象的所有值
    //         result = {};
    //         for (let i in target) {
    //             result[i] = deepClone(target[i]);
    //         }
    //     }
    // } else { // 如果不是对象的话，就是基本数据类型，那么直接赋值
    //     result = target;
    // }
    // return result; // 返回最终结果
    return XEUtils.clone(target, true)
}
