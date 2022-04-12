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
        <!--  -->
        <el-tabs type="border-card" v-model="menuactive">
          <el-tab-pane label="基础路由信息" name="one">
            <base-form :data="formInfoAlert"></base-form>
          </el-tab-pane>
          <el-tab-pane label="路由按钮权限配置" name="two">
            <div style="text-align: right; margin-bottom: 15px">
              <el-button type="primary" @click="addBtn">增加</el-button>
            </div>

            <alert :data="alertDataBtn" @event="alertEventBtn">
              <base-form
                :data="formInfoAlertBtn"
                ref="formInfoAlertBtn"
              ></base-form>
            </alert>
            <!--  -->
            <base-table :data="tableBtn" :pager="pagerData">
              <template #do="{ scope }">
                <el-button type="text" @click="editBtn(scope.row, scope.$index)"
                  >编辑</el-button
                >
                <el-button type="text" @click="delBtn(scope.$index)"
                  >删除</el-button
                >
              </template>
            </base-table>
          </el-tab-pane>
        </el-tabs>
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
      menuactive: "one",
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
      formInfoAlertBtn: {
        data: {},
        list: [
          {
            title: "名称",
            field: "name",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            title: "编码",
            field: "enCode",
            type: "input",
            rules: [{ required: true, message: "必填", trigger: "blur" }],
          },
          {
            title: "备注",
            field: "remark",
            type: "input",
            rules: [{ required: false, message: "必填", trigger: "blur" }],
          },
        ],
      },
      formInfoAlert: {
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
      tableBtn: {
        autoWidth: true,
        head: [
          {
            field: "name",
            title: "名称",
          },
          {
            field: "enCode",
            title: "编码",
          },
          {
            //重点
            slot: "do",
            title: "操作",
          },
        ],
        data: [],
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
      alertDataBtn: {
        field: false,
        width: "600px",
        height: "400px",
        title: "按钮权限",
      },
    };
  },
  mounted() {
    this.getData();
    this.getMenuTree();
  },
  methods: {
    addBtn() {
      this.alertDataBtn.field = true;
    },
    editBtn(row, index) {
      this.formInfoAlertBtn.data = row;
      this.formInfoAlertBtn.data.index = index;
      this.addBtn();
    },
    delBtn(index) {
      this.tableBtn.data.splice(index, 1);
    },
    getMenuTree() {
      this.$api.menu.menuTree().then((res) => {
        this.treeData = res.data;
        this._setList(this.formInfoAlert, "parentId", { opt: res.data });
      });
    },
    alertEvent(e) {
      if (e.event == "confirm") {
        let url = this.formInfoAlert.data.id ? "updateMenu" : "saveMenu";
        this.$api.menu[url]({
          menu: this.formInfoAlert.data,
          scopeBtnList: this.tableBtn.data,
        }).then((res) => {
          this.$message.success(res.info);
          this.getData();
          this.getMenuTree();
        });

        this.alertEvent({ event: "cancel" });
      }
      if (e.event == "cancel") {
        this.alertData.field = false;
        this.formInfoAlert.data = {};
      }
    },
    alertEventBtn(e) {
      if (e.event == "confirm") {
        if (this.$refs.formInfoAlertBtn.check()) {
          if (this.$fn.type(this.formInfoAlertBtn.data.index) == "und") {
            this.formInfoAlertBtn.data.index = this.tableBtn.data.length;
            this.tableBtn.data.push(
              this.$fn.deepClone(this.formInfoAlertBtn.data)
            );
          } else {
            this.formInfoAlertBtn.data[this.formInfoAlert.data.index] =
              this.$fn.deepClone(this.formInfoAlertBtn.data);
          }

          this.alertEventBtn({ event: "cancel" });
        } else {
        }
      }
      if (e.event == "cancel") {
        this.alertDataBtn.field = false;
        this.formInfoAlertBtn.data = {};
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
      this.menuactive = "one";
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
      this.$api.menu.getMenuDetailById({ id: row.id }).then((res) => {
        console.log(res.data);
        this.formInfoAlert.data = res.data.menu;
        this.tableBtn.data = res.data.scopeBtnList;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
