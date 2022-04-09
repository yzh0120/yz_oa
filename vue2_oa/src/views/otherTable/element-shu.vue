<template>
	<page>
		<el-table :data="tableData" style="width: 100%" border>
			<el-table-column width="150" label="指标" :show-overflow-tooltip="true">
				<template slot-scope="scope">
					{{scope.row.name }}
				</template>
			</el-table-column>
			
			<!-- :label="this.oldTableData[i].a" -->
			<el-table-column :show-overflow-tooltip="true" label="i" :key="`${item}${i}`" align="center" v-for='(item,i) in dateList'>
				<template slot-scope="scope">
					{{scope.row.list[i]}}
				</template>
			</el-table-column>
		</el-table>
		
	</page>
</template>

<script>
	// dateList 内部成员无意义  ,目的是为了循环 tableData[index] 的list,所以dateList.length === tableData[index].list.length
	export default {
		data() {
			return {
				//之所以会有这个 是因为table的name数据来源于弹窗的form
				form:{
					a:"",
					b:"",
					c:"",
					d:"",
					e:"",
					f:"",
					g:"",
					h:"",
					i:"",
				},
				oldTableData:[
					{a:"a1",b:"b1",c:"c1",d:"d1",e:"e1",f:"f1",g:"g1",h:"h1",i:"i1"},
					{a:"a2",b:"b2",c:"c2",d:"d2",e:"e2",f:"f2",g:"g2",h:"h2",i:"i2"}
				],
				dateList:[],//[1,2],
				tableData: [
					// {
					// 	name: '固定资产投资',
					// 	list:[ "a","b"],
					// },
					// {
					// 	name: '规模以上工业增加值',
					// 	list:[ "a","b"],
					// },
				],
				
			}
		},
		mounted() {
			//之所以会有这个 是因为table的name数据来源于弹窗的form
			for (let keys of Object.keys(this.form)) {
			  this.tableData.push({
				name: keys,//a  b  c 
				list: [],
			  });
			}
			
			
			this.oldTableData.forEach((item, index) => {
				
				this.dateList.push("站位而已");
				
				for (let keys of Object.keys(item)) {
					this.tableData.forEach((item1) => {
					   if (keys == item1.name) {
						// item1.list.push(item[keys]);
						item1.list[index] = item[keys];
					}
				});
			  }
			})
			
			console.log(this.tableData,"tableDatatableDatatableData")
		}
	}
</script>

<style>
</style>
