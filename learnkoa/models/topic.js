/**
 * Created by dipper on 2017/1/9.
 */
var mogoose = require('mongoose');
var Schema = mogoose.Schema;

var TopicSchema = new Schema({
    user:{
        name:{type:String,required:true},
        email:{type:String,required:true}
    },
    title:{type:String,required:true},
    content:{type:String,required:true},
    tab:{type:String,default:0},
    pv:{type:Number,default:0},
    comment:{type:Number,default:0},
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
});

TopicSchema.index({tab:1,updated_at:-1});
TopicSchema.index({'user.name':1,updated_at:-1});

module.exports = mogoose.model('Topic',TopicSchema);