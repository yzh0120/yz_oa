<template>
	<!-- id 和 class style 会被继承到 page内部根组件 -->
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
				DomArr: [],
				activeIndex : 0
			}
		},
		methods: {
			radioChange(label,index) { //点击 单选框
				this.$refs.appContainer.$el.removeEventListener("scroll", this.scrollFun, true);
				window.setTimeout(()=>{
					this.$refs.appContainer.$el.addEventListener('scroll', this.scrollFun, true);
				},1000)
				
				this.activeIndex = index
				if (document.getElementById(label)) {
					document.getElementById(label).scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			},
			scrollFun() {

				let inFather_arr = []; //元素在父元素的可视区内的集合
				let offsetTop_arr = []; //元素在父元素的可视区内的集合的offsetTop集合
				let min_offsetTop = undefined; //选择 元素在父元素的可视区内的集合 的最小的offsetTop  来自于 offsetTop_arr
				for (let item of this.DomArr) { //判断那些元素在父元素的可视区内
					let status = this.$fn.elInFa(
						document.getElementById(item),
						document.getElementById("app_main")
					);
					if (status) {
						inFather_arr.push({
							id: item
						});
					}
				}
				console.log(inFather_arr)
				if (inFather_arr.length) { //如果存在 元素在父元素的可视区内
					for (let item of inFather_arr) { //元素在父元素的可视区内的集合的offsetTop集合
						item.num = document.getElementById(item.id).offsetTop;
					}
					// this.radio = this.$fn.bubble(inFather_arr, "num").pop().id
					this.activeIndex = this.returnIndex(this.$fn.bubble(inFather_arr, "num").pop().id) 
				} else {
					// this.radio = "";
					this.activeIndex = ""
				}
			},
			returnIndex(id){
				return this.nav.findIndex((item,index)=>{
					return id == item.id
				})
			},
			getDomArr(){
				this.nav.forEach((item)=>{
					this.DomArr.push(item.id)
				})
			}

		},
		mounted() {
			this.getDomArr()
			this.scrollFun()
			this.$refs.appContainer.$el.addEventListener('scroll', this.scrollFun, true);

		},
		beforeDestroy() {
			this.$refs.appContainer.$el.removeEventListener("scroll", this.scrollFun,true);
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
			right: 0;
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
