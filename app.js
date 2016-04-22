//require('babel-core/register')({
//    presets: ['es2015-node5', 'stage-3']
//});
//require("babel-polyfill");
process.env.DEBUG = 'wfsovereign-*';

import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger'
import ResponseTime from 'koa-response-time'
import BodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import views from 'koa-views'
import path from 'path'
import DBC from './dbc'
import NJ from 'nunjucks'
import Debug from 'debug'

const debug = Debug('wfsovereign-app');
const app = new Koa();
const MainRouter = new Router();
const convert = require('koa-convert');

function NJT(path, opt) {
    const nj = NJ.configure(path, opt);
    const ext = opt.ext || '.html';
    return function (ctx, next) {
        if (ctx.render) return next;
        ctx.render = function (view, context) {
            var p = new Promise(function (resolve, reject) {
                nj.render(view + ext, context, function (err, body) {
                    if (err) return reject(err);
                    ctx.body = body;
                    resolve();
                });
            });
            return p;
        };
        return next();
    };
}

app.use(convert(Logger()));
app.use(convert(ResponseTime()));
app.use(convert(BodyParser()));
app.use(convert(serve(path.join(__dirname, './public'))));
app.use(NJT(__dirname + '/views', {}));
//app.use(convert(views(__dirname + '/views', {extension: 'jade'})));
//app.use(views(__dirname + '/views', {map: {html: 'nunjucks'}, extension: 'html'}));
app.use(MainRouter.routes());


var rootPath = async function (ctx, next) {
    console.log('root p');
    debug('root p');
    await ctx.render('index');
};
var seePath = async function (ctx, next) {
    var users = await DBC.user.find({}).skip(300).limit(100);
    console.log(users);
    await ctx.render('see', {
        users: users
    });
};

MainRouter.get("/", rootPath);
MainRouter.get("/see", seePath);


export default app;
