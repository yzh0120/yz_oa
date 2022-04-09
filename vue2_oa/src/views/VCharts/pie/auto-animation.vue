<template>
	<page>
		<ve-pie :data="chartData" :after-config="afterConfig" :after-set-option="afterSetOption" :events="chartEvents"></ve-pie>
	</page>
</template>

<script>
	export default{
		data(){
			var self = this;
			this.chartEvents = {
			  click: function (e) {//点击事件
			    self.name = e.name;//没啥用
			    console.log(e);
			  },
			  mouseover(e) {//移入事件
				  console.log('11111')
				  //清除定时器
				  clearInterval(self.timeInt);
				if(self.currentIndex != e.dataIndex){//取消之前高亮图形
					self.chartsIns.dispatchAction({
					  type: "downplay",//downplay 取消高亮指定的数据图形
					  seriesIndex: 0,
					  dataIndex: self.currentIndex,
					});
				}
			    self.currentIndex = e.dataIndex;
			  },
			  mouseout(e) {//移出事件
				//清除定时器
				clearInterval(self.timeInt);
			    self.autoChange();
			  },
			};
			return {
				chartData: {
				  columns: ["日期", "访问用户"],
				  rows: [
				    { 日期: "2018-01-01", 访问用户: 1393 },
				    { 日期: "2018-01-02", 访问用户: 3530 },
				    { 日期: "2018-01-03", 访问用户: 2923 },
				    { 日期: "2018-01-04", 访问用户: 1723 },
				    { 日期: "2018-01-05", 访问用户: 3792 },
				    { 日期: "2018-01-06", 访问用户: 593 },
				  ],
				},
				name: "",
				chartsIns: null,
				currentIndex: -1,
			}
		},
		mounted() {
		  this.autoChange();
		},
		methods:{
			afterConfig(options) {
			  return options;
			},
			afterSetOption(e) {
			  this.chartsIns = e;
			},
			autoChange() {
			  this.timeInt = setInterval(() => {//定时移除高亮选中区
			    this.chartsIns.dispatchAction({
			      type: "downplay",//downplay 取消高亮指定的数据图形
			      seriesIndex: 0,
			      dataIndex: this.currentIndex,
			    });
			    this.currentIndex++;
			    if (this.currentIndex > this.chartData.rows.length - 1) {
			      this.currentIndex = 0;
			    }
			    //高亮显示选中区
			    this.chartsIns.dispatchAction({
			      type: "highlight",//highLight 高亮指定的数据图形
			      seriesIndex: 0,
			      dataIndex: this.currentIndex,
			    });
			  }, 1000);
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
