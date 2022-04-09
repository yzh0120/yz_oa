<template>
	<page>
		<div class="demo"></div>
		<div class="lead" ref="lead"></div>
		
	</page>
</template>

<script>
	export default{
		mounted() {
			const { top, left, bottom, right } = this.$refs.lead.getBoundingClientRect();
			console.log(`left${left}---top:${top}---bottom${bottom}---right${right}`)
		}
	}
</script>

<style lang="scss" scoped>
	.demo{
		height: 300px;
		border: 1px solid $green;
	}
	.lead{
		width: 100px;
		height: 100px;
		background-color: deepskyblue;
		margin-left: 400px;
	}
</style>
<!-- 

 
 
 -->