const { resolve: RESOLVE } = require('path');
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");
const { merge: MERGE } = require('webpack-merge');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESSRCLIENTPLUGIN = require('vue-server-renderer/client-plugin')


module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    mode: 'production',
    entry: { app: RESOLVE(__dirname, '../client/entry-client.js') },
    output: {
        filename: '[name]_[contenthash:8].js',
        path: RESOLVE(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            MINI_CSS_EXTRACT_PLUGIN.loader,
                            {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                            },
                            'postcss-loader',
                        ],
                    },
                    {
                        test: /\.less$/i,
                        exclude: /node_modules/,
                        use: [
                            MINI_CSS_EXTRACT_PLUGIN.loader,
                            { loader: 'css-loader', options: { importLoaders: 1 } },
                            'postcss-loader',
                            'less-loader',
                        ],
                    },
                ]
            }
        ]
    },
    optimization:{
        minimize:true,// 使用TerserPlugin压缩
    },
    plugins: [
        new VUELOADERPLUGIN(),
        new VUESSRCLIENTPLUGIN({
            filename: 'vue-ssr-client-manifest.json'
        }),
        new MINI_CSS_EXTRACT_PLUGIN({
            filename:'[name]_[contenthash:8].css'
        })
    ]
});
