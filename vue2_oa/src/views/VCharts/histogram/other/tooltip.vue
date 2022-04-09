<template>
  <page>
	  <ve-line :data="chartData" :after-config="afterConfig" ref="vchart" ></ve-line>
  </page>
</template>
<script>
  export default {
    data () {
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

			      options.tooltip = {
			        trigger: "axis",
			        formatter: (params) => {
						console.log(params)
						let html = ""
			                  for (let x = 0; x < params.length; x++) {//其实就是html文本
			                      html += `
								  ${params[x].seriesName}:
								  ${params[x].data[1]}
								  </br>
								  `
			                  }
						return html
			         },
			        backgroundColor: "#fff",
			        textStyle: {
			          color: "#000",
			        },
			        borderColor: "#9933cc",
			        borderWidth: 1, //边框
			        position: function (a) {
			          //悬浮窗到点的距离
			          a[0] = a[0] - 63;
			          return a;
			        },
			      };
			
			      return options;
			    },

		
	}
  }
</script>
