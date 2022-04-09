<template>
  <div>
    <section>
      <h3>一、三角气泡</h3>
      <div class="ract TrBubble"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ract {
  position: relative;
  width: 260px;
  height: 120px;
  background-color: white;
  border: 1px solid #0094ff;
  border-radius: 10px;
}

/*三角气泡  遮盖作用  */
.TrBubble:before {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  border: 34px solid transparent;
  border-top-color: #0094ff;
  border-bottom: 0;
  margin: 0 0 -34px -34px;
}
.TrBubble:after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 50%;
  border: 34px solid transparent;
  border-top-color: white;
  border-bottom: 0;
  margin: 0 0 -34px -34px;
}
</style>
