const { resolve: RESOLVE } = require('path');
// const FORK_TS_CHECKER_WEBPACK_PLUGIN = require('fork-ts-checker-webpack-plugin');
// const FORK_TS_CHECKER_NOTIFIER_WEBPACK_PLUGIN = require('fork-ts-checker-notifier-webpack-plugin');
const STYLELINT_PLUGIN = require('stylelint-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //   test: /\.(ts|tsx)?$/,
            //   exclude: /node_modules/,
            //   loader: 'ts-loader',
            //   options: {
            //     appendTsSuffixTo: [/\.vue$/],
            //     transpileOnly: true, //关闭类型检查，即只进行转译
            //   },
            // },
            {
              oneOf: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                },
              ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: 'asset', //自动地在 resource 和 inline 之间进行选择
                generator: {
                  filename: 'assets/imgs/[name]_[contenthash:8][query][ext]',
                },
                parser: {
                  dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb  指定大小 小于该值则使用inline模式
                  },
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                generator: {
                  filename: 'assets/videos/[name]_[contenthash:8][query][ext]',
                },
                parser: {
                  dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb  指定大小
                  },
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset',
                generator: {
                  filename: 'assets/fonts/[name]_[contenthash:8][query][ext]',
                },
                parser: {
                  dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb  指定大小
                  },
                },
            }
        ]
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'], // 优化
        extensions: ['.js', '.ts', '.vue', '.json', '.tsx'],
        alias: {
          '@client':RESOLVE(__dirname,'../client')
        }
    },
    plugins: [
      new STYLELINT_PLUGIN(
        {
          files: './client/**/*.{vue,less,css}',
          extensions: ['vue', 'less', 'css']
        }
      ),
      // new FORK_TS_CHECKER_WEBPACK_PLUGIN({
      //   eslint: {
      //     files: './client/**/*.{vue,ts,tsx,js,jsx}',
      //   },
      // }),
      // new FORK_TS_CHECKER_NOTIFIER_WEBPACK_PLUGIN({
      //   title: 'TypeScript',
      //   excludeWarnings: false,
      //   skipSuccessful: true,
      // })
    ]
};