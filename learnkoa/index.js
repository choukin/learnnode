/**
 * Created by dipper on 2017/1/4.
 */
var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var scheme = require('koa-scheme');

var app = koa();
app.use(bodyParser());
app.use(scheme(__dirname + '/scheme',{debug:true}));
app.use(function* (next){
    if(this.path === '/signup'){
        console.log(this.request.body.password);
        this.body = {
            user:{
                id:this.request.body.password
            }
        }
    }

});

 
app.listen(4000);