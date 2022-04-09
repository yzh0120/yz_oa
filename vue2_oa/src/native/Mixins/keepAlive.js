export default {

	// this._selectedTagPath 只有在右键和打开路由的时候才会正确
	computed: {
		_pageStack: {
			get() {
				return this.$store.state.router.pageStack;
			},
			set(val) {
				this.$store.commit("router/set_pageStack", val);
			},
		},
		_selectedTagPath: {
			get() {
				return this.$store.state.router.selectedTagPath;
			},
			set(val) {
				this.$store.commit("router/set_selectedTagPath", val);
			},
		},
	},
	methods: {
		
		//刷新本页面
		_reload(selectedTagPath) {
				let currentCloseIndex = this._matchingPath(this._pageStack, this._selectedTagPath)
				let delTemp = []
				let temp = this._pageStack.filter((item, index) => {
					if (index == currentCloseIndex) {
						delTemp.push(item)
						return true;
					} else {
						return false;
					}
				});
				this._forDelTemp(delTemp)
				this.$router.replace({
					name: "blank"
				}).then(() => {
					// 异步重载
					this.$router.replace(this._getCur(this._pageStack, this._selectedTagPath));
				});
			
		},
		//关闭某个页面
		_closeSelectedTag(route,toV,doSome) {
			let delTemp = []
			this.visible = false;
			let currentCloseIndex = this._matchingPath(this._pageStack, route.path)
			let temp = this._pageStack.filter((item, index) => {
				if (this._isFixed(item) || index != currentCloseIndex) {
					return true;
				} else {
					delTemp.push(item)
					return false;
				}
			});
			this._pageStack = temp;
			this._forDelTemp(delTemp)
			
			if (toV && toV.path) {
				this.$router.push({
				  path: toV.path,
				  query: toV.query
				}).then(()=>{
						if(doSome){
							this._getData(toV.path,doSome)
						}
				})
			}
			else if(route.path == this.$route.path){//关闭的是当前页面
				if(this._pageStack[currentCloseIndex]){
					this.$router.push(this._pageStack[currentCloseIndex])
				}else if(this._pageStack[currentCloseIndex - 1]){
					this.$router.push(this._pageStack[currentCloseIndex - 1]);
				}else if(this.$router.push(this._pageStack[currentCloseIndex + 1])){
					this.$router.push(this._pageStack[currentCloseIndex + 1]);
				}
				
			}
			
		},
		//关闭左边页面
		_closeOtherLeft() {
			let delTemp = []
			let selectedTagPath_index = this._matchingPath(this._pageStack, this._selectedTagPath)
			console.log(selectedTagPath_index,'selectedTagPath_index')
			let temp = this._pageStack.filter((item, index) => {
				if (this._isFixed(item) || index >= selectedTagPath_index) {
					return true;
				} else {
					delTemp.push(item)
					return false;
				}
			});

			this._pageStack = temp;
			this._forDelTemp(delTemp)
			this.$router.push(this._getCur(this._pageStack, this._selectedTagPath));
		},
		//关闭右边页面
		_closeOtherRight() {
			let delTemp = []
			// 当前 右键菜单所指向的路由 在页面栈中的index
			let selectedTagPath_index = this._matchingPath(this._pageStack, this._selectedTagPath)
			let temp = this._pageStack.filter((item, index) => {
				if (this._isFixed(item) || index <= selectedTagPath_index) {
					return true;
				} else {
					delTemp.push(item)
					return false;
				}
			});

			this._pageStack = temp;
			this._forDelTemp(delTemp)
			this.$router.push(this._getCur(this._pageStack, this._selectedTagPath));
		},
		// 关闭其他页面
		_closeOthersTags() {
			let delTemp = []
			// 当前 右键菜单所指向的路由 在页面栈中的index
			let selectedTagPath_index = this._matchingPath(this._pageStack, this._selectedTagPath)
			let temp = this._pageStack.filter((item, index) => {
				if (this._isFixed(item) || index == selectedTagPath_index) {
					return true;
				} else {
					delTemp.push(item)
					return false;
				}
			});
			this._pageStack = temp;
			this._forDelTemp(delTemp)
			if (this._selectedTagPath !== this.$route.path) {
				this.$router.push(this._getCur(this._pageStack, this._selectedTagPath));
			}
		},
		// 关闭所有页面
		_closeAllTags() {
			let delTemp = []
			let temp = this._pageStack.filter((item, index) => {
				if (this._isFixed(item)) {
					return true;
				} else {
					delTemp.push(item)
					return false;
				}
			});
			this._pageStack = temp
			this._forDelTemp(delTemp)
			this.$router.push(this._pageStack[this._pageStack.length - 1]);

		},
		
		
		_isFixed(tag) {
			//返回值 是 false  就会在tags增加 X号
			return tag.meta && tag.meta.fixed;
		},
		_matchingPath(_pageStack, path) {
			console.log(path)
			return _pageStack.findIndex((item) => {
				return item.path == path
			})
		},
		_getCur(_pageStack, path) {
			return _pageStack.find((item) => {
				return item.path == path
			})
		},
		_forDelTemp(delTemp) {
			delTemp.forEach((item) => {
				this._delRouteCache(item.path); //删除组件缓存
			})
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
			// console.log(cache, "cache");
		},
		_getData(key,doSome){
			let cache = this.$store.state.router.keepAliveComponentInstance.cache; //获取缓存对象
			let keys = this.$store.state.router.keepAliveComponentInstance.keys; //获取已缓存fullPath的数组
			if(keys[0]){
				let prefix = keys[0].split("/")[0]; //如果有transition标签 会有随机的前缀
				key = prefix + key;
			}
			
			// console.log("11111111111111111")
			for (let i = 0; i < keys.length; i++) {
				//循环 已缓存fullPath的数组
				// console.log("-"+keys[i]+"-" , "-"+key+"-",keys[i] == key,"2222222222222")
				if (keys[i] == key) {
					//如果 已缓存fullPath的数组 的某个 fullPath 等于传入的 fullPath
					if (cache[key] != null) {
						//如果 在 cache数组 中的fullPath 也有 值
						// console.log(cache[key].componentInstance,"cache[key].componentInstance")
						let res = cache[key].componentInstance
						doSome.split(".").forEach((item)=>{
							res = res[item]
						})
						res()
					}
					break;
				}
			}
		}

	}
}
