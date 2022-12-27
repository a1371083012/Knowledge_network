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
c.arc(300, 300, 50, 0, 2*Math.PI, false);
// 设置填充颜色
c.fillStyle="yellow";
// 对圆形填充
c.fill();
// 对圆形描边
c.stroke();

// 结束路径
c.closePath();