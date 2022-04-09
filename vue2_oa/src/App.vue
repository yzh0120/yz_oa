<template>
  <!-- <div id="app"  v-loading="$store.state.axios.axiosLoading.loading" :element-loading-text="$store.state.axios.axiosLoading.text"> -->
  <div
    id="app"
    element-loading-text="路由加载中"
    v-loading="$store.state.router.elMainLoading"
  >
    <router-view />

    <el-drawer
      title="项目配置"
      :visible.sync="$store.state.setup.drawer"
      direction="rtl"
      :before-close="handleClose"
    >
      <div style="padding-left: 20px">
        <el-divider>选择主题</el-divider>
        <el-radio-group v-model="$store.state.setup.navStyle">
          <el-radio label="element-nav">element</el-radio>
          <el-radio label="black-nav">black</el-radio>
          <el-radio label="purple-nav">purple</el-radio>
        </el-radio-group>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      //保存上一次的路由,之所以放在这里 是保证已经进了路由了
      handler(newVal, oldVal) {
        if (oldVal) {
          this.$store.commit("router/preRoute_fn", oldVal);
        }
      },
      immediate: true,
    },
    "$store.state.setup.navStyle": {
      handler(newVal, oldVal) {
        window.document.documentElement.setAttribute("class", newVal);
      },
      immediate: true,
    },
    // socket
    // "$store.state.user.info.username": {
    //   handler(newVal, oldVal) {
    //     if (newVal.length > 0) {
    //       //存在
    //       // console.log("1111111111111")
    //       this.$socket.io.opts.query = {
    //         token: 123, //localStorage.getItem("token") || '没有token'
    //       };
    //       this.$socket.open();
    //     } else {
    //       this.$socket.disconnect(); //中断socket连接
    //     }
    //   },
    //   immediate: true,
    // },
  },
  methods: {
    clientXY() {
      this.$store.commit("setup/windowResize");
    },
    handleClose() {
      this.$store.commit("setup/drawer_fn", false);
    },
  },
  sockets: {
    //内置事件
    //1 连接成功
    connect() {
      console.log("连接成功", this.$socket);
    },
    //2 断开连接
    disconnect(data) {
      console.log("连接断开", this.$socket);
    },
    //3 重连中...... 服务器端断开,客户端自动执行
    reconnecting() {
      console.log("重连中......");
    },
    //4 重连成功 // 服务器端断开重连成功,客户端自动执行
    reconnect() {
      console.log("重连成功");
    },

    //自定义///////////////////////////////////////////////
    /* 有新消息*/
    newInfo(data) {
      // console.log(data, "newInfo");
      this.$message.success(data);
    },
    /* 非法链接断开*/
    illegal(data) {
      /* this.$socket.disconnect(); //中断socket连接
      this.$socket.connect(); //重新socket连接 */
    },
  },
  mounted() {
    this.$store.commit("setup/windowResize");
    window.addEventListener("resize", this.clientXY);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.clientXY);
  },
};
</script>


<style>
html,
body,
#app,
.el-container,
.el-main {
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
