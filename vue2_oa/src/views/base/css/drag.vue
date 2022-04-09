<template>
	<div>
		<div class="fixed" @click.stop.prevent="draghandle($event)" v-drag>
		      <i class="el-icon-menu" ></i>
		</div>
		    <el-drawer :visible.sync="drawer" direction="rtl">

		    </el-drawer>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				drawer: false,
			}
		},
		methods:{
			// 拖拽
			    draghandle(e) {
					console.log(e.target.className)
			      if (e.target.className == "el-icon-menu") {
			        if (e.target.parentNode.getAttribute("data-flag") !== "true") {
			          return false
			        }
			      } else if (e.target.getAttribute("data-flag") !== "true") {
			        return false
			      }
			      this.drawer = true
			    }
		}
	}
</script>

<style style="scss" scoped>
	.fixed {
	  width: 40px;
	  height: 40px;
	  border-radius: 50%;
	  background-color: rgba(255, 255, 255, 0.9);
	  box-shadow: 0 0 10px #999;
	  position: fixed;
	  right: 40px;
	  top: 30%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-size: 30px;
	  color: #409eff;
	  z-index: 99;
	  cursor: pointer;
	}
</style>
