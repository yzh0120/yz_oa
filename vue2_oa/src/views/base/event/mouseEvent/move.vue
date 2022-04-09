<template>
  <page>
	  <div class="container" ref="container">
		  <!-- 鼠标 -->
		  <div class="move" :style="{top:`${top}px`,left:`${left}px`}"> </div>
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
	  mousemove_fn(e){
	 //  	console.log(e.offsetX,e.offsetY)
	 //  	console.log(e.clientX,e.clientY)
	 //  	console.log(e.pageX,e.pageY)
		// console.log('’-----------------------------')
	  	this.left = e.pageX 
	  	this.top = e.pageY 
	  }
  },
  components: {
    // HelloWorld
  },
  mounted() {
	 
	  //添加鼠标移动事件
	  this.$refs.container.addEventListener('mousemove',this.mousemove_fn)   
  },
  beforeDestroy() {
	  //移除鼠标滚动事件
	  this.$refs.container.removeEventListener('mousemove',this.mousemove_fn)
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
