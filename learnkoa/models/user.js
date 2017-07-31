/**
 * Created by dipper on 2017/1/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    signature:{type:String},
    creted_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
})

UserSchema.index({name:1});

module.exports = mongoose.model('User',UserSchema);