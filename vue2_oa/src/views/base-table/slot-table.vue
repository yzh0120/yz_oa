<template>
  <page>
    <!-- 表单 -->
    <base-form :data="formInfo">
      <template #button>
        <el-button type="primary" @click="getData" native-type="submit"
          >搜索</el-button
        >
      </template>
    </base-form>

    <!-- 表格 -->
    <base-table :data="table" :pager="pagerData">
      <!-- 图片//重点 -->
      <template #img="{ scope }">
        <el-image
          style="width: 60px; height: 30px"
          :src="
            scope.row.img ||
            'http://www.bocaibao.com.cn/images/1shouye_logo.png'
          "
        ></el-image>
      </template>

      <!-- 流程 //重点-->
      <template #process="{ scope }">
        <span>{{ scope.row.process }}</span>
      </template>

      <!-- 按钮 //重点-->
      <template #operation="{ scope }">
        <el-button size="mini" type="text">分配角色</el-button>
        <el-button size="mini" type="text">编辑</el-button>
        <el-button size="mini" type="text"
          >删除{{ scope.row.Bank_of_deposit }}</el-button
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
          {
            //重点
            slot: "img",
            title: "图片",
          },
          {
            //重点
            slot: "process",
            title: "流程",
          },
          {
            //重点
            slot: "operation",
            title: "操作",
            width: 260,
          },
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
          this.table.data = res.data.records;
          this.pagerData.total = res.data.total;
        });
    },
  },
};
</script>