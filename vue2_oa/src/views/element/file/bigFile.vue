<!-- 
 <template>
 	<page>
 	
 		    <el-upload action drag :auto-upload="false" :show-file-list="false" :on-change="handleChange">
 		      <i class="el-icon-upload"></i>
 		      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
 		      <div class="el-upload__tip" slot="tip">大小不超过 200M 的视频</div>
 		    </el-upload>
 
 	</page>
 </template>

 <script>
 	export default{
 		data(){
 			return {
 				
 			}
 		},
 		methods:{
 			async handleChange(file) {
 			  const fileObj = file.raw
 			  try{
 			    const buffer = await this.fileToBuffer(fileObj)
 			    console.log(buffer)
 			  }catch(e){
 			    console.log(e)
 			  }
 			},
 			// 将 File 对象转为 ArrayBuffer 
 			fileToBuffer(file) {
 			  return new Promise((resolve, reject) => {
 			    const fr = new FileReader()
 			    fr.onload = e => {
 			      resolve(e.target.result)
 			    }
 			    fr.readAsArrayBuffer(file)
 			    fr.onerror = () => {
 			      reject(new Error('转换文件格式发生错误'))
 			    }
 			  })
 			}
 		}
 	}
 </script>
 
 <style lang="scss" scoped>
 </style>
 
 -->
 
 <!--
 Vue 大文件上传和断点续传
  https://www.jianshu.com/p/08524828f84b
  -->
  <template>
  	<div>
  
  	</div>
  </template>
  
  <script>
  	export default {
  		
  	}
  </script>
  
  <style scoped>
  
  </style>