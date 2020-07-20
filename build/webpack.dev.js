const path = require('path');
const { cssLoader, sassLoader } = require('./webpack.utils');
const webpack = require('webpack');

const outputPath = path.resolve(__dirname, '../dist');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: outputPath
    },
    devServer: {
        contentBase: outputPath,
        compress: true,
        host: 'localhost',
        port: 8088,
        open: true,
        hot: true,
        overlay: true
    },
    module: {
        rules: [
            cssLoader({
                extractCss: false
            }),
            sassLoader({
                extractCss: false
            })
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};