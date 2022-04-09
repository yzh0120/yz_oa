<template>
  <page :show="true">
    <el-button :disabled="true" size="mini" type="primary">禁用按钮</el-button>
    <el-button @click="demoFn">默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div class="top">
      <el-row :gutter="80">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="item item1">
            <el-image :src="img404" class="img"></el-image>
            <div class="text">
              <div class="name">欢迎</div>
              <div class="scope">xxx</div>
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="item item2">
            <i class="iconfont positionIcon">&#xe620;</i>
            <div class="card">
              <div>今日访问人数</div>
              <div>962811</div>
              <div>在场人数</div>
              <div>536</div>
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="item item3">
            <i class="iconfont positionIcon">&#xe70a;</i>
            <div class="card">
              <div>实验室总数</div>
              <div>7,962</div>
              <div>使用中</div>
              <div>882</div>
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="item item4">
            <i class="iconfont positionIcon">&#xe620;</i>
            <div class="card">
              <div>实验室总数</div>
              <div>{{ demo | split(5) }}</div>
              <div>通过人数</div>
              <div>884</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="top hidden-md-and-down">
			<div class="item item1">
				
					<el-image :src="img404" class="img"></el-image>
					<div class="text">
						<div class="name">欢迎</div>
						<div class="scope">xxx</div>
					</div>
			</div>
			<div class="item item2">
				<i class="iconfont positionIcon">&#xe620;</i>
				<div class="card">
					<div>今日访问人数</div>
					<div>962811 </div>
					<div>在场人数</div>
					<div>536</div>
				</div>
			</div>
			<div class="item item3">
				<i class="iconfont positionIcon">&#xe70a;</i>
				<div class="card">
					<div>实验室总数</div>
					<div>7,962</div>
					<div>使用中</div>
					<div>882</div>
				</div>
			</div>
			<div class="item item4">
				<i class="iconfont positionIcon">&#xe620;</i>
				<div class="card">
					<div>实验室总数</div>
					<div>{{demo | split(5)}}</div>
					<div>通过人数</div>
					<div>884</div>
				</div>
			</div>
		</div> -->

    <!-- <div class="eye"> -->
    <el-card class="eye hidden-sm-only">
      <div slot="header">
        <span>数据可视化</span>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="流量趋势" name="1" lazy>
          <ve-line :data="chartData" :settings="chartSettings_stack"></ve-line>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="2" lazy>
          <ve-histogram
            :data="chartData"
            :settings="chartSettings"
          ></ve-histogram>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <div class="eye hidden-md-and-up">
      <ve-line :data="chartData" :settings="chartSettings_stack"></ve-line>
      <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
    </div>
    <!-- </div> -->
  </page>
</template>

<script>
// import keepAlive from "@/native/Mixins/keepAlive.js";
import testDemo from "./testDemo.vue";
export default {
  name: "",
  //   mixins: [keepAlive],
  components: {
    testDemo,
  },
  data() {
    this.chartSettings_stack = {
      stack: { 用户: ["访问用户", "下单用户"] }, //设置堆叠的指标,从左往右堆叠
      area: true, //显示面积
    };
    this.chartSettings = {
      showLine: ["下单用户"], //在柱状图的基础上加折线图的指标
    };
    return {
      demo: 1231231231231231,
      activeNames: ["1"],
      // img404:require("@/assets/imgs/404.png"),
      img404: "https://s4.ax1x.com/2022/02/08/H1mupd.png",
      activeName: "1",
      chartData: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "2018-01-01", 访问用户: 1393, 下单用户: 1093 },
          { 日期: "2018-01-02", 访问用户: 3530, 下单用户: 3230 },
          { 日期: "2018-01-03", 访问用户: 2923, 下单用户: 2623 },
          { 日期: "2018-01-04", 访问用户: 1723, 下单用户: 1423 },
          { 日期: "2018-01-05", 访问用户: 3792, 下单用户: 349 },
          { 日期: "2018-01-06", 访问用户: 4593, 下单用户: 4293 },
          { 日期: "2018-01-07", 访问用户: 1393, 下单用户: 1093 },
          { 日期: "2018-01-08", 访问用户: 3530, 下单用户: 3230 },
          { 日期: "2018-01-09", 访问用户: 2923, 下单用户: 2623 },
          { 日期: "2018-01-10", 访问用户: 1723, 下单用户: 1423 },
          { 日期: "2018-01-11", 访问用户: 3792, 下单用户: 349 },
          { 日期: "2018-01-12", 访问用户: 4593, 下单用户: 4293 },
        ],
      },
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    async demoFn() {
      let con = await this.$confirm(`确定移除 ？`).catch((e) => {});
      if (con == "confirm") {
        //保存修改
        detailApi.del({ id: row.itemDetailId }).then((res) => {
          if (res.code == 200) {
            this.getList();
          } else {
            this.$message.error(res.info);
          }
        });
      } else {
        //右上角取消
      }
    },
  },
  mounted() {
    console.log(this.$fn.date.diff(new Date(), "2018-01-01"), "1111111111----");
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  overflow: hidden;
  .item {
    width: 100%;
    height: 120px;
    border: 1px solid #ebeef5;
    transition: all 0.3s;
    border-radius: 6px;
    position: relative;
    &:hover .positionIcon {
      right: 16px;
      bottom: 16px;
    }
    display: flex;
    align-items: center;
    .card {
      color: white;
      padding-left: 20px;
      div:nth-child(1) {
        font-size: 13px;
      }
      div:nth-child(2) {
        margin-bottom: 8px;
        font-size: 18px;
      }
      div:nth-child(3) {
        font-size: 13px;
      }
    }
    .positionIcon {
      position: absolute;
      right: 6px;
      bottom: 6px;
      font-size: 50px;
      transform: rotate(-30deg);
      transition: all ease 0.3s;
    }
  }
  .item1 {
    background-color: white;

    &:hover {
      box-shadow: #ccc 0px 0px 10px;
    }
    .text {
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      .scope {
        font-size: 13px;
        color: gray;
      }
    }
    .img {
      margin-left: 10%;
      margin-right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid #409eff;
    }
  }
  .item2 {
    background-color: rgb(249, 89, 89);
    .positionIcon {
      color: rgb(248, 108, 107);
    }
  }
  .item3 {
    background-color: rgb(133, 149, 244);
    .positionIcon {
      color: rgb(146, 161, 244);
    }
  }
  .item4 {
    background-color: rgb(254, 187, 80);
    .positionIcon {
      color: rgb(253, 197, 102);
    }
  }
}
.eye {
  margin-top: 30px;
  background-color: white;
}
</style>
