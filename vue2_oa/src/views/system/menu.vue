<template>
  <nav-table-page leftTitle="菜单目录" rightTitle="菜单信息">
    <!-- 左边 -->
    <template #left>
      <el-tree
        @node-click="handleNodeClick_dongTai"
        :props="defaultProps"
        :data="treeData"
      >
      </el-tree>
    </template>

    <!-- 右边的 -->
    <template #right>
      <!-- 表单 -->
      <base-form :data="formInfo">
        <template #button>
          <el-button type="primary" @click="search" native-type="submit"
            >搜索</el-button
          >
          <el-button type="primary" @click="addRoute">新增路由</el-button>
        </template>
      </base-form>

      <!-- 表格 -->
      <base-table :data="table" :pager="pagerData">
        <template #do="{ scope }">
          <el-button type="text" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" @click="del(scope.row)">删除</el-button>
        </template>
      </base-table>

      <!-- 分页 -->
      <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" />

      <!-- 弹窗 -->
      <alert :data="alertData" @event="alertEvent">
        <base-form :data="alertFormInfo"></base-form>
      </alert>
    </template>
  </nav-table-page>
</template>

<script>
import page from "@/native/Components/base/page.vue";
export default {
  components: { page },
  data() {
    let self = this;
    return {
      activeRouteId: null,
      treeData: [],
      defaultProps: {
        children: "children",
        label: "routeTitle",
      },
      formInfo: {
        list: [
          { title: "菜单标题", field: "routeTitle", type: "input" },
          { slot: "button" },
        ],
        data: {},

        inline: true,
      },
      alertFormInfo: {
        data: {},
        list: [
          {
            title: "路由path",
            field: "routePath",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            title: "路由name",
            field: "routeName",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            title: "路由文件路径",
            field: "routeFilePath",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            title: "路由名称",
            field: "routeTitle",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            type: "treeselect",
            field: "parentId",
            title: "父路由",
            opt: [],
            id: "id",
            text: "routeTitle",
            children: "children",
            //   rules: [{ required: true, message: "请输入", trigger: "blur" }],
          },
          {
            type: "switch",
            field: "showOnMenu",
            title: "是否显示在菜单",
            av: 1,
            iav: 0,
            avText: "是",
            iavText: "否",
          },
        ],
        titleWidth: "160px",
      },
      table: {
        autoWidth: true,
        head: [
          {
            field: "routeTitle",
            title: "路由名称",
          },
          {
            field: "routePath",
            title: "路由path",
          },
          {
            field: "routeName",
            title: "路由name",
          },
          {
            field: "routeFilePath",
            title: "路由文件路径",
          },

          {
            field: "showOnMenu",
            title: "是否显示在菜单",
            format(row, column, cellValue, index) {
              // return cellValue;
              if (cellValue == 1) {
                return "是";
              }
              return "否";
            },
          },
          {
            //重点
            slot: "do",
            title: "操作",
          },
        ],
        data: [],
        height: self.h,
        // loading: true,
        index: true,
      },

      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
      alertData: {
        field: false,
        width: "1000px",
        height: "600px",
        title: "路由",
      },
    };
  },
  mounted() {
    this.getData();
    this.getMenuTree();
  },
  methods: {
    getMenuTree() {
      this.$api.menu.menuTree().then((res) => {
        this.treeData = res.data;
        this._setList(this.alertFormInfo, "parentId", { opt: res.data });
      });
    },
    alertEvent(e) {
      if (e.event == "confirm") {
        let url = this.alertFormInfo.data.id ? "updateMenu" : "saveMenu";
        this.$api.menu[url](this.alertFormInfo.data).then((res) => {
          this.$message.success(res.info);
          this.getData();
          this.getMenuTree();
        });

        this.alertData.field = false;
        this.alertFormInfo.data = {};
      }
      if (e.event == "cancel") {
        this.alertData.field = false;
      }
    },
    // 懒加载点击node上的文字会触发  左边的箭头不会触发此方法
    handleNodeClick_dongTai(data, node) {
      this.activeRouteId = data.id;
      this.getData();
    },
    search() {
      this.pagerData.pageNo = 1;
      this.getData();
    },
    addRoute() {
      this.alertData.field = true;
    },

    getData() {
      let data = Object.assign({}, this.formInfo.data, this.pagerData, {
        parentId: this.activeRouteId,
      });
      this.$api.menu.pageListByParentId(data).then((res) => {
        this.table.data = res.data.records;
        this.pagerData.total = res.data.total;
      });
    },
    del(row) {
      this.$api.menu.deleteById({ id: row.id }, { tip: true }).then((res) => {
        this.$message.success(res.info);
        this.getData();
        this.getMenuTree();
      });
    },
    edit(row) {
      this.addRoute();
      this.alertFormInfo.data = row;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
