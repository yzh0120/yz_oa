<template>
  <page>
      <ve-histogram :data="chartData" :before-config="beforeConfig" :after-config="afterConfig" :after-set-option="afterSetOption"></ve-histogram>
  </page>
</template>
<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
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
      /*常用   和 extend 差不多
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
  }
</script>