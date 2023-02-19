const { resolve: RESOLVE } = require('path');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESERVERPlUGINSSR = require('vue-server-renderer/server-plugin')
const NODEEETERNALS = require('webpack-node-externals');

module.exports = {
    target: 'node',
    devtool: 'eval-cheap-source-map',
    entry: RESOLVE(__dirname, '../client/entry-server.js'),
    output: {
        path: RESOLVE(__dirname, '../dist'),
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
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
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [NODEEETERNALS()], // in order to ignore all modules in node_modules folder
    plugins: [
        new VUELOADERPLUGIN(),
        new VUESERVERPlUGINSSR({
            filename: 'src/vue-ssr-server-bundle.json'
        })
    ]
}
