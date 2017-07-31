/**
 * Created by dipper on 2017/1/9.
 */
var Models = require('../lib/core');
var $User = Models.$User;

exports.get = function* () {
    console.log("12323131");
    this.body = 'Hello world'
   // yield this.render('signup');
}
exports.post = function* () {
    var data = this.request.body;

    var userExist = yield $User.getUserByName(data.name);
    if(userExist){
        this.flash = {error:'用户名已存在'}
        return this.redirect('/');
    }

    yield $User.addUser(data);
    this.session.user = {
        name:data.name,
        email:data.email
    }

    this.flash = {sucess:'注册成功！'}
    this.redirect('/');
}