/**
 * Created by dipper on 2017/1/10.
 */
var Comment = require('../models').Comment

//添加一个评论
exports.addComment = function (data) {
    return Comment.create(data);
}

//根据话题id 获取对应评论
exports.getCommentsByTopicId = function (id) {
    return Comment.find({topic_id:id}).sort('updated_at').exec();
}