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
            btn: "搜索",
          },
        ],
        data: {}, //data:{_input:"data"}
        titleWidth: "160px",
      },
    };
  },
  created() {
    // this.formData.data._input = "created修改";
    this.formData.data = { _input: "created修改" };
  },
  mounted() {
    // this.formData.data._input = "mounted修改";
    // this._set(this.formData,"_input",{})
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