<!-- 上传前的检查 -->
<template>
	<div>
		<el-upload :action="api" @before-upload="beforeUpload" :headers="headers">
			<!-- @click="import1"    click  比action 先执行 -->
		            <el-button size="small" type="primary"  >导入</el-button>
		          </el-upload>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				api: process.env.VUE_APP_BASE_API + "/v1/data/blacklist/importTemplate",
			}
		},
		methods:{
			beforeUpload(file) {
				let activeFileType = file.name.split('.').pop()
				if (this.CaiWuserverUrlObj[0]) {
					this.btnDisabled = !this.btnDisabled;
					this.$message.error("只能上传一个")
					return false
				}
				else if (!this.fileType.includes(activeFileType)) {
					this.$message.error(`请上传正确的文件类型`)
					this.btnDisabled = !this.btnDisabled;
					return false
				}
				else {
					return true
				}
			},
			// beforeUpload(file) {
			// 	let activeFileType = file.name.split('.').pop()
			// 	return new Promise((resolve, reject) => {
			// 		if (this.CaiWuserverUrlObj[0]) {
			// 			this.btnDisabled = !this.btnDisabled;
			// 			this.$message.error("只能上传一个")
			// 			reject();
			// 		}
			// 		else if (!this.fileType.includes(activeFileType)) {
			// 			this.$message.error(`请上传正确的文件类型`)
			// 			this.btnDisabled = !this.btnDisabled;
			// 			reject();
			// 		}
			// 		else {
			// 			resolve();
			// 		}
			// 	});
			// },
		}
	}
</script>

<style>
</style>

