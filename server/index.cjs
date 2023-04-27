const APP = require('express')();
const ENV = require('./config/env.cjs');
const FAVICON_ROUTER = require('./routes/favicon.cjs');
const PORT = 8000;

APP.use(FAVICON_ROUTER); // icon 图标

//根据环境变量使用不同环境配置
APP.use(require(ENV.router));

APP.listen(PORT,() => {
    console.log(`app listening at port ${PORT}`);
});