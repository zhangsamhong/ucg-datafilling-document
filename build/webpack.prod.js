const path = require('path');
const { cssLoader, sassLoader, extractCssPlugin } = require('./webpack.utils');
const terserJSPlugin = require('terser-webpack-plugin');
const cssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: ''
    },
    module: {
        rules: [
            cssLoader(),
            sassLoader()
        ]
    },
    plugins: [
        extractCssPlugin()
    ],
    optimization: {
        minimizer: [
            new terserJSPlugin({
                extractComments: false
            }),
            new cssAssetsPlugin({})
        ]
    }
};