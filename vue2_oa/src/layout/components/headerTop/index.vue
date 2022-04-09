<template>
  <div class="head-top">
    <div class="left-menu">
      <!-- 折叠展开的图标 change_isCollapse-->
      <div @click="change_isCollapse" class="setup">
        <i class="iconfont" v-if="isCollapse">&#xe61f;</i>

        <i class="iconfont" v-else>&#xe61c;</i>
      </div>

      <!-- 面包屑 -->
      <Breadcrumb class="Breadcrumb" />
    </div>

    <div class="right-menu">
      <!-- 全屏 -->
      <div v-if="!$store.state.setup.mobile" @click="fullscreen" class="setup">
        <i class="iconfont" v-if="!screenfullBut">&#xe743;</i>
        <i class="iconfont" v-else>&#xe625;</i>
      </div>
      <el-dropdown class="right-menu-item hover-effect" trigger="click">
        <!-- 头像部分 -->
        <div class="avatar-wrapper">
          <div class="user-name">
            <el-avatar size="small" :src="circleUrl"></el-avatar>
            <span class="user-name-span">{{
              $store.state.user.info && $store.state.user.info.username
            }}</span>
            <i class="el-icon-arrow-down" />
          </div>
        </div>
        <!-- 下拉内容 -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="go('base')">
            <span style="display: block">首页</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 设置-->
      <div
        class="setup"
        @click="drawerShow"
        v-show="!$store.state.setup.mobile"
      >
        <i class="iconfont">&#xe696;</i>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import Breadcrumb from "@/layout/components/headerTop/Breadcrumb";
import * as Cookie from "@/tools/cookjs.js";

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      name: "demo",
      screenfullBut: false, // 全屏按钮
    };
  },
  mounted() {
    // console.log(this.keepAliveComponentInstance)sss
  },
  methods: {
    // 全屏功能
    fullscreen() {
      if (!screenfull.isEnabled) {
        this.$notification.open({
          message: "温馨提示",
          description:
            "您的浏览器无法使用全屏功能，请更换谷歌浏览器或者请手动点击F11按钮全屏展示！",
          duration: 10,
          placement: "bottomLeft",
        });
        return false;
      }
      screenfull.toggle();
      if (screenfull.isFullscreen) {
        this.screenfullBut = false;
      } else {
        this.screenfullBut = true;
      }
    },
    drawerShow() {
      this.$store.commit("setup/drawer_fn", true);
      console.log(this.$store.state.setup.drawer);
    },
    go(name) {
      this.$router.push({
        name: name,
      });
    },
    change_isCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      this.$api.user.logout().then((res) => {
        // this.$store.commit("router/preUserId_fn", this.$store.state.user.info.username);//保存上一个用户信息
        Cookie.remove("token"); //1 重置token'
        this.$store.commit("user/info_fn", {
          //2 重置用户信息
          username: "",
          roleArr: [],
        });
        this.$store.state.router.routes = []; //3 重置路由
        this.$store.commit("router/set_pageStack", []); //4 重置页面栈
        this.$router.push({
          //5 跳转登录页
          path: "/login",
        });
      });
    },
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
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #f5f7fa !important;
  }
}

.head-top {
  padding-left: $normal_spacing;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-menu {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // .change_isCollapse {
    //   width: 30px;
    //   height: 30px;
    //   color: skyblue;
    //   cursor: pointer;
    // }
  }

  .setup {
    transition: all 0.3s;
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #f6f6f6;
    }
  }

  .right-menu {
    // background-color: red;
    height: 100%;
    // width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      // 下拉框 悬浮效果
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        //头像部分
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }

      .avatar-wrapper {
        //头像部分
        margin-top: 5px;
        position: relative;
        display: flex;
        font-size: 16px;

        .user-name {
          display: flex;
          align-content: space-around;
          align-items: center;
          height: 40px;
          // margin-left: 6px;
          line-height: 40px;
          cursor: pointer;

          .user-name-span {
            margin-left: 10px;
            max-width: 100px;
            overflow: hidden;
            padding-right: 10px;
            text-overflow: ellipsis;
            font-size: 14px;
          }
        }
      }
    }

    // 下拉框
    /* .avatar-container {
      .avatar-wrapper {//头像部分
        margin-top: 5px;
        position: relative;
        display: flex;
        font-size: 16px;

        .user-name {
          display: flex;
          align-content: center;
          align-items: center;
          height: 40px;
          margin-left: 6px;
          line-height: 40px;
          cursor: pointer;
          // color: #ffffff;
		  .user-name-span{
			  width:100px;
			  overflow: hidden;
			  text-overflow:ellipsis;
		  }
        }

        //  .user-avatar {
        //   cursor: pointer;
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        // } 
      }
    } */
  }
}
</style>
