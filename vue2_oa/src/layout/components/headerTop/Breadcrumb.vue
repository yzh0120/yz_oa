<template>
  <el-breadcrumb class="app-breadcrumb" separator="/" ref="breadcrumb" v-show="!$store.state.setup.mobile">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">

        <a  @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
    data() {
    return {
      levelList: null,
	  showBreadcrumb:true
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      // if (route.path.startsWith('/redirect/')) {
      //   return
      // }
      this.getBreadcrumb()
	  // this.showBreadcrumbFn()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  mounted() {
	// this.showBreadcrumbFn()
    // window.addEventListener("resize", this.showBreadcrumbFn);
  },
  beforeDestroy() {
    // window.removeEventListener("resize", this.showBreadcrumbFn);
  },
  methods: {
	// showBreadcrumbFn(){
	// 	console.log(this.$store.state.native.window_innerWidth, this.$refs.breadcrumb.$el.offsetWidth + 100,'cc')
	// 	 this.showBreadcrumb = this.$store.state.native.window_innerWidth >  this.$refs.breadcrumb.$el.offsetWidth + 270
	// },
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      //如果matched里面没有首页
      // if (this.noBase(matched)) {
      //   matched = [{ path: "/base",fullPath:"/base",name: 'base', meta: { title: "首页" } }].concat(
      //     matched
      //   );
      // }

      
	  this.levelList = matched
    },
    // 是不是首页
    noBase(routes) {
		let res = routes.every((route)=>{
			const name = route && route.name;
			if(name.trim().toLocaleLowerCase() === "base".toLocaleLowerCase()){//存在首页
				return false
			}else{
				return true
			}
		})
		return res
    },
    handleLink(item) {
      const { redirect, name } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push({
          name:name
      })
    }
  },
};
</script>

<style scoped lang="scss">
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
