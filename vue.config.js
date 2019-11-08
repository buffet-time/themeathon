// vue config
module.exports = {
	// options
	lintOnSave: 'error',
	runtimeCompiler: true,
	// Webpack Options
	configureWebpack: config => {
		config.entry.styles = './src/styles/styles.ts'
	},
	chainWebpack: config => {
		config.module.rule('vue').uses.clear()
		config.module.rule('vue').clear()
		config.plugins.delete('vue-loader')
		config.module
			.rule('component.html')
			.test(/\.component.html$/)
			.use('vue-template-loader')
			.loader('vue-template-loader')
			.tap(options => {
				options = {
					transformAssetUrls: {
						video: ['src', 'poster'],
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					}
				}
				return options
			})
			.end()
	}
}
