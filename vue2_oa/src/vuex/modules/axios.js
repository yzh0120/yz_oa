export default {
	namespaced: true, //带命名空间
	state: {
		//请求的加载信息
		axiosLoading:{
		  loading:false,
		  text:'正在加载中'
		},
	},
	// 只能通过此函数修改state的data
	mutations: {
		axiosLoading_Fn(state,params){
		  state.axiosLoading = params
		},
	}
}
