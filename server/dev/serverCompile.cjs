let webpack = require('webpack');
let path = require('path');
const MFS = require('memory-fs');

module.exports = function serverCompile(
    serverConfig,
    serverBundleCb
) {
    let serverCompiler = webpack(serverConfig);
    let mfs = new MFS();
    serverCompiler.outputFileSystem = mfs; // 把 webpack 默认的普通文件系统更换为内存文件系统

    serverCompiler.watch({ ignored: /node_modules/, }, (err, stats) => {
        if (err) throw err;
        stats = stats.toJson();

        // 有错误后续不执行
        if (stats.errors.length) return;

        console.log('\n服务端更新...\n');

        // 获取服务端bundle文件路径
        let bundlePath = path.resolve(
            serverConfig.output.path,
            'vue-ssr-server-bundle.json'
        );

        serverBundleCb(JSON.parse(mfs.readFileSync(bundlePath, 'utf-8')))
    });
}