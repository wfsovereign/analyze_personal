var DBC  = require('../dbc');

exports.rootPath = function *(next) {
    return this.render('index');
};

exports.seePath = function *(next) {
    var users = yield DBC.user.find({}).skip(3300).limit(100);
    return this.render('see', {
        users: users
    });
};