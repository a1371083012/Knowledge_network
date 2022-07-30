// canvas语法提示
/** @type {HTMLCanvasElement} */
// 获取canvas标签
const canvas = document.querySelector('#canvas');
// 获取上下文对象
var c = canvas.getContext('2d');
console.log(c);

// 起始路径
c.beginPath();

// 设置图像1
// drawImage(图片对象, x位置, y位置)
// drawImage(图片对象, x位置, y位置, 宽度, 高度)
// drawImage(图片对象, 裁剪x位置, 裁剪y位置, 裁剪宽度, 裁剪高度, x位置, y位置, 宽度, 高度)
var img1 = new Image();
img1.src = 'images/1.png';
// 设置图像2
var img2 = new Image();
img2.src = 'images/2.png';
console.log('');

// 绘制图像1和图像2
img1.onload = ()=>{
    c.drawImage(img1, 20, 50);
}
img2.onload = ()=>{
    c.drawImage(img2, 0, 0, 200, 200, 300, 100, 100, 100);
    c.fillText("hello,world!", 350, 150);
}

// 结束路径
c.closePath();