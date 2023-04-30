const { resolve: RESOLVE } = require('path');

module.exports = {
  module: {
    rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        {
          oneOf: [
            {
              test: /\.(ts|tsx)?$/,
              exclude: /node_modules/,
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
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
    ]
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'], // 优化
    extensions: ['.js', '.ts', '.vue', '.json', '.tsx'],
    alias: {
      '@client':RESOLVE(__dirname,'../client')
    }
  },
  stats: {
    assets: true, // 是否展示资源信息
    assetsSort: 'size', // 依据字节大小排序(小->大)
    assetsSpace: 15, // 显示多少个assets项目(直接表现就是输出多少assets),多的以组的方式折叠
    builtAt: false, // 是否添加构建日期和时间
    moduleAssets: true, // 是否添加模块内的资源信息
    modulesSpace: 15, // 显示多少个模块项目,多的以组的方式折叠
    chunkModulesSpace: 15,
    nestedModulesSpace: 10,
    cachedModules: true, // 是否要缓存模块信息
    runtimeModules: true,
    chunks: true, // 是否添加关于 chunk 的信息
    dependentModules: false, // 是否展示该chunk依赖的其他模块的chunk模块
    groupAssetsByChunk: false, // 是否按照assets和chunk的关系分组
    groupAssetsByEmitStatus: false, // 按照assets的状态进行分组
    chunksSort: 'size', // chunk排序
    chunkGroups: true, // 是否添加关于 namedChunkGroups 的信息
    chunkOrigins: true, // 是否添加chunk来源和chunk合并的信息
    colors: true, // 是否输出不同的颜色
    children: true, // 是否添加关于子模块信息
    entrypoints: true, // 是否展示入口文件和对于的bundle
    logging: 'warn', // 添加日志输出
    loggingTrace: true, // 是否添加栈追踪
    modules: true, // 是否添加构建模块信息
    modulesSort: 'size', // 给定字段排序
    performance: true, // 当文件大小超过 performance.maxAssetSize配置值时，展示性能提性
    ids: true, // 是否给module 和 chunk 添加 id
    errorDetails: true,
    version: true, // 是否添加webpack版本
  },
  performance: {
    // 配置如何展示性能提示
    hints: 'warning', // 警告
    maxEntrypointSize: 1048576,
    maxAssetSize: 1572864,
  },
};
