







export default{

 	computed: {
 	  _pageStack: {
 	    get() {
 	      return this.$store.state.router.pageStack;
 	    },
 	    set(val) {
 	      this.$store.commit("router/set_pageStack", val);
 	    },
 	  },
 	  _selectedTag:{//this._selectedTag 只有在右键和进入新路由的时候才会匹配正确
 	    get() {
 	      return this.$store.state.router.selectedTag;
 	    },
 	    set(val) {
 	      this.$store.commit("router/set_selectedTagPath", val);
 	    },
 	  },
 	},
 	methods:{
 		_isFixed(tag) {
 		  //返回值 是 false  就会在tags增加 X号
 		  return tag.meta && tag.meta.fixed;
 		},
 		_matchingPath(_pageStack,page){
 			return _pageStack.findIndex((item)=>{
 				return item.path == page.path
 			})
 		},
 		//刷新本页面
 		_reload(view) {
 		  if (this._selectedTag.path === this.$route.path) {//右键菜单所指向的路由 的fullPath 就是当前route的fullPath
 		    this._delRouteCache(this._selectedTag.path); //删除 右键菜单所指向的路由 的缓存
 		    this.$router.replace({ name: "blank" }).then(() => {
 		      // 异步重载
 		      this.$router.replace(this._selectedTag);
 		    });
 		  }
 		},
 		//关闭某个页面
 		_closeSelectedTag(route) {
 		  this.visible = false;
 		  let currentCloseIndex = this._matchingPath(this.$store.state.router.pageStack,route)
 		  let temp = this.$store.state.router.pageStack.filter((item, index) => {
 			if(this._isFixed(item) || index != currentCloseIndex){
 				return true;
 			}else{
 				this._delRouteCache(item.path); //删除组件缓存
 				return false;
 			}
 		  });
 		  this.$store.state.router.pageStack = temp;
 		  this.$router.push(temp[temp.length - 1]);
 		},
 		//关闭左边页面
 		_closeOtherLeft() {
 		  let selectedTag_index = this._matchingPath(this.$store.state.router.pageStack,this._selectedTag)
 		  let temp = this.$store.state.router.pageStack.filter((item, index) => {
 			if ( this._isFixed(item) || index >= selectedTag_index) {
 			  return true;
 			} else {
 			  this._delRouteCache(item.path); //删除组件缓存
 			  return false;
 			}
 		  });
 		  
 		  this.$store.state.router.pageStack = temp;
 		  this.$router.push(this._selectedTag);
 		},
 		//关闭右边页面
 		_closeOtherRight() {
 		  // 当前 右键菜单所指向的路由 在页面栈中的index
 		  let selectedTag_index = this._matchingPath(this.$store.state.router.pageStack,this._selectedTag)
 		  let temp = this.$store.state.router.pageStack.filter((item, index) => {
 		    // if (index > selectedTag_index && !this._isFixed(item)) {
 		    //   this._delRouteCache(item.path); //删除组件缓存
 		    //   return false;
 		    // } else {
 		    //   return true;
 		    // }
 			
 			if ( this._isFixed(item) || index <= selectedTag_index) {
 			  return true;
 			} else {
 			  this._delRouteCache(item.path); //删除组件缓存
 			  return false;
 			}
 		  });
 		  
 		  this.$store.state.router.pageStack = temp;
 		  this.$router.push(this._selectedTag);
 		},
 		// 关闭其他页面
 		_closeOthersTags() {
 		  // 当前 右键菜单所指向的路由 在页面栈中的index
 		  let selectedTag_index = this._matchingPath(this.$store.state.router.pageStack,this._selectedTag)//this.$store.state.router.pageStack.indexOf(this._selectedTag);
 		  let temp = this.$store.state.router.pageStack.filter((item, index) => {
 		    // if (index != selectedTag_index && !this._isFixed(item)) {
 		    //   this._delRouteCache(item.path); //删除组件缓存
 		    //   return false;
 		    // } else {
 		    //   return true;
 		    // }
 			if ( this._isFixed(item) || index == selectedTag_index) {
 			  return true;
 			} else {
 			  this._delRouteCache(item.path); //删除组件缓存
 			  return false;
 			}
 		  });
 		  this.$store.state.router.pageStack = temp;
 		  if (this._selectedTag.path !== this.$route.path) {
 		    this.$router.replace(this._selectedTag);
 		  }
 		},
 		// 关闭所有页面
 		_closeAllTags() {
 			
 		  // 当前 右键菜单所指向的路由 在页面栈中的index
 		  //let selectedTag_index = this._matchingPath(this.$store.state.router.pageStack,this._selectedTag)//this.$store.state.router.pageStack.indexOf(this._selectedTag);
 		  let temp = this.$store.state.router.pageStack.filter((item, index) => {
 		    if ( this._isFixed(item)) {
 		      return true;
 		    } else {
 			  this._delRouteCache(item.path); //删除组件缓存
 			  return false;
 		    }
 		  });
 		  this.$store.state.router.pageStack = temp;
		  console.log(this._pageStack,'111111111',this.$store.state.router.pageStack,'this._pageStack')
 		  this.$router.push(temp[temp.length - 1]);
 		},
 		//删除页面缓存 被其他方法引用的方法
 		_delRouteCache(key) {
 			//参数 是 path
 			key = key.split("?")[0]; //去除query   缓存实例不包括query
 			let cache = this.$store.state.router.keepAliveComponentInstance.cache; //获取缓存对象
 			let keys = this.$store.state.router.keepAliveComponentInstance.keys; //获取已缓存fullPath的数组
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
 			console.log(cache, "cache");
 		  },
 		
 	}
 }

 
 
