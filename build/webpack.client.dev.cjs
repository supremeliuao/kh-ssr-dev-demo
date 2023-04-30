const { resolve: RESOLVE } = require('path');
const { merge: MERGE } = require('webpack-merge');
const { VueLoaderPlugin: VUELOADERPLUGIN } = require('vue-loader');
const VUESSRCLIENTPLUGIN = require('vue-server-renderer/client-plugin');
const STYLELINT_PLUGIN = require('stylelint-webpack-plugin');
const FORK_TS_CHECKER_WEBPACK_PLUGIN = require('fork-ts-checker-webpack-plugin');
const ESLINT_WEBPACK_PLUGIN = require('eslint-webpack-plugin');
const WEBPACK_BASE_CONFIG = require('./webpack.base.cjs');

module.exports = MERGE(WEBPACK_BASE_CONFIG, {
  mode: 'development',
  target: 'web', // web环境
  entry: { app: RESOLVE(__dirname, '../client/entry-client.ts') },
  output: {
    filename: '[name]_[contenthash:8].js',
    path: RESOLVE(__dirname, '../dist'),
    publicPath: '/'
  },
  // cache: {
  //   type: 'filesystem',
  //   name: 'devClientCache-development',
  //   idleTimeoutAfterLargeChanges: 1000,
  //   maxAge: 604800, // 允许未使用的缓存留在文件系统缓存中的时间
  // },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.less$/i,
            exclude: /node_modules/,
            use: [
              { loader: 'vue-style-loader', options: { ssrId: false  } },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                }
              },
              'postcss-loader',
              'less-loader',
            ],
          },
        ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    concatenateModules: true,
    minimize: true,
    splitChunks: {
      // 优化:代码分割
      chunks: 'all',
      automaticNameDelimiter: '~',
      minChunks: 2,
      cacheGroups: {
      vendor: {
          // 第三方依赖
          priority: 1, // 设置优先级，首先抽离第三方模块
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 1, // 最少引入了1次
          },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
  plugins: [
    new VUELOADERPLUGIN(),
    new VUESSRCLIENTPLUGIN({
      filename: 'vue-ssr-client-manifest.json'
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
  ],
});
