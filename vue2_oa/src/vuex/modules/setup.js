
export default{
  namespaced:true,//带命名空间
  state:{
	drawer:false,
	navStyle:"element-nav",//"theme-nav",//没有通过 muta
	//折叠栏
	isCollapse : false,
	// 窗口数据
	mobile:false,
	window_innerWidth: undefined,
	window_innerHeight: undefined,
  },
  // 只能通过此函数修改state的data
  mutations:{
    drawer_fn(state,params){//是一个函数
      state.drawer = params
    },
	isCollapseFn(state,params){//是否折叠菜单栏
	  state.isCollapse = params
	},
	windowResize(state, params) { //是一个函数
	  let { innerWidth, innerHeight } = window
	  state.window_innerWidth = innerWidth 
	  state.window_innerHeight = innerHeight
	  
	  state.mobile = state.window_innerWidth < 768 ? true : false;
	},
  },
// 异步
  actions:{
	  actions_fn({commit},params) {//是一个函数
			commit('mutations_fn',params)
	  }
  },
// 全局状态修改
  getters:{
    getters_fn(state){//是一个函数
                return state.stateData + 'change by getter'
    }
  }

}
