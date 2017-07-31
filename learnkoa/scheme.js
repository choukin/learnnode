/**
 * Created by dipper on 2017/1/6.
 */
var validator = require('validator');
var crypto = require('crypto');

module.exports = {
    "/(.*)":{
        "request":{
            "header.version":/^[0-9]+$/
        }
    },
    "(POST|put) /signup":{
        "request":{
            "body":{
                "name":/^[a-zA-Z]+$/,
                "age":validator.isNumberic,
                "email":validator.isEmail,
                "genger":/^(male|female)$/,
                "password":/^[a-zA-Z0-9]{6,12}$/,
                "repassword":/^[a-zA-Z0-9]{6,12}$/,
            }
        },
        "response":{
            "body.user.id":/^[a-zA-Z0-9]{32}$/
        }
    }

};

function md5(str){
    return crypto.createHash('md5').update(str).digest('hex');
}

function checkRepassword(repassword) {
    var body = $this.request.body;
    if(repassword !== body.password ){
        return this.throw(400,'两次密码不一致')
    }
    body.password =  md5(body.password);
    return true;
}
