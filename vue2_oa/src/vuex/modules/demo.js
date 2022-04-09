export default {
	namespaced: true, //带命名空间
	state: {
		stateData: {
			test: "a"
		},
	},
	// 只能通过此函数修改state的data
	mutations: {
		mutations_fn(state, params) { //是一个函数
			state.stateData = params
		},

	},
	// 异步
	actions: {
		// actions_fn(context,params) {//是一个函数
		//       context.commit('mutations_fn',params)
		// }
		actions_fn({
			commit
		}, params) { //是一个函数
			commit('mutations_fn', params)
		}
	},
	// 全局状态修改
	getters: {
		getters_fn(state) { //是一个函数
			return state.stateData + 'change by getter'
		}
	}

}
