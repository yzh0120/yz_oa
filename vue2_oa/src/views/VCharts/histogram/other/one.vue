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
            // { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            // { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            // { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            // { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            // { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
	methods:{
		afterConfig(options) {

		  // 同指标 不同颜色
		  options.series[0].itemStyle = {
		          normal: {
		            color: function (d) {//随机显示
		              return ( "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16) );
		            },
					color:function(params) {//按顺序显示
						 var colorList = ['#338AF6', '#78C77D', '#F4D35F', '#435184', '#8C67DE', '#6BC8CA', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
						  return colorList[params.dataIndex]
					},
		          },
		        };
		  
		  return options;
		  
		   
		},
	}
  }
</script>
