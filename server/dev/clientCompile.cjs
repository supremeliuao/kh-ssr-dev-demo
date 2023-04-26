let webpack = require('webpack');
let path = require('path');

module.exports = function clientCompile(clientConfig, clientManifestCb) {

    // 向客户端 webpack 修改配置
    clientConfig.entry.app = [ 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true', clientConfig.entry.app ];
    clientConfig.output.filename = '[name]_[contenthash:8].js';
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ); 

    // 编译客户端 webpack 配置
    let clientCompiler = webpack(clientConfig); // 获取 compiler 实例

    let devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        serverSideRender: true,
        stats: {//可选
            colors: true,
            modules: true,
        },
    });

    // done是AsyncSeriesHook类型钩子
    clientCompiler.hooks.done.tap('done', stats => {
        stats = stats.toJson({stats:'errors-warnings'});

        // 如果客户端编译完毕，有错误或者警告会打印到控制台
        stats.errors.forEach(err => console.error(err));
        stats.warnings.forEach(err => console.warn(err));
        
        // 有错误后续不生成 manifest 文件
        if (stats.errors.length) return;
        console.log('\n客户端更新...\n');
        let manifestContent = devMiddleware.context.outputFileSystem.readFileSync(
            path.resolve(clientConfig.output.path, 'vue-ssr-client-manifest.json'),
            'utf-8'
        );
        
        clientManifestCb(JSON.parse(manifestContent));
    });
        
    let hotMiddleware = require('webpack-hot-middleware')(clientCompiler); 
    
    return {
        devMiddleware,
        hotMiddleware
    }
}