const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


exports.jsLoader = (({test = /\.js$/, include, exclude = /node_modules/, uses = []} = {}) => ({
    test,
    include,
    exclude,
    use: [
        'babel-loader',
        ...uses
    ]
}));

exports.cssLoader = (({test = /\.css$/, include, exclude, uses = [], extractCss = true} = {}) => {
    let loaderObj = {
        test,
        include,
        exclude,
        use: [
            'vue-style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2
                }
            },
            'postcss-loader',
            ...uses
        ]
    };
    if (extractCss) loaderObj.use[0] = MiniCssExtractPlugin.loader;
    return loaderObj;
});

exports.sassLoader = ({test = /\.scss$/, include, exclude = /node_modules/, uses = [], extractCss = true} = {}) => {
    let loaderObj = {
        test,
        include,
        exclude,
        use: [
            'vue-style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2
                }
            },
            'postcss-loader',
            'sass-loader',
            ...uses
        ]
    };
    if (extractCss) loaderObj.use[0] = MiniCssExtractPlugin.loader;
    return loaderObj;
};

exports.extractCssPlugin = ({publicPath = 'css/'} = {}) => {
    return new MiniCssExtractPlugin({
        filename: `${publicPath}[name].[hash].css`,
        chunkFilename: `${publicPath}[id].[hash].css`,
        hmr: process.env.mode === 'development'
    });
};

exports.imgLoader = ({test = /\.(jpe?g|png|bmp|webp|svg|gif|ico)$/, include, exclude, uses = []} = {}) => ({
    test,
    include,
    exclude,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '[name].[hash:8].[ext]',
                outputPath: 'images/',
                publicPath: '',
                esModule: false
            }
        },
        ...uses
    ]
});

exports.fontLoader = ({test = /\.(woff2|woff|svg|eot|ttf)$/, include, exclude, uses = []} = {}) => ({
    test,
    include,
    exclude,
    use: [
        {
            loader: 'url-loader',
            options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'fonts/',
                publicPath: ''
            }
        },
        ...uses
    ]
});

exports.vueLoader = ({test = /\.vue$/, include, exclude, uses = []} = {}) => ({
    test,
    include,
    exclude,
    use: [
        'vue-loader',
        ...uses
    ]
});

exports.vueLoaderPlugin = () => {
    return new VueLoaderPlugin();
};