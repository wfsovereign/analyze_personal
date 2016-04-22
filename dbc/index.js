var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var Debug = require('debug');

//标记，防止重复加载
var isReady = false;
var debug = Debug('wfsovereign-*');
//schema对象缓存
var schema = {};
function exportModule() {
    if (isReady) return schema;
    isReady = true;
    //mongoose.connect(config.db_mongodb.url);
    mongoose.connect('mongodb://localhost/huatian');

    var db = mongoose.connection;
    db.on('error', function (err) {
        if (err) {
            console.log(err);
            console.error('mongodb connect error,now exit thread');
            process.exit(-1);
        }
        console.log('*********** mongodb connect success********');
    });
    db.once('open', function () {
        console.log('*********** mongodb connect success********');
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
