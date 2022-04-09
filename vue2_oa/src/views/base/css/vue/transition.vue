<template>
		<page>
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <el-button @click="demo = !demo">transition</el-button>
				
			  </div>
			  
			  <transition name="fade-transform-one" mode="out-in">
			    <el-button type="primary" v-if="demo">展示</el-button>
			  </transition>
			</el-card>
			
			<el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <el-button @click="demo2 = !demo2">animation</el-button>
				
			  </div>
			  
			  <transition name="fade-transform-two" mode="out-in">
			    <el-button type="primary" v-if="demo2">展示</el-button>
			  </transition>
			</el-card>
		</page>
	
</template>

<script>
	export default{
		data(){
			return {
				demo:true,
				demo2:true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fade-transform-one-leave-active,
	.fade-transform-one-enter-active {
	    transition: all .2s;
	}
	
	.fade-transform-one-enter {
	    opacity: 0;
	    transform: translateX(-30px);
	}
	
	.fade-transform-one-leave-to {
	    opacity: 0;
	    transform: translateX(30px);
	}
	
	
	
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
