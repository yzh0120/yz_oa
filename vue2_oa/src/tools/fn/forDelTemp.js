/* 删除组件缓存 */
import store from '@/vuex/store'; //vuex
	
export default function(delTemp){
	delTemp.forEach((item) => {
		delRouteCache(item.path); //删除组件缓存
	})
}

function delRouteCache (key) {
		//参数 是 path
		key = key.split("?")[0]; //去除query   缓存实例不包括query
		let cache = store.state.router.keepAliveComponentInstance.cache; //获取缓存对象
		let keys = store.state.router.keepAliveComponentInstance.keys; //获取已缓存fullPath的数组
		let prefix = keys[0].split("/")[0]; //如果有transition标签 会有随机的前缀
		key = prefix + key;
			  
		for (let i = 0; i < keys.length; i++) {
		  //循环 已缓存fullPath的数组
		  if (keys[i] == key) {
			//如果 已缓存fullPath的数组 的某个 fullPath 等于传入的 fullPath
			keys.splice(i, 1); //根据index 在 已缓存fullPath的数组 删除 这个fullPath
			if (cache[key] != null) {
			  //如果 在 cache数组 中的fullPath 也有 值
			  cache[key].componentInstance.$destroy(); //删除内存中的实例  评论推荐
			  delete cache[key]; //删除 cache对象 中的这个fullPath的 值
			}
			break;
		  }
		}
    }