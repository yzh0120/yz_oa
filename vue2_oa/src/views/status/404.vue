


 <template>

 		<div class="error" :style="{width:$store.state.setup.window_innerWidth + `px`,
		height:$store.state.setup.window_innerHeight + `px`}">
 		  <div class="error-flex">
 		    <div class="left">
 		      <div class="left-item">
 		        <div class="left-item-animation left-item-num">404</div>
 		        <div class="left-item-animation left-item-title">地址输入错误，请重新输入地址~</div>
 		        <div class="left-item-animation left-item-msg">您可以先检查网址，然后重新输入或给我们反馈问题。</div>
 		        <div class="left-item-animation left-item-btn">
 		          <el-button type="primary" round @click="onGoHome">返回首页</el-button>
 		        </div>
 		      </div>
 		    </div>
 		    <div class="right">
 		      <!-- <img :src="img404" /> -->
			  <el-image :src="img404"></el-image>
 		    </div>
 		  </div>
 		</div>
   
 </template>
 
 <script>
 export default {
 	name: 'noFound',
 	data(){
 		return {
 			// img404:require("@/assets/imgs/404.png")
			img404:"https://s4.ax1x.com/2022/02/08/H1mupd.png"
 		}
 	},
 	methods: {
 		// 去首页
 		onGoHome() {
 			this.$router.push('/');
 		},
 	},
 };
 </script>
 
 <style scoped lang="scss">
 .error {
 	background-color: white;
 	display: flex;
 	.error-flex {
 		margin: auto;
 		display: flex;
 		height: 350px;
 		width: 900px;
 		.left {
 			flex: 1;
 			height: 100%;
 			align-items: center;
 			display: flex;
 			.left-item {
 				.left-item-animation {
 					opacity: 0;
 					animation-name: error-num;
 					animation-duration: 0.5s;
 					animation-fill-mode: forwards;
 				}
 				.left-item-num {
 					color: #d6e0f6;
 					font-size: 55px;
 				}
 				.left-item-title {
 					font-size: 20px;
 					color: #333333;
 					margin: 15px 0 5px 0;
 					animation-delay: 0.1s;
 				}
 				.left-item-msg {
 					color: #c0bebe;
 					font-size: 12px;
 					margin-bottom: 30px;
 					animation-delay: 0.2s;
 				}
 				.left-item-btn {
 					animation-delay: 0.2s;
 				}
 			}
 		}
 		.right {
 			flex: 1;
 			opacity: 0;
 			animation-name: error-img;
 			animation-duration: 2s;
 			animation-fill-mode: forwards;
 			img {
 				width: 100%;
 				height: 100%;
 			}
 		}
 	}
 }
 </style>
 
