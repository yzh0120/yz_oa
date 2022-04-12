<template>
  <page>
    <!-- <svgIcon icon="RDCIconDashboard" className="aaa"></svgIcon> -->

    <!-- 表单 -->
    <base-form :data="formInfo" @event="event">
      <template>
        <div class="text-center" style="margin-bottom: 10px">
          <el-button
            type="primary"
            @click="getData"
            native-type="submit"
            size="large"
            style="width: 200px"
            >搜索</el-button
          >
        </div>
      </template>
    </base-form>

    <!-- 表格 -->
    <base-table :data="table" :pager="pagerData">
      <template #do="{ scope }">
        <el-button type="text" @click="edit(scope.row, scope.$index)"
          >编辑</el-button
        >
        <el-button type="text" @click="del(scope.row, scope.$index)"
          >删除</el-button
        >
      </template>
    </base-table>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData()" @sizeChange="getData()" />
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      formInfo: {
        list: [
          { type: "input", field: "__input", title: "姓名" },
          {
            type: "select",
            field: "__jidu",
            title: "季度",
            opt: [
              {
                text: "第一季度",
                value: 1,
              },
              {
                text: "第二季度",
                value: 2,
              },
              {
                text: "第三季度",
                value: 3,
              },
              {
                text: "第四季度",
                value: 4,
              },
            ],
          },
          {
            type: "select",
            field: "__yuefen",
            title: "月份开始",
            opt: [
              {
                text: "1月",
                value: 1,
              },
              {
                text: "2月",
                value: 2,
              },
              {
                text: "3月",
                value: 3,
              },
              {
                text: "4月",
                value: 4,
              },
              {
                text: "5月",
                value: 5,
              },
              {
                text: "6月",
                value: 6,
              },
              {
                text: "7月",
                value: 7,
              },
              {
                text: "8月",
                value: 8,
              },
              {
                text: "9月",
                value: 9,
              },
              {
                text: "10月",
                value: 10,
              },
              {
                text: "11月",
                value: 11,
              },
              {
                text: "12月",
                value: 12,
              },
            ],
          },
          { type: "select", field: "__end", title: "月份结束", opt: [] },
        ],
        // formDOM: null, //表单DOM对象
        data: {},
        titileWidth: "80px", //title
        // inline: true,
        isRow: true,
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
          { slot: "do", title: "操作", width: 150, fixed: "right" },
        ],
        data: [],
        height: self.h,
        loading: true,
        index: true,
      },

      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
    };
  },
  watch: {
    "formInfo.data": {
      handler(newVal) {
        this._set(this.formInfo, "__jidu", {
          disabled: this.formInfo.data.__yuefen ? true : false,
        });

        this._set(this.formInfo, "__yuefen", {
          disabled: this.formInfo.data.__jidu ? true : false,
        });

        this._set(this.formInfo, "__end", {
          disabled:
            !this.formInfo.data.__yuefen || this.formInfo.data.__jidu
              ? true
              : false,
        });
      },
      immediate: true,
      deep: true,
    },
    "formInfo.data.__yuefen": {
      handler(newVal) {
        let opMonthEnd = [];
        let num = this.formInfo.data.__yuefen;
        let start = 12 - num;
        for (let i = 0; i <= start; i++) {
          opMonthEnd.push({ value: num + i, text: num + i + "月" });
        }
        this._set(this.formInfo, "__end", { opt: opMonthEnd });
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    edit(row) {},
    del(row, index) {},
    event(e) {
      /* */
      console.log(e);
      if (e.event == "select" && e.item.title == "月份开始") {
        this.formInfo.data.__end = "";
      }
    },
    getData(isClickSearch) {
      let other = {
        load: {
          obj: this.table,
          // loading : 'loading',   //默认的值就是 "loading",
          // text:'自定义'
        },
      };
      this.$api.table
        .pager({ pagerData: this.pagerData }, other)
        .then((res) => {
          this.table.data = res.data.records;
          this.pagerData.total = res.data.total;
        });

      console.log(this.pagerData.pageNo, "当前页面数");
      console.log(this.pagerData.pageSize, "页面显示条数");

      // 1 isClickSearch 是true,表明用户点击了搜索,所以
      // pageNo 重置1     isClickSearch && (this.pagerData.pageNo = 1);

      // 2 如果用户在有搜索条件下点击了下一页   主要看后台如何接收值
      // 判断搜索条件是否有值,有就添加条件,没有就不添加,如果搜索条件有多个 则判断多次 postData.push()
      // let postData = {
      // 	filters :[]
      // }
      // if(this.filtersForm.xxx){
      // 	postData.filters.push(
      // 		{
      // 			member: "itemName",
      // 			value: this.filtersForm.xxx,
      // 		}
      // 	)
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.aaa {
  background-color: blue;
  font-size: 300px;
  color: red;
}
</style>
