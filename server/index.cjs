const SERVER = require('express')();
const FAVICON_ROUTER = require('./router/favicon.cjs');
const SSRROUTER = require('./router/dev.cjs');
const PORT = 8000;

SERVER.use(FAVICON_ROUTER); // icon 图标

SERVER.use(SSRROUTER); // ssr 路由

SERVER.listen(PORT,() => {
    console.log(`app listening at port ${PORT}`);
});