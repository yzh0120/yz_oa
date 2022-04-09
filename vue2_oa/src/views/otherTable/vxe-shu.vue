<template>
  <div>
    <el-button @click="confirmData.field = true">新增</el-button>
    <vxe-grid class="reverse-table" v-bind="gridOptions">
      <template #demo="{ row, columnIndex }">
        <div>
          <!-- <div v-if="columnIndex == 1">
			                <span v-if="row.col0 == '科目'">{{eval(`row.col${columnIndex}`)  }}</span>
			                <span v-else>{{row.col1 | formatMoney}}</span>
			              </div>
			              <div v-else-if="columnIndex == 2">
			                <span v-if="row.col0 == '科目'">{{row.col2 }}</span>
			                <span v-else>{{row.col2 | formatMoney}}</span>
			              </div>
			              <div v-else-if="columnIndex == 3">
			                <span v-if="row.col0 == '科目'">{{row.col3 }}</span>
			                <span v-else>{{row.col3 | formatMoney}}</span>
			              </div> -->

          <span v-if="row.col0 == '科目'">{{ eval(row, columnIndex) }}</span>
          <span v-else>{{ eval(row, columnIndex) }}</span>

          <el-button type="text" v-if="row.col0 == '科目'">编辑</el-button>
        </div>
      </template>
    </vxe-grid>

    <alert :data="confirmData" @event="event">
      <base-form :data="formData" @event="event"></base-form>
    </alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        list: [
          { type: "date", field: "statDate", title: "日期选择器" },
          { type: "input", field: "moneyFunds", title: "输入框" },
        ],
        data: {},
      },
      confirmData: {
        field: false,
        w: "1066px",
        h: "800px",
        title: "基础弹窗",
      },
      gridOptions: {
        border: false,
        showOverflow: false,
        height: 400,
        showHeader: false,
        columns: [],
        data: [],
      },
      columns: [
        { field: "statDate", title: "科目" },
        { field: "moneyFunds", title: "货币资金" },
      ],
      myData: [],
    };
  },
  created() {
    this.reverseTable(this.columns, this.myData);
  },
  methods: {
    eval(row, columnIndex) {
      return row[`col${columnIndex}`];
    },
    event(e) {
      if (e.event == "confirm") {
        // this.myData =[]
        this.myData.push(this.$fn.deepClone(this.formData.data));
        this.reverseTable(this.columns, this.myData);

        this.confirmData.field = false;
        // console.log("点击了确认按钮");
      }
      if (e.event == "cancel") {
        this.confirmData.field = false;
        console.log("点击了取消按钮");
      }
    },
    // 反转函数
    reverseTable(columns, list) {
      const buildData = columns.map((column) => {
        const item = { col0: column.title };
        list.forEach((row, index) => {
          item[`col${index + 1}`] = row[column.field];
        });
        return item;
      });
      const buildColumns = [
        {
          field: "col0", //col0 是标题
          fixed: "left",
          width: 80,
        },
      ];
      list.forEach((item, index) => {
        buildColumns.push({
          field: `col${index + 1}`,
          minWidth: 120,
          slots: {
            default: "demo",
          },
        });
      });
      this.gridOptions.data = buildData;
      this.gridOptions.columns = buildColumns;
    },
  },
};
</script>

<style>
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}
</style>
