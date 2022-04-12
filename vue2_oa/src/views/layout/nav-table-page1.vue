<template>
  <nav-table-page leftTitle="左边的标题" rightTitle="右边的标题">
    <!-- 左边 -->
    <template #left>
      <div
        v-for="(item, index) in arr"
        :key="index"
        :class="['left-item', active == index ? 'active' : '']"
        @click="select(index)"
      >
        <div>目录{{ item }}</div>
      </div>
    </template>

    <!-- 右边的 -->
    <template #right>
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
      <pager
        :data="pagerData"
        @pageChange="getData()"
        @sizeChange="getData()"
      />
    </template>
  </nav-table-page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      active: "",
      arr: [
        1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 14, 15, 13, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
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
    select(index) {
      this.active = index;
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
</style>
