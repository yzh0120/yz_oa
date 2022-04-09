<template>
  <page>
    
	
	<el-card >
	  <div slot="header" >
	    <span>设置饼图自动切换</span>
	  </div>
		<ve-pie :data="chartData" :after-config="afterConfig" :after-set-option="afterSetOption" :events="chartEvents"></ve-pie>
	</el-card>


    
	
	<el-card >
	  <div slot="header" >
	    <span>基础的饼图</span>
	  </div>
		<ve-pie :data="chartData"></ve-pie>
	</el-card>

    
	
	<el-card >
	  <div slot="header" >
	    <span>玫瑰图</span>
	  </div>
		<ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
	</el-card>


    
	
	<el-card >
	  <div slot="header" >
	    <span>限制显示条数饼图</span>
	  </div>
		<ve-pie :data="chartData" :settings="chartSettings_limit"></ve-pie>
	</el-card>

   
    
	
	<el-card >
	  <div slot="header" >
	    <span>多圆饼图</span>
	  </div>
		<ve-pie :data="chartData" :settings="chartSettings_level"></ve-pie>
	</el-card>

    
    
	
	<el-card >
	  <div slot="header" >
	    <span>设置数据类型(不是y轴单位,而是指标数据的单位)</span>
	  </div>
		<ve-pie :data="chartData" :settings="chartSettings_dataType"></ve-pie>
	</el-card>


    
	
	<el-card >
	  <div slot="header" >
	    <span>设置饼图半径边距</span>
	  </div>
		<ve-pie :data="chartData" :settings="chartSettings_radius"></ve-pie>
	</el-card>


    
    
	<el-card >
	  <div slot="header" >
	    <span>事件监听</span>
		<p>被点击日期：{{ name }}</p>
	  </div>
		<ve-pie :data="chartData" :events="chartEvents"></ve-pie>
	</el-card>

  </page>
</template>

<script>
export default {
	
  data() {
    this.chartSettings = {
      roseType: "radius", //玫瑰类型为半径
    };

    this.chartSettings_limit = {
      limitShowNum: 2, //默认是降序排序,然后显示比较大的数据
    };

    this.chartSettings_level = {
      level: [
        //维度等级靠后 维度所在的数据就在外面
        ["2018-01-01", "2018-01-02", "2018-01-03"],
        ["2018-01-04", "2018-01-05"],
      ],
    };

    this.chartSettings_dataType = {
      dataType: "percent", //设置数据类型(在指标数据后面加上单位)(不是y轴单位,而是指标数据的单位)
    };

    this.chartSettings_radius = {
      radius: 10, //饼图半径
      offsetY: 200, //偏移量 方向自上而下
    };

    var self = this;
    this.chartEvents = {
      click: function (e) {
        //
        self.name = e.name;
        console.log(e);
      },
      mouseover(e) {
		  console.log('11111')
		  //清除定时器
		  clearInterval(self.timeInt);
		  
        // //取消之前高亮图形
		if(self.currentIndex != e.dataIndex){
			self.chartsIns.dispatchAction({
			  type: "downplay",
			  seriesIndex: 0,
			  dataIndex: self.currentIndex,
			});
		}
        
        // //高亮显示选中区
        // self.chartsIns.dispatchAction({
        //   type: "highlight",
        //   seriesIndex: 0,
        //   dataIndex: e.dataIndex,
        // });
        self.currentIndex = e.dataIndex;
		

        
      },
      mouseout(e) {
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
    };
  },
  mounted() {
    this.autoChange();
  },
  methods: {
    afterConfig(options) {
      return options;
    },
    afterSetOption(e) {
      this.chartsIns = e;
    },
    autoChange() {
      this.timeInt = setInterval(() => {
        //定时移除高亮选中区
        this.chartsIns.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: this.currentIndex,
        });
        this.currentIndex++;
        if (this.currentIndex > this.chartData.rows.length - 1) {
          this.currentIndex = 0;
        }
        //高亮显示选中区
        this.chartsIns.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: this.currentIndex,
        });
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
