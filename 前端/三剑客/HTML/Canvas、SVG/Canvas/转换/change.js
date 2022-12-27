// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');

// 映射画布的起始点
c.save();
c.translate(300, 0);
c.fillStyle = 'blue';
c.fillRect(100, 100, 300, 100);
c.restore();

// 放大
c.save();
c.scale(2, 4);
c.fillStyle = 'yellow';
c.fillRect(100, 100, 300, 100);
c.restore();

// 旋转画布
c.save();
c.rotate(Math.PI/4);
c.fillStyle = 'pink';
c.fillRect(200, 0, 300, 100);
c.restore();