<template>
  <div :class="['sidebar-container',isCollapse?'isCollapse':'']">
    <!-- <Logo></Logo> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu :collapse="isCollapse" :collapse-transition="false" :unique-opened="false" 
	  :default-active="activeName" @select="selectMenu" >
        <menutree :data="permission" />
      </el-menu>

    </el-scrollbar>
  </div>
</template>

<script>
import Menutree from "./MenuTree";
import Logo from "./logo";
// import variable from '@/assets/scss/variable.scss'
export default {
  components: { Menutree, Logo },
  props: {
    menuBgColor: {
      type: String,
      default: "#F3F6F9",
    },
  },
  data() {
    return {
      activeName: this.$route.name,
    };
  },
  watch: {
    $route() {
      //监听路由
      // this.addTags()//每次路由改变 增加页面栈
      // this.moveToCurrentTag()//将active 移动到当前路由
      const { meta, path, name } = this.$route;
      this.activeName = name;
    },
  },
  computed: {
	  // activeName:{
		 //  get(){
			//   console.log(this.$route.name,"this.$route.name")
			//   return this.$route.name
		 //  },
		 //  set(){
			  
		 //  }
	  // },
    isCollapse: {
      get() {
        return this.$store.state.setup.isCollapse;
      },
      set(val) {
        this.$store.commit("setup/isCollapseFn", val);
      },
    },
    permission() {
      return this.$store.state.router.routes;
    },
  },
  methods: {
    //选择叶子节点
    selectMenu(item, indexPath) {
      const arr = item.split(",");
      if (arr[0] !== "undefined") {
        this.$router.push({ name: arr[0] });
		
		if(this.$store.state.setup.mobile){
			this.$store.commit("setup/isCollapseFn", true);
		}
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.yz_y {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
