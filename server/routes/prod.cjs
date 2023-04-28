const SERVER = require('express');
const ROUTER = SERVER.Router();
const FS = require('fs');
const PATH = require('path');
const SERVER_BUNDLE_PATH = require(PATH.resolve(__dirname, '../../dist/vue-ssr-server-bundle.json')); // 指定serverBundle文件路径
const CLIENT_MAINFEST_PATH = require(PATH.resolve(__dirname, '../../dist/vue-ssr-client-manifest.json')); // 指定clientMainfest文件路径
const TEMPLATE_PATH = PATH.resolve(__dirname, '../server.template.html');
const TEMPLATE_CONTENT= FS.readFileSync(TEMPLATE_PATH, { encoding: 'utf-8'}); // 获取TEMPLATE内容
let { createBundleRenderer } = require('vue-server-renderer');

const RENDERER = createBundleRenderer(SERVER_BUNDLE_PATH, {
    runInNewContext: false, // 推荐
    template: TEMPLATE_CONTENT, // 页面模板
    clientManifest: CLIENT_MAINFEST_PATH // 客户端构建 manifest
});

ROUTER.use(SERVER.static(PATH.resolve(__dirname, '../../dist')));

ROUTER.get('*', (req, res) => {
    const context = {
        url: req.url
    };

    RENDERER.renderToString(context).then(html => {
        res.send(html);
    }).catch(err => {
        console.log('err',req.url,err);
        res.status(500).send('server error');
    })
})

module.exports = ROUTER;