const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://dev.exstudy.com',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		}
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@c', resolve('src/components'))
			.set('@p', resolve('src/pages'))
			.set('@u', resolve('src/utils'))
			.set('@icon', resolve('src/assets/icon'))
			.set('@img', resolve('src/assets/img'))
	}
}
