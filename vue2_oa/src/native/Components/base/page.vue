<template>
	<!--之所以会产生 -->
  <!-- <div class="roll"> -->
  <!-- <el-scrollbar wrap-class="" style="height: 100%;"> -->
	  <el-scrollbar wrap-class="scrollbarPage" style="height: 100%" >
		  <div :class="['page',show?'show':'' ]" id="page">
		    <slot></slot>
		  </div>
	  </el-scrollbar> 
    
  <!-- </div> -->
 
</template>

<script>
	export default{
		props:["show"],
	}
</script>

<style lang="scss" scoped>

</style>
