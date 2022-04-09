
<1> 一个类的写法:
	class Animal{
		
		//在这里定义实例的属性,当生成实例的一瞬间就会执行constructor函数
		constructor(name , speed) {  
			this.name = name
		}
	  
		//这里定义实例的方法 在方法里通过this.xx调用定义的属性
		run(speed) {  //跑步    
			this.speed = speed;
			alert(`${this.name} 正在跑并且速度是 ${this.speed}.`);
		}
		stop() {  //停止跑步
			this.speed = 0;
			alert(`${this.name} 停止跑步.`);
		}
	
		//这里定义类的静态方法,调用Animal.run()
		static run(msg) {
			console.log('父类静态方法', msg);
		  }
	}
	
	let animal = new Animal("My animal");  //实例化
	
	说明 : 
	
	
<2> 一个派生类的写法:
	前提知识:
	(1) this关键字总是指向当前函数所在的当前对象
	(2) 在对象的简洁形式的方法之中(例如类的方法),关键字super，指向当前this对象的原型对象 实例.prototype
		super.foo等同于Object.getPrototypeOf(this).foo(属性)
	const obj = {
		foo : "world",
		find(){
			console.log(this.foo);
		},
		finds(){
			console.log(super.foo);
		}
	}
	
	//派生类内部可以使用父类的属性和方法
	class B extends Animal {     
		
		//在这里定义实例的属性
		constructor (...arg) {
	    	super(...arg);  //派生类中constructor必须有 显式地super(...arg),将参数移交给Animal的constructor
	    	//super.run();  //可以调用父类方法
	  	}
		
		//这里定义实例的方法 在方法里通过this.xx调用定义的属性,获取派生类或者类的方法
		run() {//覆盖父类 run方法,如果不在派生类中定义run方法,实例会通过原型链调用父类的run方法
			alert(`修改`);
		}
		
		static myMethod(msg) {   //子类静态方法 B. myMethod(1) 打印 static 1 
			super.run(msg)
		}
	}
	
	var b = new B('bbbb_name')//实例化