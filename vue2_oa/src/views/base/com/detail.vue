<template>
	<div>
		<div style="padding:1000px"></div>

		<div @click="go(`one`)">去one</div>
		<div @click="go(`two`)">去two</div>
		<div :id="`${type}one`" class="item">one</div>
		<div :id="`${type}two`" class="item">two</div>

		<div style="padding:1000px"></div>
	</div>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: ""
			}
		},
		methods: {
			go(id) {
				this.$nextTick(() => {
					if (document.getElementById(`${this.type}${id}`)) {
						document.getElementById(`${this.type}${id}`).scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					} else {
						console.log("没找到")
					}
				});
			},
			goCom(id,ref, num, activeProps) {
				this.$nextTick(() => {
					if (document.getElementById(`${this.type}${id}`)) {
						document.getElementById(`${this.type}${id}`).scrollIntoView({
							behavior: "smooth",
							block: "start",
						});

						if (num) {
							if (activeProps) {
								this.$refs[ref][activeProps] = num;
							} else {
								this.$refs[ref].active = num;
							}
						}
					}
				});
			}
		}
	}
</script>

<style style="scss" scoped>
	.item {
		width: 100px;
		height: 100px;
		margin-top: 200px;
		background-color: green;
	}
</style>
