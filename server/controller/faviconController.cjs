const PATH = require('path');
const FS = require('fs');
const FAVICON_PATH = PATH.resolve(__dirname, '../../favicon.ico');

/**
 * 处理ico图标请求
 * @param {*} req 
 * @param {*} res 响应体
 */
function faviconController(req, res) {
    let fileContent = FS.readFileSync(FAVICON_PATH);
    res.status(200).send(fileContent);
}

module.exports = faviconController;
