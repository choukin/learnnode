/**
 * Created by dipper on 2017/1/11.
 */
var connect  = require('connect');
var http = require('http');

var app = connect();
app.use(function (req,res) {
    res.end("Hello from Connect!");
});

http.createServer(app).listen(3011);