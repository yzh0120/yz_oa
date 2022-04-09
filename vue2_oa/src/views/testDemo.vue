<template>
  <!-- 

	<test-demo> </test-demo>

	<testDemo> </testDemo>

	都可以转到定义
 -->
  <page>
    <button @click="go">1111</button>
  </page>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({
        path: "/tagsView/base",
        query: {
          a: 1,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>