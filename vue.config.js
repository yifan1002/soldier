const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	// 目录相关
	// publicPath: process.env.NODE_ENV === 'production' ? './' : '',
	publicPath: '/', // history路由嵌套模式
	productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
	outputDir: process.env.outputDir,

	// 代理服务器
	devServer: {
		proxy: {
			'/api': {
				target: 'http://dev2.exstudy.com/api',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		}
	},

	// 别名
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src')) // 根路径
			.set('@a', resolve('src/assets')) // 静态资源
			.set('@c', resolve('src/components')) // 组件
			.set('@p', resolve('src/pages')) // 页面
			.set('@u', resolve('src/utils')) // 公共模块
	},

	// 全局引入scss
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@a/scss/var.scss";`
			}
		}
	},

	// 生产环境压缩混淆代码
	configureWebpack: (config) => {
		if (process.env.VUE_APP_CURRENTMODE == 'pro') {
			// 为生产环境修改配置
			config.mode = 'production'
			// 将每个依赖包打包成单独的js文件
			let optimization = {
				minimizer: [new UglifyPlugin({
					uglifyOptions: {
						warnings: false,
						compress: {
							drop_console: true,
							drop_debugger: false,
							pure_funcs: ['console.log']
						}
					}
				})]
			}
			Object.assign(config, {
				optimization
			})
		} else {
			// 为开发环境修改配置
			config.mode = 'development'
		}
	}
	
	
}
