/**
 * Created by dipper on 2017/1/9.
 */
var User =  require('../models').User;

//添加一个用户
function addUser(data){
    return User.create(data);
}

//通过id获取用户
function getUserById(id) {
    return User.findById(id).exec();
}

//通过name获取用户
function getUserByName(name) {
    return User.findOne({name:name}).exec();
}

module.exports = {
    addUser:addUser,
    getUserById:getUserById,
    getUserByName:getUserByName
}