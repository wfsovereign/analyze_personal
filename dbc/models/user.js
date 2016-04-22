var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/huatian');
//var db = mongoose.connection;
//console.log('begin');
//db.on('error', function (err) {
//    if (err) {
//        console.log(err);
//        console.error('mongodb connect error,now exit thread');
//        process.exit(-1);
//    }
//    console.log('*********** mongodb connect success********');
//});
//db.once('open', function () {
//    console.log('*********** mongodb connect success********');
//});

var Schema = mongoose.Schema;

var User = module.exports = new Schema({
    "followed": Boolean,
    "house": String,
    "sex": Number,
    "tagComparator": Object,
    "isCheckSchool": Boolean,
    "education": String,
    "id": String,
    "city": Number,
    "isCheckSalary": Boolean,
    "marriageStatus": String,
    "isUserBlock": Boolean,
    "isVip": Boolean,
    "isCheckCorpVerify": Boolean,
    "province": Number,
    "isOnline": Number,
    "isSayHi": Boolean,
    "isSuperVip": Boolean,
    "company": String,
    "avatarType": String,
    "isNormalVip": Boolean,
    "height": String,
    "salary": String,
    "school": String,
    "photoCount": Number,
    "isCheckId": Boolean,
    "albumId": Number,
    "url": String,
    "nickName": String,
    "age": Number,
    "isCheckCorp": Boolean,
    "isCheckMobile": Boolean,
    "avatar": String,
    "car": String,
    "following": Boolean,
    "position": String,
    "industry": String
});
//var user = mongoose.model('user', User);
//var u = new user({nickName:'f'});
//u.save(function (err, r) {
//    console.log('======');
//    console.log(err);
//    console.log(r);
//    user.find().limit(1).exec(function (err, u) {
//        console.log('--------');
//        console.log(err);
//        console.log(u);
//    });
//});
//user.find().limit(1).exec(function (err, u) {
//        console.log('--------');
//        console.log(err);
//        console.log(u);
//    });