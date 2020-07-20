const path = require('path');
const { jsLoader, imgLoader, fontLoader, vueLoader, vueLoaderPlugin } = require('./build/webpack.utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const confPath = './build/',
    htmlTitle = '数据填报系统前端开发文档';

const config = {
    entry: {
        'index': path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'js/[name].[hash:8].js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@components': path.resolve(__dirname, './src/components/'),
            '@styles': path.resolve(__dirname, './src/styles/'),
            '@routes': path.resolve(__dirname, './src/routes/'),
            '@pages': path.resolve(__dirname, './src/pages/')
        },
        extensions: ['.vue', '.js']
    },
    module: {
        rules: [
            fontLoader(),
            imgLoader(),
            jsLoader(),
            vueLoader()
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`
            }
        }),
        new CleanWebpackPlugin(),
        new htmlPlugin({
            title: htmlTitle,
            filename: 'index.html',
            template: path.resolve(__dirname, './src/templates/index.html'),
            inject: true,
            cache: true,
            showErrors: false
        }),
        vueLoaderPlugin()
    ]
};

module.exports = mode => {
    if (mode && mode === 'production') {
        return merge(config, require(`${confPath}webpack.prod.js`));
    }
    return merge(config, require(`${confPath}webpack.dev.js`));
};