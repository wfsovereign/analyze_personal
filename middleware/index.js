exports.Logger = require('koa-logger');
exports.ResponseTime = require('koa-response-time');
exports.BodyParser = require('koa-bodyparser');
exports.serve = require('koa-static');
exports.views = require('koa-views');
exports.view = require('koa-view');
exports.NJT = require('./template_nj');
exports.router = require('../routes');