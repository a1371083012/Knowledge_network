var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var queryString = require('querystring');
var ws = require('nodejs-websocket');

var users = {
    name: "小明",
    sex: "男",
    hobby: "篮球"
};

var MIMEType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
}

var server = http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    // res.setHeader("Access-Control-Allow-Origin", "*");

    if(req.method === 'GET' && pathname === '/getMethod'){
        var content = JSON.stringify(users);
        res.end(content);
        console.log('发送了Get请求！');
    }
    
    if(req.method === 'POST' && pathname === '/postMethod'){
        let postdata = '';
        req.addListener('data', function(chunk){
            postdata += chunk;
        })
        req.addListener('end', function(){
            postdata = queryString.parse(postdata);
            console.log(postdata);
            res.end('ok');
        })
    }

    if(pathname === '/') pathname = '/index.html';
    if(pathname.indexOf('.') === -1) pathname += '/index.html';

    fs.readFile('.' + pathname, 'utf8', function(err, data){
        if(err){
            res.end('404');
            return;
        }
        res.writeHead(200, {'content-type': MIMEType[path.extname(pathname)]});
        res.end(data);
    });
})

server.listen(8080, function(){
    console.log('服务器启动成功');
})