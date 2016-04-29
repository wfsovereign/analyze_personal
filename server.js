var koa = require('koa');
var middleware = require('./middleware');
var debug = require('debug')('wfsovereign-server');
var path = require('path');

function Server(option) {
    this.opts = option || {};
}

Server.prototype = koa();


Server.prototype.start = function () {
    var port = process.env.PORT || this.opts.port || 3000;
    this.keys = ['wfsovereign'];
    this.proxy = true;
    this.use(middleware.Logger());
    this.use(middleware.ResponseTime());
    this.use(middleware.BodyParser());
    this.use(middleware.serve(path.join(__dirname, '/public')));
    //this.use(middleware.NJT(path.join(__dirname, '/views'), {}));
    this.use(middleware.view(path.join(__dirname, '/src/views')));
    //this.use(middleware.views(path.join(__dirname, '/views'), {map: {html: 'nunjucks'}}));
    this.use(middleware.router);
    this.listen(port, function () {
        debug('server start up in ' + (port));
    });
};


Server.prototype.errHandle = function (callback) {
    process.on('uncaughtException', callback);
    process.on('exception', callback);
    process.on('Exception', callback);
    process.on('ReferenceError', callback);
    process.on('ENOENT', callback);
    process.on('error', callback)
};

module.exports = Server;
