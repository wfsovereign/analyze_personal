var NJ = require('nunjucks');

function NJT(path, opt) {
    const nj = NJ.configure(path, opt);
    const ext = opt.ext || '.html';
    return function (ctx, next) {
        if (ctx.render) return next;
        ctx.render = function (view, context) {
            return new Promise(function (resolve, reject) {
                nj.render(view + ext, context, function (err, body) {
                    if (err) return reject(err);
                    ctx.body = body;
                    resolve();
                });
            });
        };
        return next();
    };
}

function es6NJT(path, opt) {
    const nj = NJ.configure(path, opt);
    const ext = opt.ext || '.html';
    return function *(next) {
        if (this.render) yield next;
        var self = this;
        this.render = function (view, context) {
            return new Promise(function (resolve, reject) {
                nj.render(view + ext, context, function (err, body) {
                    if (err) return reject(err);
                    self.body = body;
                    resolve();
                });
            });
        };
        yield next;
    };
}
module.exports = es6NJT;