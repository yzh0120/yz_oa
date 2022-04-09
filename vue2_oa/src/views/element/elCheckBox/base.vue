<template>
	<el-checkbox-group v-model="memberList">
	        <span v-for="(item, index) in tableData" :key="index">
	          <el-card class="box-card" shadow="hover">
	            <el-checkbox :label="index">
	              <div>账户：{{item.userName}}</div>
	              <div>姓名：{{item.userName}}</div>
	            </el-checkbox>
	          </el-card>
	        </span>
	      </el-checkbox-group>
</template>

<script>
	export default{
		data(){
			return {
				memberList:[],
				tableData:[{userName:"张三"},{userName:"张三"},{userName:"张三"},{userName:"张三"},{userName:"张三"},
				{userName:"张三"},{userName:"张三"},{userName:"张三"},{userName:"张三"}]
			}
		},
	}
</script>

<style lang="scss" scoped>
	::v-deep{
		.el-card,
		.el-message {
		  display: inline-block;
		  margin: 5px;
		  width: 180px;
		}
		.el-checkbox {
		  display: flex;
		  align-items: center;
		}
	}

</style>

