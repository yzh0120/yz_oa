<!-- 
<slot :name="item.slot" :scope="scope" />  
 -->

<template>
  <!-- 多级表头 -->
  <el-table-column
    :label="item.title"
    :key="item.title"
    :width="width(item)"
    :align="align"
    v-if="item.children"
  >
    <template v-for="(item, index) in item.children">
      <baseitem :item="item" :data="data" :key="index"></baseitem>
    </template>
  </el-table-column>

  <!-- 插槽 -->
  <el-table-column
    v-else-if="item.slot"
    :prop="item.field"
    :label="item.title"
    :key="item.title"
    :width="width(item)"
    :align="align"
  >
    <!-- 跨组件传插槽 -->
    <!-- 此处只是 el-table的tempalte  -->
    <template slot-scope="scope">
      <slot :name="item.slot" :scope="scope" />
    </template>
  </el-table-column>

  <!-- 悬浮显示 -->
  <el-table-column
    v-else-if="item.hover"
    :prop="item.field"
    :label="item.title"
    :key="item.title"
    :width="width(item)"
    :align="align"
    :formatter="item.format"
    :show-overflow-tooltip="item.tip || data.tip"
    :fixed="item.fixed"
    :sortable="item.sort"
  >
    <!-- 悬浮显示其他内容 -->
    <template slot-scope="scope">
      <el-tooltip
        effect="dark"
        placement="right"
        popper-class="baseTable_popper_class"
        class="grayg"
      >
        <div v-html="data.data[scope.$index][item.hover]" slot="content"></div>
        <span>{{ scope.row[item.field] }}</span>
      </el-tooltip>
    </template>
  </el-table-column>

  <!-- 普通 -->
  <el-table-column
    v-else
    :prop="item.field"
    :label="item.title"
    :key="item.title"
    :width="width(item)"
    :align="align"
    :formatter="item.format"
    :show-overflow-tooltip="item.tip || data.tip"
    :fixed="item.fixed"
    :sortable="item.sort"
  >
  </el-table-column>
</template>

<script>
export default {
  name: "baseitem",
  data() {
    return {};
  },
  props: {
    item: {
      default: function () {
        return {};
      },
    },
    data: {
      default: function () {
        return {};
      },
    },
    index: {},
  },
  computed: {
    align() {
      return this.data.align ? this.data.align : "center";
    },
  },
  methods: {
    width(item) {
      if (this.data.autoWidth && !item.width) {
        return "";
      } else {
        if (item.width) {
          return item.width;
        } else if (this.data.width) {
          return this.data.width;
        } else {
          return "200px";
        }
      }
    },
  },
  mounted() {
    // console.log(this.data.data,this.item,'’11111111')
  },
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
//背景颜色
.baseTable_popper_class {
  text-align: center;
}
</style>
