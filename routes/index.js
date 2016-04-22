var Router = require('koa-router');
var MainRouter = new Router();
var controller = require('../controller/main');

MainRouter.get("/", controller.rootPath);
MainRouter.get("/see", controller.seePath);

module.exports = MainRouter.middleware();