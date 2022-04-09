<template>
	<page>
		<!--  -->
		<p>原生的横向表格</p>
		<table class="table">
			<tbody>
				<tr>
					<td class="title">时间</td>
					<td v-for="(item,index) in table1" :key="uuid()+index">{{item.date }}</td>
				</tr>
				<tr>
					<td class="title">收入</td>
					<td v-for="(item,index) in table1" :key="uuid()+index">{{item.xxx }}</td>
				</tr>
			</tbody>
		</table>
		<br>
		<p>	普通</p>
		<table class="table">
			<tbody>
				<tr>
					<td>企业名称<td>
					<td colspan="3"></td>
					<td>统一社会信用代码</td>
					<td></td>
		
				</tr>
				<tr>
					<td>法人代表姓名</td>
					<td></td>
		
					<td>法人代表身份证</td>
					<td>xxx</td>
					<td>法人手机</td>
					<td></td>
				</tr>
		
				<tr>
					<td>实控人代表姓名</td>
					<td></td>
					<td>实控人代表身份证</td>
					<td></td>
					<td>实控人手机</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<br>
		 <p>keyvalue模式</p>
		<table class="table keyvalue">
			<tbody>
				<tr>
					<td>企业名称<td>
					<td colspan="3"></td>
					<td>统一社会信用代码</td>
					<td></td>
		
				</tr>
				<tr>
					<td>法人代表姓名</td>
					<td></td>
		
					<td>法人代表身份证</td>
					<td>xxx</td>
					<td>法人手机</td>
					<td></td>
				</tr>
		
				<tr>
					<td>实控人代表姓名</td>
					<td></td>
					<td>实控人代表身份证</td>
					<td></td>
					<td>实控人手机</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<br>
		<br>
		<!--  -->
		<p>斑马</p>
		<table class="table row">
			<tbody>
				<tr>
					<td>企业名称<td>
					<td colspan="3"></td>
					<td>统一社会信用代码</td>
					<td></td>
		
				</tr>
				<tr>
					<td>法人代表姓名</td>
					<td></td>
		
					<td>法人代表身份证</td>
					<td>xxx</td>
					<td>法人手机</td>
					<td></td>
				</tr>
		
				<tr>
					<td>实控人代表姓名</td>
					<td></td>
					<td>实控人代表身份证</td>
					<td></td>
					<td>实控人手机</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<br>
		<!-- <table class="table center">
			<tbody>
				<tr>
					<td>企业名称<td>
					<td colspan="3"></td>
					<td>统一社会信用代码</td>
					<td></td>
		
				</tr>
				<tr>
					<td>法人代表姓名</td>
					<td></td>
		
					<td>法人代表身份证</td>
					<td>xxx</td>
					<td>法人手机</td>
					<td></td>
				</tr>
		
				<tr>
					<td>实控人代表姓名</td>
					<td></td>
					<td>实控人代表身份证</td>
					<td></td>
					<td>实控人手机</td>
					<td></td>
				</tr>
			</tbody>
		</table> -->
		
		<!-- <el-card class="box-card">
		  <div slot="header" class="clearfix">

		  </div>
		  <el-descriptions  border column="4">
		      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
		      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
		      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
		      <el-descriptions-item label="备注">
		        <el-tag size="small">学校</el-tag>
		      </el-descriptions-item>
		      <el-descriptions-item label="联系地址" span="2">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
			  <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
		  </el-descriptions>
		</el-card> -->
	</page>
</template>

<script>
	export default {
		data(){
			return {
				table1 : [{ date: "2018" }, {}, {}, {}, {}, {}, {}],
			}
		},
	methods:{
		uuid() {
		      var s = [];
		      var hexDigits = "0123456789abcdef";
		      for (var i = 0; i < 36; i++) {
		        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		      }
		      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		      s[8] = s[13] = s[18] = s[23] = "-";
		
		      var uuid = s.join("");
		      return uuid;
		    },
	}
	}
</script>

<style lang="scss" scoped>
</style>
