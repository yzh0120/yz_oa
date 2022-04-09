<!-- 删除之前 -->
<template>
	<div>
		<el-upload :action="api" :before-remove="beforeRemove" :on-remove="(file, fileList)=>{handleRemove(fileList,item)}" :headers="headers">
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
			//提交审核的时候 吧文件的ids 放到 fileIds
			//文件删除成功
			handleRemove(fileList, item) {
			  item.fileIds = fileList.map((item) => {
				return item.response.data.id;
			  });
			  console.log(item.fileIds, "123");
			},
			// upload的文件删除前
			async beforeRemove(file, fileList) {
			  let id = file.response.data.id;
			  let con = await this.$confirm(`确定移除 ？`);
			  if (con == "confirm") {
				let res = await fileApi.del([id]);
				if (res.code == 200) {
				  this.$message.success("删除成功!");
				  return true;
				} else {
				  this.$message.error(res.info);
				  return false;
				}
			  } else {
				return false;
			  }
			},
		}
	}
</script>

<style>
</style>

