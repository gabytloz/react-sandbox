const webpack = require('webpack');
const path = require('path');

exports.modules = {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join( __dirname, '../', 'app' ),
      exclude: /node_modules/
    },

    {
      test: /\.s?css$/,
      loaders: [ "style", "css", "resolve-url", "sass?sourceMap" ],
    },

    {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
    },

    {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
    },

    {
        test: /\.(jpg|gif|png)$/,
        loader: 'file'
    }
  ],
};
