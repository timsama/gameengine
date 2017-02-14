var path = require('path');

module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'game.js',
		path: path.resolve(__dirname, 'bin')
	}
};