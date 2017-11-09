const baseConfig = require( './webpack.base' );
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = baseConfig({
  entry: './app.js',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(['build/app/'])
  ]
});
