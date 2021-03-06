var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
	doctor:String,
	title:String,
	language:String,
	country:String,
	summary:String,
	flash:String,
	poster:String,
	year:Number,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})
//保存之前执行的方法
MovieSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
	
	next()
})

//静态方法
MovieSchema.statics = {
	fetch:function(cb){//取出所有数据的方法
		return this.find().sort("meta.updateAt").exec(cb);
	},
	findByID:function(id,cb){//取出所有数据的方法
		return 
		this
		.findOne({_id:id})
		.exec(cb)
	}
}
module.exports = MovieSchema//导出模式