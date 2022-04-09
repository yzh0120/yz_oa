<template>
  <el-input v-model="showinput" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    field: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    showinput: {
      get() {
        if (this.focused) {
          return this.form[this.field];
        } else {
          return this.form[this.field].replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
        }
      },
      set(value) {
        this.form[this.field] = value.replace(/,|，|\s/gi, "");
      },
    },
  },
  methods: {
    focus() {
      this.focused = true;
    },
    blur() {
      this.focused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
