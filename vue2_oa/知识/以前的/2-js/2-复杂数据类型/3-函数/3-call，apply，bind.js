<script>
准备工作:
		a = 'window的a'               //定义一个全局 量 a
		
		let obj = {                   //定义一个局部的 量 a
			a:'obj的a'
		}
		
		function fn(c,d,e){
			console.log(c,d,e)
			console.log(this.a)        //函数执行的时候,打印出 变量 a
		}
开始打印:	
		// fn()                        //window的a
		
		fn.call(obj,1,2,'call')        //obj的a
		
		fn.apply(obj,[3,4,'apply'])    //obj的a
		
		fn.bind(obj,5,6,'bind')()      //obj的a
		
		console.log(    Math.max(   ...[3,4]   )   )
</script>