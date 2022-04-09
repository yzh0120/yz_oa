<template>
    <page>
        <panel :close="true" size="h1">
            <div slot="head" >
                主题色
            </div>
            <div>
                <div v-for="(item ,index) in arr" :key="index">
					身体
				</div>
				<!-- <panel type="default">
				    <div slot="head">
				        default
				    </div>
				    <div v-for="(item ,index) in arr2" :key="index">
				    	身体
				    </div>
				</panel> -->
            </div>
        </panel>
       <br>

        <panel type="default">
            <div slot="head">
                default
            </div>
            <div v-for="(item ,index) in arr2" :key="index">
            	身体
            </div>
        </panel>
<!-- 
        <panel type="success">
            <div slot="head">
                success
            </div>
            <div>
                身体
            </div>
        </panel>
        <br>

        <panel type="info">
            <div slot="head">
                info
            </div>
            <div>
                身体
            </div>
        </panel>
        <br>

        <panel type="warning">
            <div slot="head">
                warning
            </div>
            <div>
                身体
            </div>
        </panel>
        <br>

        <panel type="danger">
            <div slot="head">
                danger
            </div>
            <div>
                身体
            </div>
        </panel> -->
        <br>
    </page>
</template>

<script>
export default{
	data(){
		return {
			arr:[],
			arr2:[],
		}
	},
	mounted() {
		setTimeout(()=>{this.arr = [1,2,3],this.arr2 = [1,2,3,4,5,6,7,8]},1000)
	}
}
</script>

<style lang="scss" scoped>
    
</style>
