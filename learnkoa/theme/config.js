/**
 * Created by dipper on 2017/1/10.
 */
//保存co-ejs 的配置
module.exports = {
    root:__dirname,
    layout:false,
    viewExt:'ejs',
    cache:true,
    debug:false,
    filters:require('./helpers/filters'),//helpers/filters.js 保存了自定义的过滤器函数
    locals:require('./helpers/locals')

}