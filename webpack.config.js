var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      include: APP_PATH
    },{
      test: /\.jsx?$/,
      loader: 'babel',
      include: APP_PATH
    }, {
      test: /\.css$/,
      loaders: ['style', 'css','postcss']
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss','sass']
    },{
      test: /\.(ttf|eot|woff(2)?)(\?(t=)?[a-z0-9]+)?$/,
      loader: 'url?limit=50000&hash=sha512&digest=hex&name=[hash].[ext]'
    }, {
      test: /\.(svg?)(\?(t=)?[a-z0-9]+)$/,
      loader: 'url?limit=50000&hash=sha512&digest=hex&name=[hash].[ext]'
    },{
			test: /\.svg$/,
			loader: 'svg-inline'
		},{
			test: /\.(jpe?g|png|gif)$/i,
			loaders: [
        'url?limit=50000&hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		}]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new HtmlwebpackPlugin({
    template: path.resolve(APP_PATH, 'index.ejs')
    })
  ]
}
