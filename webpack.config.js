const path      = require('path');
const webpack   = require('webpack');
const parts     = require('./lib/parts');
const validate  = require('webpack-validator');

const common = {
  devtool: 'eval',

  entry: [
      'webpack-hot-middleware/client',
      './app/index'
  ],

  output: {
      path:       path.join( __dirname, 'build' ),
      filename:   'bundle.js',
      publicPath: '/build/'
  },

  resolve: {
      extensions: ['', '.js', '.jsx']
  },

  plugins: [
      new webpack.NoErrorsPlugin()
  ],

  module: parts.modules
};

module.exports = validate( common );
