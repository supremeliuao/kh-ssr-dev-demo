const SERVER = require('express')();
const SSRROUTER = require('./router/dev.cjs');
const PORT = 8000;

SERVER.use(SSRROUTER);

SERVER.listen(PORT,() => {
    console.log(`app listening at port ${PORT}`);
});