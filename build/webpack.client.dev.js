const { resolve: RESOLVE } = require('path');
const WEBPACK = require('webpack');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESSRCLIENTPLUGIN = require('vue-server-renderer/client-plugin')

module.exports = {
    mode: 'development',
    entry: { app: RESOLVE(__dirname, '../client/entry-client.js') },
    output: {
        path: RESOLVE(__dirname, '../dist'),
        filename: 'src/[name].[contenthash:6].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ["vue-style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            '@client':RESOLVE(__dirname,'../client')
        }
    },
    plugins: [
        new VUELOADERPLUGIN(),
        new VUESSRCLIENTPLUGIN({
            filename: 'src/vue-ssr-client-manifest.json'
        })
    ]
}
