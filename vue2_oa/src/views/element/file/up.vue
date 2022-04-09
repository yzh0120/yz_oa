

<template>
  <div>
    <file-list-show :arr="uploadObj.detail" :del="true" />
    <oneFile :uploadObj="uploadObj" :projectId="projectId"></oneFile>
  </div>
</template>

<script>
import * as fileApi from "@/axios/api/file";
export default {
  data() {
    return {
      projectId: "23424232344645",
      uploadObj: {
        name: "xxx",
        taskName: "xxx",
        detail: [],
      },
    };
  },
};
</script>

<style>
</style> 
 

<!-- 
<template>
	<div>
		<up :uploadObj="uploadObj" :projectId="projectId"  @success="(e)=>upLoadSuccess(e.res)"></up>
		<file-List :arr="uploadObj.detail" :del="true"/>
	</div>
</template>

<script>
	import * as fileApi from "@/axios/api/file";
	export default{
		data(){
			return {
				projectId:"23424232344645",
				uploadObj: 
				  {
				    name: "xxx",
				    taskName: "xxx",
				    detail: [],
				  }
				
			}
		},
		created() {
		  this.getFiles(); //获取历史文件
		},
		methods:{
			getFiles(){
				fileApi
				  .getFileListByFolderId({
				    folderId: this.projectId,
				    taskName: this.uploadObj.taskName,
				  })
				  .then((result) => {
				    if (result.code == 200) {
				      this.uploadObj.detail = result.data;
				    } else {
				      this.$message.error(res.info);
				    }
				  });
			},
			upLoadSuccess(res){
				if (res.code == 200) {
				  this.$message.success(res.data.fileName + "上传成功！");
				      this.getFiles(); //获取历史文件
				} else {
				  this.$message.error(res.info);
				}
			},
		}
	}
</script>

<style>
</style>
 
 -->