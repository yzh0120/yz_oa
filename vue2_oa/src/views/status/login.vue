<template>
  <div
    :style="{
      width: $store.state.setup.window_innerWidth + `px`,
      height: $store.state.setup.window_innerHeight + `px`,
    }"
    class="login"
    v-loading="loading"
    element-loading-text="登录中"
  >
    <el-card class="card">
      <div slot="header">
        <span>登录</span>
      </div>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        @submit.native.prevent
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchaImgBase64Code">
          <div class="flex">
            <el-input v-model="form.captchaImgBase64Code"></el-input>
            <img :src="captchaImgBase64" @click="getCaptcha" />
          </div>
        </el-form-item>
        <div style="margin-bottom: 10px">
          <el-checkbox v-model="hasRead">我同意</el-checkbox>
          <a
            :href="xyurl"
            target="_blank"
            style="color: #409eff; font-size: 14px"
            >《用户服务协议》</a
          >
        </div>
        <el-button
          style="width: 100%"
          type="primary"
          @click="doLogin"
          native-type="submit"
          >登录</el-button
        >
        <div class="register">去注册</div>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import * as Cookie from "@/tools/cookjs.js";
import keepAlive from "@/native/Mixins/keepAlive.js";
export default {
  mixins: [keepAlive],
  data() {
    return {
      xyurl: "/de", //如果没有ip默认就是自己的ip  例如 : "/用户服务协议.pdf",
      hasRead: "false",
      form: {
        username: "",
        password: "",
        captchaImgBase64Code: "",
      },
      loading: false,
      captchaImgBase64: "",
      captchaToken: "",
      //   formInfo: {
      //     list: [
      //       {
      //         label: "用户名",
      //         field: "username",
      //         type: "input",
      //       },
      //       {
      //         label: "密码",
      //         field: "password",
      //         type: "password",
      //       },
      //       {
      //         slot: "btn",
      //         labelWidth: "0px",
      //       },
      //     ],
      //     formDOM: null, //表单DOM对象
      //     data: {},
      //     labelWidth: "80px", //form的label宽度
      //   },
    };
  },
  computed: {
    pageStack: {
      get() {
        return this.$store.state.permission.pageStack;
      },
      set(val) {
        this.$store.commit("permission/set_pageStack", val);
      },
    },
  },
  mounted() {
    // fit()
    // function fit() {
    //         var sUserAgent= navigator.userAgent.toLowerCase();
    //         var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    //         var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    //         var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    //         var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    //         var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    //         var bIsAndroid= sUserAgent.match(/android/i) == "android";
    //         var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    //         var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    //         if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    //            // alert("手机")
    //         } else {
    // 			// alert("电脑网址")
    //           }
    //         }
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      this.$api.user.getCaptcha({}).then((res) => {
        this.captchaImgBase64 = res.data.captchaImgBase64;
        this.captchaToken = res.data.captchaToken;
      });
    },
    doLogin() {
      // 在状态页面是用 axiosloading 失效  因为layout没加载

      //一点击登录按钮，这个方法就会执行 this.$store.state.native.user
      // this.loading = true;
      //   this.$api.user.user_login(this.form).then(
      //     (res) => {
      //       this.loading = false;
      //       Cookie.set("token", res.token, res.time); //登录成功 存token
      //       this.$store.commit("user/info_fn", res.data); //保存用户信息到 vuex
      //       this.$router.push({
      //         path: "/base",
      //       });
      //     },
      //     (err) => {
      //       this.loading = false;
      //       console.log(err);
      //     }
      //   );
      let data = Object.assign({ captchaToken: this.captchaToken }, this.form);
      this.$api.user.login(data, { headers: true }).then(
        (resp) => {
          this.loading = false;
          // const jwt = res.headers["authorization"];
          let res = resp.data;

          Cookie.set(
            "token",
            "Bearer " + res.data.token,
            res.data.expireDateTimeSpan
          ); //登录成功 存token
          this.$router.push({
            path: "/base",
          });
        },
        (err) => {
          this.getCaptcha();
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
  }
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url("../../assets/imgs/bg-login.png") no-repeat;
  background: url("https://s4.ax1x.com/2022/02/08/H1mQXt.md.png") no-repeat;
  background-size: 100% 100%;
  // background-position: center;

  .card {
    position: relative;
    z-index: 3;
    width: 400px;
    .register {
      margin-top: 10px;
      color: #409eff;
      cursor: pointer;
      text-align: right;
      font-size: 14px;
    }
  }
}

.flex {
  display: flex;
  img {
    margin-left: 20px;
    flex-basis: 120px;
    width: 120px;
    height: 32px;
  }
}
</style>
