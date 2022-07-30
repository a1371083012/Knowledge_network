// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');
console.log(c);

// 起始路径
c.beginPath();

// 画笔移动到位点
c.moveTo(100, 100);
// 绘制直线1
c.lineTo(100, 300);
// 绘制直线2
c.lineTo(300, 100);
// 设置线条起止点样式
c.lineCap = 'round';
// 设置线条拐角样式
c.lineJoin = 'round';
// 设置画笔颜色
c.strokeStyle = 'green';
// 设置线宽
c.lineWidth = 20;
// 着色
c.stroke();

// 结束路径
c.closePath();