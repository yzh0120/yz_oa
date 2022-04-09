<template>
  <page>
	  <div class="container" ref="container">
		  <!-- 鼠标 -->
		  <!-- <div class="move" :style="{top:`${top}px`,left:`${left}px`}"> </div> -->
		  
		  <div class="demo" ref="demo">
		  	
		  	<div class="son"></div>
		  </div>
	  </div>
  </page>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
	  return {
		 left:0,
		 top:0
	  }
  },
  methods:{
	  
	  mousewheel_fn(e){
	   if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
	  	 if (e.wheelDelta > 0) { //当滑轮向上滚动时  
	  		console.log('上滚')
	  	 }  
	  	 if (e.wheelDelta < 0) { //当滑轮向下滚动时  
	  		  console.log('下滚')
	  	 }  
	   } else if (e.detail) {  //Firefox滑轮事件  
	  	 if (e.detail> 0) { //当滑轮向下滚动时  
	  		console.log('下滚')
	  	 }  
	  	 if (e.detail< 0) { //当滑轮向上滚动时  
	  		 console.log('上滚')  
	  	 }  
	   }
	  }
  },
  components: {
    // HelloWorld
  },
  mounted() {
	
	
	//添加鼠标中建滚动事件
	window.addEventListener('mousewheel', this.mousewheel_fn);
  },
  beforeDestroy() {

	
	
	//移除鼠标中建滚动事件
	window.removeEventListener('mousewheel', this.mousewheel_fn);
  }
}
</script>

<style lang="scss" scoped="scoped">
	.container{
		height: 10000px;
		.move{
			width: 100px;
			height: 100px;
			background-color: deepskyblue;
			position: fixed;
			transform: translate(-50%,-50%);
			border-radius: 50%;
		}
	}
	.demo{
		width: 500px;
		height: 500px;
		background-color: deepskyblue;
		display: inline-block;
	}
	.son{
		margin: 0 auto;
		width: 300px;
		height: 200px;
		background-color: green;
	}
</style>
