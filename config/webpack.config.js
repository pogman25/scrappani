const jsConfig = {
	test: /\.js$/,
	exclude: /(node_modules)/,
	loader: 'babel-loader',
	query: {
		presets: [
			[
				'env',
				{
					targets: {
						// The % refers to the global coverage of users from browserslist
						browsers: ['last 2 versions', 'not ie <= 10'],
					},
				},
			],
		],
	},
};

const webpackConfig = isDevelopment =>
	isDevelopment
		? {
				mode: 'development',
				watch: true,
				module: {
					rules: [jsConfig],
				},
				devtool: 'source-map',
				output: {
					filename: 'index.js',
				},
		  }
		: {
				mode: 'production',
				module: {
					rules: [jsConfig],
				},
				output: {
					filename: 'index.js',
				},
		  };

module.exports = webpackConfig;
