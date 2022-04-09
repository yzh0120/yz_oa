<template>
  <page>
    <el-card>
      <div slot="header">正常返回code:200的请求</div>
      <el-button type="primary" @click="twoHundred">code:200</el-button>
    </el-card>

    <el-card>
      <div slot="header">某些请求可能返回非code:200的请求</div>
      <el-button type="primary" @click="notTwoHundred">code:300</el-button>
    </el-card>

    <el-card>
      <div slot="header">默认请求的时候在整个页面自动加载和取消loading动画</div>
      <el-button type="primary" @click="loading_all_fn"
        >在整个页面自动加载和取消loading动画</el-button
      >
    </el-card>

    <el-card>
      <div slot="header">可以选择在某个区域自动加载和取消loading动画</div>
      <el-button type="primary" @click="loading_fn"
        >在某个区域自动加载和取消loading动画</el-button
      >
      <el-table :data="tableData" style="width: 100%" v-loading="loading">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>

    <el-card>
      <div slot="header">危险操作的请求需要用户二次确认</div>
      <el-button type="primary" @click="tip">提交提示</el-button>
    </el-card>

    <el-card>
      <div slot="header">所有请求全部有响应的时候,才取消动画</div>
      <el-button type="primary" @click="allSet">点我</el-button>
    </el-card>
  </page>
</template>

<script>
import { Loading } from "element-ui"; //ui提示

export default {
  data() {
    return {
      loading: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    twoHundred() {
      this.$api.request.twoHundred().then(
        (res) => {
          this.$message.success(JSON.stringify(res));
        },
        (err) => {
          this.$message.error(JSON.stringify(err));
        }
      );
    },
    notTwoHundred() {
      let other = {
        code: {
          successCode: 300,
        },
      };
      this.$api.request.notTwoHundred({}, other).then(
        (res) => {
          this.$message.success(JSON.stringify(res));
        },
        (err) => {
          this.$message.error(JSON.stringify(err));
        }
      );
    },
    loading_fn() {
      let other = {
        load: {
          obj: this.$data,
          // loading : 'loading',   //默认的值就是 "loading",
          // text:'自定义'
        },
      };
      this.$api.request.loading({}, other).then(
        (res) => {
          this.$message.success(JSON.stringify(res));
        },
        (err) => {
          this.$message.error(JSON.stringify(err));
        }
      );
    },
    loading_all_fn() {
      let other = {
        load: {
          text: "自定义",
        },
      };
      this.$api.request.loading({}, other).then(
        (res) => {
          this.$message.success(JSON.stringify(res));
        },
        (err) => {
          this.$message.error(JSON.stringify(err));
        }
      );
    },
    tip() {
      let other = {
        tip: "确认?",
      };
      //点击取消 会 执行第二个函数, 因为会触发catch，所以有tip的请求 必须判断 err 是不是 cancel
      this.$api.request.twoHundred({}, other).then(
        (res) => {
          this.$message.success(JSON.stringify(res));
        },
        (err) => {
          if (err == "cancel") {
            this.$message.error("用户点击了取消按钮");
          } else {
            this.$message.error(JSON.stringify(err));
          }
        }
      );
    },
    allSet() {
      /*
		Promise 中的三兄弟 .all(), .race(), .allSettled()
		https://segmentfault.com/a/1190000020034361
		*/
      let loadingInstance = Loading.service({
        lock: true,
        text: "所有请求全部有响应的时候,才取消动画",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      Promise.allSettled([
        this.$api.request.twoHundred(),
        this.$api.request.loading({}),
      ]).then((arr) => {
        this.$nextTick(() => {
          // 以服务的方式调用的 Loading 需要异步关闭
          loadingInstance.close();
        });
        console.log(arr, "arr");
      });
    },
  },
  mounted() {},
};
</script>

<style>
</style>
