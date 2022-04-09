<template>
	<page>
		
		
		<el-tabs type="border-card">
		  <el-tab-pane label="用户管理">
			  <detail type="one"></detail>
		  </el-tab-pane>
		  <el-tab-pane label="配置管理">
			  <detail type="two"></detail>
		  </el-tab-pane>
		</el-tabs>
	</page>
</template>

<script>
	import detail from "@/views/base/com/detail.vue"
	export default{
		components:{
			detail
		}
	}
</script>

<style style="scss" scoped>
</style>
