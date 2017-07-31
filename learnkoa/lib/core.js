/**
 * Created by dipper on 2017/1/10.
 */
var Comment = require('./comment');
var Topic = require('./topic');
var User = require('./user');
//数据库查询或更新抛出的错误最终会被 koa-errorhandler 捕获。
module.exports = {
    get $User(){
        return User;
    },

    get $Comment(){
        return Comment;
    },
    get $Topic(){
        return Topic;
    }
}