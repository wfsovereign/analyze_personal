var DBC = require('../dbc');

exports.rootPath = function *() {
    console.log('------');
    yield this.render('index');
};


exports.seePath = function *() {
    var users = yield DBC.user.find({}).skip(4100).limit(100);
    yield this.render('see', {
        users: users
    });
};