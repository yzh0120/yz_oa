<template>
		<page>
			<!-- Vue：关于transition-group过渡动画，别再踩这个坑了！ -->
			<!-- 千万要在需要过渡动画的父组件上加上相对定位，指的是 transition-group
			    子组件上加上绝对定位!  指的是 transition-group 组件里的元素-->
				
			<!-- transition-group 的动画样式和 transition  通用 -->
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <el-button @click="one">transition</el-button>
			  </div>
				<transition-group name="breadcrumb-one">
				  <div v-for="(item,index) in levelList" :key="index+`one`">
				
				    <el-button type="primary" >展示</el-button>
				  </div>
				</transition-group>
			</el-card>
			
			
			
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <el-button @click="two">animation</el-button>
			  </div>
				<transition-group name="fade-transform-two">
				  <div v-for="(item,index) in levelList2" :key="index+`two`">
				
				    <el-button type="primary" >展示</el-button>
				  </div>
				</transition-group>
			</el-card>
		</page>
	
</template>

<script>
	export default{
		data(){
			return {
				levelList:[],
				levelList2:[],
			}
		},
		methods:{
			one(){
				this.levelList.push({})
			},
			two(){
				this.levelList2.push({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	
	
	.breadcrumb-one-enter-active,
	.breadcrumb-one-leave-active {
	  transition: all .5s;
	}
	
	.breadcrumb-one-enter,
	.breadcrumb-one-leave-active {
	  opacity: 0;
	  transform: translateX(20px);
	}
	
	// .breadcrumb-one-move {
	//   transition: all .5s;
	// }
	
	// .breadcrumb-one-leave-active {
	//   position: absolute;
	// }
	
	
	
	// 用动画 不需要写  -enter  和 leave-to
	
	@keyframes mymove {//展示的动画规则
		0% {
			transform: translateY(60px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	
	.fade-transform-two-leave-active{
		animation : mymove 2s reverse;
	}
	.fade-transform-two-enter-active {
		animation : mymove 2s ;
	}
	
	// .fade-transform-two-enter {
	//     opacity: 0;
	//     transform: translateX(-30px);
	// }
	
	// .fade-transform-two-leave-to {
	//     opacity: 0;
	//     transform: translateX(30px);
	// }
</style>
