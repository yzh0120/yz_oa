<template>
  <table-page :padding="true">
    <!-- 表单 -->
    <!-- <base-form :data="formInfo">
	  	<template #button>
	  			<el-button  type="primary" @click="getData" native-type="submit">搜索</el-button>
	  	</template>
	  </base-form> -->

    <!-- 表格 -->
    <base-table :data="table" :pager="pagerData" @event="event">
      <template #expand="{ scope: { row } }">
        <openTableCom :data="row.comTableData"></openTableCom>
      </template>
    </base-table>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData()" @sizeChange="getData()" />
  </table-page>
</template>

<script>
import openTableCom from "@/views/layout/com/openTableCom";
export default {
  components: {
    openTableCom,
  },
  data() {
    let self = this;
    return {
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
        height: self.h,
        loading: true,
        index: true,
        expand: true, //重点
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
    event(e) {
      if (e.event == "expand") {
        if (e.flag.indexOf(e.value) !== -1) {
          //展开
          let rowIndex = this.table.data.findIndex((item) => {
            return item.id == e.value.id;
          });
          console.log(this.table.data[rowIndex], rowIndex);
          this.table.data[rowIndex].comTableData.data = [{ id: e.value.id }];
        } else {
          //关闭
        }
      }
    },
    getData(isSearch) {
      isSearch && (this.pagerData.pageNo = 1);

      let other = {
        load: {
          obj: this.table,
        },
      };
      this.$api.table
        .pager(
          {
            pagerData: this.pagerData,
          },
          other
        )
        .then((res) => {
          res.data.forEach((item) => {
            let m = 10000000000;
            let n = 1;
            item.id = Math.floor(Math.random() * (m - n) + n);
            item.comTableData = {
              head: [
                {
                  field: "id",
                  title: "ID",
                },
              ],
              data: [],
              height: "auto",
              index: true,
            };
          });
          this.table.data = res.data.records;
          this.pagerData.total = res.data.total;
        });
    },
  },
};
</script>