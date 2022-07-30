// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');
console.log(c);

// 起始路径
c.beginPath();

// 绘制矩形
c.rect(50, 50, 300, 300);
// 设置填充颜色
c.fillStyle = 'aqua';
// 填充矩形颜色
c.fill();
// 设置描边宽度
c.lineWidth=20;
// 设置描边颜色
c.strokeStyle = '#f00';
// 矩形描边
c.stroke();

// 结束路径
c.closePath();