/**
 * Created by dipper on 2017/1/9.
 */
var validator = require('validator');
var crypto = require('crypto');


module.exports = {
    "(GET|POST) /signup":{
        "request":{
            "session":checkNotLogin
        }
    },
    "POST /signup":{
        "request":{
            "body":checkSignupBody
        }
    },
    "(GET|POST) /signin":{
        "request":{
            "session":checkLogin
        }
    },
    "POST /signin":{
        "request":{
            "body":checkSigninBody
        }
    }
};

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

function checkNotLogin(){
    console.log(1111111)
    if(this.session && this.session.user){
        this.flash = {error:"已登录！"};
        this.redirect('back');
        return false;
    }
    console.log(222222);
    return true;
}

function checkLogin() {
    if(!this.session || !this.session.user){
        this.flash = {error:'未登录！'};
        this.redirect('/signin');
        return false;
    }
    return true;
}

function checkSignupBody() {
    var body = this.request.body;
    var flash ;
    if(!body || !body.name){
        flash = {error:'请填写用户名！'}
    }else if(!body.email || !validator.isEmail(body.email)){
        flash = {error:'请填写正确的邮箱地址！'}
    }else if(!body.password){
        flash = {error:'请填写密码！'}
    }else if(body.password !== body.re_password){
        flash = {error:'两次密码不匹配！'};
    }else if(!body.gender || !~['男','女'].indexOf(body.getnder)){
        flash = {error:'请选择性别！'};
    }

    if(flash){
        this.flash = flash;
        this.redirect('back');
        return false;
    }

    body.name = validator.trim(body.name);
    body.email = validator.trim(body.email);
    body.password = md5(validator.trim(body.password));
    return true;

}

function checkSigninBody(){
    var body = this.request.body;
    var flash;
    if(!body || !body.name){
        flash = {error:'请填写用户名'};
    }else if(!body.password){
        flash = {error:'请填写密码'};
    }

    if(flash){
        this.flash = flash;
        this.redirect('back');
        return false;
    }

    body.name = validator.trim(body.name);
    body.email = validator.trim(body.email);
    return true;

}