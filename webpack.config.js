var path = require('path');

module.exports = {
	context: __dirname + "/app",

	entry: './js/app.js',
	output: {
		filename: 'app.js',
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
