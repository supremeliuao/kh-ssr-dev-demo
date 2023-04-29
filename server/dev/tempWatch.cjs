let fs = require('fs');
let chokidar = require('chokidar');

module.exports = function tempWatch(templatePath, watchCb) {

    // 监听模板html文件 change
    chokidar.watch(templatePath).on('change', () => {
        console.log('模板更新中...');
        templateContent = fs.readFileSync(templatePath, 'utf-8');
        console.log('模板更新成功!');

        // 更新模块
        watchCb();
    });
}