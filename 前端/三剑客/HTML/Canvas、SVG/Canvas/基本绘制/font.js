// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');
console.log(c);

// 起始路径
c.beginPath();

// 设置文本样式
c.font = "50px 微软雅黑";
// 设置阴影模糊度
c.shadowBlur = 20;
// 设置阴影颜色
c.shadowColor = 'yellow';
// 设置阴影x轴偏移
c.shadowOffsetX = 10;
// 设置阴影y轴偏移
c.shadowOffsetY = 10;
var x = 600;
setInterval(()=>{
    // 清空画布
    c.clearRect(0, 0, 800, 800);
    x-=1;
    if(x < -250){x=600;}
    // 绘制文本
    c.fillText('hello,world',x,100);
    // 设置描边文本
    c.strokeText("hello,world",x, 200);
},16);

// 结束路径
c.closePath();