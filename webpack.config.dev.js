var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'eval',
  entry: {
    vendor:[ 
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    'jquery',
    'lodash',
    'react-dom',
    'react',
    'babel-preset-react-hmre',
    'react-redux',
    'redux',
     ],
     app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      '_': 'lodash'
    })
  ],
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
