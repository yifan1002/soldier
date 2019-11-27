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
	}
}