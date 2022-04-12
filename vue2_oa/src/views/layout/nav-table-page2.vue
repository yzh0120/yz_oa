<template>
  <nav-table-page leftTitle="左边的标题" rightTitle="右边的标题">
    <!-- 左边 -->
    <template #left>
      <el-tree
        @node-click="handleNodeClick_dongTai"
        :props="defaultProps"
        lazy
        :load="loadNode"
      >
      </el-tree>
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
      defaultProps: {
        children: "children",
        label: "ddd",
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
    //一进页面也会执行此方法,所以不需要:data="treeData"
    //点击tree 动态加载  ,
    //此方法会比 node-click先执行
    // 如果一个节点的 isLeaf 是true,则不会执行此方法,只会执行 node-click
    loadNode(node, resolve) {
      //resolve是一个方法 用来合并返回的数据  resolve(res.data);
      let params = {
        // parentId: node.data.id,
      };
      this.getTree(params, resolve);
    },

    //获取tree
    getTree(params, resolve) {
      // api.getTree(params).then((res) => {
      //   if (params.parentId) {
      //     resolve(res.data);
      //   } else {
      //     this.treeData = res.data;
      //   }
      //   this.$forceUpdate();
      // });
      setTimeout(() => {
        resolve([
          {
            ddd: "一级 ---11",
            children: [],
          },
        ]);
      }, 2000);
    },
    // 懒加载点击node上的文字会触发  左边的箭头不会触发此方法
    handleNodeClick_dongTai(data, node) {
      console.log(data, node);
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
