export default {
	data() {
		return {
			pagerData: {
				pageNo: 1, //第一页
				pageSize: 20, //每页显示20张
				total: 0, //总数
			},
		}
	},
	methods: {
		// 得到placeholder的显示
		_getPlaceholder(row) {
			let placeholder
			if (row.type === 'input' || row.type === 'textarea') { //输入框
				placeholder = '请输入' + (row.label ? row.label : row.title)
			} else if (row.type === 'select' || row.type === 'time' || row.type === 'date' || row.type === 'dateTime') { //选择框
				placeholder = '请选择' + (row.label ? row.label : row.title)
			} else { //其他
				placeholder = (row.label ? row.label : row.title)
			}
			return placeholder
		},
		
		
		
		//list变化带动data字段变化       只在组件内部使用
		_updatedata(formInfo) { // 根据 this.formInfo.list 给data添加属性,会清空 data的值
			formInfo.list.forEach((item) => { //循环出data的值
				if (item.field) {//字段
					if (this.$fn.type(formInfo.data[item.field]) === "und") {//赋值给data
						// if (item.type === 'checkbox') {
						// 	this.$set(formInfo.data, item.field, [])
						// } else if(item.type === 'treeselect'){
						// 	this.$set(formInfo.data, item.field, null)
						// }
						// else {
						// 	this.$set(formInfo.data, item.field, "")
						// }
						
						// this.$set(formInfo.data, item.field, "")
						
						this.$set(formInfo.data, item.field, null)
					}
				}
				// else{//slot
				// 	this.$set(formInfo.data, item.slot, "")
				// }
			})
		},
		//给list每个对象添加disabled属性       只在组件内部使用
		_addDis(formInfo){
			let temp = this.$fn.deepClone(formInfo.list)
			temp.forEach((item)=>{
				// item.disabled = false
				if(this.$fn.type( item.disabled ) === "und" || this.$fn.type( item.disabled ) === "null"){
					item.disabled = false
				}else{//定义了  则不动

				}
			})
			formInfo.list = temp
		},
		//给list每个对象添加show属性       只在组件内部使用(暂时不用)
		_addShow(formInfo){
			let temp = this.$fn.deepClone(formInfo.list)
			temp.forEach((item)=>{
				// item.disabled = false
				if(this.$fn.type( item.show ) === "und" || this.$fn.type( item.show ) === "null"){
					item.show = true
				}else{//定义了  则不动
			
				}
			})
			formInfo.list = temp
		},
		
		/* 只在组件外部使用 */
		// 设置list的某个options（属性）       只在组件外部使用
		_set(formInfo,fieldValue,valueObj){
			if(this.$fn.type(valueObj) == "obj"){//this._set(this.addApplyForm, "degreeType", { opt: data,xxx:xxx });
				formInfo.list.forEach((item)=>{
					if(item.field == fieldValue){
						for(let key of Object.keys(valueObj)){
							item[key] = valueObj[key]
						}
					}
				})
			}else{
				this.$message.error("_set 值错误")
			}
			
		},
		_setList(formInfo,fieldValue,valueObj){
			if(this.$fn.type(valueObj) == "obj"){//this._set(this.addApplyForm, "degreeType", { opt: data,xxx:xxx });
				formInfo.list.forEach((item)=>{
					if(item.field == fieldValue){
						for(let key of Object.keys(valueObj)){
							item[key] = valueObj[key]
						}
					}
				})
			}else{
				this.$message.error("_set 值错误")
			}
			
		},
		_reset(formInfo) { 
			for (let key of Object.keys(formInfo)) { 
				formInfo[key] = null
			}
		}
	}
}
