// 使用依赖 + 创建应用 + JWT密钥
const express = require('express');
var bodyParser = require('body-parser'); // 处理请求体中间件
const jwt = require('jsonwebtoken');
const app = express();
const jwtKey = 'fasfdsafasdfadsfsad';
// 解析JSON数据
// app.use(express.json()); // 适用于postman
app.use(bodyParser.urlencoded({extended: false})); // 适用于类似ajax请求
// 数据库用户
const database = {username: "张三", password: "abc123"}
// 设置跨域
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","*");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  next();
});

// 登录生成jwt
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if(username === database.username && password === database.password){
    jwt.sign(
      // 放到荷载的内容
      {username},
      // 附加密钥
      jwtKey,
      // 设置过期时间
      {expiresIn: '30s'},
      // 设置回调函数
      (err, token) => {
        res.json({ username, password, message: '登录成功', token });
      }
    )
  }
})

// 登录后验证Token
app.get('/afterlogin', (req, res) => {
  const headers = req.headers;
  const token = headers['authorization'].split(' ')[1];
  jwt.verify(token, jwtKey, (err, payload) => {
    if(err) res.sendStatus(403);
    res.json({ message: '认证成功', payload });
  })
})

// 绑定并侦听端口
app.listen(3000, () => console.log('端口3000已被用'));
