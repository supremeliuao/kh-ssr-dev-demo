const { resolve: RESOLVE } = require('path');
const { merge: MERGE } = require('webpack-merge');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESSRCLIENTPLUGIN = require('vue-server-renderer/client-plugin')


module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    mode: 'development',
    entry: { app: RESOLVE(__dirname, '../client/entry-client.js') },
    output: {
        filename: '[name]_[contenthash:8].js',
        path: RESOLVE(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new VUELOADERPLUGIN(),
        new VUESSRCLIENTPLUGIN({
            filename: 'vue-ssr-client-manifest.json'
        })
    ]
});
