// 初始化WebSocket对象
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

var info = {
    id: "100235",
    hobby: "篮球"
}

wss.on('connection', function(ws) {
		// 监听前端回传的数据
    ws.on('message', function(message) {
        console.log(eval('(' + message + ')'));
    });
		// 定时器设置每隔10秒向前端发送一次数据
    setInterval(()=>{
        ws.send(JSON.stringify(info));
    }, 10000);
});