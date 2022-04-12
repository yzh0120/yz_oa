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
    <base-table :data="table" :pager="pagerData"></base-table>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData()" @sizeChange="getData()" />
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      btnPower: true,
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
        // width:"100px",
        head: [
          {
            field: "Bank_of_deposit",
            title: "开户行",
            // width:"400px"
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
    test() {
      alert("在上个页面执行了本页面的test方法");
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
          this.table.data = res.data.records;
          this.pagerData.total = res.data.total;
        });
    },
  },
};
</script>