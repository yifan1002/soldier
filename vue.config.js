const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	// 目录相关
	publicPath: process.env.NODE_ENV === 'production' ? './' : '',
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
			.set('#', resolve('src/assets')) // 静态资源
			.set('@c', resolve('src/components')) // 组件
			.set('@p', resolve('src/pages')) // 页面
			.set('@u', resolve('src/utils')) // 公共模块
	},

	// 全局引入scss
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "#/scss/var.scss";`
			}
		}
	}
	
}
