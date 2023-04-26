const { resolve: RESOLVE } = require('path');
const { merge: MERGE } = require('webpack-merge');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESERVERPlUGINSSR = require('vue-server-renderer/server-plugin')
const NODEEETERNALS = require('webpack-node-externals');

module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    target: 'node',
    devtool: 'eval-cheap-source-map',
    entry: RESOLVE(__dirname, '../client/entry-server.js'),
    output: {
        filename: 'server-bundle.js',
        path: RESOLVE(__dirname, '../dist'),
        libraryTarget: 'commonjs2'
    },
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [NODEEETERNALS()], // in order to ignore all modules in node_modules folder
    plugins: [
        new VUELOADERPLUGIN(),
        new VUESERVERPlUGINSSR({
            filename: 'vue-ssr-server-bundle.json'
        })
    ]
});
