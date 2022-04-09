<template>
  <page>
    <!-- 表单 -->
    <base-form :data="formInfo">
	    <template #button>
	  			<el-button  type="primary" @click="getData(true)" native-type="submit">搜索</el-button>
                  <el-button  type="primary" @click="alertData.field = true" >新增</el-button>
	  	</template>
    </base-form>

    <!-- 表格 -->
    <base-table :data="table" :pager="pagerData"></base-table>

    <!-- 分页 -->
    <pager  :data="pagerData" @pageChange="getData()" @sizeChange="getData()" />

    <!-- 弹窗 -->
    <alert :data="alertData" @event="alertEvent">
        <base-form :data="alertFormInfo"></base-form>
    </alert>
  </page>
</template>

<script>
	// import * as config from "@/tools/config.js"
export default {
  data() {
    let self = this;
    return {
        alertData:{
                field:false,
                width:"800px",
                height:"600px",
                title: "基础弹窗",
        },
        alertFormInfo: {
            span:true,
            list: [
            { title: "日期", field: "__date", type: "date" ,span:12},
            { title: "姓名", field: "__input", type: "input",span:12 },
            { slot: "button" },
            ],
        data: {},
      },
      formInfo: {
        list: [
          { title: "日期", field: "__date", type: "date" },
          { title: "姓名", field: "__input", type: "input" },
          { slot: "button" },
        ],
        // formDOM: null, //表单DOM对象
        data: {},
        titleWidth: "50px", //form的title宽度
        inline: true,
      },

      table: {
				  head: [
				    {
				      field: "Bank_of_deposit",
				      title: "开户行",
				    },
				    {
				      field: "account",
				      title: "账号",
				    },
				    {
				      field: "Total_amount",
				      title: "总金额",
				    },
				    {
				      field: "remark",
				      title: "备注",
				    },
				  ],
				  data: [],
				  height:self.h,
				  loading:true,
				  index:true,
				},
      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
    };
  },
  mounted() {
    this.getData(true);
  },
  methods: {
    getData(isSearch) {
	  isSearch && (this.pagerData.pageNo = 1);
      let other = {
        load: {
          obj: this.table,
          // loading : 'loading',   //默认的值就是 "loading",
          // text:'自定义'
        },
      };
      this.$api.table.pager({ pagerData: this.pagerData },other).then((res) => {
        this.table.data = res.data;
        this.pagerData.total = res.total;
      });
    },
	event(e){
		if(e.event == "checkbox"){ 
			console.log(e.value)
		}
		if(e.event == "radio"){
			console.log(e.value)
		}
	},
    alertEvent(e){
        if (e.event == "confirm") {
            let url = this.alertFormInfo.data.id ? "update" : "save";
            /*
             this.$api.table[url]({ pagerData: this.pagerData },other).then((res) => {
                this.table.data = res.data;
                this.pagerData.total = res.total;
            });
            */ 

            this.alertData.field = false
        }
        if (e.event == "cancel") {
            this.alertData.field = false
        }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>

