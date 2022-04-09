//数组对象 去重

export default function(fixedRoutes,selfPath){
	let map = new Map();
	for (let item of fixedRoutes) {
	    if (!map.has(item[selfPath])) {
	        map.set(item[selfPath], item);
	    }
	}
	return [...map.values()];
}

// export default function(fixedRoutes,selfPath){
// 	var hash = {};
// 	    fixedRoutes = fixedRoutes.reduce(function (item, next) {
// 	      hash[next[selfPath]]
// 	        ? ""
// 	        : (hash[next[selfPath]] = true && item.push(next));
// 	      return item;
// 	    }, []);
// }

/* 
https://www.cnblogs.com/shiyunfront/p/7423977.html



 var hash = {};
     fixedRoutes = fixedRoutes.reduce(function (item, next) {
       hash[next.selfPath]
         ? ""
         : (hash[next.selfPath] = true && item.push(next));
       return item;
     }, []);
 
 */