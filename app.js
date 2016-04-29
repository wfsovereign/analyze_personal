process.env.DEBUG = 'wfsovereign-*';

var debug = require('debug')('wfsovereign-app');
var Server = require('./server');
var server = new Server();

server.start();


server.errHandle(function (err) {
    debug(err);
});