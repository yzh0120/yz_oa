<template>
  <page>
    <!-- 表单 -->
    <base-form :data="formInfo">
      <template #button>
        <el-button type="primary" @click="search" native-type="submit"
          >搜索</el-button
        >
        <el-button type="primary" @click="alertData.field = true"
          >新增</el-button
        >
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
    <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" />

    <!-- 弹窗 -->
    <alert :data="alertData" @event="alertEvent">
      <base-form :data="formAlert"></base-form>
    </alert>
  </page>
</template>

<script>
// import * as config from "@/tools/config.js"
export default {
  data() {
    let self = this;
    return {
      alertData: {
        field: false,
        width: "800px",
        height: "600px",
        title: "基础弹窗",
      },
      formAlert: {
        span: true,
        list: [
          { title: "日期", field: "__date", type: "date", span: 12 },
          { title: "姓名", field: "__input", type: "input", span: 12 },
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
  mounted() {
    this.getData();
  },
  methods: {
    edit(row) {
      this.formAlert.data = this.$fn.deepClone(row);
      this.alertData.field = true;
    },
    del(row, index) {
      this.$api.role
        .del({}, { tip: true, params: { id: row.id } })
        .then((res) => {
          this.$message.success(res.info);
          this.getData();
        });
    },
    search() {
      this.pagerData.pageNo = 1;
      this.getData();
    },
    getData() {
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
    },
    formEvent(e) {
      if (e.event == "checkbox") {
        console.log(e.value);
      }
      if (e.event == "radio") {
        console.log(e.value);
      }
    },
    alertEvent(e) {
      if (e.event == "confirm") {
        let url = this.formAlert.data.id ? "update" : "save";

        this.$api.table[url](this.formAlert.data).then((res) => {
          this.$message.success(res.info);
          this.getData();
        });
        this.alertEvent({ event: "cancel" });
      }
      if (e.event == "cancel") {
        this.formAlert.data = {};
        this.alertData.field = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

