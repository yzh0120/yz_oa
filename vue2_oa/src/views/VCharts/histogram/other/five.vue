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
	methods:{
		afterConfig(options) {
			/* 1 X轴倾斜
			interval:0  解决横轴自动隐藏
			rotate:45  横轴45度显示
			*/
		  options.xAxis[0].axisLabel = { interval: 0, rotate: 45 };

		  return options;
		  
		   
		},
	}
  }
</script>