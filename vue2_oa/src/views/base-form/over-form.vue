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
            tip: true, //重点
          },
          {
            type: "input",
            field: "_input_prepend",
            title: "前缀输入框",
            prepend: "前缀文字",
          },
        ],
        data: {},
        titleWidth: "160px",
      },
    };
  },
  mounted() {
    this.formData.data._input =
      "mounted修改mounted修改mounted修改mounted修改mounted修改mounted修改mounted修改mounted修改mounted修改mounted修改";
  },
  methods: {
    event(e) {
      if (e.item.field == "_input") {
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