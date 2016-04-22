var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var debug = require('debug')('wfsovereign-*');

//标记，防止重复加载
var isReady = false;
//schema对象缓存
var schema = {};
function exportModule() {
    if (isReady) return schema;
    isReady = true;
    mongoose.connect('mongodb://localhost/huatian');
    var db = mongoose.connection;
    db.on('error', function (err) {
        if (err) {
            debug(err);
            debug('mongodb connect error,now exit thread');
            process.exit(-1);
        }
        debug('*********** mongodb connect success********');
    });
    db.once('open', function () {
        debug('*********** mongodb connect success********');
    });
    var files = fs.readdirSync(path.join(__dirname, './models')).map(ele => {
        return ele.split('.')[0];
    });
    files.forEach(ele => {
        schema[ele] = mongoose.model(ele, require(path.resolve(__dirname, './models', ele)));
    });
    return schema;
}

module.exports = exportModule();
