<template>
  <table-page :padding="true">
    <!-- 表单 -->
    <!-- <base-form :data="formInfo">
	  	<template #button>
	  			<el-button  type="primary" @click="getData" native-type="submit">搜索</el-button>
	  	</template>
	  </base-form> -->

    <!-- 表格 -->
    <base-table
      :data="item" 
      @event="(e) => { event(e, index); }"
      v-for="(item, index) in forData"
      :key="index"
    ></base-table>

    <!-- 分页 -->
    <!-- <pager :data="pagerData"  @pageChange="getData()" @sizeChange="getData()" /> -->
  </table-page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      forData: [],
      data: [],
      activeIndex: "",
      formInfo: {
        list: [
          { title: "日期", field: "__date", type: "date" },
          { title: "姓名", field: "__input", type: "input" },
          { slot: "button" },
        ],
        data: {},
        titleWidth: "50px", //form的title宽度
        inline: true,
      },
      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    event(e, index) {
      this.activeIndex = index;
      if ((e.event = "checkbox")) {
          this.forData.forEach((item,i)=>{
              
              if(i != index){
                  this.forData[i].dom.clearSelection()
              }
          })
      }
    },
    getData(isSearch) {
      let data = [
        {
          xxx: [
            {
              Bank_of_deposit: "华商银行深圳分行",
              account: "5102100219000258489",
              Total_amount: 1000000,
              remark: "待总经理审批",
            },
          ],
        },
        {
          xxx: [
            {
              Bank_of_deposit: "华商银行深圳分行",
              account: "5102100219000258489",
              Total_amount: 1000000,
              remark: "待总经理审批",
            },
          ],
        },
      ];
      data.forEach((item) => {
        let m = 10000000000;
        let n = 1;
        item.xxx.id = Math.floor(Math.random() * (m - n) + n);
      });
      this.forData = [];
      data.forEach((item) => {
        this.forData.push({
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
          data: item.xxx,
          height: "200px",
          index: true,
          selection: true, //重点
          dom: null,
        });
      });
    },
  },
};
</script>