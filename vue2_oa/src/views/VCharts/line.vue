<template>
  <page>
    <!-- 单维度 多指标
    维度相当于 x轴的刻度

    指标就是当前刻度上的数据
    
    https://zizorg.github.io/v-charts/#/line
     -->
    
	<el-card >
	  <div slot="header" >
	    <span>基础的折线图</span>
	  </div>
		<ve-line :data="chartData"></ve-line>
	</el-card>


    
	<el-card >
	  <div slot="header" >
	    <span>设置显示的指标维度</span>
	  </div>
		<ve-line :data="chartData" :settings="chartSettings"></ve-line>
	</el-card>


    
	
	<el-card >
	  <div slot="header" >
	    <span>设置双y轴</span>
	  </div>
		<ve-line :data="chartData" :settings="chartSettings_yy"></ve-line>
	</el-card>


	
	<el-card >
	  <div slot="header" >
	    <span>横坐标的刻度的倾斜y轴</span>
	  </div>
		<ve-line :data="chartData" :extend="extend"></ve-line>
	</el-card>

    
    
	
	<el-card >
	  <div slot="header" >
	    <span>堆叠面积图y轴</span>
	  </div>
		<ve-line :data="chartData" :settings="chartSettings_stack"></ve-line>
	</el-card>

    
    
	
	<el-card >
	  <div slot="header" >
	    <span>设置别名</span>
	  </div>
		<ve-line :data="chartData_alias" :settings="chartSettings_alias"></ve-line>
	</el-card>


    
	
	<el-card >
	  <div slot="header" >
	    <span>显示指标数值</span>
	  </div>
		<ve-line :data="chartData" :extend="extend_showData"></ve-line>
	</el-card>

    
    
	
	<el-card >
	  <div slot="header" >
	    <span>设置横轴为连续的时间轴</span>
	  </div>
		<ve-line :data="chartData" :settings="chartSettings_xAxisType"></ve-line>
	</el-card>

    
    
	
	<el-card >
	  <div slot="header" >
	    <span>钩子函数</span>
	  </div>
		<ve-line :data="chartData" :before-config="beforeConfig" :after-config="afterConfig" :after-set-option="afterSetOption"></ve-line>
	</el-card>

  </page>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      metrics: ["访问用户", "下单用户"], //设置指标
      dimension: ["日期"], //设置维度
	  max:[10000]
    };

    this.chartSettings_yy = {
      axisSite: { right: ["下单率"] }, //设置右侧y轴的指标
      yAxisType: ["KMB", "normal"], //设置 左右坐标y轴为连续的数值轴的类型   可选值: KMB, normal(按照原来维度的数据来), percent(百分比)
      yAxisName: ["数值", "比率"], //设置两个y轴的名称
    };

    this.extend = {
      "xAxis.0.axisLabel.rotate": 45, //x轴倾斜 45
	  // backgroundColor : 'rgb(255,111,111)'
    };

    this.chartSettings_stack = {
      stack: { 用户: ["访问用户", "下单用户"] }, //设置堆叠的指标,从左往右堆叠
      area: true, //显示面积
    };

    this.chartSettings_alias = {
      labelMap: {
        PV: "访问用户1", //设置指标的别名
        Order: "下单用户", //设置指标的别名
      },
      legendName: {
        访问用户1: "访问用户 total: 100001", //设置图例别名 (根据指标(或者指标别名) 来做key)
      },
    };

    this.extend_showData = {
      series: {
        label: {
          normal: {
            show: true, //显示图表上的节点的指标数值
          },
        },
      },
    };

    this.chartSettings_xAxisType = {
      xAxisType: "time", //x轴是连续的什么类型      可选值: category(类目), value(数值), time(日期), log
    };

    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "2018-01-01", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "2018-01-02", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "2018-01-03", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "2018-01-05", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "2018-01-10", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "2018-01-20", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },

      chartData_alias: {
        columns: ["date", "PV", "Order", "OrderRate"],
        rows: [
          { date: "1/1", PV: 1393, Order: 1093, OrderRate: 0.32 },
          { date: "1/2", PV: 3530, Order: 3230, OrderRate: 0.26 },
          { date: "1/3", PV: 2923, Order: 2623, OrderRate: 0.76 },
          { date: "1/4", PV: 1723, Order: 1423, OrderRate: 0.49 },
          { date: "1/5", PV: 3792, Order: 3492, OrderRate: 0.323 },
          { date: "1/6", PV: 4593, Order: 4293, OrderRate: 0.78 },
        ],
      },
    };
  },
  methods: {
    beforeConfig(data) {
      /*
      对数据提前进行额外的处理，在数据转化为配置项开始前触发
      参数为 data，返回值为表格数据
      */
      console.log("beforeConfig", data);
      return data;
    },
    afterConfig(options) {
      /*
      对生成好的echarts配置进行额外的处理，在数据转化为配置项结束后触发
      参数为 options，返回值为 echarts 配置 options
      */
      console.log("afterConfig", options);
      options.xAxis[0].axisLabel = { interval: 0, rotate: 45 };
	  // options.backgroundColor= 'rgb(255,111,111)';
      return options;
      /*
      interval:0  解决横轴自动隐藏
      rotate:45  横轴45度显示
      */
    },
    afterSetOption(e) {
      /*
      	生成图之后获取echarts实例
        参数为echarts实例
      */
      console.log("afterSetOption", e);
    },
  },
};
</script>

<style lang="scss" scoped>
	::v-deep{
		
	}
</style>
