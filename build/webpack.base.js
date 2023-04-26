const { resolve: RESOLVE } = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            '@client':RESOLVE(__dirname,'../client')
        }
    },
};