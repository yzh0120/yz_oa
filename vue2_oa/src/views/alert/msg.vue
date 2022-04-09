<template>
<div>
    <page>
    <el-button @click="go">点我</el-button>
    <alert :data="alertData" @event="event"></alert>
    </page>
</div>
    
</template>

<script>
export default{
    data(){
        return {
            alertData:{
                field:false,
                width:"800px",
                height:"600px",
                title: "基础弹窗",
                msg:true,
            }
        }
    },
    methods:{
        go(){
            this.alertData.field = true
        },
        event(e){
            if (e.event == "confirm") {
					this.alertData.field = false
					console.log("点击了确认按钮");
				}
				if (e.event == "cancel") {
					this.alertData.field = false
					console.log("点击了取消按钮");
				}
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
