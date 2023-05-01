const SERVER = require('express');
const ROUTER = SERVER.Router();
const FS = require('fs');
const PATH = require('path');
const SERVER_BUNDLE_PATH = require(PATH.resolve(__dirname, '../../dist/vue-ssr-server-bundle.json')); // 指定serverBundle文件路径
const CLIENT_MAINFEST_PATH = require(PATH.resolve(__dirname, '../../dist/vue-ssr-client-manifest.json')); // 指定clientMainfest文件路径
const TEMPLATE_PATH = PATH.resolve(__dirname, '../server.template.html');
const TEMPLATE_CONTENT= FS.readFileSync(TEMPLATE_PATH, { encoding: 'utf-8'}); // 获取TEMPLATE内容
const { LRUCache:LRU_CACHE } = require('lru-cache');
let { createBundleRenderer } = require('vue-server-renderer');


const RENDERER = createBundleRenderer(SERVER_BUNDLE_PATH, {
  runInNewContext: false, // 推荐
  template: TEMPLATE_CONTENT, // 页面模板
  clientManifest: CLIENT_MAINFEST_PATH // 客户端构建 manifest
});

ROUTER.use(SERVER.static(PATH.resolve(__dirname, '../../dist')));

// 缓存
let microCache = new LRU_CACHE({
  max: 500,
  maxSize: 5000,
  ttl: 1000 * 60,
  sizeCalculation: (item) => item.length
});

ROUTER.get('*', (req, res) => {
  let context = {
    url: req.url
  };

  if (microCache.get(req.url)) { // 命中缓存
    return res.end(microCache.get(req.url));
  }

  RENDERER.renderToString(context).then(html => {
    res.send(html);
    microCache.set(req.url, html);
  }).catch(err => {
    console.log('err',req.url,err);
    res.status(500).send('server error');
  })
})

module.exports = ROUTER;
