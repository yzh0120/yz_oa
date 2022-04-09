<template>
	<page>
		{{$route.params}}{{$route.query}}
		<el-card>
			<div slot="header">
				标签页操作
			</div>
			<el-button type="primary" @click="_reload($route)">刷新</el-button>
			<el-button type="success" @click="_closeSelectedTag($route)">关闭当前</el-button>
			<el-button type="info" @click="_closeOtherLeft">关闭左边</el-button>
			<el-button type="warning" @click="_closeOtherRight">关闭右边</el-button>
			<el-button type="warning" @click="_closeOthersTags">关闭其他</el-button>
			<el-button type="warning" @click="_closeAllTags">关闭所有</el-button>
			<el-button @click="go">携带参数跳转</el-button>
			
			<el-button @click="closeSelectedTag">关闭当前页 跳转指定页</el-button>
		</el-card>

	</page>
</template>

<script>
	import keepAlive from "@/native/Mixins/keepAlive.js";
	export default {
		mixins: [keepAlive],
		methods:{
			go(){
				this.$router.push({
					path:'/base',
					query:{
						a:1
					}
				})
			},
			closeSelectedTag(){
				// this._closeSelectedTag(this.$route,{path:"/base"},"tablePage")
				this._closeSelectedTag(this.$route,{path:"/baseTable/base"},"test")
			},
		},
	}
</script>

<style>
</style>
