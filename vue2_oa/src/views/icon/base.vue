<template>
	<page>
		
		
		<el-checkbox-group v-model="memberList" class="box">
		        <div v-for="(item, index) in tableData" :key="index" class="div">
		          <el-card  shadow="hover">
		            <el-checkbox :label="item">
		              <svgIcon :icon="item" className="aaa" ></svgIcon>
		            </el-checkbox>
		          </el-card>
		        </div>
		</el-checkbox-group>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				memberList:[],
				tableData:["zhankai","3column","column-4","add","add-circle","adjust","arrow-up-circle","arrow-right-circle"
				,"arrow-down","ashbin","arrow-right","browse","back","bad","arrow-double-left","arrow-left-circle"]
			}
		}
	}
</script>

<style style="scss" scoped>
	.box{
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
	}
	.div{
		margin:10px;
		width: 100px;
	}
	.aaa{
		font-size: 40px;
	}
</style>
