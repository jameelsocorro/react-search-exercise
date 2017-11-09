const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => ({
    context: `${__dirname}/src`,
    entry: options.entry,
    output: Object.assign({
        path: `${__dirname}/build/`,
        publicPath: '/'
    }, options.output),
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(jpeg|jpg|png|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }].concat(options.module.rules)
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        })
    ].concat(options.plugins || []),
    devtool: options.devtool,
    performance: options.performance || {}
});
