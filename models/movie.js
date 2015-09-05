var mongoose = require('mongoose')//加载工具模块
var MovieSchema = require('../schemas/movie')
var Movie = mongoose.model('Movie',MovieSchema)//把模式转换成模型
module.exports = Movie//导出模型
