<template>
	<page>
		<div style="height: 500px;">
			<div class="bd-t"></div>
			<div class="bd-s"></div>
		</div>
	</page>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	.bd-t{
	    position:relative;
	 }
	 .bd-t:after{
	    content: " ";
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 1px;
	    background-color: #e0e0e0;
	    /* 如果不用 background-color, 使用 border-top:1px solid #e0e0e0; */
	    -webkit-transform: scaleY(.5);
	    transform:scaleY(.5);
	 }
	 
	 .bd-s{
	     position:relative;
	  }
	  .bd-s:after{
	     content: " ";
	     position: absolute;
	     left: 0;
	     top: 0;
	     width: 1px;
	     height: 100vh;
	     background-color: red;
	     /* 如果不用 background-color, 使用 border-top:1px solid #e0e0e0; */
	     -webkit-transform: scaleX(.5);
	     transform:scaleX(.5);
	  }
</style>
