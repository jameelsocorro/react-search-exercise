const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const path = require('path');

module.exports = baseConfig({
    devServer: {
        contentBase: './',
        publicPath: '/',
        hot: true,
        hotOnly: true,
        noInfo: true,
        color: true,
        stats: 'errors-only',
        inline: true,
        historyApiFallback: true
    },
    entry: [
        './index.js'
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    performance: {
        hints: false
    }
});
