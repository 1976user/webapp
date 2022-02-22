const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
		{
			test: /\.ts$/,
			use: 'ts-loader',
			exclude: /node_modules/
		},
		{
			test: /\.html$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		},
		{
			test: /\.css$/,
			use: {
				loader: 'file-loader',
				options: {
					name: 'css/[name].[ext]'
				}
			}
		}]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/app.js'
	}
}