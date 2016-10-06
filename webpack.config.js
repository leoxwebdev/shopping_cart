var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: [
      'font-awesome-webpack',
      'bootstrap-loader',
      './src/app.js'
    ],
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      loaders: [
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
        { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
        { test: /\.(ttf|eot)$/, loader: 'file' },
        //Font-awesome
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        // Support for *.png files.
        { test: /\.png$/,  loader: 'file-loader' },
        // Support for *.gif files.
        { test: /\.gif$/,  loader: 'file-loader' },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react', 'stage-2'],
              plugins: ['transform-decorators-legacy']
          }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
        }
      ]
    },
    devServer: {
  		// do not print bundle build stats
  		noInfo: true,
  		// enable HMR
  		hot: true,
  		// embed the webpack-dev-server runtime into the bundle
  		inline: true,
  		// serve index.html in place of 404 responses to allow HTML5 history
  		historyApiFallback: true,
  		port: "8080",
  		host: "127.0.0.1"
  	},
    plugins: [
  		new webpack.NoErrorsPlugin(),
  		new webpack.HotModuleReplacementPlugin(),
  		new HtmlWebpackPlugin({
  			template: './index.html'
  		}),
      new webpack.ProvidePlugin({
        jQuery: "jquery"
      }),
      new ExtractTextPlugin('assets/styles.css')
  	],
    resolve: {
      extensions: ['', '.js', '.scss'],
      root: [path.join(__dirname, './src')]
    }
};
