<template>
	<page>
		<div class="lead" @click="mouseFn"></div>
	</page>
</template>

<script>
	export default{
		methods:{
			mouseFn(e){
				const {pageY, screenY, offsetY,clientY} = e
				console.log(`pageY:${pageY}---screenY:${screenY}---offsetY:${offsetY}---clientY:${clientY}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lead{
		height: 10000px;
		border: 1px solid green;
	}
</style>
