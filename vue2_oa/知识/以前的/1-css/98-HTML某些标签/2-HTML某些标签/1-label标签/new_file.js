<1> 显式关联:
	(1)<label> 标签的 for 属性应该等于相关元素的 id 元素，以便将它们捆绑起来。
			<form>
			<label for="male">Male</label>
			<input type="radio" name="sex" id="male" />
			<br />
			<label for="female">Female</label>
			<input type="radio" name="sex" id="female" />
			</form>
			
	(2)能使用显示关联的表单元素有：
	    input type="text" 文本框，点击标签时关联的文本框获得焦点。
	    input type="checkbox" 复选框，点击标签时选中或取消选中复选框。
	    input type="radio" 单选框，点击标签时选中单选框。
	    input type="file" 文件上传，点击标签时打开文件选择对话框。
	    input type="password" 密码框，点击标签时密码框获得焦点。
	    textarea 文本域，点击标签时文本域获得焦点。
	    select 下拉框，点击标签时，下拉框获得焦点，不过并不展开下拉框选项。
			
			
<2> 隐式关联:
	隐式关联是直接将表单控件放到label标签内，这种情况下，label标签只能包含一个表单元素，包含多个只对第一个有效。如下：
	
	<label>点击我可以使文本框获得焦点
	    <input type='text' name='theinput' id='theinput'>
	</label>
	
	
<3> label标签的form属性
	form 属性指定label标签元素所属的表单ID。如下，虽然label标签在myform表单外，但仍属于myform表单。如下：
	
	<form action="http://songguoliang.com/test.html" id="myform">
	  <input type="radio" name="sex" id="male" value="male">
	  <br>
	  <label for="female">女</label>
	 
	  <input type="submit" value="提交">
	</form>
	 
	<label for="male" form="myform">男</label>