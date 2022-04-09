<template>

  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="auto" 
	:class="[$store.state.setup.mobile?'mobile':'',$store.state.setup.mobile && !isCollapse ? 'mobile-show':'']">
      <div class="mantle" v-if="$store.state.setup.mobile && !isCollapse" @click="eve"> </div>
      <!-- <myAside class="sidebar-container" v-if="!$store.state.setup.mobile || isCollapse"></myAside> -->
	  
	  <Logo></Logo>
	  <myAside class="sidebar-container" ></myAside>
	  
    </el-aside>

    <el-container>
      <el-header class="el-header">
        <headerTop></headerTop>
        <tagsView :keep-alive-component-instance="keepAliveComponentInstance" blankRouteName="blank"></tagsView>
      </el-header>

      <!-- <el-main element-loading-text="页面加载中" v-loading="$store.state.router.elMainLoading"> -->
	  <el-main v-loading="$store.state.axios.axiosLoading.loading" :element-loading-text="$store.state.axios.axiosLoading.text">
		  
        <!--此div是为了获取子节点的 keepAliveComponentInstance 组件实例 -->
        <div ref="keepAliveContainer" class="app_main" id="app_main" >
          <transition name="fade-transform" mode="out-in">
            <keep-alive>

              <router-view :key="key" />

            </keep-alive>
          </transition>
        </div>
      </el-main>

      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>

</template>

<script>
import Logo from "./components/myAside/logo";
import headerTop from "@/layout/components/headerTop/index.vue";
import myAside from "@/layout/components/myAside/index.vue";
import tagsView from "@/layout/components/TagsView/index";
export default {
  name: "",
  components: {
	Logo,
    headerTop,
    myAside,
    tagsView,
  },
  methods: {
    eve(e) {
      this.isCollapse = true;
    },
  },
  data() {
    return {
      keepAliveComponentInstance: null,
    };
  },
  mounted() {
    if (this.$refs.keepAliveContainer) {
      //如果div存在
      //keepAliveComponentInstance 包含了cache和keys			     //div下面的唯一一个子节点的实例--> keep-alive 标签
      this.keepAliveComponentInstance = this.$refs.keepAliveContainer.childNodes[0].__vue__._vnode.componentInstance; //缓存组件实例
      this.$store.commit("router/keepAliveComponentInstance_fn",this.keepAliveComponentInstance)
    }
  },
  computed: {
    isCollapse: {
      get() {
        return this.$store.state.setup.isCollapse;
      },
      set(val) {
        this.$store.commit("setup/isCollapseFn", val);
      },
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
