var path = require('path');

module.exports = {
	context: __dirname + "/app",

	entry: {
		app: './js/app.js',
		test: './js/test/alltests.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'bin'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		]
	},
};
