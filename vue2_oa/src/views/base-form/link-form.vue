<template>
  <page>
    <el-button @click="con">打印参数</el-button>
    <el-divider content-position="left">
      <span class="label"
        >1-A 为特定值时，B 不显示；或 A 为特定值时，B 才显示。</span
      >
    </el-divider>

    <el-divider content-position="left">
      <span class="label"
        >2 A 为特定值时，B 只能为特定范围内的值 (或不能为某些值)</span
      >
    </el-divider>

    <el-divider content-position="left">
      <span class="label">3 A 为特定值时，B 只能为特定值</span>
    </el-divider>

    <el-divider content-position="left">
      <span class="label">4 有条件的校验</span>
    </el-divider>

    <el-divider content-position="left">
      <span class="label">5 多选一填写</span>
    </el-divider>

    <div>条件联动表单</div>
    <base-form :data="formData" ref="form"></base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      formData: {
        list: [
          // {type:"checkbox",field:"_checkbox",title:"多选框",opt:[{text1:"多选一",value1:1},{text1:"多选二",value1:2}],text:"text1",value:"value1"},
          {
            type: "select",
            field: "_select",
            title: "基础",
            opt: [
              { text: "特定值", value: "1" },
              { text: "普通值", value: "2" },
            ],
          },

          {
            type: "select",
            field: "_selecttiaojian",
            title: "A为特定值时，B为特定范围内的值",
            opt: [
              { text: "特定范围", value: "1" },
              { text: "普通值2", value: "2" },
            ],
          },
          {
            type: "input",
            field: "_inputtiaojian",
            title: "A为特定值时，B只能为特定值",
          },
          {
            type: "input",
            field: "_inputRules",
            title: "A为特定值时,则非必填",

            rules: [
              { required: true, message: "请输入", trigger: "blur" },
              { validator: self.$check.demo, trigger: "blur" },
            ],
          },

          {
            type: "select",
            field: "_input3",
            title: "多选一",
            opt: [
              {
                text: "选了我其他的两个下拉框就禁用了",
                value: "1",
              },
            ],
          },
          {
            type: "select",
            field: "_input4",
            title: "多选一",
            // show:false,
            opt: [
              {
                text: "选了我其他的两个下拉框就禁用了",
                value: "1",
              },
            ],
          },
        ],
        data: {},
        titleWidth: "230px",
      },
    };
  },
  methods: {
    con() {
      console.log(this.formData.data);
    },
  },
  mounted() {
    //一般不会突然给list插入 ,因为一开始就写好了 ,这里只是为了测试
    this.formData.list.push({
      //测试 dis
      type: "select",
      field: "_input5",
      title: "多选一",
      opt: [
        {
          text: "选了我其他的两个下拉框就禁用了",
          value: "1",
        },
      ],
    });
    this.formData.list.splice(1, 0, {
      type: "checkbox",
      field: "_checkbox",
      title: "多选框",
      opt: [
        { text1: "多选一", value1: 1 },
        { text1: "多选二", value1: 2 },
      ],
      text: "text1",
      value: "value1",
    });
    this.formData.list.splice(1, 0, {
      type: "input",
      field: "_input",
      title: "条件显示",
    }); //测试  show
  },
  watch: {
    "formData.data": {
      handler(newVal) {
        //1 A 为特定值时，B 不显示；或 A 为特定值时，B 才显示。
        if (newVal._select == "1") {
          this._set(this.formData, "_input", { show: false });
        } else {
          this._set(this.formData, "_input", { show: true });
        }

        //2 A 为特定值时，B 只能为特定范围内的值 (或不能为某些值)  --- 多选框
        if (newVal._select == "1") {
          //为了防止改field的值是不存在的,所以将将不存在的值重置为”“
          if (this.formData.data._selecttiaojian == "2") {
            this.formData.data._selecttiaojian = "";
          }
          this._set(this.formData, "_selecttiaojian", {
            opt: [
              {
                text: "特定范围",
                value: "1",
              },
            ],
          });
        } else {
          this._set(this.formData, "_selecttiaojian", {
            opt: [
              { text: "特定范围", value: "1" },
              { text: "普通值2", value: "2" },
            ],
          });
        }

        //3 A 为特定值时，B 只能为特定值                       ---输入框
        if (newVal._select == "1") {
          this.formData.data._inputtiaojian = "特定值";
        }

        //4 有条件的校验
        if (newVal._select == "1") {
          this._set(this.formData, "_inputRules", { rules: [] });
        } else {
          let _input2Arr = [
            { required: true, message: "请输入", trigger: "blur" },
            { validator: this.$check.demo, trigger: "blur" },
          ];
          this._set(this.formData, "_inputRules", { rules: _input2Arr });
        }

        //多选一
        if (this.formData.data._input4 || this.formData.data._input5) {
          this._set(this.formData, "_input3", { disabled: true });
        } else {
          this._set(this.formData, "_input3", { disabled: false });
        }

        if (this.formData.data._input3 || this.formData.data._input5) {
          this._set(this.formData, "_input4", { disabled: true });
        } else {
          this._set(this.formData, "_input4", { disabled: false });
        }

        if (this.formData.data._input3 || this.formData.data._input4) {
          this._set(this.formData, "_input5", { disabled: true });
        } else {
          this._set(this.formData, "_input5", { disabled: false });
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
