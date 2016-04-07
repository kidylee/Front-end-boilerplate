var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-source-map',
  entry: {
    vendor:[ 
      'webpack-hot-middleware/client',
      'jquery',
      'lodash',
      'react-dom',
      'react',
      'babel-preset-react-hmre',
      'react-redux',
      'redux',
      'bootstrap-loader',
      'font-awesome-sass-loader!./config/font-awesome-sass.config.js',
      'classnames',
      'plotly.js'


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
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      Plotly: 'plotly'
    })
  ],
  module: {
    noParse: [
      /plotly\.js/
    ],
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }

    ]
  }
};
