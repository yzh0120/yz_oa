<template>
		<!-- <el-scrollbar wrap-class="scrollbarTablePage" style="height: 100%" >	 -->
		  <div :class="['table-page',padding?`padding`:``]" id="table-page">
		    <slot></slot>
		  </div>
		<!-- </el-scrollbar> -->
 
</template>

<script>
	export default{
		props:["padding"],
	}
</script>

<style lang="scss" scoped>
	.padding{
		padding-top: 20px !important;
	}

</style>
