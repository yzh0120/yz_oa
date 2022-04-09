<template>
  <page>
    <base-form :data="formData" ref="form" @event="event"></base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      formData: {
        list: [
          {
            type: "input",
            field: "_input",
            title: "普通输入框",
            rules: [
              { required: true, message: "请输入", trigger: "blur" },
              { validator: self.$check.demo, trigger: "blur" },
            ],
          },
          {
            type: "input",
            field: "_input_prepend",
            title: "前缀输入框",
            prepend: "前缀文字",
          },
          {
            type: "input",
            field: "_input_append",
            title: "后缀输入框",
            append: "后缀文字",
          },
          {
            type: "input",
            field: "_input_btn",
            title: "按钮输入框",
            btn: "搜索",
          },
          {
            type: "password",
            field: "_password",
            title: "密码输入框",
          },
          {
            type: "inputrange",
            field: "_inputrange",
            title: "范围输入框",
          },
          ////////////////////////////////////////////////////////////////////////
          {
            type: "select",
            field: "_select",
            title: "普通下拉框",
            opt: [
              {
                text: "选择1",
                value: "1",
              },
              {
                text: "选择2",
                value: "2",
              },
            ],
          },

          ////////////////////////////////////////////////////////////////////////
          { type: "date", field: "_date", title: "年月日选择器" },
          { type: "daterange", field: "_daterange", title: "年月日范围选择器" },
        ],
        data: {},
        titleWidth: "160px",
        isRow: true, //重点
      },
    };
  },
  methods: {
    event(e) {
      if (e.item.field == "_input_btn") {
        if ((e.event = "btn")) {
          console.log(this.formData.data);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>