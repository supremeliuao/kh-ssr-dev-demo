const { resolve: RESOLVE } = require('path');
const { merge: MERGE } = require('webpack-merge');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESERVERPlUGINSSR = require('vue-server-renderer/server-plugin')
const NODEEETERNALS = require('webpack-node-externals');
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");
const TERSER_PLUGIN = require("terser-webpack-plugin");
const CSS_MINIMIZER_PLUGIN = require("css-minimizer-webpack-plugin");
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');

module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    mode: 'production',
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
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [NODEEETERNALS()], // in order to ignore all modules in node_modules folder
    optimization:{
      minimize:true,// 使用TerserPlugin压缩
      minimizer:[new TERSER_PLUGIN(),new CSS_MINIMIZER_PLUGIN({parallel: 4})] // 压缩js、css
    },
    plugins: [
      new VUELOADERPLUGIN(),
      new VUESERVERPlUGINSSR({
        filename: 'vue-ssr-server-bundle.json'
      }),
      new MINI_CSS_EXTRACT_PLUGIN({
        filename:'[name]_[contenthash:8].css'
      })
    ]
});
