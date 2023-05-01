const SERVER = require('express');
const ROUTER = SERVER.Router();
const FS = require('fs');
const PATH = require('path');
let clientConfig = require('../../build/webpack.client.dev.cjs');
let serverConfig = require('../../build/webpack.server.dev.cjs');
let templatePath =  PATH.resolve(__dirname, '../server.template.html');
let { createBundleRenderer } = require('vue-server-renderer')
let serverCompile = require('../dev/serverCompile.cjs');
let clientCompile = require('../dev/clientCompile.cjs');
let tempWatch = require('../dev/tempWatch.cjs');

let renderer;

const devServerSetup = (cb) => {
  let clientManifest, serverBundle, readyResolve, templateContent;

  templateContent = FS.readFileSync(templatePath, 'utf-8');

  let readyPromise = new Promise(resolve => readyResolve = resolve );

  // 更新客户端和服务端内容
  let updateClientAndServer = () => {

    // 只有构建清单文件都存在时，执行更新操作
    if(clientManifest && serverBundle) {
        readyResolve(); // 把promise resolve掉

        cb(serverBundle, {
          template: templateContent,
          clientManifest
        })
    }
  };

  // 监听模板文件
  tempWatch(templatePath, () => {
    updateClientAndServer();
  });

  // 客户端 编译
  let { devMiddleware, hotMiddleware} = clientCompile(
    clientConfig, (clientManifestContent) => {
    clientManifest = clientManifestContent;
    updateClientAndServer();
  })

  ROUTER.use(devMiddleware);
  ROUTER.use(hotMiddleware);

  // 服务端 编译
  serverCompile(serverConfig, (serverBundleContent) => {
    serverBundle = serverBundleContent;
    updateClientAndServer();
  })

  return readyPromise;
}

let devServerPromise = devServerSetup((serverBundle, options) => {
  renderer = createBundleRenderer(serverBundle, Object.assign(options, {
    runInNewContext: false,
  }))
});

ROUTER.get('*', (req, res) => {
  let context = {
    url: req.url
  };

  devServerPromise.then(() => {
    renderer.renderToString(context).then(html => {
      res.send(html);
    }).catch(err => {
      console.log('err',req.url,err);
    })
  })
})

module.exports = ROUTER;
