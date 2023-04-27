const EXPRESS = require('express');
const FAVICON_REOUTER = EXPRESS.Router();
const FAVICON_CONTROLLER = require('../controller/faviconController.cjs');

FAVICON_REOUTER.get('/favicon.ico', FAVICON_CONTROLLER);

module.exports = FAVICON_REOUTER;