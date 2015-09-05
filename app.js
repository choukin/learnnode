 var port = (process.env.VMC_APP_PORT || 3000);
 var host = (process.env.VCAP_APP_HOST || 'localhost');
 var http = require('express');
 var app = http.createServer();
 app.get('/', function(req, res) {
    res.send('Hello from MoPaaS');
    });
 app.listen(port, host);
/*var express = require('express')//加载express模块
var bodyParser = require('body-parser')//
var path = require('path')//path 告诉页面去bower_components下面去查找样式和js
var mongoose = require('mongoose')//导入mongoose工具模块
var port  = process.env.PORT || 3000//process 是全局变量用来获取外围设置的变量或者传入的参数
var host = (process.env.VCAP_APP_HOST || 'localhost');
var app = express()//启动web服务器

mongoose.connect('mongodb://localhost/imooc')//链接数据库

app.set('views','./views/pages')//设置试图的根目录
app.set('view engine','jade')//设置默认的模板引擎
app.use(bodyParser.urlencoded({extended:false}))//格式化表单里的数据
app.use(express.static(path.join(__dirname,'bower_components')))//静态资源所在目录
app.listen(port,host)//监听端口

console.log('imooc started on port '+ port)//打印日志

//路由
//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'imooc 首页',
		movies:[{
			title:'碟中谍5',
			_id:1,
			poster:"http://image11.m1905.cn/uploadfile/2015/0831/thumb_1_1000_510_5_20150831112818472169.jpg"
		},{
			title:'碟中谍5',
			_id:2,
			poster:"http://image11.m1905.cn/uploadfile/2015/0831/thumb_1_1000_510_5_20150831112818472169.jpg"
		},{
			title:'碟中谍5',
			_id:3,
			poster:"http://image11.m1905.cn/uploadfile/2015/0831/thumb_1_1000_510_5_20150831112818472169.jpg"
		},{
			title:'碟中谍5',
			_id:4,
			poster:"http://image11.m1905.cn/uploadfile/2015/0831/thumb_1_1000_510_5_20150831112818472169.jpg"
		}]
	})
})



//detail page
app.get('/movies/:id',function(req,res){
	res.render('detail',{
		title:'imooc 详情页',
		movie:{
			_id:'1',
			doctor:'克里斯托夫·迈考利',
			country:'美国',
			title:'碟中谍5',
			year:'2015',
			poster:'http://image11.m1905.cn/uploadfile/2015/0831/thumb_1_1000_510_5_20150831112818472169.jpg',
			language:'英语',
			flash:'http://www.iqiyi.com/common/flashplayer/20150820/EnjoyPlayer_4_2_4_c3_3_7_3.swf?vid=21db295eda2b2d69651067b8679f9809&pageURL=w_19rthvgm5x.swf&albumId=4355563609&tvId=4355563609&isPurchase=0&cnId=7&share_sTime=0&share_eTime=139&source=',
			summary:'伊桑·亨特（汤姆·克鲁斯饰演）将与他的团队一起遭到一个名为“神秘国度”的组织追杀，对方是与他们同样技艺高超的劲敌，试图摧毁阿汤哥所在的“不可能任务情报署”(IMF)。西蒙·佩吉、杰瑞米·雷纳、文·瑞姆斯三位老搭档悉数回归，接应伊桑·亨特共赴这场不可能的任务'
		}
	})
})

//admin page
app.get('/admin/move',function(req,res){
	res.render('admin',{
		title:'imooc 后台页面',
		movie:{
			doctor:'',
			country:'',
			title:'',
			year:'',
			poster:'',
			language:'',
			flash:'',
			summary:''
		}
	})
})

//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'imooc 列表页面',
		movies:[{_id:'1',
			doctor:'克里斯托夫·迈考利',
			country:'美国',
			title:'碟中谍5',
			year:'2015',
			language:'英语',
			flash:'http://www.iqiyi.com/common/flashplayer/20150820/EnjoyPlayer_4_2_4_c3_3_7_3.swf?vid=21db295eda2b2d69651067b8679f9809&pageURL=w_19rthvgm5x.swf&albumId=4355563609&tvId=4355563609&isPurchase=0&cnId=7&share_sTime=0&share_eTime=139&source=',
			summary:'伊桑·亨特（汤姆·克鲁斯饰演）将与他的团队一起遭到一个名为“神秘国度”的组织追杀，对方是与他们同样技艺高超的劲敌，试图摧毁阿汤哥所在的“不可能任务情报署”(IMF)。西蒙·佩吉、杰瑞米·雷纳、文·瑞姆斯三位老搭档悉数回归，接应伊桑·亨特共赴这场不可能的任务'
		}]
	})
})*/