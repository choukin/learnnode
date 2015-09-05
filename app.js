var express = require('express')//加载express模块
var bodyParser = require('body-parser')//
var path = require('path')//path 告诉页面去bower_components下面去查找样式和js
var mongoose = require('mongoose')//导入mongoose工具模块
var _ = require('underscore')//
var Movie = require('./models/movie')
var port  = process.env.PORT || 3000//process 是全局变量用来获取外围设置的变量或者传入的参数
var app = express()//启动web服务器

mongoose.connect('mongodb://localhost/imooc')//链接数据库

app.set('views','./views/pages')//设置试图的根目录
app.set('view engine','jade')//设置默认的模板引擎
app.use(bodyParser.urlencoded({extended:true}))//格式化表单里的数据
//app.use(bodyParser.json())
 

//app.use(express.static(path.join(__dirname,'bower_components')))//静态资源所在目录
app.use(express.static(path.join(__dirname,'public')))
app.locals.moment = require('moment')
app.listen(port)//监听端口

console.log('imooc started on port '+ port)//打印日志

//路由
//index page
app.get('/',function(req,res){
	console.log("indexpage");
	Movie.fetch(function(err,movies){
		console.log("indexpage2");
		if(err){
			console.log(err)
			console.log("indexpage4");
		}
		console.log("indexpage3");
		res.render('index',{
		title:'imooc 首页',
		movies:movies
	})
	})
	/*	res.render('index',{
		title:'imooc 首页',
		movies:[]
	})*/
})



//detail page
app.get('/movie/:id',function(req,res){
	var id = req.params.id
	Movie.findById(id,function(err,movie){
		if(err){
			console.log(err)
		} 
		console.log("detail");
		res.render('detail',{
		title:'imooc 详情页',
		movie:movie
	})
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

//admin update movie
app.post('/admin/update/:id',function(req,res){
	var id = req.body.movie.id
	if(id){
		Movie.findById(id,function(err,movie){
			res.render('admin',{
				title: 'imooc 后台更新页面',
				movie:movie
			})
		})
	}
})

//admin post movie
app.post('/admin/movie/new',function(req,res){
		//console.log(req.body.movie._id)
	console.log(JSON.stringify(req.body.movie))
if (!req.body) return res.sendStatus(400)
	var id= req.body.movie._id
	var movieObj = req.body.movie
	var _movie
	if (id!=='undefined'){
		Movie.findById(id,function(err,movie){
			if (err){
				console.log(err)
			}
			_movie = _.extend(movie,movieObj)
			_movie.save(function(err,movie){
				if (err) {
					console.log(err)
				}
				res.redirect('/movie/'+movie._id)//保存成功跳转到详情页面
			})
		})
	}else{
		_movie = new Movie({
			doctor:movieObj.doctor,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			poster:movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		})
		
		_movie.save(function(err,movie){
			if (err) {
					console.log(err)
				}
				res.redirect('/movie/'+movie._id)//保存成功跳转到详情页面
		})
	}
})

//list page
app.get('/admin/list',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('list',{
			title:'imooc 列表页面',
			movies:movies
		})
	})

})

//list detele moive
app.delete('/admin/list',function(req,res){
	var id = req.query.id
	console.log(id);
	if(id){
		Movie.remove({_id:id},function(err,movie){
			console.log(JSON.stringify(movie));
			if(err){
				console.log(err);
			}else{
				res.json({success:'1'})
			}
			
		})
	}
	
})
