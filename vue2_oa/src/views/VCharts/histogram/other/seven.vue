<template>
  <page>
      <ve-histogram :data="chartData" :after-config="afterConfig"></ve-histogram>
  </page>
</template>
<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 3200 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
	methods:{
		afterConfig(options) {

		  // Echarts自定义Y轴刻度值范围(即最小值与最大值)和等分间隔
		  // https://blog.csdn.net/LSL1618/article/details/110484091
		  options.yAxis[0].max = 10000;//最大值
		  options.yAxis[0].min = 1000;//最小值
		  options.yAxis[0].interval = 1000;//等分间隔
		  return options;
		},
	}
  }
</script>
</strong>