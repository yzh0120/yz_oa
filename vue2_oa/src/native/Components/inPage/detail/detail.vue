<template>

	<page class="app-container" ref="appContainer">

		<div class="left">
			<slot></slot>
		</div>
		<div class="right">
				<div :class="[`right_item`,activeIndex === index ? `active`:'']" v-for="(item , index) in nav" @click="radioChange(item.id,index)">{{item.text}}</div>
		</div>

	</page>


</template>

<script>
	export default {
		props:["nav"],
		data() {
			return {
				activeIndex : 0,
			}
		},
		methods: {
			radioChange(label,index) { //点击 单选框
				this.activeIndex = index
				if (document.getElementById(label)) {
					document.getElementById(label).scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			},
			

		},
		mounted() {
			

		},
		beforeDestroy() {
			
		},
	}
</script>

<style lang="scss" scoped>
	.app-container {
		height: 100%;
		// overflow: scroll;
		position: relative;

		.left {
			border: 2px solid rgb(24, 144, 255);
			margin-right: 200px;
			position: relative;

			
		}

		.right {
			position: fixed;
			width: 200px;
			height: 100%;
			border: 1px solid $green;
			right: 10px;
			top: 96px;
			.right_item{
				height: 30px;
				display: flex;
				align-items: center;
				padding-left: 20px;
				cursor: pointer;
				&:hover{
					color: blue;
				}
				&.active{
					color: green;
				}
			}
		}
	}
</style>
