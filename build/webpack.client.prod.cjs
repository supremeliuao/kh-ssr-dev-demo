const { resolve: RESOLVE } = require('path');
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin");
const { merge: MERGE } = require('webpack-merge');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESSRCLIENTPLUGIN = require('vue-server-renderer/client-plugin')
const TERSER_PLUGIN = require("terser-webpack-plugin");
const CSS_MINIMIZER_PLUGIN = require("css-minimizer-webpack-plugin");
const STYLELINT_PLUGIN = require('stylelint-webpack-plugin');
const FORK_TS_CHECKER_WEBPACK_PLUGIN = require('fork-ts-checker-webpack-plugin');
const ESLINT_WEBPACK_PLUGIN = require('eslint-webpack-plugin');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');

module.exports = MERGE(WEBPACK_BASE_CONFIG, {
    mode: 'production',
    entry: { app: RESOLVE(__dirname, '../client/entry-client.ts') },
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
      minimizer:[new TERSER_PLUGIN(),new CSS_MINIMIZER_PLUGIN({parallel: 4})] // 压缩js、css
    },
    plugins: [
      new VUELOADERPLUGIN(),
      new VUESSRCLIENTPLUGIN({
        filename: 'vue-ssr-client-manifest.json'
      }),
      new MINI_CSS_EXTRACT_PLUGIN({
        filename:'[name]_[contenthash:8].css'
      }),
      new STYLELINT_PLUGIN(
        {
          files: './client/**/*.{vue,less,css}',
          extensions: ['vue', 'less', 'css']
        }
      ),
      new FORK_TS_CHECKER_WEBPACK_PLUGIN({
        typescript: {
          configFile: 'tsconfig.json',
        }
      }),
      new ESLINT_WEBPACK_PLUGIN({
        extensions: ['vue', 'ts', 'js', 'tsx', 'jsx']
      })
    ]
});
