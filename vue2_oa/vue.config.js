const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
function self_resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// assetsDir: 'static', //打包后指定你的css/js/img/fonts等静态资源文件夹的打包后生成路径 在outputDir目录下
	// outputDir: 'dist', //打包后  输出文件目录
	productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
	// 配置 webpack
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置... 压缩代码
					//多chunk文件,并行下载 
			      config.optimization = {
			            splitChunks: {
			              chunks: 'all',
			              cacheGroups: {
			                'element-ui': {
			                  name: 'element-ui',
			                  test: /[\\/]node_modules[\\/]element-ui[\\/]/,
			                  priority: 20
			                },
			                'vendors': {
			                  name: 'vendors', // 打包后的文件名
			                  test: /[\\/]node_modules[\\/]/, // 匹配规则
			                  priority: 10,//权重
							  chunks: 'initial' // 一般用initial打包规则，chunks可配置的参数有：all, async和initial三种。具体区别详见： https://juejin.im/post/5c08fe7d6fb9a04a0d56a702
			                },
							commons: {
								name: 'chunk-commons',
								test: self_resolve('src'), // can customize your rules
								minChunks: 2, //  重复2次才能打包到此模块   webpack4之splitChunks.minChunks https://blog.csdn.net/YaoDeBiAn/article/details/104149392
								priority: 5,
								reuseExistingChunk: true
							}
			              }
			            },
					}

		} else { // 为非生产环境修改配置...

		}
		config.resolve = { //配置别名和默认后缀
			extensions: ['.js', '.json', '.vue'], //配置文件后缀 import demo from "index", 如果没有.js 就找.json ,然后.vue
			alias: { //配置解析别名,resolve遇到某一个参数是/开头就不会拼接绝对路径
				'@': path.resolve(__dirname, './src'),
				// '@components': path.resolve(__dirname, './src/components'),
			}
		}

	},
	chainWebpack: (config) => {
		// 生产环境，开启js\css压缩
		if (process.env.NODE_ENV === 'production') {
			/* gzip压缩 */
			// config.plugin('compressionPlugin').use(new CompressionPlugin({
			// 	test: /\.(js|css|scss)$/, // 匹配文件名
			// 	threshold: 10240, // 对超过10k的数据压缩
			// 	minRatio: 0.8,
			// 	deleteOriginalAssets: true // 删除源文件
			// }))
		}

	},
	css: { // css配置
		loaderOptions: {
			sass: {
				data: ` @import "@/scss/index.scss"; `
			}
		}
	},
	/* 
	 其他人如何查看前端在本地跑的vue项目（0.0.0.0）
	 https://www.jianshu.com/p/c6b11d2d2b4f
	 */
	devServer: {
		open: process.env.VUE_APP_OPEN === 'false' ? false : true, // 自动打开浏览器
		host: '0.0.0.0', // 真机模拟，使用
		port: 8888, // 前台代理端口号
	}
}
