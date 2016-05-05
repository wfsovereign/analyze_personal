var Router = require('koa-router');
var MainRouter = new Router();
var controller = require('../controller/main');

MainRouter.get("/", controller.rootPath);
MainRouter.get("/see", controller.seePath);
MainRouter.post("/search", controller.searchPath);

module.exports = MainRouter.middleware();