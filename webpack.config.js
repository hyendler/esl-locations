const path = require('path')

module.exports = {
	context: __dirname,
	entry: './public/js/ClientApp.js',
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				loader: 'babel-loader'
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
    	}
		]
	}
}