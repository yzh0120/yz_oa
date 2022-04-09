<template>
	<page>
		<!-- <div class="bg">
		   <div class="drag">filter</div>
		</div> -->
		
		<div class="bg1">
		   <div class="drag1">backdrop filter</div>
		</div>
	</page>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	/* 
	 filter: blur(2px);  是让自己模糊  ,为了防止模糊导致四周白边 需要after 的 background: inherit;
	 
	 而 backdrop filter属性允许我们使用css对元素后面的内容应用过滤效果。不需要设置background-color
	 */
	.bg{
	    width:800px;
	    height:800px;
	    position: relative;
	    background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.4kjia.com%2Fdata%2Fattachment%2Fforum%2F201811%2F08%2F164814qcuivrrzbscrlusu.jpg&refer=http%3A%2F%2Fwww.4kjia.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638515599&t=6d76eef4bd0a5b0c484314d9a9c48e5f") no-repeat fixed;
	    padding:1px;
	    box-sizing:border-box;
	    z-index:1;
	}
	.bg:after{
	    content: "";
	    width:100%;
	    height:100%;
	    position: absolute;
	    left:0;
	    top:0;
	    background: inherit;//之所以继承 而不直接引入图片 是为了防止四周白边
	    filter: blur(2px);
	    z-index: 2;
	}
	.drag{
	    position: absolute;
	    left:50%;
	    top:50%;
	    transform: translate(-50%,-50%);
	    width:200px;
	    height:200px;
	    text-align: center;
	
	    z-index:11;
	}
	/* *********************************************** */
	.bg1{
	    width:800px;
	    height:800px;
	    // position: relative;
	    background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.4kjia.com%2Fdata%2Fattachment%2Fforum%2F201811%2F08%2F164814qcuivrrzbscrlusu.jpg&refer=http%3A%2F%2Fwww.4kjia.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638515599&t=6d76eef4bd0a5b0c484314d9a9c48e5f") no-repeat fixed;
	    padding:1px;
	    box-sizing:border-box;
	    // z-index:1;
	}
	.drag1:after{
	    content: "";
	    width:100%;
	    height:100%;
	    position: absolute;
	    left:0;
	    top:0;
	    backdrop-filter: blur(10px);
	    z-index: -2;
	}
	.drag1{
	    position: relative;
		z-index:11;
	    // left:50%;
	    // top:50%;
	    // transform: translate(-50%,-50%);
	    width:200px;
	    height:200px;
	    text-align: center;
		// background-color: white;
	    
	}
</style>
