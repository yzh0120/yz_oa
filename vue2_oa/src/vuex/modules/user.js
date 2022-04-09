export default {
  namespaced: true, //带命名空间
  state: {
    info: {
      username: "",//用户名
      roleArr: [], //角色  // 按钮权限 会使用
    },

  },
  // 只能通过此函数修改state的data
  mutations: {
    info_fn(state, params) {
      state.info = params
    }
  },

}
