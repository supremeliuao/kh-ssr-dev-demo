const { resolve: RESOLVE } = require('path');
const { merge: MERGE } = require('webpack-merge');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESERVERPlUGINSSR = require('vue-server-renderer/server-plugin')
const NODEEETERNALS = require('webpack-node-externals');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');

module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    target: 'node',
    devtool: 'eval-cheap-source-map',
    entry: RESOLVE(__dirname, '../client/entry-server.js'),
    output: {
        filename: 'server-bundle.js',
        path: RESOLVE(__dirname, '../dist'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/i,
                        use: [
                            {
                                loader: 'style-loader',
                                options: {},
                            },
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
                            'vue-style-loader',
                            { loader: 'css-loader', options: { importLoaders: 1 } },
                            'postcss-loader',
                            'less-loader',
                        ],
                    },
                ]
            }
        ]
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
