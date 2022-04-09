<template>
	<!-- 
	 Echarts中dataZoom添加滚动条
	 https://blog.csdn.net/qq_43753724/article/details/115804059
	 -->
  <page>
	  <ve-line :data="chartData" :after-config="afterConfig" ref="vchart" :events="events" :data-zoom="dataZoom"></ve-line>
  </page>
</template>
<script>
  export default {
    data () {
		this.events = { 
			/* echarts、v-charts中dataZoom事件，动态获取dataZoom滑动条改变后的数据
			https://blog.csdn.net/weixin_42296333/article/details/108355448
			 */
			datazoom:(params)=> {//缩放事件
					console.log(params);
			  		let xAxis=this.$refs['vchart'].echarts.getModel().option.xAxis[0];
					console.log(xAxis.data);//axis的标号数据
					console.log(xAxis.rangeStart);//滑动条左端对应在xAxis.data的索引
					console.log(xAxis.rangeEnd);//滑动条右端对应在xAxis.data的索引;
				},

		}
		this.dataZoom = [
		        {
		          type: 'slider',
		          start: 0,
		          end: 20
		        }
		      ]
      return {
		  
        chartData: {
          columns: ["日期", "访问用户", "下单用户", "下单率"],
          rows: [
            { 日期: "1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
            { 日期: "2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
            { 日期: "3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
            { 日期: "4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
            { 日期: "5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
            { 日期: "6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
			{ 日期: "7", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
            { 日期: "8", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
            { 日期: "9", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
            { 日期: "10", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
            { 日期: "11", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
            { 日期: "12", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
			
          ],
        },
      }
    },
	methods:{
		afterConfig(options) {
			
		  return options;
		  
		   
		},
	}
  }
</script>
