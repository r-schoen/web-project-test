module.exports = {
	devServer: {
		port: 4050,
		proxy: {
			'^/api': {
				target: 'http://localhost:8080',
				secure: false,
				changeOrigin:true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}