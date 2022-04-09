<template>
  <page>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </page>
</template>
<script>
export default {
  data() {
    this.chartSettings = {
      xAxisType: "value", //x轴是连续的什么类型      可选值: 可选值'category'，'value'，默认为'category'
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: 1, 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: 2, 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: 5, 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: 10, 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: 20, 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: 22, 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
};
</script>